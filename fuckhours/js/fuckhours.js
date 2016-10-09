$(function() {
    var $cells = $('.cells'),
        exchangeRate = 31.4,
        tw;

    $.extend({
        moneyFormat: function(str) {
            var str = new String(str);

            if (str.length <= 3) {
                return str;
            } else {
                return $.moneyFormat(str.substr(0, str.length - 3)) + ',' + str.substr(str.length - 3);
            }
        }
    })

    $.each(data, function(index, value) {
        tw = (value.country == '台灣') ? 'class="mom-im-here"' : '';

        var workday = 365 - (value.pvd + value.pph + 104),
            h_d = value.hours / workday;

        $cells.append('<tr id="fh_' + index + '" '+ tw +'>'
            + '<td></td>'
            + '<td>' + value.eng + '<br /><small>' + value.country + '</small></td>'
            + '<td>' + value.year + '</td>'
            + '<td>' + $.moneyFormat(value.hours) + ' <small>(' + (index+1) + ')</small>' + '</td>'
            + '<td>' + (Math.round(h_d * 10) / 10) + '</td>'
            + '<td>' + $.moneyFormat(value.gni * exchangeRate) + '</td>'
            + '<td>' + $.moneyFormat(Math.round(value.gni / value.hours * exchangeRate )) + '</td>'
            + '<td>' + value.pvd + '</td>'
            + '<td>' + value.pph + '</td>'
            + '<td>' + (value.pvd + value.pph + 104) + '</td>'
            + '</tr>');
    });

    var $table = $('#myTable'),
        $thr = $('.thr');

    $table.DataTable({
        paging: false,
        searching: false,
        ordering: true,
        order: [[5, 'desc']],
        info: false,
        rowCallback: function( row, data, index ) {
            $(row).children('td:first-child').text(index+1);
        },
        drawCallback: function( settings ) {
            var _this = $(this),
                $selectedItem = $thr.children(':not(.sorting)'),
                getIndex = $selectedItem.index(),
                getStatus = $selectedItem.attr('class').split('_')[1];

            _this.removeClass('sorting_good sorting_bad');

            if ((getStatus == 'desc' && (getIndex >=5)) ||
                (getStatus == 'asc') && (getIndex == 3 || getIndex == 4)) {
                _this.addClass('sorting_bad');
            } else if (getIndex == 0 || getIndex == 1 || getIndex == 2) {
                _this.removeClass('sorting_good sorting_bad');
            } else {
                _this.addClass('sorting_good');
            }
        }
    });
});