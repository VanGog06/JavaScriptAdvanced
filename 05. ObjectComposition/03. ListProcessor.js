function listProcessor(commands) {
    let commandProcessor = (function() {
        let list = [];

        return {
            add: function(newText) {
                list.push(newText);
            },
            remove: (textToRemove =>
                list = list.filter(item => item != textToRemove)),
            print: () => console.log(list)
        }
    })();

    for (let command of commands) {
        let [currentCommand, arg] = command.split(' ');
        commandProcessor[currentCommand](arg);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);