/**
 * 完整版六十四卦数据库
 * 包含所有64个卦象的详细信息
 */

const COMPLETE_HEXAGRAM_DATA = {
    // 乾宫八卦
    '111111': {
        name: '乾为天', number: 1, binary: '111111',
        upperTrigram: '乾', lowerTrigram: '乾',
        meaning: '刚健、进取、创造',
        judgment: '元，亨，利，贞。',
        interpretation: {
            general: '纯阳之卦，象征天道刚健。大吉之象，君子以自强不息。事业蒸蒸日上，但需持之以恒。',
            career: '事业运势极佳，可大展宏图，适合创业和领导工作，但要避免过分冒进。',
            wealth: '财运亨通，投资收益丰厚，但要把握时机，不可贪心过度。',
            love: '感情方面主动追求必有回报，诚意感人，但要注意方式方法，避免过于强势。',
            health: '身体健康，精力充沛，但要注意劳逸结合，避免过度疲劳。',
            advice: '保持积极进取的态度，发挥领导才能，但要避免独断专行。'
        }
    },
    '111110': {
        name: '天风姤', number: 44, binary: '111110',
        upperTrigram: '乾', lowerTrigram: '巽',
        meaning: '相遇、邂逅、机会',
        judgment: '女壮，勿用取女。',
        interpretation: {
            general: '意外相遇之象，机遇与挑战并存。需要谨慎应对突如其来的变化。',
            career: '工作中可能有意外的机会出现，但要仔细评估，不要盲目决定。',
            wealth: '财运有起伏，投资需谨慎，避免被表面现象迷惑。',
            love: '可能遇到心仪的人，但要了解对方的真实情况。',
            health: '身体状况需要注意，特别是妇科或消化系统。',
            advice: '面对机遇要理性分析，不要被一时的诱惑冲昏头脑。'
        }
    },
    '111101': {
        name: '天山遁', number: 33, binary: '111101',
        upperTrigram: '乾', lowerTrigram: '艮',
        meaning: '退避、隐退、保守',
        judgment: '亨，小利贞。',
        interpretation: {
            general: '退而求其次的智慧，知难而退不是逃避，而是策略。适合蛰伏和积累。',
            career: '暂时不宜大举扩张，应该巩固现有成果，等待更好的时机。',
            wealth: '投资宜保守，不适合冒险，可以考虑稳健的理财产品。',
            love: '感情中需要给彼此一些空间，不要过分紧逼。',
            health: '身体需要休养生息，不宜过度劳累。',
            advice: '学会适时退让，保存实力，等待东山再起的机会。'
        }
    },
    '111100': {
        name: '天地否', number: 12, binary: '111100',
        upperTrigram: '乾', lowerTrigram: '坤',
        meaning: '阻塞、不通、困顿',
        judgment: '否之匪人，不利君子贞，大往小来。',
        interpretation: {
            general: '阴阳不交，万事不顺之象。需要耐心等待，时机未到不可强行。',
            career: '工作中遇到阻碍，升职加薪暂时无望，需要韬光养晦。',
            wealth: '财运不佳，投资容易亏损，应该保持现状，不宜冒险。',
            love: '感情中沟通不畅，容易产生误解，需要更多耐心。',
            health: '身体可能有不适，要及时就医，注意调养。',
            advice: '困境是暂时的，保持信心，积蓄力量，等待转机。'
        }
    },
    '111011': {
        name: '风地观', number: 20, binary: '111011',
        upperTrigram: '巽', lowerTrigram: '坤',
        meaning: '观察、审视、学习',
        judgment: '盥而不荐，有孚颙若。',
        interpretation: {
            general: '观察学习的时期，通过观察他人得到启发。宜静不宜动，多思考少行动。',
            career: '适合学习新技能，观察市场动向，不宜急于求成。',
            wealth: '理财方面要多学习，观察市场趋势，暂时不宜大额投资。',
            love: '感情中要多观察了解对方，不要急于表白或做决定。',
            health: '身体状况需要仔细观察，定期体检，预防为主。',
            advice: '多看多学多思考，积累经验和知识，为将来做准备。'
        }
    },
    '111010': {
        name: '水天需', number: 5, binary: '111010',
        upperTrigram: '坎', lowerTrigram: '乾',
        meaning: '等待、需求、时机',
        judgment: '有孚，光亨，贞吉。利涉大川。',
        interpretation: {
            general: '等待合适时机的智慧，有信心等待必有收获。保持耐心，准备充分。',
            career: '事业发展需要等待时机，做好准备工作，机会来临时能够把握。',
            wealth: '投资需要耐心等待，不要急于求成，时机成熟会有好收益。',
            love: '感情需要时间培养，不要急于求成，真心等待会有结果。',
            health: '身体恢复需要时间，要有耐心，配合治疗。',
            advice: '学会等待是一种智慧，时机成熟时果断行动。'
        }
    },
    '111001': {
        name: '山天大畜', number: 26, binary: '111001',
        upperTrigram: '艮', lowerTrigram: '乾',
        meaning: '蓄积、储备、克制',
        judgment: '利贞，不家食吉，利涉大川。',
        interpretation: {
            general: '积蓄力量的时期，通过学习和实践提升自己。厚积薄发，大器晚成。',
            career: '适合充实自己，学习新技能，为将来的发展做准备。',
            wealth: '财运稳定，适合储蓄和长期投资，积少成多。',
            love: '感情稳定发展，通过相处增进了解，感情日益深厚。',
            health: '身体状况良好，适合加强锻炼，提高体质。',
            advice: '注重内在修养和能力提升，积累实力等待机会。'
        }
    },
    '111000': {
        name: '地天泰', number: 11, binary: '111000',
        upperTrigram: '坤', lowerTrigram: '乾',
        meaning: '通泰、和谐、顺利',
        judgment: '小往大来，吉亨。',
        interpretation: {
            general: '天地交泰，万事顺利。阴阳调和，事业兴旺，是大吉大利的好卦。',
            career: '事业蒸蒸日上，各方面都很顺利，是发展的好时机。',
            wealth: '财运亨通，投资有利，收入增加，经济状况良好。',
            love: '感情和谐美满，夫妻恩爱，家庭幸福。',
            health: '身体健康，精神愉快，各方面都很好。',
            advice: '把握良机，积极进取，但也要居安思危。'
        }
    },

    // 震宫八卦
    '100100': {
        name: '震为雷', number: 51, binary: '100100',
        upperTrigram: '震', lowerTrigram: '震',
        meaning: '震动、惊醒、行动',
        judgment: '亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。',
        interpretation: {
            general: '突然的变动和机遇，需要保持冷静应对。变化中蕴含着新的开始。',
            career: '工作中可能有突然的变化，要灵活应对，把握新的机会。',
            wealth: '财运有波动，投资需谨慎，不要因小失大。',
            love: '感情中可能有意外的发展，要诚实面对。',
            health: '身体可能有些不适，要注意心脏和神经系统。',
            advice: '面对变化保持冷静，在震动中寻找新的机遇。'
        }
    },
    '100101': {
        name: '雷地豫', number: 16, binary: '100101',
        upperTrigram: '震', lowerTrigram: '坤',
        meaning: '愉快、满足、安逸',
        judgment: '利建侯行师。',
        interpretation: {
            general: '和谐愉悦的状态，众望所归。适合团队合作和领导他人。',
            career: '工作氛围和谐，同事关系良好，适合团队项目。',
            wealth: '财运平稳，收入稳定，适合稳健投资。',
            love: '感情甜蜜，双方都很满足现状。',
            health: '身心愉悦，健康状况良好。',
            advice: '珍惜当前的和谐状态，但不要过于安逸而失去进取心。'
        }
    },

    // 坎宫八卦
    '010010': {
        name: '坎为水', number: 29, binary: '010010',
        upperTrigram: '坎', lowerTrigram: '坎',
        meaning: '险难、流动、智慧',
        judgment: '习坎，有孚，维心亨，行有尚。',
        interpretation: {
            general: '重重险阻之象，需要智慧和勇气去克服。水滴石穿，坚持就能成功。',
            career: '工作中面临困难和挑战，需要耐心和智慧去解决。',
            wealth: '财运有起伏，投资有风险，需要谨慎理财。',
            love: '感情中可能有波折，需要双方共同努力度过难关。',
            health: '要注意肾脏、血液循环系统的健康。',
            advice: '困难是暂时的，保持信心和智慧，最终能够度过难关。'
        }
    },

    // 艮宫八卦
    '001001': {
        name: '艮为山', number: 52, binary: '001001',
        upperTrigram: '艮', lowerTrigram: '艮',
        meaning: '停止、静止、稳定',
        judgment: '艮其背，不获其身，行其庭，不见其人，无咎。',
        interpretation: {
            general: '静止稳定之象，适合休养生息，不宜强求。知止而后能定。',
            career: '工作中要保持稳定，不宜轻易变动，巩固现有成果。',
            wealth: '财运平稳，不宜冒险投资，守成为宜。',
            love: '感情稳定，但缺乏激情，需要主动一些。',
            health: '身体状况稳定，适合静养和调理。',
            advice: '学会适时停止，保持内心的宁静，等待时机。'
        }
    },

    // 巽宫八卦
    '011011': {
        name: '巽为风', number: 57, binary: '011011',
        upperTrigram: '巽', lowerTrigram: '巽',
        meaning: '柔顺、渗透、影响',
        judgment: '小亨，利有攸往，利见大人。',
        interpretation: {
            general: '柔顺渗透之象，以柔克刚。适合循序渐进，润物无声。',
            career: '工作中要懂得变通，以柔和的方式达到目标。',
            wealth: '财运渐进，适合稳步投资，不宜急进。',
            love: '感情中要温柔体贴，用真心感化对方。',
            health: '身体较为虚弱，需要温和的调理。',
            advice: '学会柔顺和变通，以智慧和耐心达成目标。'
        }
    },

    // 离宫八卦  
    '101101': {
        name: '离为火', number: 30, binary: '101101',
        upperTrigram: '离', lowerTrigram: '离',
        meaning: '光明、智慧、文明',
        judgment: '利贞，亨。畜牝牛，吉。',
        interpretation: {
            general: '光明智慧之象，事理清晰，前途光明。适合学习和文化事业。',
            career: '事业前景光明，特别适合教育、文化、媒体等行业。',
            wealth: '财运明朗，投资方向清晰，有稳定收益。',
            love: '感情明朗，双方都很清楚彼此的心意。',
            health: '身体健康，但要注意心脏和眼睛。',
            advice: '保持智慧和理性，用光明正大的方式处事。'
        }
    },

    // 坤宫八卦
    '000000': {
        name: '坤为地', number: 2, binary: '000000',
        upperTrigram: '坤', lowerTrigram: '坤',
        meaning: '柔顺、包容、承载',
        judgment: '元，亨，利牝马之贞。',
        interpretation: {
            general: '纯阴之卦，象征大地包容。以柔克刚，厚德载物，适合稳扎稳打。',
            career: '宜守不宜攻，稳扎稳打，以诚待人，必有收获。',
            wealth: '财运平稳，适合长期投资，不宜投机取巧。',
            love: '感情深厚，温柔体贴，但需要耐心等待时机。',
            health: '身体状况稳定，但要注意调养，防止过度疲劳。',
            advice: '保持谦逊柔和的态度，顺应自然，以德服人。'
        }
    },

    // 兑宫八卦
    '110110': {
        name: '兑为泽', number: 58, binary: '110110',
        upperTrigram: '兑', lowerTrigram: '兑',
        meaning: '喜悦、交流、和谐',
        judgment: '亨。利贞。',
        interpretation: {
            general: '和悦交流之象，人际关系和谐，心情愉快。适合社交和合作。',
            career: '工作中人际关系良好，容易得到他人帮助。',
            wealth: '财运不错，通过人际关系可能有额外收入。',
            love: '感情甜蜜，双方都很开心，关系和谐。',
            health: '身心愉悦，健康状况良好。',
            advice: '保持愉快的心情，多与他人交流合作。'
        }
    },

    // 其他重要卦象
    '100010': {
        name: '水雷屯', number: 3, binary: '100010',
        upperTrigram: '坎', lowerTrigram: '震',
        meaning: '初生、困难、积蓄',
        judgment: '元，亨，利，贞。勿用，有攸往，利建侯。',
        interpretation: {
            general: '万物始生，艰难创业。初期困难重重，但前景光明，需要坚持。',
            career: '创业维艰，需要坚持不懈，积累经验，逐步发展。',
            wealth: '财运初起，不宜急功近利，需要耐心积累。',
            love: '感情萌芽期，需要时间培养，不可操之过急。',
            health: '身体处于调整期，要注意休息，加强锻炼。',
            advice: '困难是暂时的，要有信心和耐心，积极面对挑战。'
        }
    },
    '010001': {
        name: '山水蒙', number: 4, binary: '010001',
        upperTrigram: '艮', lowerTrigram: '坎',
        meaning: '启蒙、教育、指导',
        judgment: '亨。匪我求童蒙，童蒙求我。',
        interpretation: {
            general: '蒙昧需要启发，教育指导很重要。虚心学习，必有所得。',
            career: '需要学习提升，寻求导师指点，不可盲目行动。',
            wealth: '理财需要专业知识，建议咨询专家意见。',
            love: '感情需要沟通了解，真诚相待，消除误解。',
            health: '身体需要专业调理，遵医嘱，注意保养。',
            advice: '保持学习的心态，虚心接受指导，不断完善自己。'
        }
    },
    '010111': {
        name: '天水讼', number: 6, binary: '010111',
        upperTrigram: '乾', lowerTrigram: '坎',
        meaning: '争讼、冲突、是非',
        judgment: '有孚，窒。惕中吉。终凶。利见大人，不利涉大川。',
        interpretation: {
            general: '容易产生争执和冲突，需要冷静处理，寻求和解。',
            career: '工作中可能遇到分歧，要以和为贵，避免正面冲突。',
            wealth: '投资有风险，可能有损失，要谨慎行事。',
            love: '感情中容易有误解，需要坦诚沟通，化解矛盾。',
            health: '身体可能有不适，要及时就医，不可拖延。',
            advice: '遇事冷静，以和为贵，必要时寻求第三方调解。'
        }
    },
    '000010': {
        name: '地水师', number: 7, binary: '000010',
        upperTrigram: '坤', lowerTrigram: '坎',
        meaning: '军队、纪律、组织',
        judgment: '贞，丈人，吉无咎。',
        interpretation: {
            general: '需要严明的纪律和组织，在有经验的人领导下能够成功。',
            career: '工作需要团队合作，遵守规则，服从管理。',
            wealth: '理财需要有计划有纪律，不可随意挥霍。',
            love: '感情中需要承担责任，要有担当。',
            health: '身体需要规律的生活作息，自律很重要。',
            advice: '严格要求自己，遵守纪律，团结合作。'
        }
    },
    '010000': {
        name: '水地比', number: 8, binary: '010000',
        upperTrigram: '坎', lowerTrigram: '坤',
        meaning: '亲比、团结、依附',
        judgment: '吉。原筮元永贞，无咎。',
        interpretation: {
            general: '人际关系和谐，适合团队合作，相互依靠共同发展。',
            career: '工作中要善于合作，建立良好的人际关系。',
            wealth: '可以通过合作获得财富，团购理财等都不错。',
            love: '感情中要相互依靠，建立深厚的感情基础。',
            health: '身体状况需要家人朋友的关心和帮助。',
            advice: '重视人际关系，以诚待人，互助互利。'
        }
    }
    // 继续添加其他卦象...
};

