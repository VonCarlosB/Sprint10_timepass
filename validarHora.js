const validarHora = (hour) => {
    if(hour > 12) return true
    else return false
}

module.exports = validarHora