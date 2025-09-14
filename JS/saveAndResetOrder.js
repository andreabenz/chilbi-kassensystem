import fs from 'fs'
import {currentOrder} from "../main.js"

let orders = []

export function saveAndResetOrder (file) {

    //Vergangene Bestellungen laden
    let data = fs.readFileSync(file, "utf-8")
    orders = JSON.parse(data)

    //Neue Bestellung mit Zeitstempel anfügen
    orders.push({ ...currentOrder, timestamp: new Date().toISOString()})

    //Bestellungen wieder abspeichern
    fs.writeFileSync(file, JSON.stringify(orders, null, 2), "utf-8")
    console.log('Bestellung gespeichert!')

    //currentOrder resetten
    currentOrder.items = []
    currentOrder.paymentMethod = null
    currentOrder.paid = 0
    currentOrder.total = 0
    currentOrder.tip = 0
    console.log("Neue Bestellung gestartet!")
}