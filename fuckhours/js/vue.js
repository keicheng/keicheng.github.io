var twData;

for (var i = 0; i < datas.length; i++) {
    datas[i].rank = i + 1;
    datas[i].vacations = datas[i].pvd + datas[i].pph + 104;
    datas[i].hoursOfDay = Math.round(datas[i].hours / (365 - datas[i].vacations) * 10) / 10;
    datas[i].hourly = Math.round(datas[i].gni / datas[i].hours * 100) / 100;

    if (datas[i].eng == 'Taiwan') twData = datas[i];
}

var vm = new Vue({
    el: '#app',
    data: {
        exchangeRate: 31.9162518,
        tw: twData,
        select: datas,
        country: datas,
        countrySelect: '',
        asc: false,
        sorting: {
            'sorting_good': true,
            'sorting_bad': false
        },
        btnDisplay: {
            hide: true
        }
    },
    methods: {
        hoursOfDay: function(v) {
            return Math.round(v.hours / (365 - (v.pvd + v.pph + 104)) * 10) / 10
        },
        moneyFormat: function(str) {
            str = String(str);

            if (str.length <= 3) {
                return str;
            } else {
                return this.moneyFormat(str.substr(0, str.length - 3)) + ',' + str.substr(str.length - 3);
            }
        },
        showData: function() {
            if (typeof this.countrySelect == 'number') {
                this.country = [];
                this.country.push(this.select[this.countrySelect]);
                this.btnDisplay.hide = false;
            } else {
                this.country = this.select;
                this.btnDisplay.hide = true;
            }
        },
        sortable: function(param) {
            var sortResults = function(prop, asc) {
                datas = datas.sort(function(a, b) {
                    if (asc) {
                        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
                    } else {
                        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
                    }
                });
            }

            this.asc = !this.asc;

            if ((!this.asc && (param == 'hours' || param == 'hoursOfDay' || param == 'taxMin' || param == 'taxMax' || param == 'col' || param == 'rent')) ||
                (this.asc && (param == 'gni' || param == 'hourly' || param == 'pvd' || param == 'pph' || param == 'vacations' || param == 'lppi'))) {

                this.sorting['sorting_good'] = true;
                this.sorting['sorting_bad'] = false;

            } else if ((this.asc && (param == 'hours' || param == 'hoursOfDay' || param == 'taxMin' || param == 'taxMax' || param == 'col' || param == 'rent')) ||
                (!this.asc && (param == 'gni' || param == 'hourly' || param == 'pvd' || param == 'pph' || param == 'vacations' || param == 'lppi'))) {

                this.sorting['sorting_good'] = false;
                this.sorting['sorting_bad'] = true;

            } else if (param == 'eng' || param == 'year') {

                this.sorting['sorting_good'] = false;
                this.sorting['sorting_bad'] = false;

            }

            sortResults(param, this.asc);
        },
        restore: function() {
            this.country = this.select;
            this.btnDisplay.hide = true;
        }
    }
});