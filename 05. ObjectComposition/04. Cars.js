function cars(commands) {
    let commandInterpreter = (function () {
        let map = new Map();

        function create([name, proto, parent]) {
            if (proto == null) {
                map.set(name, {});
                return;
            }

            map.set(name, Object.create(map.get(parent)));
        }

        function set([name, key, value]) {
            let obj = map.get(name);
            obj[key] = value;
        }

        function print([name]) {
            let obj = map.get(name);
            let objKeys = Object.keys(map.get(name))
                .map(k => `${k}:${map.get(name)[k]}`);

            let proto = obj;
            while (proto = Object.getPrototypeOf(proto)) {
                let o =Object.keys(proto).map(k => `${k}:${proto[k]}`);
                objKeys = objKeys.concat(o)
            }

            console.log(objKeys.join(', '));
        }

        return {create, set, print};
    })();

    for (let command of commands) {
        let commandParameters = command.split(' ');
        let currentCommand = commandParameters.shift();
        commandInterpreter[currentCommand](commandParameters);
    }
}

//cars(['create c1','create c2 inherit c1','set c1 color red','set c2 model new','print c1','print c2']);
cars(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat']);
