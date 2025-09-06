import {selectItem} from "./JS/selectItem.js"
import {removeItem} from "./JS/removeItem.js"
import {setPaymentMethod} from "./JS/setPaymentMethod.js"

export let currentOrder = {
    items: [],
    paymentMethod: null,
    paid: 0,
    total: 0
}

selectItem(104)
console.log(currentOrder.items)
selectItem(104)
console.log(currentOrder.items)
removeItem(104)
console.log(currentOrder.items)

setPaymentMethod(3)
console.log(currentOrder.paymentMethod)