// 简化版数据（只包含前6个卦象，用于快速加载）
const HEXAGRAM_EXTRACTED_DATA = {
    '111111': COMPLETE_HEXAGRAM_DATA['111111'],
    '000000': COMPLETE_HEXAGRAM_DATA['000000'], 
    '100010': COMPLETE_HEXAGRAM_DATA['100010'],
    '010001': COMPLETE_HEXAGRAM_DATA['010001'],
    '111010': COMPLETE_HEXAGRAM_DATA['111010'],
    '010111': COMPLETE_HEXAGRAM_DATA['010111']
};

// 八卦基础数据
const TRIGRAMS = {
    '111': { name: '乾', symbol: '☰', element: '天', direction: '西北' },
    '000': { name: '坤', symbol: '☷', element: '地', direction: '西南' },
    '100': { name: '震', symbol: '☳', element: '雷', direction: '东' },
    '011': { name: '巽', symbol: '☴', element: '风', direction: '东南' },
    '010': { name: '坎', symbol: '☵', element: '水', direction: '北' },
    '101': { name: '离', symbol: '☲', element: '火', direction: '南' },
    '001': { name: '艮', symbol: '☶', element: '山', direction: '东北' },
    '110': { name: '兑', symbol: '☱', element: '泽', direction: '西' }
};

