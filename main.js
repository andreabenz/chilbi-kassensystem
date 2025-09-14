import {selectItem} from "./JS/selectItem.js"
import {removeItem} from "./JS/removeItem.js"
import {setPaymentMethod} from "./JS/setPaymentMethod.js"
import {saveAndResetOrder} from "./JS/saveAndResetOrder.js"

export const currentOrder = {
    items: [],
    paymentMethod: null,
    total: 0,
    paid: 0,
    change: 0,
    tip: 0
}

selectItem(104)
console.log(currentOrder.items)
selectItem(104)
console.log(currentOrder.items)
removeItem(104)
console.log(currentOrder.items)

setPaymentMethod(3)
console.log(currentOrder.paymentMethod)

saveAndResetOrder("./JS/orders.json")