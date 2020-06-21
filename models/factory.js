const Model = require('./todo')
const { Urgent, Later, Additional } = require('./task')


class Factory {
    static generate(id, note, priority) {
        if (priority === 'urgent'){
            return new Urgent(id, note, priority)
        } else if (priority === 'later') {
            return new Later(id, note, priority)
        } else if (priority === 'additional') {
            return new Additional(id, note, priority)
        }
    }
}

module.exports = Factory