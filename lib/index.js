"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var Methods = /** @class */ (function () {
    /**
     * @param {String} APIKey - API-Токен пользователя
     * @param {Number} uID - VK ID пользователя
     */
    function Methods(APIKey, uID) {
        /**
         * @private
         * @param {String} APIKey - API-Токен пользователя
         */
        this.APIKey = APIKey;
    }
    Methods.prototype.sendReuest = function (action, data, method) {
        if (action === void 0) { action = "balance.get"; }
        if (data === void 0) { data = {}; }
        if (method === void 0) { method = "POST"; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.open(method, "https://foodgames.tk:7070/api/".concat(action));
                        xhr.setRequestHeader("Content-Type", "application/json");
                        xhr.setRequestHeader("Authorization", "Bearer ".concat(_this.APIKey));
                        xhr.send(JSON.stringify(data));
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    resolve({
                                        status: xhr.status,
                                        response: JSON.parse(xhr.responseText)
                                    });
                                }
                                else {
                                    resolve({
                                        status: xhr.status,
                                        response: JSON.parse(xhr.responseText)
                                    });
                                }
                            }
                        };
                    })];
            });
        });
    };
    /**
     * @async
     * @description Получение баланса
     * @param {Function} cb - Функция CallBack при ошибке
     * @returns {Promise<{ user_id: Number, balance: Number }>}
     */
    Methods.prototype.getMyBalance = function (cb) {
        if (cb === void 0) { cb = console.error; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendReuest()];
                    case 1:
                        result = (_a.sent());
                        if (result.status === 200) {
                            return [2 /*return*/, result.response];
                        }
                        else {
                            return [2 /*return*/, cb(result)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @async
     * @description Получение переводов
     * @param {String} type - Тип необходимых переводов, доступно: all - любые, in - пополнения, out - переводы
     * @param {Number} offset - Смещение, необходимое для выборки определённого подмножества переводов
     * @param {Number} limit - Количество переводов которое нужно получить, максимальное значение 100
     * @param {Function} cb - Функция CallBack при ошибке
     */
    Methods.prototype.getTransfers = function (type, offset, limit, cb) {
        if (type === void 0) { type = "all"; }
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 20; }
        if (cb === void 0) { cb = console.error; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendReuest("transfers.get", {
                            type: type,
                            offset: offset,
                            limit: limit
                        })];
                    case 1:
                        result = _a.sent();
                        if (result.status === 200) {
                            return [2 /*return*/, result.response];
                        }
                        else {
                            cb(result);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @async
     * @description Перевод пользователю
     * @param {Number} tID - ID пользователя которому нужно перевести
     * @param {Number} amount - Количество койнов которое нужно перевести
     * @param {Function} cb - Функция CallBack при ошибке
     */
    Methods.prototype.createTransfer = function (tID, amount, cb) {
        if (tID === void 0) { tID = 0; }
        if (amount === void 0) { amount = 1; }
        if (cb === void 0) { cb = console.error; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendReuest("transfer.create", {
                            to_id: tID,
                            amount: amount
                        })];
                    case 1:
                        result = (_a.sent()).response;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * @async
     * @description Создание Callback
     * @param {String} url - URL на который будет приходить Callback
     * @param {Function} cb - Функция Callback при ошибке
     */
    Methods.prototype.createCallback = function (url, cb) {
        if (url === void 0) { url = "https://domain.ru"; }
        if (cb === void 0) { cb = console.error; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendReuest("callback", {
                            url: url
                        })];
                    case 1:
                        result = _a.sent();
                        if (result.status === 200) {
                            return [2 /*return*/, result.response];
                        }
                        else {
                            cb(result);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @async
     * @description Удаление Callbak
     * @param {Function} cb Функция Callback при ошибке
     */
    Methods.prototype.deleteCallbak = function (cb) {
        if (cb === void 0) { cb = console.error; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendReuest("callbak", {}, 'DELETE')];
                    case 1:
                        result = _a.sent();
                        if (result.status === 200) {
                            return [2 /*return*/, result.response];
                        }
                        else {
                            cb(result);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Methods;
}());
var API = /** @class */ (function () {
    /**
     * @description Конфигурация
     * @param {Object} options - Обьект данных
     * @param {String} option.key - API-ключ пользователя
     * @param {Number} option.user_id - VK ID пользователя
     */
    function API(options) {
        this.methods = new Methods(options.key, options.user_id);
    }
    return API;
}());
exports.API = API;
;
