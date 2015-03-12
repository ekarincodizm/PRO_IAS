﻿$(document).ready(function () {
    $(".dtpicker").datepicker({
        buttonImage: '../images/cal.JPG',
        buttonImageOnly: true,
        changeMonth: true,
        changeYear: true,
        showOn: 'both',

    });

    swapValues = [];
    $(".swap_value").each(function (i) {
        swapValues[i] = $(this).val();
        $(this).focus(function () {
            if ($(this).val() == swapValues[i]) {
                $(this).val("")
            }
        }
        ).blur(function () {
            if ($.trim($(this).val()) == "") {
                $(this).val(swapValues[i])
            }
        })
    });
});


