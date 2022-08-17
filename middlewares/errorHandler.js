module.exports = (err, req, res, next) => {
    if (err.name === "InvalidJWT") {
        res.status(401).json({ message : 'Wrong/Invalid JWT'})
    } else if (err.name === 'NoAccess') {
        res.status(401).json({ message : 'Unauthorized User'})
    } else {
        res.status(500).json({ message : err.message || 'Internal Server Error'})
    }
}