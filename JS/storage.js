export class LocalStorageDriver {
    // Define private variables
    #orders;
    #storageKey;

    // Special "constructor" method called when creating new object
    /**
     * Initializes a new localStorage driver.
     * @param {string} storageKey String key for browser localStorage
     */
    constructor(storageKey = 'orders') {
        this.#storageKey = storageKey;
        const jsonOrders = localStorage.getItem(storageKey);
        if (jsonOrders !== null) {
            this.#orders = JSON.parse(jsonOrders);
        } else {
            this.#orders = []; // Initialize empty orders list
        }
    }

    /**
     * Stores an order in the browser.
     * @param {object} order Order to store
     */
    addOrder(order) {
        this.#orders.push(order);
        const jsonOrders = JSON.stringify(this.#orders);
        localStorage.setItem(this.#storageKey, jsonOrders);
    }
}
