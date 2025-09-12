import {paymentMethods} from "./items.js"
import {currentOrder} from "../main.js"

export function setPaymentMethod (method_id) {
    let method = paymentMethods.find(m => m.id === method_id) || null
    if (!method) {
        console.error('Fehler: Zahlungsmittel nicht gefunden!')
        return
    }
    currentOrder.paymentMethod = method.id
}