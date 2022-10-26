import TelegramBot from "node-telegram-bot-api";
import config from 'config';

const TOKEN = config.get('token');
const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', msg => {
    const fromChatId = msg.chat.id;
    const toChatId = -811866221;

    bot.forwardMessage(toChatId, fromChatId, msg.message_id)
})