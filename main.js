<<<<<<< HEAD
import {selectItem} from "./JS/selectItem.js"
import {removeItem} from "./JS/removeItem.js"
import {setPaymentMethod} from "./JS/setPaymentMethod.js"
import {saveAndResetOrder} from "./JS/saveAndResetOrder.js"
=======
import { removeItem } from './JS/removeItem.js';
import { selectItem } from './JS/selectItem.js';
import { setPaymentMethod } from './JS/setPaymentMethod.js';
import { LocalStorageDriver } from './JS/storage.js';
>>>>>>> f9cefff (Beispiel localStorage driver)

export const currentOrder = {
    items: [],
    paymentMethod: null,
    total: 0,
    paid: 0,
    change: 0,
    tip: 0,
};

// Create new storage driver (this one uses localStorage)
const storage = new LocalStorageDriver();

selectItem(104);
console.log(currentOrder.items);
selectItem(104);
console.log(currentOrder.items);
removeItem(104);
console.log(currentOrder.items);

setPaymentMethod(3);
console.log(currentOrder.paymentMethod);

// saveAndRestoreOrder('./JS/orders.json');
storage.addOrder(currentOrder);
