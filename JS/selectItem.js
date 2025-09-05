import {items, variants} from "./items.js"
import {currentOrder} from "../main.js"

export function selectItem (item_id, variant_id = null) {
    //Item suchen
    let item = null
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === item_id) {
            item = items[i]
            break
        }
    }

    if (item === null) {
        console.log("Fehler: Artikel nicht gefunden!")
        return
    }
    //prüfen, ob es Variante hat und Preis anpassen
    let price = item.base_price
    let variant = null
    if (variant_id !== null) {
        if (item.category_id === 4) {
            for (let i = 0; i < variants.length; i++) {
                if (variants[i].id === variant_id) {
                    variant = variants[i]
                    price = variant.price
                    break
                }
            }
        } else {
            console.log("Fehler: Variante nicht gefunden!")
            return
        }
    }
    //prüfen, ob Artikel schon in currentOrder
    let existing = null
    for (let k = 0; k < currentOrder.items.length; k++) {
        let eintrag = currentOrder.items[k]

        if (eintrag.item_id === item.id) {
            // Prüfen, ob Variante existiert
            if (variant !== null) {
                if (eintrag.variant_id === variant.id) {
                    existing = eintrag
                }
            }
        }
    }

    //
    if (existing !== null) {
        existing.quantity = existing.quantity + 1
    } else {
        let variantId = null
        let variantSize = null

        if (variant !== null) {
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

