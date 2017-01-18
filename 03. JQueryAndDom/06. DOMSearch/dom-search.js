function domSearch(selector, isCaseSensitive) {
    $(selector).addClass('items-control');

    let add_controls = ($('<div>'));
    add_controls.addClass('add-controls');

    let label_enter_text = $('<label>');
    label_enter_text.text('Enter text: ');

    let input_enter_text = $('<input>');

    let a_enter_text = $('<a>');
    a_enter_text.addClass('button');
    a_enter_text.css('display', 'inline-block');
    a_enter_text.text('Add');

    label_enter_text.append(input_enter_text);
    add_controls.append(label_enter_text);
    add_controls.append(a_enter_text);
    $(selector).append(add_controls);

    let search_controls = $('<div>');
    search_controls.addClass('search_controls');

    let label_search = $('<label>');
    label_search.text('Search:');

    let input_search = $('<input>');
    input_search.on('input', function() {
        let needle = $(this).val();
        let items = $('.list-item strong').toArray();

        for (let item of items) {
            let current = $(item);

            if (isCaseSensitive) {
                if (current.text().indexOf(needle) < 0) {
                    current.parent().css('display', 'none');
                } else {
                    current.parent().css('display', '');
                }
            } else {
                if (current.text().indexOf(needle.toLowerCase()) < 0) {
                    current.parent().css('display', 'none');
                } else {
                    current.parent().css('display', '');
                }
            }
        }
    });

    label_search.append(input_search);
    search_controls.append(label_search);
    $(selector).append(search_controls);

    let result_controls = $('<div>');
    result_controls.addClass('result-controls');

    let ul = $('<ul>');
    ul.addClass('items-list');

    result_controls.append(ul);
    $(selector).append(result_controls);

    $('.add-controls a.button').click(function() {
        let add_value = $('.add-controls label input').val();

        let li = $('<li>');
        li.addClass('list-item');

        let a = $('<a href="#">');
        a.addClass('button');
        a.text('X');
        a.click(function() {
            $(this).parent().remove();
        });

        let strong = $('<strong>');
        strong.text(add_value);

        li.append(a);
        li.append(strong);
        ul.append(li);
    });
}