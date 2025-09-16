import { emptyOrder, removeItem, selectItem } from './JS/order.js';
import { setPaymentMethod } from './JS/pay.js';
import { LocalStorageDriver } from './JS/storage-drivers/localStorageSave.js';

//leere Bestellung erstellen
export let currentOrder = emptyOrder();

const storage = new LocalStorageDriver();

selectItem(104);
console.log(currentOrder.items);
selectItem(104);
console.log(currentOrder.items);
removeItem(104);
console.log(currentOrder.items);

setPaymentMethod(3);
console.log(currentOrder.paymentMethod);

//Bestellung speichern und resetten
storage.addOrder(currentOrder);
currentOrder = emptyOrder();
