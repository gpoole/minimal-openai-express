import OpenAI from "openai-api";

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const handle = async (req, res) => {
  try {
    const openai = new OpenAI(OPENAI_API_KEY);

    const prompt = `
      You are a chat bot. You are also a horse. You need to talk a bit like a horse but in an opera.

      User: ${req.body.prompt}
      You:`;

    const gptResponse = await openai.complete({
      engine: 'davinci',
      prompt,
      maxTokens: 256,
      // temperature: 0.9,
      // topP: 1,
      // presencePenalty: 0,
      // frequencyPenalty: 0,
      // bestOf: 1,
      // n: 1,
      stop: ['\n', "You:", "User:"],
      stream: false,
    });

    const response = gptResponse.data.choices[0].text;

    res.json({ response }).send();
  } catch (error) {
    console.error('ERROR: ', error);
  }
}

export default handle;