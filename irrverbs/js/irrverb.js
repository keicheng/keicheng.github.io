new Vue({
    el: '#app',

    data: {
        irrverb: {},
        book: [],
        show: [],
        filter: 'book',
        random: false,
        loaded: false,
        count: Object.keys(irrverbs).length,
        unit: null,
        showKey: false,
        testPage: 0
    },

    beforeMount() {
        const that = this;
        const loc = location;

        that.unit = loc.pathname.match(/test\.html/) ? 'test' : 'home';

        for (let i in irrverbs) {
            let firstLetter = irrverbs[i].en.root.charAt(0);

            if (that.irrverb[firstLetter]) {
                that.irrverb[firstLetter].push(irrverbs[i]);
            } else {
                that.irrverb[firstLetter] = [irrverbs[i]];
            }

            if (irrverbs[i].book) {
                that.book.push(irrverbs[i]);
            }
        }

        let hash = window.location.hash.replace(/^#/, '');

        that.filter = hash.length ? hash : 'book';
        that.irrverbFilter();
    },

    mounted() {
        this.loaded = true;
    },

    methods: {
        irrverbFilter() {
            if (this.irrverb[this.filter]) {
                this.show = JSON.parse(JSON.stringify(this.irrverb[this.filter]));
            } else {
                if (this.filter === '*') {
                    this.show = JSON.parse(JSON.stringify(irrverbs));
                } else if (this.filter === 'book') {
                    this.show = JSON.parse(JSON.stringify(this.book));
                }
            }

            this.random = false;
            this.count = this.show.length;

            if (this.unit != 'test') {
                window.location.hash = this.filter;
            } else {
                this.sortRandom();
            }
        },

        sortOrder() {
            const that = this;

            that.show.sort((a, b)=>{
                that.random = false;

                if(a.en.root < b.en.root) { return -1; }
                if(a.en.root > b.en.root) { return 1; }
            });
        },

        sortRandom() {
            const that = this;

            that.show.sort(()=>{
                that.random = true;
                return Math.random() > 0.5 ? -1 : 1
            });
        },

        answer() {
            this.showKey = true;
        },

        testNext() {
            this.testPage++;
            this.showKey = false;

            if (this.testPage >= this.count) {
                this.testPage = 0;
            }
        },

        testPrev() {
            this.testPage--;
            this.showKey = false;

            if (this.testPage < 0) {
                this.testPage = this.count - 1;
            }
        }
    }
});