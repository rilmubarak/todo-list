const fs = require('fs')

class Model {
    static list() {
        let data = JSON.parse(fs.readFileSync('./database/data.json', 'utf-8'))
        return data
    }
}


console.log(Model.list());

module.exports = Model