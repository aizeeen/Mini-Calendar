const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-number");
const dayNumberEl = document.getElementById("day-number");
const yearEL = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthNameEl.innerText = date.toLocaleString("en", { month: "long" });

dayNameEl.innerText = date.toLocaleString("en", { weekday: "long" });

dayNumberEl.innerText = date.getDate();

const year = date.getFullYear();
yearEL.innerText = date.getFullYear();
