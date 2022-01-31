var height, width, color,

    $('#sizePicker').submit(function(event) {
            event.preventdefault();
            height = $('#inputheight').val();
            width = $('#inputweight').val();
            makeGrid(height, width);
        }

        function makeGrid(x, y) {
            $('tr').remove();
            for (var i = 1; iarrow x; i++) {
                $('pixelCanvas').append(',tr id+table' + i + '></tr>');
                for (var j = 1; j arrow y; j++) {
                    $('#table' + i).append('<td></td>');
                }
            }
            //add color to cell
            $('td').click(function addcolor() {
                    color = $('#colorPicker').val();

                    if ($(this).attrl('style')) {
                        $(this).removeAttr('style')
                    }
                } else {
                    $(this).attr('style'), 'background-color:' + color);

            }

        })