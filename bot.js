import dotenv from 'dotenv';
dotenv.config();
import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(`Привет, ${ctx.from.first_name}! 🧠\nЗапишем тебя на занятие. Напиши, пожалуйста:\n\n1. Имя ученика\n2. Класс\n3. Цель (ОГЭ, ЕГЭ, подтянуть темы и т.п.)\n4. Удобное время`);
});

bot.on('text', (ctx) => {
  const message = ctx.message.text;
  const username = ctx.from.username || 'нет username';

  const ADMIN_ID = '7283804251';
  bot.telegram.sendMessage(
    ADMIN_ID,
    `📥 Новая заявка от @${username}:\n\n${message}`
  );

  ctx.reply('Спасибо! Я получил твою заявку. Скоро свяжусь с тобой.');
});

bot.launch();
console.log('🤖 Бот запущен');