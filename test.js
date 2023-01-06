const { API } = require("./lib/index");
const api = new API({
    key: 'YOU_API_KEY',
    user_id: 1111 // YOU_USER_ID
});

/**
 * Получить теккущий баланс койнов
 */
var balance = api.methods.getMyBalance(console.error);

/**
 * Получить список последних пополнений/переводов
 */
var transfers = api.methods.getTransfers("all", 0, 15, console.error);

/**
 * Перевести пользователю
 */
var transfers = api.methods.createTransfer(1111, 100, console.error);