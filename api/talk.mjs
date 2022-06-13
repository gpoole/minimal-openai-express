import OpenAI from "openai-api";

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const handle = async (req, res) => {
  try {
    const openai = new OpenAI(OPENAI_API_KEY);
    const gptResponse = await openai.complete({
      engine: 'davinci',
      prompt: req.body.prompt,
      maxTokens: 256,
      // temperature: 0.9,
      // topP: 1,
      // presencePenalty: 0,
      // frequencyPenalty: 0,
      // bestOf: 1,
      // n: 1,
      stream: false,
    });

    const response = gptResponse.data.choices[0].text;

    res.json({ response }).send();
  } catch (error) {
    console.error('ERROR: ', error);
  }
}

export default handle;