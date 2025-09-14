import { currentOrder } from '../main.js';

function _pay(paidAmount, tip = null) {
    if (paidAmount < currentOrder.total) {
        throw new Error('Bitte einen genug grossen Betrag eingeben!');
    }
    if (tip !== null) {
        currentOrder.tip = tip;
        currentOrder.change =
            paidAmount - (currentOrder.total + currentOrder.tip);
        currentOrder.paid = paidAmount - currentOrder.change;
    } else {
        currentOrder.change = paidAmount - currentOrder.total;
        currentOrder.paid = paidAmount - currentOrder.change;
    }
}
