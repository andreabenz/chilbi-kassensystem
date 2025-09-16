export function emptyOrder() {
    return {
        items: [],
        paymentMethod: null,
        total: 0,
        paid: 0,
        change: 0,
        tip: 0,
        timestamp: null,
    };
}
