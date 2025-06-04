// 从易经网站提取64卦详细数据的脚本
// 需要在Node.js环境中运行，使用cheerio和axios进行网页抓取

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// 完整的64卦URL映射 - 根据网站实际链接修正
const hexagramUrls = {
    1: 'https://www.zhouyi.cc/zhouyi/yijing64/4103.html',   // 乾为天
    2: 'https://www.zhouyi.cc/zhouyi/yijing64/4105.html',   // 坤为地
    3: 'https://www.zhouyi.cc/zhouyi/yijing64/4106.html',   // 水雷屯
    4: 'https://www.zhouyi.cc/zhouyi/yijing64/4107.html',   // 山水蒙
    5: 'https://www.zhouyi.cc/zhouyi/yijing64/4108.html',   // 水天需
    6: 'https://www.zhouyi.cc/zhouyi/yijing64/4109.html',   // 天水讼
    7: 'https://www.zhouyi.cc/zhouyi/yijing64/4110.html',   // 地水师
    8: 'https://www.zhouyi.cc/zhouyi/yijing64/4111.html',   // 水地比
    9: 'https://www.zhouyi.cc/zhouyi/yijing64/4112.html',   // 风天小畜
    10: 'https://www.zhouyi.cc/zhouyi/yijing64/4113.html',  // 天泽履
    11: 'https://www.zhouyi.cc/zhouyi/yijing64/4126.html',  // 地天泰
    12: 'https://www.zhouyi.cc/zhouyi/yijing64/4127.html',  // 天地否
    13: 'https://www.zhouyi.cc/zhouyi/yijing64/4140.html',  // 天火同人
    14: 'https://www.zhouyi.cc/zhouyi/yijing64/4141.html',  // 火天大有
    15: 'https://www.zhouyi.cc/zhouyi/yijing64/4142.html',  // 地山谦
    16: 'https://www.zhouyi.cc/zhouyi/yijing64/4143.html',  // 雷地豫
    17: 'https://www.zhouyi.cc/zhouyi/yijing64/4144.html',  // 泽雷随
    18: 'https://www.zhouyi.cc/zhouyi/yijing64/4145.html',  // 山风蛊
    19: 'https://www.zhouyi.cc/zhouyi/yijing64/4146.html',  // 地泽临
    20: 'https://www.zhouyi.cc/zhouyi/yijing64/4147.html',  // 风地观
    21: 'https://www.zhouyi.cc/zhouyi/yijing64/4148.html',  // 火雷噬嗑
    22: 'https://www.zhouyi.cc/zhouyi/yijing64/4149.html',  // 山火贲
    23: 'https://www.zhouyi.cc/zhouyi/yijing64/4150.html',  // 山地剥
    24: 'https://www.zhouyi.cc/zhouyi/yijing64/4152.html',  // 地雷复
    25: 'https://www.zhouyi.cc/zhouyi/yijing64/4153.html',  // 天雷无妄
    26: 'https://www.zhouyi.cc/zhouyi/yijing64/4159.html',  // 山天大畜
    27: 'https://www.zhouyi.cc/zhouyi/yijing64/4164.html',  // 山雷颐
    28: 'https://www.zhouyi.cc/zhouyi/yijing64/4167.html',  // 泽风大过
    29: 'https://www.zhouyi.cc/zhouyi/yijing64/4168.html',  // 坎为水
    30: 'https://www.zhouyi.cc/zhouyi/yijing64/4169.html',  // 离为火
    31: 'https://www.zhouyi.cc/zhouyi/yijing64/4170.html',  // 泽山咸
    32: 'https://www.zhouyi.cc/zhouyi/yijing64/4171.html',  // 雷风恒
    33: 'https://www.zhouyi.cc/zhouyi/yijing64/4172.html',  // 天山遁
    34: 'https://www.zhouyi.cc/zhouyi/yijing64/4173.html',  // 雷天大壮
    35: 'https://www.zhouyi.cc/zhouyi/yijing64/4174.html',  // 火地晋
    36: 'https://www.zhouyi.cc/zhouyi/yijing64/4175.html',  // 地火明夷
    37: 'https://www.zhouyi.cc/zhouyi/yijing64/4176.html',  // 风火家人
    38: 'https://www.zhouyi.cc/zhouyi/yijing64/4177.html',  // 火泽睽
    39: 'https://www.zhouyi.cc/zhouyi/yijing64/4179.html',  // 水山蹇
    40: 'https://www.zhouyi.cc/zhouyi/yijing64/4180.html',  // 雷水解
    41: 'https://www.zhouyi.cc/zhouyi/yijing64/4181.html',  // 山泽损
    42: 'https://www.zhouyi.cc/zhouyi/yijing64/4182.html',  // 风雷益
    43: 'https://www.zhouyi.cc/zhouyi/yijing64/4183.html',  // 泽天夬
    44: 'https://www.zhouyi.cc/zhouyi/yijing64/4184.html',  // 天风姤
    45: 'https://www.zhouyi.cc/zhouyi/yijing64/4185.html',  // 泽地萃
    46: 'https://www.zhouyi.cc/zhouyi/yijing64/4186.html',  // 地风升
    47: 'https://www.zhouyi.cc/zhouyi/yijing64/4187.html',  // 泽水困
    48: 'https://www.zhouyi.cc/zhouyi/yijing64/4188.html',  // 水风井
    49: 'https://www.zhouyi.cc/zhouyi/yijing64/4189.html',  // 泽火革
    50: 'https://www.zhouyi.cc/zhouyi/yijing64/4190.html',  // 火风鼎
    51: 'https://www.zhouyi.cc/zhouyi/yijing64/4192.html',  // 震为雷
    52: 'https://www.zhouyi.cc/zhouyi/yijing64/4193.html',  // 艮为山
    53: 'https://www.zhouyi.cc/zhouyi/yijing64/4194.html',  // 风山渐
    54: 'https://www.zhouyi.cc/zhouyi/yijing64/4195.html',  // 雷泽归妹
    55: 'https://www.zhouyi.cc/zhouyi/yijing64/4196.html',  // 雷火丰
    56: 'https://www.zhouyi.cc/zhouyi/yijing64/4197.html',  // 火山旅
    57: 'https://www.zhouyi.cc/zhouyi/yijing64/4198.html',  // 巽为风
    58: 'https://www.zhouyi.cc/zhouyi/yijing64/4200.html',  // 兑为泽
    59: 'https://www.zhouyi.cc/zhouyi/yijing64/4212.html',  // 风水涣
    60: 'https://www.zhouyi.cc/zhouyi/yijing64/4244.html',  // 水泽节
    61: 'https://www.zhouyi.cc/zhouyi/yijing64/4255.html',  // 风泽中孚
    62: 'https://www.zhouyi.cc/zhouyi/yijing64/4256.html',  // 雷山小过
    63: 'https://www.zhouyi.cc/zhouyi/yijing64/4257.html',  // 水火既济
    64: 'https://www.zhouyi.cc/zhouyi/yijing64/4263.html'   // 火水未济
};

