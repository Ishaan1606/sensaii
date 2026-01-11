import fetch from "node-fetch";

async function listModels() {
  const apiKey = process.env.GEMINI_API_KEY;  // Make sure env variable exists

  if (!apiKey) {
    console.error("❌ GEMINI_API_KEY is not set in your environment.");
    return;
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("✅ Models available:");
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

listModels();
