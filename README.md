# node-cosmo-game-sdk
API Cosmo Game для разработки ботов, приложений, сайтов.

[![npm package](https://nodei.co/npm/node-cosmo-game-sdk.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-cosmo-game-sdk/)
<p>
<a href="https://www.npmjs.com/package/node-cosmo-game-sdk"><img src="https://img.shields.io/npm/v/node-cosmo-game-sdk.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/node-cosmo-game-sdk"><img src="https://img.shields.io/npm/dt/node-cosmo-game-sdk.svg" alt="Downloads"></a>
</p>

# Установка
### Windows:
* Скачайте и установите, желательно, последнюю версию [Node.JS](https://nodejs.org/en/download/)
* Создайте в удобном месте папку, например **cosmo_market**
* Перейдите в командную строку из этой папки: напишите cmd за место пути до папки
![Рис.1](./assets/ris_1.png)
* В появившейся консоли пропишите: npm i --save node-cosmo-game-sdk
![Рис.2](./assets/ris_2.png)

### Ubuntu:
* Установите Node.JS по [этому](https://www.digitalocean.com/community/tutorials/node-js-ubuntu-16-04-ru) гайду
* Создайте в удобном месте папку, например **cosmo_market**
* Перейдите в папку: **cd (путь до вашей папки)**
* Пропишите: npm i --save node-cosmo-game-sdk

# Начало работы
Для начала использования, вам нужно создать в своей папке исполняемый файл, пусть это будет **index.js**

Теперь его нужно открыть и импортировать библиотеку:
```js
const COSMOAPI = require('node-cosmo-game-sdk');
const cosmo = new COSMOAPI(options);
```

|Опция|Тип|Описание|
|-|-|-|
|options|Object|Опции конструктора|
|options.key|String|Ключ для взаимодействия с API|
|options.userId|Number|Ваш айди ВК|

### Где взять эти значения
* Получение ключа (key): в настройках бота есть команда **Получить API ключ**
* Получение айди вк (userId):

Откройте свою аватарку и в адресной строке вы увидите подобное: **https://vk.com/id1?z=photo1_456264771%2Falbum1_0%2Frev**

Вашим айди будет являться число после слова **photo**. В этом случае **1**

# API

getTransfers - Получает список переводов

```js
const test = async () => {
    const result = await cosmo.methods.getTransfers(type, offset, limit, cb);
    console.log(result);
}
test();
```

|Параметр|Тип|Описание|
|-|-|-|
|type|String|Тип необходимых переводов, доступно: all - любые, in - пополнения, out - переводы|
|offset|Number|Смещение, необходимое для выборки определённого подмножества переводов|
|limit|Number|Количество переводов которое нужно получить, максимальное значение 100|
|cb|Function|Функция CallBack при ошибке|

createTransfer - Делает перевод другому пользователю (сумма в десятичных долях)

```js
const test = () => {
    const result = await cosmo.methods.createTransfer(toId, amount, cb); // 1 коин = 1_000 ед.
    console.log(result);
}
test();
```

|Параметр|Тип|Описание|
|-|-|-|
|toId|Number|Айди получателя|
|amount|Number|Сумма перевода|
|cb|Function|Функция CallBack при ошибке|

getMyBalance - Получает баланс текущего пользователя

```js
const test = async() => {
    const myBalance = await cosmo.methods.getMyBalance(cb);
    console.log(myBalance);
}
test();
```

|Параметр|Тип|Описание|
|-|-|-|
|cb|Function|Функция CallBack при ошибке|

# Ссылки
* [Моя ссылка VK](https://vk.com/black_raison_d.etre)