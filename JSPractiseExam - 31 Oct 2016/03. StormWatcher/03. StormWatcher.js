let Record = (function() {
    let newId = 0;

    return class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = newId++;
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
        }

        toString() {
            let weather = 'Not stormy';

            if (this.temperature < 20 &&
                (this.pressure < 700 || this.pressure > 900) &&
                this.windSpeed > 25) {
                weather = 'Stormy';
            }

            return `Reading ID: ${this.id}
Temperature: ${this.temperature}*C
Relative Humidity: ${this.humidity}%
Pressure: ${this.pressure}hpa
Wind Speed: ${this.windSpeed}m/s
Weather: ${weather}`;
        }
    }
})();

let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());
console.log();
let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());
