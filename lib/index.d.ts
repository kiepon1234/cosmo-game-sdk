interface ResponseONE {
    user_id: number;
    balance: number;
}
interface ResponseTWO {
    id: number;
    peer_id: number;
    to_id: number;
    amount: string;
    created_at: number;
}
interface ResponseTHREE {
    callback_key: string;
}
interface ResponseFOUR {
    response: string;
}
declare class Methods {
    private APIKey;
    /**
     * @param {String} APIKey - API-Токен пользователя
     * @param {Number} uID - VK ID пользователя
     */
    constructor(APIKey: string, uID: number);
    private sendReuest;
    /**
     * @async
     * @description Получение баланса
     * @param {Function} cb - Функция CallBack при ошибке
     * @returns {Promise<{ user_id: Number, balance: Number }>}
     */
    getMyBalance(cb?: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    }): Promise<void | ResponseONE | ResponseTWO | ResponseTHREE | ResponseFOUR | ResponseTWO[]>;
    /**
     * @async
     * @description Получение переводов
     * @param {String} type - Тип необходимых переводов, доступно: all - любые, in - пополнения, out - переводы
     * @param {Number} offset - Смещение, необходимое для выборки определённого подмножества переводов
     * @param {Number} limit - Количество переводов которое нужно получить, максимальное значение 100
     * @param {Function} cb - Функция CallBack при ошибке
     */
    getTransfers(type?: string, offset?: number, limit?: number, cb?: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    }): Promise<void | ResponseONE | Array<ResponseTWO> | ResponseTWO | ResponseTHREE | ResponseFOUR>;
    /**
     * @async
     * @description Перевод пользователю
     * @param {Number} tID - ID пользователя которому нужно перевести
     * @param {Number} amount - Количество койнов которое нужно перевести
     * @param {Function} cb - Функция CallBack при ошибке
     */
    createTransfer(tID?: number, amount?: number, cb?: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    }): Promise<ResponseONE | ResponseTWO | ResponseTHREE | ResponseFOUR | ResponseTWO[]>;
    /**
     * @async
     * @description Создание Callback
     * @param {String} url - URL на который будет приходить Callback
     * @param {Function} cb - Функция Callback при ошибке
     */
    createCallback(url?: string, cb?: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    }): Promise<ResponseONE | ResponseTWO | ResponseTHREE | ResponseFOUR | ResponseTWO[] | undefined>;
    /**
     * @async
     * @description Удаление Callbak
     * @param {Function} cb Функция Callback при ошибке
     */
    deleteCallbak(cb?: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    }): Promise<ResponseONE | ResponseTWO | ResponseTHREE | ResponseFOUR | ResponseTWO[] | undefined>;
}
export declare class API {
    methods: Methods;
    /**
     * @description Конфигурация
     * @param {Object} options - Обьект данных
     * @param {String} option.key - API-ключ пользователя
     * @param {Number} option.user_id - VK ID пользователя
     */
    constructor(options: {
        /**
         * @param {String} option.key - API-ключ пользователя
         */
        key: string;
        /**
         * @param {Number} option.user_id - VK ID пользователя
         */
        user_id: number;
    });
}
export {};
