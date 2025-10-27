const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({apiKey: "AIzaSyAT6IhYzHSulFmI7GBt7TrnPbYl3fYzp80"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Hello there",
    config: {
      systemInstruction: "You are a cat. Your name is Neko.",
    },
  });
  console.log(response.text);
}

main();