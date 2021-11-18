const dayOfWeek = (a) => {
    switch (a) {
        case 1:
            return 'Domingo'
        case 2:
            return 'Lunes'
        case 3:
            return 'Martes'
        case 4:
            return 'Miercoles'
        case 5:
            return 'Jueves'
        case 6:
            return 'Viernes'
        case 7:
            return 'Sabado'
        default:
            return 'tu semana esta muy rara... vives en la tierra?';
    }
}
const hour = () => {
    let hoy = new Date()
    let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    return hora
}
module.exports = {
    dayOfWeek,
    hour
}