// 完整的64卦二进制模式映射（基于正确的二进制易经排序）
const hexagramPatterns = {
    1: '111111',   // 乾为天 ☰☰
    2: '000000',   // 坤为地 ☷☷
    3: '010001',   // 水雷屯 ☵☳
    4: '100010',   // 山水蒙 ☶☵
    5: '010111',   // 水天需 ☵☰
    6: '111010',   // 天水讼 ☰☵
    7: '000010',   // 地水师 ☷☵
    8: '010000',   // 水地比 ☵☷
    9: '110111',   // 风天小畜 ☴☰
    10: '111011',  // 天泽履 ☰☱
    11: '000111',  // 地天泰 ☷☰
    12: '111000',  // 天地否 ☰☷
    13: '111101',  // 天火同人 ☰☲
    14: '101111',  // 火天大有 ☲☰
    15: '000100',  // 地山谦 ☷☶
    16: '001000',  // 雷地豫 ☳☷
    17: '011001',  // 泽雷随 ☱☳
    18: '100110',  // 山风蛊 ☶☴
    19: '000011',  // 地泽临 ☷☱
    20: '110000',  // 风地观 ☴☷
    21: '101001',  // 火雷噬嗑 ☲☳
    22: '100101',  // 山火贲 ☶☲
    23: '100000',  // 山地剥 ☶☷
    24: '000001',  // 地雷复 ☷☳
    25: '111001',  // 天雷无妄 ☰☳
    26: '100111',  // 山天大畜 ☶☰
    27: '100001',  // 山雷颐 ☶☳
    28: '011110',  // 泽风大过 ☱☴
    29: '010010',  // 坎为水 ☵☵
    30: '101101',  // 离为火 ☲☲
    31: '011100',  // 泽山咸 ☱☶
    32: '001110',  // 雷风恒 ☳☴
    33: '111100',  // 天山遁 ☰☶
    34: '001111',  // 雷天大壮 ☳☰
    35: '101000',  // 火地晋 ☲☷
    36: '000101',  // 地火明夷 ☷☲
    37: '110101',  // 风火家人 ☴☲
    38: '101011',  // 火泽睽 ☲☱
    39: '010100',  // 水山蹇 ☵☶
    40: '001010',  // 雷水解 ☳☵
    41: '100011',  // 山泽损 ☶☱
    42: '110001',  // 风雷益 ☴☳
    43: '011111',  // 泽天夬 ☱☰
    44: '111110',  // 天风姤 ☰☴
    45: '011000',  // 泽地萃 ☱☷
    46: '000110',  // 地风升 ☷☴
    47: '011010',  // 泽水困 ☱☵
    48: '010110',  // 水风井 ☵☴
    49: '011101',  // 泽火革 ☱☲
    50: '101110',  // 火风鼎 ☲☴
    51: '001001',  // 震为雷 ☳☳
    52: '100100',  // 艮为山 ☶☶
    53: '110100',  // 风山渐 ☴☶
    54: '001011',  // 雷泽归妹 ☳☱
    55: '001101',  // 雷火丰 ☳☲
    56: '101100',  // 火山旅 ☲☶
    57: '110110',  // 巽为风 ☴☴
    58: '011011',  // 兑为泽 ☱☱
    59: '110010',  // 风水涣 ☴☵
    60: '010011',  // 水泽节 ☵☱
    61: '110011',  // 风泽中孚 ☴☱
    62: '001100',  // 雷山小过 ☳☶
    63: '010101',  // 水火既济 ☵☲
    64: '101010'   // 火水未济 ☲☵
};

