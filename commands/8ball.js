
import path from "path";
import { fileURLToPath } from "url";
import axios from 'axios';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getRandomCompliment = (compliments) => {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex].text;
};
export default {
  name: "compliments",
  description: "Твой комплимент",
  alias: ["eightball"],
  usage: "/compliments",
  example: "compliments",
  category: "Fun",
  handler: async (ctx) => {
    try {
      const response = await axios.get('https://backendbottg-production.up.railway.app/compliments');
      const compliments = response.data;
      const randomCompliment = getRandomCompliment(compliments);
      ctx.reply(` ${randomCompliment}`);
    } catch (error) {
      ctx.reply('Произошла ошибка при получении комплимента.');
    }
  }
}
