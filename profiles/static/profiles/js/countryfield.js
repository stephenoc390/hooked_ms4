let countrySelected = $('#id_default_country').val();
if(!countrySelected) {
    $('#id_default_country').css('color', '#aab7c4');
}
('#id_default_country').change(function() {
    countrySelected = $(this).val();
    f(!countrySelected) {
        $(this).css('color', '#aab7c4');
    } else {
        $(this).css('color', 'navy');
    }
});