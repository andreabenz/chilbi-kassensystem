import { currentOrder } from '../main.js';
import { paymentMethods } from './items.js';

export function setPaymentMethod(method_id) {
  const method = paymentMethods.find((m) => m.id === method_id);
  if (!method) {
    console.error('Fehler: Zahlungsmittel nicht gefunden!');
    return;
  }
  currentOrder.paymentMethod = method.id;
}

export function calculateOrderTotal() {
  currentOrder.total = currentOrder.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
}

export function _pay(paidAmount, tip = null) {
  if (paidAmount < currentOrder.total) {
    throw new Error('Bitte einen genug grossen Betrag eingeben!');
  }
  if (tip !== null) {
    currentOrder.tip = tip;
    currentOrder.change = paidAmount - (currentOrder.total + currentOrder.tip);
    currentOrder.paid = paidAmount - currentOrder.change;
  } else {
    currentOrder.change = paidAmount - currentOrder.total;
    currentOrder.paid = paidAmount - currentOrder.change;
  }
}
