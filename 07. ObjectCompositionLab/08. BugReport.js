function bugReport() {
    let id = 0;
    let bugs = [];
    let printer = undefined;

    function report(author, description, reproducible, severity) {
        let bug = {
            ID: id++,
            author: author,
            description: description,
            reproducible: reproducible,
            severity: severity,
            status: 'Open'
        };

        bugs.push(bug);
        sort();
    }

    function setStatus(id, newStatus) {
        for (let bug of bugs) {
            if (bug.ID == id) bug.status = newStatus;
        }
        sort();
    }

    function remove(id) {
        bugs.filter(bug => bug.ID != id);
        sort();
    }

    function sort(method = 'ID') {
        switch (method) {
            case 'ID':
                bugs = bugs.sort((a, b) => a.ID - b.ID);
                break;
            case 'author':
                bugs = bugs.sort((a, b) => a.author.toString().localeCompare(b.author.toString()));
                break;
            default:
                bugs = bugs.sort((a, b) => a.severity - b.severity);
                break;
        }

        updateScreen();
    }

    function output(selector) {
        printer = selector;
    }

    function updateScreen() {
        if (printer) {
            let parent = $(printer);
            parent.text('');
            for (let bug of bugs) {
                let html = displayBug(bug);
                parent.append(html);
            }
        }
    }

    function displayBug(bug) {
        let html = $('<div>')
            .attr('id', 'report_' + bug.ID)
            .addClass('report')
            .append($('<div>')
                .addClass('body')
                .append($('<p>')
                    .text(bug.description)))
            .append($('<div>')
                .addClass('title')
                .append($('<span>')
                    .addClass('author')
                    .text(`Submitted by: ${bug.author}`))
                .append($('<span>')
                    .addClass('status')
                    .text(`${bug.status} | ${bug.severity}`)));

        return html;
    }

    return {report, setStatus, remove, sort, output};
}

let bug = bugReport();
bug.output('#wrapper');
bug.report('guy', 'report content', true, 5);
bug.report('second guy', 'report content 2', true, 3);
bug.report('abv', 'report content three', true, 4);

bug.sort('author');
