class TitleBar {
    constructor(title) {
        this.title = title;
        this.links = [];
        this.html = {};
    }

    addLink(href, name) {
        let a = `<a class="menu-link" href="${href}">${name}</a>`;
        this.links.push(a);

    }

    appendTo(selector) {
        let html = `<header class="header">
  <div class="header-row">
    <a class="button">&#9776;</a>
    <span class="title">${this.title}</span>
  </div>
  <div class="drawer">
    <nav class="menu">
    </nav>
  </div>
</header>`;

        $(selector).append(html);

        $(selector).find('.menu').append(this.links);

        $('.button').click(function() {
            $('.drawer').toggle();
        });
    }
}