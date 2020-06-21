class Task {
    constructor(id, note, status, priority) {
        this.id = id
        this.note = note
        this.status = status || null
        this.priority = priority
    }
}

class Urgent extends Task {
    constructor(id, note, priority) {
        super(id, note, null, priority)
    }
}

class Later extends Task {
    constructor(id, note, priority) {
        super(id, note, null, priority)
    }
}

class Additional extends Task {
    constructor(id, note, priority) {
        super(id, note, null, priority)
    }
}

module.exports = {
    Urgent,
    Later,
    Additional
}