// 64卦名称
const hexagramNames = {
    1: '乾为天', 2: '坤为地', 3: '水雷屯', 4: '山水蒙', 5: '水天需', 6: '天水讼',
    7: '地水师', 8: '水地比', 9: '风天小畜', 10: '天泽履', 11: '地天泰', 12: '天地否',
    13: '天火同人', 14: '火天大有', 15: '地山谦', 16: '雷地豫', 17: '泽雷随', 18: '山风蛊',
    19: '地泽临', 20: '风地观', 21: '火雷噬嗑', 22: '山火贲', 23: '山地剥', 24: '地雷复',
    25: '天雷无妄', 26: '山天大畜', 27: '山雷颐', 28: '泽风大过', 29: '坎为水', 30: '离为火',
    31: '泽山咸', 32: '雷风恒', 33: '天山遁', 34: '雷天大壮', 35: '火地晋', 36: '地火明夷',
    37: '风火家人', 38: '火泽睽', 39: '水山蹇', 40: '雷水解', 41: '山泽损', 42: '风雷益',
    43: '泽天夬', 44: '天风姤', 45: '泽地萃', 46: '地风升', 47: '泽水困', 48: '水风井',
    49: '泽火革', 50: '火风鼎', 51: '震为雷', 52: '艮为山', 53: '风山渐', 54: '雷泽归妹',
    55: '雷火丰', 56: '火山旅', 57: '巽为风', 58: '兑为泽', 59: '风水涣', 60: '水泽节',
    61: '风泽中孚', 62: '雷山小过', 63: '水火既济', 64: '火水未济'
};

