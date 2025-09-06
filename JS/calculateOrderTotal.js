import { currentOrder } from "../main.js";

export function calculateOrderTotal() {
    let total = 0

    for (let i = 0; i < currentOrder.items.length; i++) {
        let item = currentOrder.items[i]
        total += item.price * item.quantity
    }
    currentOrder.total = total
}