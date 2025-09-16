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

export function _pay(paidAmount, tip = null, voucher = false) {
  if (paidAmount < currentOrder.total && !voucher) {
    console.error('Bitte einen genug grossen Betrag eingeben!');
  }

  // teuerstes Essen und teuerstes Getränk vom Gesamtbetrag abziehen
  let voucherValue = 0;
  if (voucher) {
    const drinks = currentOrder.items.filter((item) => item.category_id === 4);

    const food = currentOrder.items.filter(
      (item) =>
        item.category_id === 1 ||
        item.category_id === 2 ||
        item.category_id === 3, // z.B. 2 = Pizza, 3 = Crêpe
    );

    // teuerstes Essen und Getränk suchen
    const maxDrink = drinks.reduce((max, item) => {
      if (!max) {
        return item;
      }
      if (item.price > max.price) {
        return item;
      }
      return max;
    }, null);

    const maxPizzaCrepe = food.reduce((max, item) => {
      if (!max) return item;
      if (item.price > max.price) return item;
      return max;
    }, null);
    if (maxDrink) voucherValue += maxDrink.price;
    if (maxPizzaCrepe) voucherValue += maxPizzaCrepe.price;
  }
  if (voucher) {
    currentOrder.paid += voucherValue;
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
