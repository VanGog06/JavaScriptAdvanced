let rgbToHexColor = require('../03. RGBToHex').RGBToHexColor;
let expect = require('chai').expect;

describe('Test RBGToHexColor(red, gree, blue) - converts RBG to HEX color', function() {
    it('should return #FF9EAA for RGBToHexColor(255, 158, 170)', function() {
        expect('#FF9EAA').to.be.equal(rgbToHexColor(255, 158, 170));
    });

    it('should return #0C0D0E for RGBToHexColor(12, 13, 14)', function() {
        expect('#0C0D0E').to.be.equal(rgbToHexColor(12, 13, 14));
    });

    it('should return #000000 for RGBToHexColor(0, 0, 0)', function() {
        expect('#000000').to.be.equal(rgbToHexColor(0, 0, 0));
    });

    it('should return #FFFFFF for RGBToHexColor(255, 255, 255)', function() {
        expect('#FFFFFF').to.be.equal(rgbToHexColor(255, 255, 255));
    });

    it('should return undefined for RGBToHexColor(-1, 0, 0)', function() {
        expect(undefined).to.be.equal(rgbToHexColor(-1, 0, 0));
    });

    it('should return undefined for RGBToHexColor(0, -1, 0)', function() {
        expect(undefined).to.be.equal(rgbToHexColor(0, -1, 0));
    });

    it('should return undefined for RGBToHexColor(0, 0, -1)', function() {
        expect(undefined).to.be.equal(rgbToHexColor(0, 0, -1));
    });

    it('should return undefined for RGBToHexColor(256, 0, 0)', function() {
        expect(undefined).to.be.equal(rgbToHexColor(256, 0, 0));
    });

    it('should return undefined for RGBToHexColor(0, 256, 0)', function() {
        expect(undefined).to.be.equal(rgbToHexColor(0, 256, 0));
    });

    it('should return undefined for RGBToHexColor(0, 0, 256)', function() {
        expect(undefined).to.be.equal(rgbToHexColor(0, 0, 256));
    });

    it('should return undefined for RGBToHexColor(1.1, 0, 0)', function() {
        expect(undefined).to.be.equal(rgbToHexColor(1.1, 0, 0));
    });

    it('should return undefined for RGBToHexColor(0, 1.1, 0)', function() {
        expect(undefined).to.be.equal(rgbToHexColor(0, 1.1, 0));
    });

    it('should return undefined for RGBToHexColor(0, 0, 1.1)', function() {
        expect(undefined).to.be.equal(rgbToHexColor(0, 0, 1.1));
    });

    it('should return undefined for RGBToHexColor(new Date(), "str", {a:5})', function() {
        expect(undefined).to.be.equal(rgbToHexColor(new Date(), "str", {a:5}));
    });
});