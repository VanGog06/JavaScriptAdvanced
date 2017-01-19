function attachEvents() {
    $('#btnDelete').click(function() {
        let townToDelete = $('#townName').val();
        let towns = $('#towns option');
        let isDeleted = false;

        for (let town of towns) {
            if (town.text === townToDelete) {
                town.remove();
                isDeleted = true;
            }
        }

        if (isDeleted) {
            $('#result').text(`${townToDelete} deleted.`);
        } else {
            $('#result').text(`${townToDelete} not found.`);
        }

        $('#townName').val('');
    });
}