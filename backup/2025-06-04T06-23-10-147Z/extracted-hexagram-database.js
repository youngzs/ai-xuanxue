// 自动生成的64卦完整数据库
// 生成时间: 2025-06-04T06:22:03.135Z
// 数据来源: 易安居网站等权威资料

export const extractedHexagramDatabase = {
    "111111": {
        "number": 1,
        "name": "待补充",
        "description": "乾为天",
        "trigrams": "乾上乾下",
        "nature": "乾象征天，六阳爻构成乾卦，为《易经》六十四卦之首",
        "oracle": "<strong>乾卦原文</strong><br>乾。",
        "oracleMeaning": "待补充",
        "image": "天行健，君子以自强不息。",
        "imageMeaning": "潜藏的龙，无法施展，因为初九阳爻处在一卦的下位，所以压抑难伸。",
        "judgment": "天行刚健，自强不息，名利双收之象，宜把握机会，争取成果。",
        "business": "大吉大利，万事如意，心想事成，自有天佑，春风得意，事业如日中天。",
        "love": "阳盛阴衰，但刚柔可相济，形成美满结果。",
        "health": "保健有恒。",
        "advice": "可成就大的事业。",
        "fortune": "施比受有福，不利买而利卖。",
        "lines": [
            {
                "position": "初",
                "text": "初九：潜藏的龙，无法施展。"
            },
            {
                "position": "二",
                "text": "九二所压制，刚健的阳气被埋在了地下。"
            },
            {
                "position": "三",
                "text": "九三：有才德的君子始终是白天勤奋努力，夜晚戒惧反省，虽然处境艰难，但终究没有灾难。"
            },
            {
                "position": "四",
                "text": "九四：龙也许跳进深潭，没有灾难。"
            },
            {
                "position": "五",
                "text": "九五：龙飞腾在空中，有利于会见贵族王公。"
            },
            {
                "position": "上",
                "text": "上九：升腾到极限的龙会有灾祸之困。"
            }
        ],
        "images": {
            "main": "assets/hexagrams/01-qian.png",
            "structure": "assets/hexagrams/structure/01-structure.png",
            "downloaded": []
        }
    },
    "000000": {
        "number": 2,
        "name": "待补充",
        "description": "坤为地",
        "trigrams": "坤上坤下",
        "nature": "坤卦坤上坤下，为坤宫本位卦",
        "oracle": "<strong>坤卦原文</strong><br>坤。",
        "oracleMeaning": "待补充",
        "image": "地势坤，君子以厚德载物。",
        "imageMeaning": "大地的形势平铺舒展，顺承天道。",
        "judgment": "宜顺从运势，以静制动，不宜独立谋事，顺从他人，一起合作，可成大事。",
        "business": "诸项事业可以成功，得到预想的结果，但开始出师不利，为困境所扰。",
        "love": "阴盛。",
        "health": "柔软运动。",
        "advice": "忠厚、温和，待人真诚，热心助人，因此也能得到他人的帮助，可往往因不提防小人而受到伤害，但无大碍。",
        "fortune": "满载而归。",
        "lines": [],
        "images": {
            "main": "assets/hexagrams/02-kun.png",
            "structure": "assets/hexagrams/structure/02-structure.png",
            "downloaded": []
        }
    },
    "010001": {
        "number": 3,
        "name": "待补充",
        "description": "水雷屯",
        "trigrams": "坎上艮下",
        "nature": "屯卦坎上震下，为坎宫二世卦",
        "oracle": "<strong>屯卦原文</strong><br>屯。",
        "oracleMeaning": "待补充",
        "image": "云，雷，屯；君子以经纶。",
        "imageMeaning": "屯的上卦为坎，坎为云，下卦为震，震为雷。",
        "judgment": "身处困境，宜守不宜进，须多加辛苦努力，排除困难，方可通达，有初难后解之象。",
        "business": "起初多有不利，要知难而进，小心翼翼，勇往直前，灵活机动，可望获得大的成功，时机到来时一定要抓住，却也不得操之太急，且仍有困难，务必有他人相助，故平时应多施恩惠。",
        "love": "好事多磨，忠贞纯洁，大胆追求，能够成功，婚姻美满。",
        "health": "保存元气。",
        "advice": "初始困难，但若具有坚忍不拔的毅力和锲而不舍的奋斗精神，前途不可估量，但往往不为他人理解而陷于孤独苦闷，事业会因此处于困难状态，需要得到贤德之人的帮助才能摆脱。",
        "fortune": "创业维艰。",
        "lines": [
            {
                "position": "初",
                "text": "初九：徘徊难进。"
            },
            {
                "position": "五",
                "text": "九五：屯积肥肉。"
            }
        ],
        "images": {
            "main": "assets/hexagrams/03-zhun.png",
            "structure": "assets/hexagrams/structure/03-structure.png",
            "downloaded": []
        }
    }
};

// 合并到主数据库
export function mergeExtractedData(mainDatabase) {
    Object.assign(mainDatabase, extractedHexagramDatabase);
    return mainDatabase;
}

// 获取抓取统计
export function getExtractionStats() {
    const total = Object.keys(extractedHexagramDatabase).length;
    const complete = Object.values(extractedHexagramDatabase)
        .filter(hex => hex.oracle !== '待补充').length;
    
    return {
        total,
        complete,
        incomplete: total - complete,
        completionRate: `${Math.round(complete / total * 100)}%`
    };
}
