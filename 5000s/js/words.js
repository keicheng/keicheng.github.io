var partOfSpeech = [
        {
            'n': 0,
            'code': 'n',
            'name': 'Noun',
            'cht': '名詞'
        },
        {
            'n': 1,
            'code': 'a',
            'name': 'Adjective',
            'cht': '形容詞'
        },
        {
            'n': 2,
            'code': 'ad',
            'name': 'Adverb',
            'cht': '副詞'
        },
        {
            'n': 3,
            'code': 'v',
            'name': 'Verb',
            'cht': '動詞'
        },
        {
            'n': 4,
            'code': 'pron',
            'name': 'Pronoun',
            'cht': '代名詞'
        },
        {
            'n': 5,
            'code': 'prep',
            'name': 'Preposition',
            'cht': '介系詞'
        },
        {
            'n': 6,
            'code': 'conj',
            'name': 'Conjunction',
            'cht': '連接詞'
        },
        {
            'n': 7,
            'code': 'ph',
            'name': 'Phrase',
            'cht': '片語'
        },
        {
            'n': 8,
            'code': 'axu',
            'name': 'Auxiliaries',
            'cht': '助動詞'
        }
    ],

    data = [
        {
            'n': 1,
            'alphabet': 'a',
            'word': 'abduct',
            'cht': ['綁架、誘拐'],
            'pos': [3],
            'sentence': 'A child was <em>abducted</em> at the scholl gate in broad daylight.',
            'translation': '光天化日之下，有個小孩被綁架了。',
            'notes': 'broad daylight <i class="pos">ph.</i> 光天化日、公開地'
        },
        {
            'n': 2,
            'alphabet': 'a',
            'word': 'academic',
            'cht': ['學業的、學術的'],
            'pos': [1],
            'sentence': 'He didn`t do well in <em>academic</em> subjects.',
            'translation': '他的學術成績不太好。',
            'notes': 'academic subjects 學科'
        },
        {
            'n': 3,
            'alphabet': 'a',
            'word': 'accommodating',
            'cht': ['樂於助人的'],
            'pos': [1],
            'sentence': 'The villagers were very <em>accommodating</em> to visitors.',
            'translation': '村民們非常樂意幫助旅客。'
        },
        {
            'n': 4,
            'alphabet': 'a',
            'word': 'acquaintance',
            'cht': ['熟悉、認識'],
            'pos': [0],
            'sentence': 'I made his <em>acquaintance</em> at my friend`s birthday party.',
            'translation': '我在朋友生日宴會上認識了他。',
            'notes': 'make one`s acquaintance <i class="pos">ph.</i> 認識某人'
        },
        {
            'n': 5,
            'alphabet': 'a',
            'word': 'adept',
            'cht': ['熟練的', '內行、專家'],
            'pos': [1, 0],
            'sentence': 'She was not <em>adept</em> at dealing with people',
            'translation': '她不善於與他人打交道。',
            'notes': 'be adept at <i class="pos">ph.</i> 擅長'
        },
        {
            'n': 6,
            'alphabet': 'a',
            'word': 'adobe',
            'cht': ['用泥磚造的房屋'],
            'pos': [0],
            'sentence': 'The <em>adobe</em> house they used to live was pulled down for the construction of new flat.',
            'translation': '為了建造新公寓，他們把之前住的泥磚房屋推倒了'
        },
        {
            'n': 7,
            'alphabet': 'a',
            'word': 'adroit',
            'cht': ['靈巧的、熟練的、敏捷的'],
            'pos': [1, 0],
            'sentence': 'She was not <em>adept</em> at dealing with people',
            'translation': '她不善於與他人打交道。',
            'notes': 'be adept at <i class="pos">ph.</i> 擅長'
        },
        {
            'n': 8,
            'alphabet': 'a',
            'word': 'adult',
            'cht': ['成人', '成年的、成熟的'],
            'pos': [0, 1],
            'sentence': 'It`s difficult for the <em>adults</em> to understand the children`s world.',
            'translation': '對於成人來說，理解小孩的世界是困難的。'
        },
        {
            'n': 9,
            'alphabet': 'a',
            'word': 'adventurous',
            'cht': ['渴望冒險的'],
            'pos': [1],
            'sentence': 'She would like to be more <em>adventurous</em> with her career.',
            'translation': '她想要在事業上更有冒險精神。'
        },
        {
            'n': 10,
            'alphabet': 'a',
            'word': 'adversary',
            'cht': ['對手、敵手'],
            'pos': [0],
            'sentence': 'He beats his main <em>adversary</em> in the business.',
            'translation': '他打敗了商場上主要對手。'
        },
        {
            'n': 11,
            'alphabet': 'a',
            'word': 'adversity',
            'cht': ['災難、不幸'],
            'pos': [0],
            'sentence': 'How do you manage to remain cheerful in <em>adversity</em>.',
            'translation': '你如何在逆境中仍保持樂觀？'
        },
        {
            'n': 12,
            'alphabet': 'a',
            'word': 'advocate',
            'cht': ['擁護、主張', '提倡者'],
            'pos': [3, 0],
            'sentence': 'She <em>advocated</em> not caring for immediate interest only.',
            'translation': '她主張不要只顧眼前利益(短視近利)。',
            'notes': 'immediate interest <i class="pos">ph.</i> 直接利益、切身利益'
        },
        {
            'n': 13,
            'alphabet': 'a',
            'word': 'affectation',
            'cht': ['假裝'],
            'pos': [0],
            'sentence': 'It was wasy to identify his <em>affectation</em> of interest in the proposal.',
            'translation': '不難看出，他假裝對該提案有興趣。'
        },
        {
            'n': 14,
            'alphabet': 'a',
            'word': 'affected',
            'cht': ['假模作樣的'],
            'pos': [1],
            'sentence': 'She was detested for her <em>affected</em> air.',
            'translation': '她那做作的樣子被他人厭惡。'
        },
        {
            'n': 15,
            'alphabet': 'a',
            'word': 'affluent',
            'cht': ['富有的、豐富的'],
            'pos': [1],
            'sentence': 'The truth was that he was living in an <em>affluent</em> neighborhood.',
            'translation': '事實上他以前住在富人區。'
        }
    ];

$(function() {
    var $wordWrap = $('.words');

    function makeRow(index, data) {
        var htmlstr = '<tr><td><h4><a href="https://translate.google.com.tw/#en/zh-TW/' + data.word +'" target="_blank">' + data.word +'</a></h4>';
        htmlstr += '<div class="poses">';

        $.each(data.cht, function(index, value) {
            htmlstr += '<div><i class="pos">' + partOfSpeech[data.pos[index]].code +'</i>';
            htmlstr += '<span class="word-cht">' + value + '</span></div>';
        });

        htmlstr += '</div></td>';
        htmlstr += '<td><p class="sentence">' + data.sentence + '</p>';
        htmlstr += '<p class="translation">' + data.translation + '</p>';

        if (data.notes) htmlstr += '<p class="notes">' + data.notes + '</p></td></tr>';

        $wordWrap.append(htmlstr);
    }

    $.each(data, function(index, value) {
        makeRow(index, value);
    });

    function setTrActive(wt) {
        var $tr = $wordWrap.children('tr'),
            getTrHeight = $tr.outerHeight(true),
            headerHeight = 126,
            which = parseInt((wt + headerHeight) / getTrHeight, 10);

        $tr.removeClass('active').slice(0, which+1).addClass('active');
    }
});