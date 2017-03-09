var showData = [];

for (var i = 0; i < data.length; i++) {
    if (data[i].show) showData.push(data[i]);
}

var vm = new Vue({
    el: '#app',
    data: {
        works: data,
        shows: showData
    },
    methods: {
        renderItem: function(data) {
            if (data.url) {
                return '<a href="' + data.url + '" target="_blank">' + data.name + '</a>';
            } else {
                return data.name;
            }
        }
    }
});