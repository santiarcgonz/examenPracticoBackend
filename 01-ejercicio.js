
const hoursPerWeek = 40;
const totalHoursExtra = 13;
const valuePerHours = 265;
const extraValuePerHours = 350;

let totalOrdinary;
let totalExtra;

totalOrdinary = hoursPerWeek * valuePerHours;
console.log('El total a pagar por horas laborales normal (40hrs) es de:', totalOrdinary)

totalExtra = totalHoursExtra * extraValuePerHours;
console.log(`El total a pagar por horas extra ${totalHoursExtra} hrs es de:`, totalExtra)