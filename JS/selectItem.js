import {items, variants} from "./items.js"
import {currentOrder} from "../main.js"

export function selectItem (item_id, variant_id = null) {
    //Item suchen
    let item = items.find(i => i.id === item_id)

    if (!item) {
        console.error("Fehler: Artikel nicht gefunden!")
        return
    }

    //prüfen, ob es Variante hat und Preis anpassen
    let price = item.base_price
    let variant = null

    if (variant_id !== null) {
        if (item.category_id === 4) {
            variant = variants.find(v => v.id === variant_id)
            if (!variant) {
                console.error("Fehler: Variante nicht gefunden!")
                return
            }
            price = variant.price
        } else {
            console.error("Fehler: Variante nicht gefunden!")
            return
        }
    }

    //prüfen, ob Artikel schon in currentOrder
    let existing = currentOrder.items.find(orderItem =>
        orderItem.item_id === item.id &&
        (variant === null || orderItem.variant_id === variant.id)
    ) || null

    if (existing) {
        existing.quantity = existing.quantity + 1
    } else {
        let variantId = null
        let variantSize = null

        if (variant) {
            variantId = variant.id
            variantSize = variant.size
        }

        currentOrder.items.push({
            item_id: item.id,
            name: item.name,
            variant_id: variantId,
            variant_size: variantSize,
            price: price,
            quantity: 1
        })
    }
}

