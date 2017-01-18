function increment(selector) {
    let textarea = ($('<textarea></textarea>'));
    textarea.addClass('counter');
    textarea.attr('disabled', 'true');
    textarea.val(0);

    let incrementBtn = ($('<button>Increment</button>'));
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');

    let addBtn = ($('<button>Add</button>'));
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    let ul = ($('<ul>'));
    ul.addClass('results');

    $(selector).append(textarea);
    $(selector).append(incrementBtn);
    $(selector).append(addBtn);
    $(selector).append(ul);

    incrementBtn.click(function() {
        let currentValue = Number($('.counter').val());
        $('.counter').val(currentValue + 1);
    });

    addBtn.click(function() {
        let currentValue = Number($('.counter').val());
        let li = ($('<li>'));
        li.text(currentValue);
        $('.results').append(li);
    });
}