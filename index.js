const Controller = require('./controller/todoController');
const { argv } = require('process');
const Argv = process.argv.slice(2)
const command = Argv[0]

const data = Argv.slice(1)

switch (command) {
    case undefined                  : Controller.help(); break;
    case 'help'                     : Controller.help(); break
    case 'list'                     : Controller.allList(); break;
    case 'add'                      : Controller.addData(data[0], data.slice(1)); break;
    case 'findById'                 : Controller.search(data[0]); break;
    case 'delete'                   : Controller.deleteTodo(data[0]); break;
    case 'complete'                 : Controller.completeTodo(data[0]); break;
    case 'uncomplete'               : Controller.uncompleteTodo(data[0]); break;
}