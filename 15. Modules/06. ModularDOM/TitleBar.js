let BaseElement = require('./BaseElement');

class TitleBar extends BaseElement {
    constructor(element, title) {
        super(element);
        this.title = title;
        this.links = [];
    }

    addLink(href, name) {
        let a = $('<a>')
            .attr('href', href)
            .attr('name', name);

        this.links.push(a);
        console.log(a);
    }
}

let title = new TitleBar('ime');
title.addLink('abv.bg', 'link');