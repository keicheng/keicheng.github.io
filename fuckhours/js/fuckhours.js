$(function() {
    var $cells = $('.cells'),
        $twTable = $('#twTable'),
        $twCell = $twTable.children('tbody'),
        exchangeRate = 31.4,
        $select = $('.dataSelect'),
        isTW,
        tw = {
            country: '台灣',
            hours: 2104,
            gni: 20925,
            year: 2015,
            pvd: 7,
            pph: 12,
            taxMin: 5,
            taxMax: 45,
            col: 57.36,
            rent: 16.10,
            lppi: 113.24,
            eng: 'Taiwan'
        };

    $.extend({
        moneyFormat: function(str) {
            var str = new String(str);

            if (str.length <= 3) {
                return str;
            } else {
                return $.moneyFormat(str.substr(0, str.length - 3)) + ',' + str.substr(str.length - 3);
            }
        }
    });

    var t_workday = 365 - (tw.pvd + tw.pph + 104),
        t_hd = tw.hours / t_workday,
        tt = tw.pvd + tw.pph;

    $.each(data, function(index, value) {
        isTW = (value.eng == 'Taiwan') ? 'class="mom-im-here"' : '';

        var v_workday = 365 - (value.pvd + value.pph + 104),
            v_hd = value.hours / v_workday,
            vt = value.pvd + value.pph;

        if (value.eng != 'Taiwan') {
            $cells.append('<tr id="fh_' + index + '" '+ isTW +'/>');

            var $newTr = $('#fh_' + index);

            $newTr.append('<td class="hide-xs" />');
            $newTr.append('<td data-label="國家">' + value.eng + ' <br class="hide-xs" /><small>' + value.country + '</small></td>');
            $newTr.append('<td data-label="工時資料年份">' + value.year + '</td>');
            $newTr.append('<td class="' + ((tw.hours >= value.hours) ? ((tw.hours > value.hours) ? 'success' : 'warning') : 'error') + '" data-label="工時(工時排名)">' + $.moneyFormat(value.hours) + ' <small>(' + (index+1) + ')</small>' + '</td>');
            $newTr.append('<td class="' + ((t_hd >= v_hd) ? ((t_hd > v_hd) ? 'success' : 'warning') : 'error') + '" data-label="單日平均工時">' + (Math.round(v_hd * 10) / 10) + '</td>');
            $newTr.append('<td class="' + ((tw.gni >= value.gni) ? ((tw.gni > value.gni) ? 'error' : 'warning') : 'success') + '" data-label="人均收入(NTD)">' + $.moneyFormat(value.gni * exchangeRate) + '</td>');
            $newTr.append('<td class="' + ((tw.gni >= value.gni) ? ((tw.gni > value.gni) ? 'error' : 'warning') : 'success') + '" data-label="時薪(NTD)">' + $.moneyFormat(Math.round(value.gni / value.hours * exchangeRate )) + '</td>');
            $newTr.append('<td class="' + ((tw.pvd >= value.pvd) ? ((tw.pvd > value.pvd) ? 'error' : 'warning') : 'success') + '" data-label="年假天數">' + value.pvd + '</td>');
            $newTr.append('<td class="' + ((tw.pph >= value.pph) ? ((tw.pph > value.pph) ? 'error' : 'warning') : 'success') + '" data-label="國定假日">' + value.pph + '</td>');
            $newTr.append('<td class="' + ((tt >= vt) ? ((tt > vt) ? 'error' : 'warning') : 'success') + '" data-label="假日總數">' + (vt + 104) + '</td>');
            $newTr.append('<td data-label="最低稅率">' + value.taxMin + '%</td>');
            $newTr.append('<td data-label="最高稅率">' + value.taxMax + '%</td>');
            $newTr.append('<td data-label="生活成本指數">' + value.col + '</td>');
            $newTr.append('<td data-label="租金指數">' + value.rent + '</td>');
            $newTr.append('<td data-label="消費力指數">' + value.lppi + '</td>');

        } else {
            $cells.append('<tr id="fh_' + index + '" '+ isTW +'>'
                + '<td class="hide-xs"></td>'
                + '<td data-label="國家">' + value.eng + ' <br class="hide-xs" /><small>' + value.country + '</small></td>'
                + '<td data-label="工時資料年份">' + value.year + '</td>'
                + '<td data-label="工時(工時排名)">' + $.moneyFormat(value.hours) + ' <small>(' + (index+1) + ')</small>' + '</td>'
                + '<td data-label="單日平均工時">' + (Math.round(v_hd * 10) / 10) + '</td>'
                + '<td data-label="人均收入(NTD)">' + $.moneyFormat(value.gni * exchangeRate) + '</td>'
                + '<td data-label="時薪(NTD)">' + $.moneyFormat(Math.round(value.gni / value.hours * exchangeRate )) + '</td>'
                + '<td data-label="年假天數">' + value.pvd + '</td>'
                + '<td data-label="國定假日">' + value.pph + '</td>'
                + '<td data-label="假日總數">' + (vt + 104) + '</td>'
                + '<td data-label="最低稅率">' + value.taxMin + '%</td>'
                + '<td data-label="最高稅率">' + value.taxMax + '%</td>'
                + '<td data-label="生活成本指數">' + value.col + '</td>'
                + '<td data-label="租金指數">' + value.rent + '</td>'
                + '<td data-label="消費力指數">' + value.lppi + '</td>'
                + '</tr>');
        }

        $select.append('<option value="' + index + '">'+ value.eng + ' ' + value.country + '</option>');
    });

    $twCell.append('<tr>'
        + '<td data-label="國家">' + tw.eng + ' <br class="hide-xs" /><small>' + tw.country + '</small></td>'
        + '<td data-label="工時資料年份">' + tw.year + '</td>'
        + '<td data-label="工時(工時排名)">' + $.moneyFormat(tw.hours) + ' <small>(6)</small>' + '</td>'
        + '<td data-label="單日平均工時">' + (Math.round(t_hd * 10) / 10) + '</td>'
        + '<td data-label="人均收入(NTD)">' + $.moneyFormat(tw.gni * exchangeRate) + '</td>'
        + '<td data-label="時薪(NTD)">' + $.moneyFormat(Math.round(tw.gni / tw.hours * exchangeRate )) + '</td>'
        + '<td data-label="年假天數">' + tw.pvd + '</td>'
        + '<td data-label="國定假日">' + tw.pph + '</td>'
        + '<td data-label="假日總數">' + (tt + 104) + '</td>'
        + '<td data-label="最低稅率">' + tw.taxMin + '%</td>'
        + '<td data-label="最高稅率">' + tw.taxMax + '%</td>'
        + '<td data-label="生活成本指數">' + tw.col + '</td>'
        + '<td data-label="租金指數">' + tw.rent + '</td>'
        + '<td data-label="消費力指數">' + tw.lppi + '</td>'
        + '</tr>');

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

    $select.on('change', function(e) {
        var _this = $(this),
            val = _this.val(),
            $target = $('#fh_' + val);

        $cells.children('tr').removeClass('active');
        $target.addClass('active');

        if (val == 5) {
            $twTable.hide();
        } else {
            $twTable.show();
        }
    });
});