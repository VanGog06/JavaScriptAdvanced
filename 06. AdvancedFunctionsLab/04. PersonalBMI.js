function personalBMI(name, age, weight, height) {
    function calculaetBMI(weight, height) {
        let w = Number(weight);
        let h = Number(height) / 100;

        return w / (h * h);
    }

    let patientChart = {};
    patientChart.name = name;
    patientChart.personalInfo = {
        age: age,
        weight: weight,
        height: height
    };

    let bmi = Math.round(calculaetBMI(weight, height));

    patientChart.BMI = bmi;

    switch (true) {
        case bmi < 18.5:
            patientChart.status = 'underweight';
            break;
        case bmi < 25:
            patientChart.status = 'normal';
            break;
        case bmi < 30:
            patientChart.status = 'overweight';
            break;
        default:
            patientChart.status = 'obese';
            break;
    }

    if (patientChart.status == 'obese') {
        patientChart.recommendation = 'admission required';
    }

    return patientChart;
}

console.log(personalBMI('Peter', '29', '75', '182'));
console.log(personalBMI('Honey Boo Boo', 9, 57, 137));