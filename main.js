import { emptyOrder } from './JS/emptyOrder.js';
import { removeItem } from './JS/removeItem.js';
import { selectItem } from './JS/selectItem.js';
import { setPaymentMethod } from './JS/setPaymentMethod.js';
import { FileStorageDriver } from './JS/storage-drivers/fileSyncSave.js';
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
