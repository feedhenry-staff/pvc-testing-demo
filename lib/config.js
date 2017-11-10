const fs = require('fs')
class Config {
    constructor() {
        this.cfg = JSON.parse(fs.readFileSync('./store/db.json').toString())
    }

    getRaw() {
        return this.cfg
    }
}

module.exports = Config
