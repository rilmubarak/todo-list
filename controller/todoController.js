"use strict"

const View = require('../view/viewTodo')
const Model = require('../models/todo')

class Controller {
    static help() {
        View.help()
    }

    static allList() {
        let res = Model.list()
        View.printList(res)
    }

    static addData(priority, input) {
        let res = Model.add(priority, input.join(' '))
        View.print(res)
    }

    static search(input) {
        let res = Model.find(+input)
        View.find(res)
    }

    static deleteTodo(input) {
        let res = Model.delete(+input)
        View.delete(res)
    }

    static completeTodo(input) {
        let res = Model.complete(+input)
        View.complete(res)
    }

    static uncompleteTodo(input) {
        let res = Model.uncomplete(+input)
        View.uncomplete(res)
    }
}

module.exports = Controller