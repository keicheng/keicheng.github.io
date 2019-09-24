new Vue({
    el: '#app',

    data: {
        irrverb: {},
        book: [],
        show: [],
        filter: 'book',
        random: false,
        loaded: false,
        count: Object.keys(irrverbs).length
    },

    beforeMount() {
        const that = this;

        for (i in irrverbs) {
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


        that.show = JSON.parse(JSON.stringify(that.book));
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
        }
    }
});