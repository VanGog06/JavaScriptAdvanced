function tableBuilder(selector) {
    let container = $(selector);

    function createTable(columnNames) {
        container.empty();
        let table = $('<table>');
        let tr = $('<tr>');

        for (let column of columnNames) {
            let th = $('<th>').text(column);
            tr.append(th);
        }

        let action = $('<th>').text('Action');
        tr.append(action);
        table.append(tr);
        container.append(table);
    }

    function fillData(dataRows) {
        let table = $('table');
        for (let row of dataRows) {
            let tr = $('<tr>');
            for (let data of row) {
                let td = $('<td>').text(data);
                tr.append(td);
            }

            let button = $('<td>').append($('<button>').text('Delete'));
            tr.append(button);
            table.append(tr);
        }

        $('button').click(function() {
            $(this).parent().parent().remove();
        });
    }

    return {createTable, fillData};
}