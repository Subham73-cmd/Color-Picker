$(document).ready(function() {
    $('#colorPicker').on('input', function() {
        var selectedColor = $(this).val();
        $('#colorDisplay').css('background-color', selectedColor);
        $('#colorValue').text('Selected Color: ' + selectedColor);
    });
});