const horaMiddleware = (req, res, next) => {
    const now = new Date()
    const hours = now.getHours() < 10 ? '0'+now.getHours() : now.getHours()
    const minutes = now.getMinutes() < 10 ? '0'+now.getMinutes() : now.getMinutes()
    const seconds = now.getSeconds() < 10 ? '0'+now.getSeconds() : now.getSeconds()
    const formatedTime = `${hours}:${minutes}:${seconds}`
    req.dateType = `Ahora son las ${formatedTime}`
    res.locals.hour = hours
    next()
}

module.exports = horaMiddleware