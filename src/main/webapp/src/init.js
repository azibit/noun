/**
 * Created by azibit on 9/17/15.
 */

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
});

$(document).ready(function() {
    $('select').material_select();
});


$('#textarea1').val('New Text');
$('#textarea1').trigger('autoresize');


