var data = {
	projects: [
		{
				name: '凱盟電輔車',
				//url: 'https://www.ionex.com.tw/',
				show: true,
				thumbnail: 'img/kynamic.png',
				jobtitle: ['專案協調'],
				tech: ['專案規劃與協調'],
				content: '專案執行中。製作使用者、經銷商、組裝廠三方專用 APP，以及資料管理平台，紀錄每批號車次的組件組成、組裝進度、保固狀態、使用者騎乘紀錄等綜合資訊。'
		},
		{
				name: '威合威務 ERP 系統',
				//url: 'https://www.ionex.com.tw/',
				show: true,
				thumbnail: 'img/edgenta.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'Element UI', 'Tailwind', 'Vue3/Nuxt3', 'Pinia', 'Docker', 'Nginx'],
				content: '專案執行中。客戶內部專屬 ERP 系統，用以紀錄產品、料件進出貨狀態以及款項紀錄。'
		}, 
		{
				name: '中華汽車充電樁系統',
				//url: 'https://www.cvc.com.tw/',
				show: true,
				thumbnail: 'img/cvc.png',
				jobtitle: ['前端', '產品系統規劃'],
				tech: [],
				content: '專案規劃中。建置充電場域，並且整合充電樁、地鎖硬體，讓使用者可以預訂停車與充電服務。'
		},
		{
				name: '飛達旅遊',
				//url: 'https://www.ionex.com.tw/',
				show: true,
				thumbnail: 'img/gobytrain.png',
				jobtitle: ['前端', '產品系統規劃'],
				tech: ['HTML', 'CSS', 'Tailwind', 'SASS', 'Javascript', 'Vue3/Nuxt3', 'Pinia', 'Docker', 'Nginx'],
				content: '專案執行中。飛達旅遊網站改版，整合 ERP 產品資料與網站資料，使用前後端分離技術與串接 API，讓使用者可在網站上購買旅遊通行證、火車票、旅遊行程等等。'
		},
		{
				name: '昇恆昌官網',
				url: 'https://everrich.begonia-design.tw/',
				show: true,
				thumbnail: 'img/everrich.png',
				jobtitle: ['前端', '產品系統規劃'],
				tech: ['HTML', 'CSS', 'Tailwind', 'SASS', 'Javascript', 'Vue3/Nuxt3', 'Pinia', 'Docker', 'Nginx'],
				content: '專案執行中。改版原有官網，並且搭配 Redis 降低後端負擔。使用 Nuxt 3 進行前後端分離，並且使用 Docker 封裝。'
		},
		{
				name: '光陽 Ionex 台灣官方網站',
				url: 'https://www.ionex.com.tw/',
				show: true,
				thumbnail: 'img/ionex.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'Nuxt', 'RWD'],
				content: '光陽電動車官方網站。獨自一人開發，協助設計師規劃設計 Guideline，讓設計元素組件化。使用 Vue 與 Nuxt 框架，所有前端開發，包含頁面製作、API 串接、資料計算、功能操作等'
		}, {
				name: '光陽 Ionex 國際官方網站',
				url: 'https://ionexglobal.kei.tw/',
				show: true,
				thumbnail: 'img/ionex.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'Nuxt', 'RWD', 'GSAP'],
				content: '光陽電動車國際宣傳網站。獨自一人開發，協助設計師規劃設計 Guideline，讓設計元素組件化。使用 Vue 與 Nuxt 框架，所有前端開發，包含頁面製作、API 串接、資料計算、功能操作等'
		}, {
				name: '光陽 Ionex 據點服務',
				url: 'https://map.ionex.com.tw/',
				show: true,
				thumbnail: 'img/ionex.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'Vue', 'RWD'],
				content: '光陽電動車據點資料，可供使用者查詢充電站、門市等資料。全站前端開發，包含頁面製作、API 串接、資料計算、功能操作等'
		}, {
				name: '聯齊能源物聯網',
				//url: 'https://map.ionex.com.tw/',
				show: true,
				thumbnail: 'img/nextdrive.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'Nuxt', 'RWD'],
				content: '與國小單位配合，將每日使用太陽能與台電用電資料做整合，以視覺化方式呈現給校方，讓校方能夠得知每日用電狀況，並且做再生能源推廣。獨自一人前端開發，包含頁面製作、API 串接、資料計算、功能操作等'
		}, {
				name: 'MoWo Market 摩物市集',
				thumbnail: 'img/mowomarket.png',
				url: 'https://mowomarket.com/',
				show: false,
				jobtitle: ['前端', '設計'],
				tech: ['HTML', 'CSS', 'Javascript', 'Vue', 'RWD'],
				content: '提供機車騎士輪胎、周邊等用品。全站介面設計、前端開發，包含頁面製作、功能應用、串接API、功能應用'
		}, {
				name: '龍巖禮儀服務',
				url: 'https://www.lyls.com.tw/',
				show: true,
				thumbnail: 'img/lyls.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'Vue', 'RWD'],
				content: '全站前端開發，包含頁面製作、功能操作等'
		}, {
				name: '世基生物醫學基因檢測系統',
				//url: 'https://pharmigene.com.tw/',
				show: false,
				thumbnail: 'img/pharmigene.png',
				jobtitle: ['前端', '設計'],
				tech: ['HTML', 'CSS', 'Javascript', 'Vue', 'RWD'],
				content: '世基基因檢測系統，提供給用戶查詢檢測結果，並提醒用藥是否安全。全站介面設計與前端開發，包含頁面製作、功能操作等'
		}, {
				name: 'Icy Box',
				url: 'https://icybox.de/',
				show: true,
				thumbnail: 'img/icybox.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'RWD'],
				content: '3C 產品電商網站。全站前端開發，包含頁面製作、功能操作等'
		}, {
				name: 'EDJILE',
				url: 'https://www.edjile.com/',
				show: true,
				thumbnail: 'img/edjile.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'RWD'],
				content: '留學代辦網站。全站前端開發，包含頁面製作、功能操作等'
		}, {
				name: '凱舟濾材',
				url: 'https://www.caware.com.tw/',
				show: true,
				thumbnail: 'img/caware.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'RWD'],
				content: '負責全站前端開發，包含頁面製作、動態效果呈現'
		}, {
				name: '金愛斯佳',
				url: 'https://www.ostricare.com.tw/',
				show: true,
				thumbnail: 'img/ostricare.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'Vue', 'RWD'],
				content: '知名嬰、幼兒奶粉網站，負責全站前端開發，包含頁面製作、動態效果呈現'
		}, {
				name: 'Match Data Management Platform',
				//url: 'https://jrvix.xyz/',
				show: false,
				thumbnail: 'img/dmp.png',
				jobtitle: ['專案管理', '前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'Vue'],
				content: '行銷數據蒐集平台。用於蒐集使用者行為數據並且分析各種行銷人員需要的結果，可供行銷人員分析廣告投放需要具備的訊息。負責需求分析、功能規劃、時程安排、介面設計、前端開發'
		}, {
				name: '邁圈數位行銷官方網站',
				url: 'https://match.kei.tw/',
				show: true,
				thumbnail: 'img/match.png',
				jobtitle: ['全端'],
				tech: ['HTML', 'CSS', 'Javascript', 'PHP', 'RWD'],
				content: '官方形象網站，負責全站開發，包含頁面製作、動態效果、資料串接、後台開發'
		}, {
				name: 'Huawei Next Image 2019',
				url: 'https://nextimage2019.kei.tw/',
				show: false,
				thumbnail: 'img/nextimage2019.png',
				jobtitle: ['全端'],
				tech: ['HTML', 'CSS', 'Javascript', 'PHP', 'RWD'],
				content: '華為年度攝影比賽。負責全站開發，包含頁面製作、動態效果、資料串接、後台開發'
		}, {
				name: '美國關島政府觀光網站',
				//url: 'http://47.88.171.175/guam2017',
				show: true,
				thumbnail: 'img/guam.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'RWD'],
				content: '美國關島政府宣傳旅遊網站，負責前端開發，包含頁面製作、動態效果、資料串接'
		}, {
				name: '麗緻餐旅集團官方網站',
				url: 'http://www.landishotelsresorts.com/',
				show: true,
				thumbnail: 'img/landis.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'RWD'],
				content: '負責前端開發，包含頁面製作、動態效果、功能應用'
		}, {
				name: '亞緻餐飲官方網站',
				url: 'http://www.lizdining.com/',
				show: true,
				thumbnail: 'img/lizgroup.png',
				bgColor: 'rgba(30, 30, 30, 0.8)',
				bgSize: '100%',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript'],
				content: '負責前端開發，包含頁面製作、動態效果、功能應用'
		}, {
				name: '2012 Yoomi Taiwan 官方網站',
				url: 'https://yoomi.kei.tw/',
				show: true,
				thumbnail: 'img/yoomi.png',
				bgColor: '#fabd1a',
				bgSize: 'inherit',
				jobtitle: ['前端', '設計'],
				tech: ['HTML', 'CSS', 'Javascript'],
				content: '負責視覺設計、前端開發、動態效果製作'
		}, {
				name: '京嘉光電官方網站',
				url: 'http://janjia.com/',
				show: true,
				thumbnail: 'img/janjia.png',
				bgColor: '#FFF',
				bgSize: '80%',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'RWD'],
				content: '負責前端開發，包含頁面製作、動態效果、功能應用'
		}, {
				name: '七福廣告官方網站',
				url: 'http://www.chiefadv.com/',
				show: true,
				thumbnail: 'img/chief.png',
				bgColor: '#FFF',
				bgSize: '80%',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'RWD'],
				content: '負責前端開發，包含頁面製作、動態效果'
		}, {
				name: '逗點設計官方網站',
				//url: 'http://www.dotted.com.tw/',
				show: false,
				thumbnail: 'img/dotted.png',
				jobtitle: ['全端'],
				tech: ['HTML', 'CSS', 'Javascript', 'PHP'],
				content: '負責全站開發，包含頁面製作、動態效果、資料串接、後台開發'
		}, {
				name: 'Circles 商務社群網站',
				url: 'https://www.circles.tw/',
				show: false,
				thumbnail: 'img/circles.png',
				bgColor: '#45a7b9',
				bgSize: '100%',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'RWD'],
				content: '負責前端開發，包含頁面製作、資料串接、功能應用'
		}, {
				name: '遊戲橘子官方網站',
				url: 'http://www.gamania.com/',
				show: true,
				thumbnail: 'img/gamania.png',
				bgColor: '#FFF',
				bgSize: '80%',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript'],
				content: '負責前端開發，包含頁面製作、動態效果、功能應用'
		}, {
				name: '博霖租車',
				url: 'https://www.brilliant-vip.com/',
				show: false,
				thumbnail: 'img/brilliant.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'Vue', 'RWD'],
				content: '負責需求訪談、前端規劃與開發，包含頁面製作、動態效果、資料串接與處理、功能應用'
		}, {
				name: '臺北渣打公益馬拉松',
				url: 'http://scbmarathon.com/',
				show: false,
				thumbnail: 'img/scbmarathon.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript'],
				content: '負責前端開發，包含頁面製作、動態效果、功能應用'
		}, {
				name: 'Mediplus 官方網站',
				thumbnail: 'img/mediplus.png',
				//url: 'https://www.mediplus.tw/',
				show: false,
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript', 'Vue'],
				content: '負責前端開發，包含頁面製作、功能應用'
		}, {
				name: 'Hermin 官方網站',
				url: 'http://www.hermin.com/',
				show: true,
				thumbnail: 'img/hermin.png',
				bgColor: '#262b3c',
				bgSize: 'inherit',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript'],
				content: '負責前端開發，包含頁面製作、功能應用'
		}, {
				name: '銘島設計官方網站',
				url: 'https://mingisland.com/',
				show: false,
				thumbnail: 'img/mingisland.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript'],
				content: '負責前端開發，包含頁面製作、功能應用'
		}, {
				name: '跑客幫網站',
				url: 'https://bring4u.tw/',
				show: false,
				thumbnail: 'img/bring4u.png',
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript'],
				content: '獨自一人負責所有網站前端開發，包含頁面製作、功能應用、串接API'
		}, {
				name: '台灣舉手網絡協會（新版製作，尚未上線）',
				thumbnail: 'img/liftinghands.png',
				url: 'http://tw.liftinghands.net/',
				show: false,
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript'],
				content: '負責前端開發，包含頁面製作、功能應用、串接API等'
		}, {
				name: 'Marilyn 官方網站與管理系統',
				thumbnail: 'img/marilyn.png',
				show: false,
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript'],
				content: '負責前端開發，後台介面製作、功能應用、資料計算'
		}, {
				name: '台北捷運 MOTA 系統',
				thumbnail: 'img/mota.jpeg',
				show: false,
				jobtitle: ['前端'],
				tech: ['HTML', 'CSS', 'Javascript'],
				content: '台北捷運觀光導覽系統。過去曾展示於捷運站內供旅客使用，可查詢每個站點周遭景點。負責前端開發，包含頁面製作、功能應用'
		}
	],

	sides: [
		{
			name: '台灣山岳',
			url: 'https://taiwan.suann.net/',
			show: true,
			thumbnail: 'img/mountain.png',
			jobtitle: ['開發者'],
			tech: ['HTML', 'CSS', 'Javascript', 'Vue3/Nuxt3', 'RWD', 'Tailwind', 'MongoDB'],
			content: '將台灣山岳與基石資料彙整，可隨時查閱與地圖瀏覽。同時可查詢日出日落時間、距離計算、座標轉換、坡度概算等等功能'
		},
		{
			name: '山岳回報平台',
			url: 'https://mdr.suann.net/',
			show: true,
			thumbnail: 'img/mountain.png',
			jobtitle: ['開發者'],
			tech: ['HTML', 'CSS', 'Javascript', 'Nuxt', 'RWD', 'Tailwind', 'Firebase', 'MongoDB'],
			content: '讓山友可回報山岳與基石狀況，同時同步更新於台灣山岳'
		},
		{
			name: 'Tari',
			//url: 'https://tari.suann.net/',
			show: true,
			thumbnail: 'img/mountain.png',
			jobtitle: ['開發者'],
			tech: ['HTML', 'CSS', 'Javascript', 'Nuxt', 'RWD', 'Tailwind', 'Firebase', 'MongoDB'],
			content: '讓山友可回報宿營地、水源、路況等資訊，讓準備上山的山友們行前準備可獲得更完善的資訊與規劃，進而降低登山風險。'
		},
		{
			name: 'Kule Lazy 4',
			url: 'https://lazy4.kule.tw/',
			show: true,
			thumbnail: 'img/lazy4.png',
			jobtitle: ['開發者'],
			tech: ['HTML', 'CSS', 'Javascript', 'Nuxt', 'RWD'],
			content: '將常用組件彙整，同時製作 Vue 組件，方便開發時減省重複工作'
		}
	]
};
