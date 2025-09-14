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
