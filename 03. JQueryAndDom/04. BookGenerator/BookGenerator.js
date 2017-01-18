let createBook = (function () {
    let id = 1;

    return function(element, title, author, isbn) {
        let id = 1;
        let div = ($('<div>'));
        let idTag = 'book' + id;
        div.attr('id', idTag);
        div.css('border', 'medium none');

        let titleParagraph = ($('<p>'));
        titleParagraph.addClass('title');
        titleParagraph.text(title);
        div.append(titleParagraph);

        let authorParagraph = ($('<p>'));
        authorParagraph.addClass('author');
        authorParagraph.text(author);
        div.append(authorParagraph);

        let isbnParagraph = ($('<p>'));
        isbnParagraph.addClass('isbn');
        isbnParagraph.text(isbn);
        div.append(isbnParagraph);

        let selectBtn = ($('<button>'));
        selectBtn.text('Select');
        div.append(selectBtn);

        let deselectBtn = ($('<button>'));
        deselectBtn.text('Deselect');
        div.append(deselectBtn);

        $(element).append(div);

        selectBtn.click(function () {
            div.css('border', '2px solid blue');
        });

        deselectBtn.click(function () {
            div.css('border', 'medium none');
        });
    }
}());
