const validarHora = () => {
    const now = new Date().getHours()
    if(now >= 12) return true
    else return false
}

module.exports = validarHora