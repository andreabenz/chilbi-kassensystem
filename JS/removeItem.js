import { currentOrder } from '../main.js';

export function removeItem(item_id, variant_id = null) {
    const index = currentOrder.items.findIndex(
        (item) =>
            item.item_id === item_id &&
            (variant_id === null || item.variant_id === variant_id),
    );

    if (index !== -1) {
        const item = currentOrder.items[index];

        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            currentOrder.items.splice(index, 1);
        }
    } else {
        console.error('Fehler: Artikel nicht gefunden!');
    }
}
