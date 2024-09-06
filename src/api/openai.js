import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY, // Access the API key from the environment variable
});

export const getAIResponse = async (input) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Using GPT-3.5 Turbo model
      messages: [{ role: 'user', content: input }],
    });

    return response.choices[0].message.content.trim(); // Return the text content
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return 'Sorry, something went wrong. Please try again.';
  }
};
