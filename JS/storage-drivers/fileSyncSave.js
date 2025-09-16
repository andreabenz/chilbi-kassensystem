import fs from 'node:fs';

export class FileStorageDriver {
    #file;
    #orders;

    constructor(file = 'orders.json') {
        this.#file = file;
        if (fs.existsSync(file)) {
            const data = fs.readFileSync(file, 'utf-8');
            this.#orders = JSON.parse(data);
        } else {
            this.#orders = [];
        }
    }

    addOrder(order) {
        order.timestamp = new Date().toISOString();
        this.#orders.push(order);
        fs.writeFileSync(
            this.#file,
            JSON.stringify(this.#orders, null, 2),
            'utf-8',
        );
    }

    getOrders() {
        return this.#orders;
    }
}
