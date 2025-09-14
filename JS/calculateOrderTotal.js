import { currentOrder } from '../main.js';

export function calculateOrderTotal() {
    currentOrder.total = currentOrder.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );
}
