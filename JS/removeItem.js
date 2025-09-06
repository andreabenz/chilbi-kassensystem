import {currentOrder} from "../main.js"

export function removeItem(item_id, variant_id = null) {
    for (let i = 0; i < currentOrder.items.length; i++) {
        let item = currentOrder.items[i];

        if (item.item_id === item_id) {
            if (variant_id === null || item.variant_id === variant_id) {
                if (item.quantity > 1) {
                    item.quantity = item.quantity - 1;
                } else {
                    currentOrder.items.splice(i, 1);
                }

                break
            }
        }
    }
}