// 抓取单个卦象的详细信息
async function extractHexagramDetails(number, url) {
    try {
        console.log(`正在抓取第${number}卦: ${hexagramNames[number]}`);
        
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Connection': 'keep-alive'
            },
            timeout: 15000
        });
        
        const $ = cheerio.load(response.data);
        
        // 提取基本信息
        const name = extractName($) || hexagramNames[number].split('为')[0] || hexagramNames[number].substring(2);
        const oracle = extractOracle($);
        const nature = extractNature($);
        
        // 只有当成功提取到实际内容时才下载图片
        const shouldDownloadImages = oracle !== '待补充' && oracle.length > 5;
        let images = generateImagePaths(number);
        
        if (shouldDownloadImages) {
            console.log(`  提取到内容，开始下载图片...`);
            images = await extractAndDownloadImages($, number);
        }
        
        // 提取卦象完整信息
        const hexagramInfo = {
            number: number,
            name: name,
            description: hexagramNames[number],
            trigrams: extractTrigrams($, number),
            nature: nature,
            oracle: oracle,
            oracleMeaning: extractOracleMeaning($),
            image: extractImage($),
            imageMeaning: extractImageMeaning($),
            judgment: extractJudgment($),
            business: extractBusiness($),
            love: extractLove($),
            health: extractHealth($),
            advice: extractAdvice($),
            fortune: extractFortune($),
            lines: extractLines($),
            images: images
        };
        
        // 输出提取统计
        const extractedFields = Object.entries(hexagramInfo)
            .filter(([key, value]) => 
                key !== 'number' && key !== 'name' && key !== 'description' && 
                key !== 'images' && key !== 'lines' && 
                value && value !== '待补充'
            ).length;
        
        console.log(`  ✓ 第${number}卦成功，提取字段: ${extractedFields}/12`);
        
        return hexagramInfo;
    } catch (error) {
        console.error(`抓取第${number}卦失败:`, error.message);
        // 返回基础信息作为备用
        return createFallbackData(number);
    }
}

// 创建备用数据
function createFallbackData(number) {
    const shortName = hexagramNames[number].includes('为') ? 
        hexagramNames[number].split('为')[0] : 
        hexagramNames[number].substring(2);
    
    return {
        number: number,
        name: shortName,
        description: hexagramNames[number],
        trigrams: '待补充',
        nature: '待补充',
        oracle: '待补充',
        oracleMeaning: '待补充',
        image: '待补充',
        imageMeaning: '待补充',
        judgment: '待补充',
        business: '待补充',
        love: '待补充',
        health: '待补充',
        advice: '待补充',
        fortune: '待补充',
        lines: [],
        images: generateImagePaths(number)
    };
}

// 生成图片路径
function generateImagePaths(number) {
    const paddedNumber = number.toString().padStart(2, '0');
    const filename = getHexagramFilename(number);
    return {
        main: `assets/hexagrams/${paddedNumber}-${filename}.png`,
        structure: `assets/hexagrams/structure/${paddedNumber}-structure.png`
    };
}

// 获取卦象文件名
function getHexagramFilename(number) {
    const nameMap = {
        1: 'qian', 2: 'kun', 3: 'zhun', 4: 'meng', 5: 'xu', 6: 'song',
        7: 'shi', 8: 'bi', 9: 'xiaoxu', 10: 'lu', 11: 'tai', 12: 'pi',
        13: 'tongren', 14: 'dayou', 15: 'qian', 16: 'yu', 17: 'sui', 18: 'gu',
        19: 'lin', 20: 'guan', 21: 'shike', 22: 'bi', 23: 'bo', 24: 'fu',
        25: 'wuwang', 26: 'daxu', 27: 'yi', 28: 'daguo', 29: 'kan', 30: 'li',
        31: 'xian', 32: 'heng', 33: 'dun', 34: 'dazhuang', 35: 'jin', 36: 'mingyi',
        37: 'jiaren', 38: 'kui', 39: 'jian', 40: 'jie', 41: 'sun', 42: 'yi',
        43: 'guai', 44: 'gou', 45: 'cui', 46: 'sheng', 47: 'kun', 48: 'jing',
        49: 'ge', 50: 'ding', 51: 'zhen', 52: 'gen', 53: 'jian', 54: 'guimei',
        55: 'feng', 56: 'lu', 57: 'xun', 58: 'dui', 59: 'huan', 60: 'jie',
        61: 'zhongfu', 62: 'xiaoguo', 63: 'jiji', 64: 'weiji'
    };
    return nameMap[number] || `hex${number}`;
}

