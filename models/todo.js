const fs = require('fs')
const Factory = require('./factory')

class Model {
    static read() {
        let data = JSON.parse(fs.readFileSync('./database/data.json', 'utf-8'))
        return data
    }

    static save(todo) {
        fs.writeFileSync('./database/data.json', JSON.stringify(todo, null, 2))
    }

    static list() {
        let data = Model.read()
        let result = ''
        for (let i = 0; i < data.length; i++){
            if (data[i].status === null){
                var cek = '[]'
            } else {
                cek = '[x]'
            }
            result += `${i+1}. ${cek} memancing ${data[i].priority} \n`
            // console.log(data[i]);
        }
        return result
    }

    static add(priority, todo) {
        let data = Model.read()
        if (data.length === 0) {
            data.push(Factory.generate(
                1,
                todo,
                priority
            ))
        } else {
            data.push(Factory.generate(
                data[data.length-1].id+1,
                todo,
                priority
            ))
        }
        Model.save(data)
        return data
    }

    static find(id) {
        let data = Model.read()
        let result;
        for (let i in data){
            if (data[i].id === +id){
                result = data[i]
            }
        }
        return result
    }

    static delete(id) {
        let data = Model.read()
        let result = []
        let temp
        for (let i in data){
            if (data[i].id === +id){
                temp = data[i]
            } else {
                result.push(data[i])
            }
        }
        Model.save(result)
        return temp
    }

    static complete(id) {
        let data = Model.read()
        for (let i in data){
            if (data[i].id === +id){
                data[i].status = new Date()
            }
        }
        Model.save(data)
        return data
    }

    static uncomplete(id) {
        let data = Model.read()
        for (let i in data){
            if (data[i].id === +id){
                data[i].status = null
            }
        }
        Model.save(data)
        return data
    }

}


// console.log(Model.add());

module.exports = Model