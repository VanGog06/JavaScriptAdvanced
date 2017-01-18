//let sharedObject = require('../04. SharedObject').sharedObject;
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe('sharedObject', function () {
    describe('null state for name and income properties', function () {
        it('should return null as initial state for name', function () {
            expect(sharedObject.name).to.equal(null, 'sharedObject.name is not set to null');
        });

        it('should return null as initial state for income', function () {
            expect(sharedObject.income).to.equal(null, 'sharedObject.income is not set to null');
        });
    });

    describe('changeName', function () {
        //name property false
        it('should return null for wrong function parameter', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal(null, 'Name changed incorrectly.');
        });

        it('should return null for wrong function parameter', function () {
            sharedObject.name = 'Stamat';
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal('Stamat', 'Name changed incorrectly.');
        });

        //name textbox  false
        it('should return null for wrong function parameter', function () {
            let nameTextbox = $('#name');
            sharedObject.changeName('');
            expect(nameTextbox.val()).to.equal('', 'Name textbox changed incorrectly.');
        });

        it('should return null for wrong function parameter', function () {
            let nameTextbox = $('#name');
            nameTextbox.val('Stamat');
            sharedObject.changeName('');
            expect(nameTextbox.val()).to.equal('Stamat', 'Name textbox changed incorrectly.');
        });

        //name property true
        it('should return the passed in value for non-wrong function parameter', function () {
            sharedObject.changeName('Stamat');
            expect(sharedObject.name).to.equal('Stamat', 'Name changed incorrectly.');
        });

        it('should return the passed in value for non-wrong function parameter', function () {
            sharedObject.changeName("Vanio");
            expect(sharedObject.name).to.equal("Vanio", 'Name changed incorrectly.');
        });

        //name textbox true
        it('should return the passed in value for non-wrong function parameter', function () {
            let nameTextbox = $('#name');
            sharedObject.changeName('stami');
            expect(nameTextbox.val()).to.equal('stami', 'Name textbox changed incorrectly.');
        });

        it('should return the passed in value for non-wrong function parameter', function () {
            let nameTextbox = $('#name');
            sharedObject.changeName('papi');
            expect(nameTextbox.val()).to.equal('papi', 'Name textbox changed incorrectly.');
        });
    });

    describe('changeIncome', function() {
        //income property false
        it('should return null for wrong function parameter', function () {
            sharedObject.changeIncome(-5);
            expect(sharedObject.income).to.equal(null, 'Income changed incorrectly.');
        });

        it('should return null for wrong function parameter', function () {
            sharedObject.changeIncome(-5.5);
            expect(sharedObject.income).to.equal(null, 'Income changed incorrectly.');
        });

        it('should return null for wrong function parameter', function () {
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.equal(null, 'Income changed incorrectly.');
        });

        it('should return null for wrong function parameter', function () {
            sharedObject.changeIncome(5.5);
            expect(sharedObject.income).to.equal(null, 'Income changed incorrectly.');
        });

        it('should return null for wrong function parameter', function () {
            sharedObject.changeIncome({name: 'pesho'});
            expect(sharedObject.income).to.equal(null, 'Income changed incorrectly.');
        });

        it('should return null for wrong function parameter', function () {
            sharedObject.changeIncome('pesho');
            expect(sharedObject.income).to.equal(null, 'Income changed incorrectly.');
        });

        //income textbox false
        it('should return null for wrong function parameter', function () {
            let incomeTextbox = $('#income');
            sharedObject.changeIncome(-5);
            expect(incomeTextbox.val()).to.equal('', 'Income changed incorrectly.');
        });

        it('should return null for wrong function parameter', function () {
            let incomeTextbox = $('#income');
            sharedObject.changeIncome(-5.5);
            expect(incomeTextbox.val()).to.equal('', 'Income changed incorrectly.');
        });

        it('should return null for wrong function parameter', function () {
            let incomeTextbox = $('#income');
            sharedObject.changeIncome(0);
            expect(incomeTextbox.val()).to.equal('', 'Income changed incorrectly.');
        });

        it('should return null for wrong function parameter', function () {
            let incomeTextbox = $('#income');
            sharedObject.changeIncome(5.5);
            expect(incomeTextbox.val()).to.equal('', 'Income changed incorrectly.');
        });

        it('should return null for wrong function parameter', function () {
            let incomeTextbox = $('#income');
            sharedObject.changeIncome({name: 'pesho'});
            expect(incomeTextbox.val()).to.equal('', 'Income changed incorrectly.');
        });

        it('should return null for wrong function parameter', function () {
            let incomeTextbox = $('#income');
            sharedObject.changeIncome('pesho');
            expect(incomeTextbox.val()).to.equal('', 'Income changed incorrectly.');
        });

        //income property true
        it('should return null for wrong function parameter', function () {
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.equal(5, 'Income changed incorrectly.');
        });

        it('should return null for wrong function parameter', function () {
            sharedObject.changeIncome(150);
            expect(sharedObject.income).to.equal(150, 'Income changed incorrectly.');
        });

        //income textbox true
        it('should return null for wrong function parameter', function () {
            let incomeTextbox = $('#income');
            sharedObject.changeIncome(150);
            expect(incomeTextbox.val()).to.equal('150', 'Income changed incorrectly.');
        });

        it('should return null for wrong function parameter', function () {
            let incomeTextbox = $('#income');
            sharedObject.changeIncome(12);
            expect(incomeTextbox.val()).to.equal('12', 'Income changed incorrectly.');
        });
    });

    describe('updateName', function() {
        it('should return null for wrong function parameter', function () {
            sharedObject.name = 'stamat';
            let nameTextbox = $('#name');
            nameTextbox.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('stamat', 'Name updated incorrectly.');
        });

        it('should return value for non-wrong function parameter', function () {
            let nameTextbox = $('#name');
            nameTextbox.val('pepi');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('pepi', 'Name updated incorrectly.');
        });
    });

    describe('updateIncome', function() {
        it('should return "30" for wrong value of income textbox', function() {
            sharedObject.income = 30;
            let incomeTextbox = $('#income');
            incomeTextbox.val('stamat');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(30, 'Income property change incorrectly');
        });

        it('should return "30" for wrong value of income textbox', function() {
            sharedObject.income = 30;
            let incomeTextbox = $('#income');
            incomeTextbox.val({name: 'pesho'});
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(30, 'Income property change incorrectly');
        });

        it('should return "30" for wrong value of income textbox', function() {
            sharedObject.income = 30;
            let incomeTextbox = $('#income');
            incomeTextbox.val('3.5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(30, 'Income property change incorrectly');
        });

        it('should return "30" for wrong value of income textbox', function() {
            sharedObject.income = 30;
            let incomeTextbox = $('#income');
            incomeTextbox.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(30, 'Income property change incorrectly');
        });

        it('should return "30" for wrong value of income textbox', function() {
            sharedObject.income = 30;
            let incomeTextbox = $('#income');
            incomeTextbox.val('-10');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(30, 'Income property change incorrectly');
        });

        it('should return "30" for wrong value of income textbox', function() {
            sharedObject.income = 30;
            let incomeTextbox = $('#income');
            incomeTextbox.val('-1000.5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(30, 'Income property change incorrectly');
        });

        it('should return value for wrong value of income textbox', function() {
            let incomeTextbox = $('#income');
            incomeTextbox.val('1000');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(1000, 'Income property change incorrectly');
        });

        it('should return value for wrong value of income textbox', function() {
            let incomeTextbox = $('#income');
            incomeTextbox.val('50');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(50, 'Income property change incorrectly');
        });
    });
});

