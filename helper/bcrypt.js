const bcrypt = require('bcrypt');

function hashPassw(plainPassw) {
    return bcrypt.hashSync(plainPassw, 8);
}

module.exports = {
    hashPassw
}