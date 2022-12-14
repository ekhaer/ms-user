const axios = require('axios').default;
const baseUrl = process.env.SERVICE_AUTH_BASE_URL;

async function authenticate(req, res, next) {
    console.log("==AUTHENTICATION==");
    try {
        const { access_token, refresh_token } = req.headers;
        let data = { access_token, refresh_token }
        const request = `${baseUrl}/verify`;
        const response = await axios.post(request, data);

        if (response.data) {
            req.loggedUser = {
                _id : response.data._id,
                username : response.data.username,
                role : response.data.role
            }
            return next()
        } else {
            next(err)
        }
    } catch (err) {
        if (err.response.data) {
            next(err.response.data)
        } else {
            next(err)
        }
    }
}
module.exports = authenticate;
