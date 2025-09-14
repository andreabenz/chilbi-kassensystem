import { settings } from '/JS/settings';

const cashRegisterName = document.getElementById('cashRegisterName');
const dateTime = document.getElementById('dateTime');

cashRegisterName.innerHTML = settings.cashRegisterName;

const setTime = () => {
    const now = new Date().toLocaleString();
    dateTime.innerHTML = now;
};
setTime();
setInterval(setTime, 1000);
