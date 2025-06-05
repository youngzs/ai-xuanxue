/**
 * 简化版六十四卦数据库
 * 用于三币占卜工具
 */

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

// 简化版六十四卦数据
const HEXAGRAM_EXTRACTED_DATA = {
    '111111': {
        name: '乾为天',
        number: 1,
        binary: '111111',
        upperTrigram: '乾',
        lowerTrigram: '乾',
        meaning: '刚健、进取、创造',
        judgment: '元，亨，利，贞。',
        interpretation: {
            general: '纯阳之卦，象征天道刚健。大吉之象，君子以自强不息。',
            career: '可大展宏图，事业蒸蒸日上，但需持之以恒，不可骄傲自满。',
            wealth: '财运亨通，投资有利，但要把握时机，不可贪心过度。',
            love: '感情方面主动追求必有回报，诚意感人，但要注意方式方法。',
            health: '身体健康，精力充沛，但要注意劳逸结合。',
            advice: '保持积极进取的态度，发挥领导才能，但要避免过于强势。'
        }
    },
    '000000': {
        name: '坤为地',
        number: 2,
        binary: '000000',
        upperTrigram: '坤',
        lowerTrigram: '坤',
        meaning: '柔顺、包容、承载',
        judgment: '元，亨，利牝马之贞。',
        interpretation: {
            general: '纯阴之卦，象征大地包容。以柔克刚，厚德载物。',
            career: '宜守不宜攻，稳扎稳打，以诚待人，必有收获。',
            wealth: '财运平稳，适合长期投资，不宜投机取巧。',
            love: '感情深厚，温柔体贴，但需要耐心等待时机。',
            health: '身体状况稳定，但要注意调养，防止过度疲劳。',
            advice: '保持谦逊柔和的态度，顺应自然，以德服人。'
        }
    },
    '100010': {
        name: '水雷屯',
        number: 3,
        binary: '100010',
        upperTrigram: '坎',
        lowerTrigram: '震',
        meaning: '初生、困难、积蓄',
        judgment: '元，亨，利，贞。勿用，有攸往，利建侯。',
        interpretation: {
            general: '万物始生，艰难创业。初期困难重重，但前景光明。',
            career: '创业维艰，需要坚持不懈，积累经验，逐步发展。',
            wealth: '财运初起，不宜急功近利，需要耐心积累。',
            love: '感情萌芽期，需要时间培养，不可操之过急。',
            health: '身体处于调整期，要注意休息，加强锻炼。',
            advice: '困难是暂时的，要有信心和耐心，积极面对挑战。'
        }
    },
    '010001': {
        name: '山水蒙',
        number: 4,
        binary: '010001',
        upperTrigram: '艮',
        lowerTrigram: '坎',
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
    '111010': {
        name: '水天需',
        number: 5,
        binary: '111010',
        upperTrigram: '坎',
        lowerTrigram: '乾',
        meaning: '等待、需求、时机',
        judgment: '有孚，光亨，贞吉。利涉大川。',
        interpretation: {
            general: '需要等待合适时机，保持信心，必有所获。',
            career: '时机未到，需要耐心等待，做好准备工作。',
            wealth: '投资需要谨慎，等待最佳时机再出手。',
            love: '感情需要时间发展，不要急于求成。',
            health: '身体恢复需要时间，要有耐心，配合治疗。',
            advice: '学会等待，保持信心，时机成熟时果断行动。'
        }
    },
    '010111': {
        name: '天水讼',
        number: 6,
        binary: '010111',
        upperTrigram: '乾',
        lowerTrigram: '坎',
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
    }
    // 这里只展示前6个卦象作为示例，实际应包含全部64卦
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

// 获取卦象的函数
function getHexagramByBinary(binary) {
    return HEXAGRAM_EXTRACTED_DATA[binary] || null;
}

// 获取三角卦信息的函数
function getTrigramInfo(trigramBinary) {
    return TRIGRAMS[trigramBinary] || null;
}

// 二进制转换为卦象符号的函数
function binaryToHexagramSymbol(binary) {
    return binary.split('').map(bit => bit === '1' ? '⚊' : '⚋').join('');
}

// 导出所有需要的数据和函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        HEXAGRAM_EXTRACTED_DATA,
        TRIGRAMS,
        QUESTION_TEMPLATES,
        YAO_TYPES,
        getHexagramByBinary,
        getTrigramInfo,
        binaryToHexagramSymbol
    };
} 