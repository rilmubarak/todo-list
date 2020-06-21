class View {
    static help() {
        console.log(`
        ================================== COMAND LIST ====================================
        node index.js help                                          : Show list of command
        node index.js list                                          : Show All List content
        node index.js add <task_content>                            : add list content
        node index.js findById <task_content>                       : find content
        node index.js delete <task_id>                              : delete content
        node index.js complete <task_id>                            : check content
        node index.js uncomplete <task_id>                          : uncheck content
        `);
    }

    static print() {
        console.log();
    }
}

module.exports = View