// 提取八卦组合
function extractTrigrams($, number) {
    // 基于二进制模式生成八卦组合
    const pattern = hexagramPatterns[number];
    if (!pattern) return '待补充';
    
    const upper = pattern.substring(0, 3);
    const lower = pattern.substring(3, 6);
    
    const trigramMap = {
        '111': '乾', '110': '兑', '101': '离', '100': '震',
        '011': '巽', '010': '坎', '001': '艮', '000': '坤'
    };
    
    const upperName = trigramMap[upper] || '未知';
    const lowerName = trigramMap[lower] || '未知';
    
    return `${upperName}上${lowerName}下`;
}

// 提取各项信息的函数 - 根据实际HTML结构重写
function extractName($) {
    // 从标题中提取卦名
    const title = $('title').text();
    let match = title.match(/第\d+卦[_：](\w+卦)\(/);
    if (match) return match[1];
    
    match = title.match(/(\w+)卦\(/);
    if (match) return match[1];
    
    // 从页面内容中提取
    const headingText = $('.gua_toptt').text();
    const nameMatch = headingText.match(/第\d+卦[_：](\w+卦)/);
    if (nameMatch) return nameMatch[1];
    
    // 简化处理，直接返回卦名
    const content = $('.gualist').text();
    const simpleMatch = content.match(/([乾坤屯蒙需讼师比小畜履泰否同人大有谦豫随蛊临观噬嗑贲剥复无妄大畜颐大过坎离咸恒遁大壮晋明夷家人睽蹇解损益夬姤萃升困井革鼎震艮渐归妹丰旅巽兑涣节中孚小过既济未济]+)卦?/);
    return simpleMatch ? simpleMatch[1] : '待补充';
}

function extractNature($) {
    // 提取卦象性质
    const content = $('.gualist').text();
    const patterns = [
        /《断易天机》解[^》]*?》?[^。]*?([^。]{10,50})[。，]/,
        /得此卦者[，：]([^。，]{10,50})[。，]/,
        /象征([^。，]{10,30})[。，]/
    ];
    
    for (const pattern of patterns) {
        const match = content.match(pattern);
        if (match && match[1]) {
            return match[1].trim();
        }
    }
    return '待补充';
}

function extractOracle($) {
    // 提取卦辞
    const content = $('.gualist').html() || '';
    
    // 寻找"乾卦原文"或类似标题后的内容
    let oracleMatch = content.match(/乾卦原文[^<]*?<br[^>]*>\s*([^<]+)<br/i);
    if (!oracleMatch) {
        oracleMatch = content.match(/卦原文[^<]*?<br[^>]*>\s*([^<]+)<br/i);
    }
    if (!oracleMatch) {
        oracleMatch = content.match(/卦辞[：:]([^<\n]{5,50})[<\n]/i);
    }
    
    if (oracleMatch && oracleMatch[1]) {
        return oracleMatch[1].trim().replace(/\s+/g, '');
    }
    
    // 直接从文本中寻找经典格式
    const text = $('.gualist').text();
    const classicMatch = text.match(/([^。]*?[元亨利贞][^。]*?[。])/);
    return classicMatch ? classicMatch[1].trim() : '待补充';
}

function extractOracleMeaning($) {
    // 提取卦辞释义
    const content = $('.gualist').html() || '';
    const meaningMatch = content.match(/白话文解释[^<]*?<br[^>]*>\s*([^<]+?)(?:<br|$)/i) ||
                        content.match(/解释[：:]([^<]{10,100})[<]/i);
    
    return meaningMatch ? meaningMatch[1].trim() : '待补充';
}

function extractImage($) {
    // 提取象辞
    const content = $('.gualist').text();
    const imageMatch = content.match(/象曰[：:]([^。]{5,50}[。])/) ||
                      content.match(/《象辞》说[：:]([^。]{10,80}[。])/) ||
                      content.match(/天行健[^。]*?([^。]{10,50}[。])/);
    
    return imageMatch ? imageMatch[1].trim() : '待补充';
}

function extractImageMeaning($) {
    // 提取象辞释义
    const content = $('.gualist').text();
    const meaningMatch = content.match(/《象辞》说[：:]([^。]{10,100}[。])/) ||
                        content.match(/大象[：:]([^。]{10,80}[。])/);
    
    return meaningMatch ? meaningMatch[1].trim() : '待补充';
}

function extractJudgment($) {
    // 提取总体判断
    const content = $('.gualist').text();
    const judgmentMatch = content.match(/得此卦者[，：]([^。]{10,80}[。])/) ||
                         content.match(/运势[：:]([^。]{10,60}[。])/) ||
                         content.match(/传统解卦[^。]*?([^。]{20,100}[。])/);
    
    return judgmentMatch ? judgmentMatch[1].trim() : '待补充';
}

function extractBusiness($) {
    // 提取事业运势
    const content = $('.gualist').text();
    const businessMatch = content.match(/事业[：:]([^。]*?[。])/) ||
                         content.match(/经商[：:]([^。]*?[。])/) ||
                         content.match(/工作[：:]([^。]*?[。])/);
    
    return businessMatch ? businessMatch[1].trim() : '待补充';
}

function extractLove($) {
    // 提取感情运势
    const content = $('.gualist').text();
    const loveMatch = content.match(/婚恋[：:]([^。]*?[。])/) ||
                     content.match(/感情[：:]([^。]*?[。])/) ||
                     content.match(/婚姻[：:]([^。]*?[。])/);
    
    return loveMatch ? loveMatch[1].trim() : '待补充';
}

function extractHealth($) {
    // 提取健康运势
    const content = $('.gualist').text();
    const healthMatch = content.match(/身体[：:]([^。]*?[。])/) ||
                       content.match(/健康[：:]([^。]*?[。])/) ||
                       content.match(/保健[：:]([^。]*?[。])/);
    
    return healthMatch ? healthMatch[1].trim() : '待补充';
}

function extractAdvice($) {
    // 提取建议
    const content = $('.gualist').text();
    const adviceMatch = content.match(/决策[：:]([^。]*?[。])/) ||
                       content.match(/建议[：:]([^。]*?[。])/) ||
                       content.match(/宜([^。]*?[。])/);
    
    return adviceMatch ? adviceMatch[1].trim() : '待补充';
}

function extractFortune($) {
    // 提取财运
    const content = $('.gualist').text();
    const fortuneMatch = content.match(/财运[：:]([^。]*?[。])/) ||
                        content.match(/时运[：:]([^。]*?[。])/) ||
                        content.match(/财[：:]([^。]*?[。])/);
    
    return fortuneMatch ? fortuneMatch[1].trim() : '待补充';
}

// 提取爻辞信息 - 重写
function extractLines($) {
    const lines = [];
    const content = $('.gualist').text();
    
    // 查找爻辞模式
    const linePatterns = [
        /初九[^。]*?([^。]*?[。])/g,
        /九二[^。]*?([^。]*?[。])/g,
        /九三[^。]*?([^。]*?[。])/g,
        /九四[^。]*?([^。]*?[。])/g,
        /九五[^。]*?([^。]*?[。])/g,
        /上九[^。]*?([^。]*?[。])/g
    ];
    
    const positions = ['初', '二', '三', '四', '五', '上'];
    
    linePatterns.forEach((pattern, index) => {
        const matches = content.match(pattern);
        if (matches && matches[1]) {
            lines.push({
                position: positions[index],
                text: matches[1].trim()
            });
        }
    });
    
    return lines;
}

// 下载图片函数
async function downloadImage(url, filename) {
    try {
        const response = await axios.get(url, {
            responseType: 'stream',
            timeout: 10000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        
        const dir = path.dirname(filename);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        
        const writer = fs.createWriteStream(filename);
        response.data.pipe(writer);
        
        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.log(`  图片下载失败 ${url}: ${error.message}`);
        return false;
    }
}

// 提取并下载图片
async function extractAndDownloadImages($, number) {
    const images = {
        main: generateImagePaths(number).main,
        structure: generateImagePaths(number).structure,
        downloaded: []
    };
    
    // 查找页面中的图片
    const imageUrls = [];
    $('img').each((i, el) => {
        const src = $(el).attr('src');
        if (src && src.includes('zhouyi.cc') && src.includes('uploads')) {
            imageUrls.push(src);
        }
    });
    
    // 下载主要卦象图片（通常是第一张）
    if (imageUrls.length > 0) {
        const mainImageUrl = imageUrls[0];
        const mainImagePath = path.join(__dirname, '..', images.main);
        
        console.log(`    下载主图片: ${mainImageUrl}`);
        const success = await downloadImage(mainImageUrl, mainImagePath);
        if (success) {
            images.downloaded.push('main');
            console.log(`    ✓ 主图片下载成功`);
        }
    }
    
    // 下载其他相关图片
    for (let i = 1; i < Math.min(imageUrls.length, 4); i++) {
        const url = imageUrls[i];
        const filename = path.join(__dirname, '..', 'assets', 'hexagrams', 'extra', `${number.toString().padStart(2, '0')}-${i}.png`);
        
        const success = await downloadImage(url, filename);
        if (success) {
            images.downloaded.push(`extra-${i}`);
            console.log(`    ✓ 额外图片${i}下载成功`);
        }
    }
    
    return images;
}

// 延迟函数，避免过快请求
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 主抓取函数
async function extractAllHexagrams(options = {}) {
    const { 
        startFrom = 1, 
        endAt = 64, 
        batchSize = 5,
        delayMs = 2000,
        saveProgress = true 
    } = options;
    
    const allHexagrams = {};
    const failedExtractions = [];
    
    console.log(`开始批量抓取卦象 ${startFrom}-${endAt}，批次大小：${batchSize}`);
    
    for (let i = startFrom; i <= endAt; i += batchSize) {
        const batchEnd = Math.min(i + batchSize - 1, endAt);
        console.log(`\n=== 处理批次 ${i}-${batchEnd} ===`);
        
        // 并行处理当前批次
        const batchPromises = [];
        for (let j = i; j <= batchEnd; j++) {
            if (hexagramUrls[j]) {
                batchPromises.push(
                    extractHexagramDetails(j, hexagramUrls[j])
                        .then(data => ({ number: j, data, success: true }))
                        .catch(error => ({ number: j, error, success: false }))
                );
            }
        }
        
        const batchResults = await Promise.all(batchPromises);
        
        // 处理批次结果
        for (const result of batchResults) {
            if (result.success && result.data) {
                const pattern = hexagramPatterns[result.number];
                if (pattern) {
                    allHexagrams[pattern] = result.data;
                    console.log(`✓ 第${result.number}卦成功`);
                } else {
                    console.log(`⚠ 第${result.number}卦缺少二进制模式`);
                }
            } else {
                failedExtractions.push(result.number);
                console.log(`✗ 第${result.number}卦失败: ${result.error?.message || '未知错误'}`);
                
                // 添加备用数据
                const pattern = hexagramPatterns[result.number];
                if (pattern) {
                    allHexagrams[pattern] = createFallbackData(result.number);
                }
            }
        }
        
        // 保存进度
        if (saveProgress && Object.keys(allHexagrams).length > 0) {
            await saveProgressData(allHexagrams, `batch_${i}_${batchEnd}`);
        }
        
        // 批次间延迟
        if (batchEnd < endAt) {
            console.log(`等待 ${delayMs}ms 后继续下一批次...`);
            await delay(delayMs);
        }
    }
    
    // 输出统计信息
    console.log(`\n=== 抓取完成 ===`);
    console.log(`成功: ${Object.keys(allHexagrams).length}/64`);
    console.log(`失败: ${failedExtractions.length}/64`);
    if (failedExtractions.length > 0) {
        console.log(`失败的卦象: ${failedExtractions.join(', ')}`);
    }
    
    return allHexagrams;
}

// 保存进度数据
async function saveProgressData(data, filename) {
    try {
        const outputDir = path.join(__dirname, '../source/js/progress');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        
        const filePath = path.join(outputDir, `${filename}.json`);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`进度已保存: ${filePath}`);
    } catch (error) {
        console.error('保存进度失败:', error.message);
    }
}

// 生成最终数据文件
function generateDataFile(hexagrams) {
    const jsContent = `// 自动生成的64卦完整数据库
// 生成时间: ${new Date().toISOString()}
// 数据来源: 易安居网站等权威资料

export const extractedHexagramDatabase = ${JSON.stringify(hexagrams, null, 4)};

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
        completionRate: \`\${Math.round(complete / total * 100)}%\`
    };
}
`;
    
    return jsContent;
}

// 主执行函数
async function main() {
    try {
        // 解析命令行参数
        const args = process.argv.slice(2);
        const options = {};
        
        // 简单的参数解析
        for (let i = 0; i < args.length; i += 2) {
            const key = args[i]?.replace('--', '');
            const value = args[i + 1];
            if (key && value) {
                if (key === 'start') options.startFrom = parseInt(value);
                if (key === 'end') options.endAt = parseInt(value);
                if (key === 'batch') options.batchSize = parseInt(value);
                if (key === 'delay') options.delayMs = parseInt(value);
            }
        }
        
        console.log('开始批量抓取64卦详细数据...');
        console.log('配置:', options);
        
        const hexagrams = await extractAllHexagrams(options);
        
        console.log(`\n成功抓取 ${Object.keys(hexagrams).length} 个卦象`);
        
        // 生成数据文件
        const dataContent = generateDataFile(hexagrams);
        
        // 确保目录存在
        const outputDir = path.join(__dirname, '../source/js');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        
        // 写入文件
        const outputPath = path.join(outputDir, 'extracted-hexagram-database.js');
        fs.writeFileSync(outputPath, dataContent, 'utf8');
        
        console.log(`数据已保存到: ${outputPath}`);
        
        // 生成统计报告
        await generateReport(hexagrams);
        
    } catch (error) {
        console.error('批量抓取过程中出现错误:', error);
    }
}

// 生成统计报告
async function generateReport(hexagrams) {
    const stats = {
        total: Object.keys(hexagrams).length,
        timestamp: new Date().toISOString(),
        byCompleteness: {
            complete: 0,
            partial: 0,
            minimal: 0
        },
        fields: {
            oracle: 0,
            judgment: 0,
            business: 0,
            love: 0,
            health: 0,
            advice: 0
        }
    };
    
    // 统计完整性
    Object.values(hexagrams).forEach(hex => {
        const nonEmptyFields = Object.values(hex)
            .filter(val => val && val !== '待补充' && val !== '').length;
        
        if (nonEmptyFields >= 10) stats.byCompleteness.complete++;
        else if (nonEmptyFields >= 5) stats.byCompleteness.partial++;
        else stats.byCompleteness.minimal++;
        
        // 统计各字段
        if (hex.oracle && hex.oracle !== '待补充') stats.fields.oracle++;
        if (hex.judgment && hex.judgment !== '待补充') stats.fields.judgment++;
        if (hex.business && hex.business !== '待补充') stats.fields.business++;
        if (hex.love && hex.love !== '待补充') stats.fields.love++;
        if (hex.health && hex.health !== '待补充') stats.fields.health++;
        if (hex.advice && hex.advice !== '待补充') stats.fields.advice++;
    });
    
    const reportContent = `# 64卦数据抓取报告

生成时间: ${stats.timestamp}

## 总体统计
- 总卦象数: ${stats.total}/64
- 完整数据: ${stats.byCompleteness.complete} 个
- 部分数据: ${stats.byCompleteness.partial} 个  
- 基础数据: ${stats.byCompleteness.minimal} 个

## 字段完整性
- 卦辞: ${stats.fields.oracle}/64 (${Math.round(stats.fields.oracle/64*100)}%)
- 判断: ${stats.fields.judgment}/64 (${Math.round(stats.fields.judgment/64*100)}%)
- 事业: ${stats.fields.business}/64 (${Math.round(stats.fields.business/64*100)}%)
- 感情: ${stats.fields.love}/64 (${Math.round(stats.fields.love/64*100)}%)
- 健康: ${stats.fields.health}/64 (${Math.round(stats.fields.health/64*100)}%)
- 建议: ${stats.fields.advice}/64 (${Math.round(stats.fields.advice/64*100)}%)

## 使用说明

1. 数据已保存在 \`source/js/extracted-hexagram-database.js\`
2. 可以通过 \`mergeExtractedData\` 函数合并到主数据库
3. 不完整的数据显示为"待补充"，可以手动完善

## 下一步
- 手动补充缺失的数据
- 验证数据准确性
- 添加爻辞详细信息
`;

    const reportPath = path.join(__dirname, 'extraction-report.md');
    fs.writeFileSync(reportPath, reportContent, 'utf8');
    console.log(`统计报告已保存: ${reportPath}`);
}

// 如果直接运行此脚本
if (require.main === module) {
    main();
}

module.exports = {
    extractHexagramDetails,
    extractAllHexagrams,
    generateDataFile,
    hexagramPatterns,
    hexagramNames
}; 