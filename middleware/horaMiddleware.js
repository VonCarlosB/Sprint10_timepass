const horaMiddleware = (req, res, next) => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const formatedTime = `
    ${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}:${seconds < 10 ? '0'+seconds : seconds}`
    req.hour = `Ahora son las ${formatedTime}`
    req.horaActual = hours
    next()
}

module.exports = horaMiddleware