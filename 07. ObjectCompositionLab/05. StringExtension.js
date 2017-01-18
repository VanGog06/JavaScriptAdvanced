function solve() {
    (function() {
        String.prototype.ensureStart = function(str) {
            if (!this.toString().startsWith(str)) {
                return str + this;
            }
            else {
                return this.toString();
            }
        };

        String.prototype.ensureEnd = function(str) {
            if (!this.toString().endsWith(str)) {
                return this + str;
            }
            else {
                return this.toString();
            }
        };

        String.prototype.isEmpty = function() {
            return this.length <= 0;
        };

        String.prototype.truncate = function(n) {
            if (n < 4) return '.'.repeat(n);

            if (this.length <= n) {
                return this.toString();
            }
            else {
                let match = this.toString().split(' ');
                let length = match.length;

                if (match.length > 1) {
                    for (let i = 0; i < length; i++) {
                        match.pop();
                        let currentStr = match.join(' ') + '...';
                        if (currentStr.length <= n) {
                            return currentStr;
                        }
                    }
                } else {
                    return this.toString().slice(0, n - 3) + '...';
                }
            }
        };

        String.format = function(str, ...params) {
            for (let i = 0; i < params.length; i++) {
                str = str.replace('{' + i + '}', params[i]);
            }

            return str;
        }
    })();
}

let f = solve();
let str = 'my string';
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox',
    'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}',
    'dog'));
