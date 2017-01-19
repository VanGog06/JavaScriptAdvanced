function attachEvents() {
    $('#btnAdd').click(function() {
        let townToAdd = $('#newItem').val();

        if (townToAdd.length == 0) return;

        let option = $('<option>').text(townToAdd);
        $('#towns').append(option);

        $('#newItem').val('');
    });

    $('#btnDelete').click(function() {
        let townToDelete = $('#towns option:selected').text();

        if (townToDelete.length == 0) return;

        let towns = $('#towns option');

        for (let town of towns) {
            if (town.text == townToDelete) {
                if ($(town).is(':selected')) {
                    town.remove();
                }
            }
        }

        $('#newItem').val('');
    });
}