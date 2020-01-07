$(function () {
    $('#registration-form').submit(function (event) {

        $('#registration-button').attr("disabled", "disabled");
        $('.validation-element').each(function () {
            form.hideError($(this).attr('id'));
        });
        $.post(
            '/registration',
            $('#registration-form').serializeArray(),
            function (data) {
                $('#registration-button').removeAttr("disabled");
                if("error" in data){
                    form.showErrors(data["error"]);
                }
                if("ok" in data){
                    window.location.href = "/edit-profile-form"
                }
            },
            "json"
        );

        event.preventDefault();
    });
});