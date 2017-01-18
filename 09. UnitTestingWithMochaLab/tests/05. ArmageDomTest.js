let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

describe('nuke', function() {
    beforeEach('initializes DOM', function() {
        document.body.innerHTML = `<div id="target">
                                        <div class="nested target">
                                            <p>This is some text</p>
                                        </div>
                                        <div class="target">
                                            <p>Empty div</p>
                                        </div>
                                        <div class="inside">
                                            <span class="nested">Some more text</span>
                                            <span class="target">Some more text</span>
                                        </div>
                                   </div>`;
    });

    it('should not delete anything if the two selectors are the same', function() {
        let selector1 = '.target';
        let selector2 = '.target';
        let oldHTML = $(selector1).html();
        nuke(selector1, selector2);
        let newHTML = $(selector1).html();
        expect(newHTML).to.equal(oldHTML, 'Function did not execute properly with same selectors');
    });

    it('should not delete anything if the one selector is missing', function() {
        let selector1 = '.target';
        let oldHTML = $(selector1).html();
        nuke(selector1);
        let newHTML = $(selector1).html();
        expect(newHTML).to.equal(oldHTML, 'Function did not execute properly with same selectors');
    });

    it('should not delete anything if the one selector is not valid', function() {
        let selector2 = '.target';
        let oldHTML = $(selector2).html();
        nuke(undefined, selector2);
        let newHTML = $(selector2).html();
        expect(newHTML).to.equal(oldHTML, 'Function did not execute properly with same selectors');
    });

    it('should not delete anything if the one selector is not valid', function() {
        let selector1 = '.target';
        let oldHTML = $(selector1).html();
        nuke(selector1, undefined);
        let newHTML = $(selector1).html();
        expect(newHTML).to.equal(oldHTML, 'Function did not execute properly with same selectors');
    });

    it('should not delete anything if the one selector is not valid', function() {
        let selector1 = '.target';
        let oldHTML = $(selector1).html();
        nuke(selector1, 2);
        let newHTML = $(selector1).html();
        expect(newHTML).to.equal(oldHTML, 'Function did not execute properly with same selectors');
    });

    it('should not delete anything if the one selector is not valid', function() {
        let selector2 = '.target';
        let oldHTML = $(selector2).html();
        nuke(4, selector2);
        let newHTML = $(selector2).html();
        expect(newHTML).to.equal(oldHTML, 'Function did not execute properly with same selectors');
    });

    it('should not delete anything if the one selector is not valid', function() {
        let selector2 = '.target';
        let oldHTML = $(selector2).html();
        nuke('#bla', selector2);
        let newHTML = $(selector2).html();
        expect(newHTML).to.equal(oldHTML, 'Function did not execute properly with same selectors');
    });

    it('should remove nodes with correct selector', function() {
        let selector1 = '.target';
        let selector2 = '.nested';
        nuke(selector1, selector2);
        let newHTML = $(selector1 + selector2);

        expect(newHTML.length).to.equal(0, 'Function did not execute properly with same selectors');
    });

    it('should remove nodes with correct selector', function() {
        let selector = $('#target');
        let prev = selector.html();
        nuke('.nested', '.inside');
        expect(selector.html()).to.equal(prev);
    });
});