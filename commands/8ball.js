
import axios from 'axios';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getRandomCompliment = (compliments) => {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex].text;
};
export default {
  name: "8ball",
  description: "Ask the magic 8ball a question",
  alias: ["eightball"],
  usage: "/8ball <question>",
  example: "/8ball Is this bot awesome?",
  category: "Fun",
  handler: async (ctx) => {
    try {
      const response = await axios.get('https://backendbottg-production.up.railway.app/compliments/');
      const compliments = response.data;
      const randomCompliment = getRandomCompliment(compliments);
      ctx.reply(` ${randomCompliment}`);
    } catch (error) {
      ctx.reply('Произошла ошибка при получении комплимента.');
    }
  }
}
