const View = require('../view/viewTodo')
const Model = require('../models/todo')

class Controller {
    static help() {
        View.help()
    }

    static list() {
        let res = Model.list()
        View.print(res)
    }
}

module.exports = Controller