const Controller = require('./controller/todoController')
const Argv = process.argv.slice(2)
const command = Argv[0]


switch (command) {
    case undefined                  : Controller.help(); break;
    case 'help'                     : Controller.help()
    case 'list'                     : Controller.list()
    // case 'add'                      : Controller.add()
    // case 'findById'                 : Controller.find()
    // case 'delete'                   : Controller.delete()
    // case 'complete'                 : Controller.complete()
    // case 'uncomplete'               : Controller.uncomplete()
}