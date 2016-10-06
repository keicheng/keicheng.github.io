<!DOCTYPE html>
<html lang="zh-TW">
	<head>
		<!--Base Meta Start-->
        <meta http-equiv="Content-Type" charset="utf-8" >
        <meta http-equiv="Content-Language" content="zh-TW" >
        <meta name="robots" content="all" >
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="author" content="Kei™/kei.tw" >
        <meta name="distribution" content="Taiwan">
        <title>工作時數與人均所得</title>
        <!--Base Meta End-->
        <!--CSS-->
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/kule.lazy/3.1.161002/css/kule-lazy.min.css" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/kule.lazy/3.1.161002/css/kule-theme-default.min.css" />
        <link rel="stylesheet" href="//cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css" />

        <!--Javascript-->
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="//cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>

        <script type="text/javascript">
            var data = [{
                'country': '墨西哥',
                'hours': 2228,
                'gni': 9980
            }, {
                'country': '哥斯大黎加',
                'hours': 2210,
                'gni': 9750
            }, {
                'country': '台灣',
                'hours': 2134,
                'gni': 23390
            }, {
                'country': '韓國',
                'hours': 2124,
                'gni': 27090
            }, {
                'country': '希臘',
                'hours': 2026,
                'gni': 22090
            }, {
                'country': '智利',
                'hours': 1990,
                'gni': 14900
            }, {
                'country': '俄羅斯',
                'hours': 1985,
                'gni': 13210
            }, {
                'country': '拉脫維亞',
                'hours': 1938,
                'gni': 15660
            }, {
                'country': '波蘭',
                'hours': 1923,
                'gni': 13730
            }, {
                'country': '葡萄牙',
                'hours': 1865,
                'gni': 21320
            }, {
                'country': '冰島',
                'hours': 1864,
                'gni': 47640
            }, {
                'country': '愛沙尼亞',
                'hours': 1859,
                'gni': 18530
            }, {
                'country': '匈牙利',
                'hours': 1858,
                'gni': 13470
            }, {
                'country': '以色列',
                'hours': 1853,
                'gni': 34990
            }, {
                'country': '立陶宛',
                'hours': 1834,
                'gni': 15380
            }, {
                'country': '土耳其',
                'hours': 1832,
                'gni': 10850
            }, {
                'country': '愛爾蘭共和國',
                'hours': 1821,
                'gni': 44660
            }, {
                'country': '美國',
                'hours': 1789,
                'gni': 55200
            }, {
                'country': '捷克',
                'hours': 1771,
                'gni': 18970
            }, {
                'country': '紐西蘭',
                'hours': 1762,
                'gni': 39300
            }, {
                'country': '斯洛伐克',
                'hours': 1760,
                'gni': 17810
            }, {
                'country': '日本',
                'hours': 1729,
                'gni': 42000
            }, {
                'country': '義大利',
                'hours': 1719,
                'gni': 34280
            }, {
                'country': '加拿大',
                'hours': 1703,
                'gni': 54920
            }, {
                'country': '西班牙',
                'hours': 1698,
                'gni': 29940
            }, {
                'country': '英國',
                'hours': 1677,
                'gni': 42690
            }, {
                'country': '斯洛維尼亞',
                'hours': 1676,
                'gni': 23220
            }, {
                'country': '澳洲',
                'hours': 1664,
                'gni': 43590
            }, {
                'country': '芬蘭',
                'hours': 1643,
                'gni': 48910
            }, {
                'country': '奧地利',
                'hours': 1629,
                'gni': 50390
            }, {
                'country': '瑞典',
                'hours': 1611,
                'gni': 61600
            }, {
                'country': '瑞士',
                'hours': 1568,
                'gni': 90670
            }, {
                'country': '比利時',
                'hours': 1560,
                'gni': 47030
            }, {
                'country': '盧森堡',
                'hours': 1509,
                'gni': 69880
            }, {
                'country': '法國',
                'hours': 1473,
                'gni': 43080
            }, {
                'country': '丹麥',
                'hours': 1458,
                'gni': 61310
            }, {
                'country': '挪威',
                'hours': 1427,
                'gni': 103050
            }, {
                'country': '荷蘭',
                'hours': 1420,
                'gni': 51210
            }, {
                'country': '德國',
                'hours': 1366,
                'gni': 47640
            }];

            $(function() {
                var $cells = $('.cells');

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
                    $cells.append('<tr><td></td><td>' + value.country + '</td><td>' + $.moneyFormat(value.hours) + '</td><td>$' + $.moneyFormat(value.gni) + '</td><td>$' + Math.round(value.gni / value.hours * 100) / 100 + '</td><td>' + $.moneyFormat(Math.round(value.gni / value.hours * 31.4001319 )) + '</td></tr>');
                });

                $('#myTable').DataTable({
                    paging: false,
                    searching: false,
                    ordering: true,
                    info: false,
                    rowCallback: function( row, data, index ) {
                        $(row).children('td:first-child').text(index+1)
                    }
                });
            });
        </script>
        <style type="text/css">
            body {
                margin: 20px;
            }

            thead th {
                cursor: pointer;
            }

            th.sorting {
                color: grey;
            }
        </style>
	</head>
	<body>
        <h2 class="align-center">工作時數與人均所得 <small>僅參考</small></h2>
        <table id="myTable" class="table table-striped table-outline align-center">
            <thead>
                <tr>
                    <th width="1%">#</th>
                    <th>國家</th>
                    <th>工時</th>
                    <th>人均收入(鎂)</th>
                    <th>時薪(鎂)</th>
                    <th>時薪(新台幣)</th>
                </tr>
            </thead>
            <tbody class="cells"></tbody>
        </table>
        <br />
        <p>以上資料由 <a href="https://data.oecd.org/emp/hours-worked.htm" target="_blank">OECD</a> 與 <a href="https://goo.gl/WQ7ai0" target="_blank">Wiki</a> 取得。因各國人均國民總收入資料大多來自 2014 年，因此工時資料也取 2014 年資料。台灣工時資料取自<del>資動部</del><a href="http://www.taipeitimes.com/News/taiwan/archives/2016/07/13/2003650939" target="_blank">Taipei Times</a>。</p>
	</body>
</html>
