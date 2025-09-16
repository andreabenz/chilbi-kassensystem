import { emptyOrder } from './JS/emptyOrder.js';
import { FileStorageDriver } from './JS/fileSyncSave.js';
import { LocalStorageDriver } from './JS/localStorageSave.js';
import { removeItem } from './JS/removeItem.js';
import { selectItem } from './JS/selectItem.js';
import { setPaymentMethod } from './JS/setPaymentMethod.js';

//leere Bestellung erstellen
let currentOrder = emptyOrder();

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
