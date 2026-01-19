import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Ensure API Key is present
const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

/**
 * Generates text response using Gemini 3 Flash Preview.
 * Supports generic text chat.
 */
export const generateText = async (
  prompt: string, 
  history: { role: string; parts: { text: string }[] }[] = []
): Promise<string> => {
  if (!API_KEY) throw new Error("API Key is missing.");

  try {
    const model = 'gemini-3-flash-preview';
    
    // We strictly use generateContent here.
    // Constructing the contents array based on history + new prompt
    const contents = [
      ...history.map(h => ({
        role: h.role,
        parts: h.parts
      })),
      {
        role: 'user',
        parts: [{ text: prompt }]
      }
    ];

    const response: GenerateContentResponse = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: "You are a helpful, expert AI assistant. Answer concisely and accurately.",
      }
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini Text Gen Error:", error);
    throw error;
  }
};

/**
 * Generates text response based on an image input (Vision).
 * Uses Gemini 3 Flash Preview (Multimodal).
 */
export const analyzeImage = async (
  prompt: string,
  base64Image: string,
  mimeType: string = 'image/jpeg'
): Promise<string> => {
  if (!API_KEY) throw new Error("API Key is missing.");

  try {
    // Remove data URL prefix if present for clean base64
    const cleanBase64 = base64Image.replace(/^data:image\/\w+;base64,/, "");

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: mimeType
            }
          },
          {
            text: prompt || "Describe this image."
          }
        ]
      }
    });

    return response.text || "Could not analyze image.";
  } catch (error) {
    console.error("Gemini Vision Error:", error);
    throw error;
  }
};

/**
 * Generates an image using Gemini 2.5 Flash Image.
 * Note: This returns a base64 string wrapped in the response.
 */
export const generateImage = async (prompt: string): Promise<string> => {
  if (!API_KEY) throw new Error("API Key is missing.");

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        // Nano banana models do not support responseMimeType or responseSchema
        // Just standard generation
      }
    });

    // Extract image from response parts
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    
    throw new Error("No image data found in response.");
  } catch (error) {
    console.error("Gemini Image Gen Error:", error);
    throw error;
  }
};