function validate() {
    $('#submit').click(function(e) {
        e.preventDefault();

        let username = $('#username').val();
        let password = $('#password').val();
        let confirm_password = $('#confirm-password').val();
        let email = $('#email').val();
        let isCompanyNumberCorrect = false;

        if (!checkUsername(username)) $('#username').css('border', 'red');
        else $('#username').css('border', 'none');

        if (!checkPassword(password)) {
            $('#password').css('border', 'red');
        } else {
            $('#password').css('border', 'none');
        }

        if(!checkPassword(confirm_password)) {
            $('#confirm-password').css('border', 'red');
        } else {
            $('#confirm-password').css('border', 'none');
        }

        if (!equalPasswords(password, confirm_password)) {
            $('#password').css('border', 'red');
            $('#confirm-password').css('border', 'red');
        } else {
            $('#password').css('border', 'none');
            $('#confirm-password').css('border', 'none');
        }

        if (!checkEmail(email)) {
            $('#email').css('border', 'red');
        } else {
            $('#email').css('border', 'none');
        }

        if ($('#company').is(':checked')) {

            if (!checkCompanyNumber($('#companyNumber').val())) {
                $('#companyNumber').css('border', 'red');
                isCompanyNumberCorrect = true;
            } else {
                $('#companyNumber').css('border', 'none');
                isCompanyNumberCorrect = false;
            }
        }

        if (checkUsername(username) && checkPassword(password) && checkPassword(confirm_password)
            && checkEmail(email) && equalPasswords(password, confirm_password)) {
            if ($('#company').is(':checked')) {
                if (isCompanyNumberCorrect) $('#valid').hide();
                else $('#valid').show();
            } else {
                $('#valid').show();
            }
        } else {
            $('#valid').hide();
        }
    });

    $('#company').change(function() {
        if($(this).is(":checked")) {
            $('#companyInfo').show();
        } else {
            $('#companyInfo').hide();
        }
    });

    function checkUsername(username) {
        let regexp = new RegExp('^[a-zA-Z0-9]{3,20}$', '');

        return regexp.test(username);
    }

    function checkPassword(password) {
        let regexp = new RegExp('^[\w]{5,15}$', 'g');

        let passwordTest = regexp.test(password);

        return passwordTest;
    }

    function equalPasswords(password, confirm_password) {
        return password === confirm_password;
    }

    function checkEmail(email) {
        let regexp = new RegExp('^.*@.*?\..*?$', '');

        return regexp.test(email);
    }

    function checkCompanyNumber(number) {
        return number > 1000 && number < 9999;
    }
}
