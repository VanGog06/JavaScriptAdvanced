function domSearch(selector, isCaseSensitive) {
    let add_controls = $('<div>')
        .addClass('add-controls')
        .append($('<label>').text('Enter text: ').append($('<input>')))
        .append($('<a>')
            .addClass('button')
            .css('display', 'inline-block')
            .text('Add')
            .click(function() {
                let text = $('label input');
                let li = $('<li>')
                    .addClass('list-item')
                    .append($('<a>')
                        .addClass('button')
                        .text('X')
                        .click(function() {
                           $(this).parent().remove();
                        }))
                    .append($('<strong>')
                        .text(text.val()));

                $('ul.items-list').append(li);
                text.val('');
            }));

    let search_controls = $('<div>')
        .addClass('search-controls')
        .append($('<label>')
            .text('Search:')
            .append($('<input>')
                .on('input', function() {
                    let needle = $(this).val();
                    let li = $('li.list-item strong').toArray();

                    for (let singleLi of li) {
                        let current = $(singleLi);

                        if (isCaseSensitive) {
                            if (current.text().indexOf(needle) < 0) current.parent().hide();
                            else current.parent().show();
                        } else {
                            if (current.text().toLowerCase().indexOf(needle.toLowerCase()) < 0) current.parent().hide();
                            else current.parent().show();
                        }
                    }
                })));

    let result_controls = $('<div>')
        .addClass('result-controls')
        .append($('<ul>')
            .addClass('items-list'));

    let content = $(selector);
    content.append(add_controls);
    content.append(search_controls);
    content.append(result_controls);
}