import {selectItem} from "./JS/selectItem.js"

export let currentOrder = {
    items: [],
    vouchers: 0,
    paid: 0,
    total: 0
}

selectItem(104)
console.log(currentOrder.items)