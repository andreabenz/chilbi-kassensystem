import {paymentMethods} from "./items.js"
import {currentOrder} from "../main.js"

export function setPaymentMethod (method_id) {
    let method = null
    for (let i = 0; i < paymentMethods.length; i++) {
        if (paymentMethods[i].id === method_id) {
            method = paymentMethods[i]
            break
        }
        else console.log("Fehler: Zahlungsmittel nicht gefunden!")
        break
    }
    currentOrder.paymentMethod = method.id
}