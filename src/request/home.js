import ajax from './ajax'

export const bannerRequest = ajax('/public/banners?terminal=2&type=1')

export const menuInfo = [{
        text: '美食',
        icon: require('../assets/img/home/icon_homepage_food_category.png')
    },
    {
        text: '电影',
        icon: require('../assets/img/home/icon_homepage_movie_category.png')
    },
    {
        text: '酒店',
        icon: require('../assets/img/home/icon_homepage_hotel_category.png')
    },
    {
        text: 'KTV',
        icon: require('../assets/img/home/icon_homepage_ktv_category.png')
    },
    {
        text: '优惠买单',
        icon: require('../assets/img/home/icon_homepage_default.png')
    },
    {
        text: '周边游',
        icon: require('../assets/img/home/icon_homepage_foottreat_category.png')
    },
    {
        text: '生活服务',
        icon: require('../assets/img/home/icon_homepage_life_service_category.png')
    },
    {
        text: '休闲娱乐',
        icon: require('../assets/img/home/icon_homepage_entertainment_category.png')
    },
    {
        text: '丽人/美发',
        icon: require('../assets/img/home/icon_homepage_beauty_category.png')
    },
    {
        text: '购物',
        icon: require('../assets/img/home/icon_homepage_shopping_category.png')
    },

    {
        text: '丽人/美发',
        icon: require('../assets/img/home/icon_homepage_beauty_category.png')
    },
    {
        text: '电影',
        icon: require('../assets/img/home/icon_homepage_movie_category.png')
    },
    {
        text: '周边游',
        icon: require('../assets/img/home/icon_homepage_foottreat_category.png')
    },
    {
        text: '酒店',
        icon: require('../assets/img/home/icon_homepage_hotel_category.png')
    },
    {
        text: '优惠买单',
        icon: require('../assets/img/home/icon_homepage_default.png')
    },
    {
        text: '休闲娱乐',
        icon: require('../assets/img/home/icon_homepage_entertainment_category.png')
    },
    {
        text: 'KTV',
        icon: require('../assets/img/home/icon_homepage_ktv_category.png')
    },
]

export const discount = [{
            "typeface_color": "#ff9900",
            "position": 0,
            "module": false,
            "maintitle": "莫莉幻想",
            "type": 1,
            "deputytitle": "5人行4人免",
            "solds": 0,
            "id": 6156,
            "share": {
                "message": "莫莉幻想优惠来袭",
                "url": "http%3A%2F%2Fi.meituan.com%2Ffirework%2Fpd1490755747%3F"
            },
            "title": "莫莉幻想",
            "deputy_typeface_color": "#21c0ae",
            "tplurl": "imeituan://www.meituan.com/web?url=http://i.meituan.com/firework/ox1491533539",
            "imageurl": "https://p1.meituan.net/128.180/movie/426f1f3f1b145f763b75a60c7c39c44a535093.jpg"
        }, {
            "typeface_color": "#f6687d",
            "position": 0,
            "module": false,
            "maintitle": "大片特惠",
            "type": 1,
            "deputytitle": "速度与激情8",
            "solds": 0,
            "id": 6121,
            "share": {
                "message": "热门大片特惠，福利再来一波>>",
                "url": "http://i.meituan.com/firework/ox1491533539"
            },
            "title": "大片特惠",
            "deputy_typeface_color": "#c280fc",
            "tplurl": "imeituan://www.meituan.com/web?url=http://i.meituan.com/firework/ox1491533539",
            "imageurl": "https://p0.meituan.net/128.180/movie/fa1ed3d0df3aa7e7107e1077ed686f087257146.jpg"
        }, {
            "typeface_color": "#6bbd00",
            "position": 0,
            "module": false,
            "maintitle": "清仓特价",
            "type": 1,
            "deputytitle": "1元巴厘岛",
            "solds": 0,
            "id": 6140,
            "share": {
                "message": "清仓特价，1元巴厘岛",
                "url": "http%3a%2f%2fi.meituan.com%2ffirework%2foverseaWeekend"
            },
            "title": "清仓特价",
            "deputy_typeface_color": "#fc6a56",
            "tplurl": "imeituan://www.meituan.com/web?url=http://i.meituan.com/firework/ox1491533539",
            "imageurl": "https://p0.meituan.net/128.180/movie/88f8ee53df9eee3644a7eef2c82548f1390304.jpg"
        }, {
            "typeface_color": "#06c1ae",
            "position": 0,
            "module": false,
            "maintitle": "今日推荐",
            "type": 1,
            "deputytitle": "品质生活指南",
            "solds": 0,
            "id": 3283,
            "share": {
                "message": "吃喝玩乐全都有，尽在美团网！",
                "url": "http://api.mobile.meituan.com/group/v1/re/p"
            },
            "title": "今日推荐",
            "deputy_typeface_color": "#fdb32b",
            "tplurl": "imeituan://www.meituan.com/web?url=http://i.meituan.com/firework/ox1491533539",
            "imageurl": "https://p0.meituan.net/128.180/movie/88f8ee53df9eee3644a7eef2c82548f1390304.jpg"
        }]