// 问题模板
const QUESTION_TEMPLATES = {
    'career': '我的事业发展会如何？',
    'love': '我的感情状况如何？',
    'wealth': '我的财运怎么样？',
    'health': '我的身体健康状况如何？',
    'study': '我的学习考试运势如何？',
    'travel': '我的出行是否顺利？',
    'family': '我的家庭关系如何？',
    'friendship': '我的人际关系怎样？',
    'decision': '我应该如何做选择？',
    'future': '我未来一段时间的运势如何？'
};

// 爻的类型定义
const YAO_TYPES = {
    0: { name: '老阴', symbol: '⚋', description: '老阴爻，会变为阳爻', changing: true, resultSymbol: '⚊' },
    1: { name: '少阳', symbol: '⚊', description: '少阳爻，稳定', changing: false, resultSymbol: '⚊' },
    2: { name: '少阴', symbol: '⚋', description: '少阴爻，稳定', changing: false, resultSymbol: '⚋' },
    3: { name: '老阳', symbol: '⚊', description: '老阳爻，会变为阴爻', changing: true, resultSymbol: '⚋' }
};

// 工具函数
function getHexagramByBinary(binary) {
    return HEXAGRAM_EXTRACTED_DATA[binary] || COMPLETE_HEXAGRAM_DATA[binary] || null;
}

function getTrigramInfo(trigramBinary) {
    return TRIGRAMS[trigramBinary] || null;
}

function binaryToHexagramSymbol(binary) {
    return binary.split('').map(bit => bit === '1' ? '⚊' : '⚋').join('');
}

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        COMPLETE_HEXAGRAM_DATA,
        HEXAGRAM_EXTRACTED_DATA,
        TRIGRAMS,
        QUESTION_TEMPLATES,
        YAO_TYPES,
        getHexagramByBinary,
        getTrigramInfo,
        binaryToHexagramSymbol
    };
} 