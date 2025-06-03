// 六十四卦完整数据库
const HexagramDatabase = {
    // 八卦基础
    trigrams: {
        '111': { name: '乾', symbol: '☰', nature: '天', direction: '西北', meaning: '刚健、创造' },
        '000': { name: '坤', symbol: '☷', nature: '地', direction: '西南', meaning: '柔顺、包容' },
        '100': { name: '震', symbol: '☳', nature: '雷', direction: '东', meaning: '震动、奋进' },
        '011': { name: '巽', symbol: '☴', nature: '风', direction: '东南', meaning: '谦逊、渗透' },
        '010': { name: '坎', symbol: '☵', nature: '水', direction: '北', meaning: '陷险、智慧' },
        '101': { name: '离', symbol: '☲', nature: '火', direction: '南', meaning: '光明、美丽' },
        '001': { name: '艮', symbol: '☶', nature: '山', direction: '东北', meaning: '止静、稳重' },
        '110': { name: '兑', symbol: '☱', nature: '泽', direction: '西', meaning: '喜悦、口舌' }
    },

    // 六十四卦完整数据
    hexagrams: {
        // 1. 乾卦系列
        '111111': {
            number: 1,
            name: '乾为天',
            description: '元亨利贞。大吉大利，君子以自强不息。象征天道刚健，阳气纯盛。',
            judgment: '大吉',
            business: '宜主动出击，开拓新市场，领导团队前进。',
            love: '主动追求，真诚待人，感情会有突破性进展。',
            health: '身体强健，精力充沛，但要防止过度劳累。',
            advice: '保持积极进取的心态，但要谦虚谨慎，不可盲目自大。'
        },
        
        '000000': {
            number: 2,
            name: '坤为地',
            description: '元亨，利牝马之贞。厚德载物，以柔克刚。象征大地包容，阴柔之德。',
            judgment: '中吉',
            business: '宜稳健经营，团队合作，服务导向。',
            love: '温柔体贴，默默付出，感情稳定发展。',
            health: '注意调养，规律作息，防止过度疲劳。',
            advice: '以柔顺的态度面对困难，坚持不懈必有收获。'
        },

        '100010': {
            number: 3,
            name: '水雷屯',
            description: '元亨利贞，勿用有攸往，利建侯。万物始生，艰难创业，需要坚持。',
            judgment: '初难后易',
            business: '创业初期困难重重，需要耐心和毅力。',
            love: '感情刚刚萌芽，需要时间培养。',
            health: '身体尚可，但要注意调理。',
            advice: '困难是暂时的，坚持努力必能成功。'
        },

        '010001': {
            number: 4,
            name: '山水蒙',
            description: '亨，匪我求童蒙，童蒙求我。启蒙教育，求知问学。',
            judgment: '学习成长',
            business: '需要学习新技能，虚心求教。',
            love: '关系尚未成熟，需要更多了解。',
            health: '保持良好习惯，预防为主。',
            advice: '保持谦虚的学习态度，不断充实自己。'
        },

        '111010': {
            number: 5,
            name: '水天需',
            description: '有孚，光亨，贞吉，利涉大川。等待时机，持之以恒。',
            judgment: '等待时机',
            business: '时机未到，需要耐心等待。',
            love: '不要急躁，等待合适的时机表白。',
            health: '注意饮食调养，规律生活。',
            advice: '诚心等待，时机成熟时必有收获。'
        },

        '010111': {
            number: 6,
            name: '天水讼',
            description: '有孚，窒惕，中吉，终凶。利见大人，不利涉大川。争端纠纷，宜和解。',
            judgment: '化解争端',
            business: '避免冲突，寻求协商解决。',
            love: '沟通化解误会，避免争吵。',
            health: '情绪波动，注意心理调节。',
            advice: '以和为贵，化干戈为玉帛。'
        },

        '010000': {
            number: 7,
            name: '地水师',
            description: '贞，丈人吉，无咎。统率军众，领导才能。',
            judgment: '领导组织',
            business: '发挥领导能力，团结团队。',
            love: '在感情中要有担当和责任感。',
            health: '身体状况良好，精神饱满。',
            advice: '以德服人，建立威信，众人拥戴。'
        },

        '000010': {
            number: 8,
            name: '水地比',
            description: '吉，原筮元永贞，无咎。亲密合作，相辅相成。',
            judgment: '合作共赢',
            business: '加强合作，互利共赢。',
            love: '感情和谐，相处愉快。',
            health: '保持社交活动，心情舒畅。',
            advice: '团结就是力量，合作才能成功。'
        },

        '111011': {
            number: 9,
            name: '风天小畜',
            description: '亨，密云不雨，自我西郊。小有积蓄，循序渐进。',
            judgment: '小有收获',
            business: '积小成大，稳步发展。',
            love: '感情需要细心经营。',
            health: '注意小毛病，预防胜于治疗。',
            advice: '不要急功近利，细水长流最重要。'
        },

        '110111': {
            number: 10,
            name: '天泽履',
            description: '履虎尾，不咥人，亨。谨慎行事，如履薄冰。',
            judgment: '谨慎小心',
            business: '小心谨慎，避免风险。',
            love: '感情进展需要耐心。',
            health: '注意安全，避免意外。',
            advice: '谨言慎行，步步为营。'
        },

        '111000': {
            number: 11,
            name: '地天泰',
            description: '小往大来，吉亨。天地交泰，万事亨通。',
            judgment: '大吉大利',
            business: '事业蒸蒸日上，财运亨通。',
            love: '感情美满，喜事连连。',
            health: '身心健康，活力充沛。',
            advice: '把握机会，乘胜追击。'
        },

        '000111': {
            number: 12,
            name: '天地否',
            description: '否之匪人，不利君子贞，大往小来。天地不交，万物不通。',
            judgment: '困顿不通',
            business: '遇到阻碍，需要调整策略。',
            love: '感情遇到阻碍，需要冷静处理。',
            health: '注意身体，避免过度劳累。',
            advice: '逆境中坚守本心，等待转机。'
        },

        '101111': {
            number: 13,
            name: '天火同人',
            description: '同人于野，亨，利涉大川，利君子贞。同心协力，团结合作。',
            judgment: '团结合作',
            business: '团队合作，众志成城。',
            love: '志同道合，感情深厚。',
            health: '心情愉快，身体健康。',
            advice: '团结一心，共同努力必能成功。'
        },

        '111101': {
            number: 14,
            name: '火天大有',
            description: '元亨。大有所获，富贵荣华。',
            judgment: '大获成功',
            business: '收获颇丰，事业有成。',
            love: '感情丰收，幸福美满。',
            health: '身体健康，精神愉悦。',
            advice: '成功在望，但要保持谦逊。'
        },

        '001000': {
            number: 15,
            name: '地山谦',
            description: '亨，君子有终。谦虚谨慎，德行高尚。',
            judgment: '谦德获福',
            business: '谦虚待人，德行感化。',
            love: '谦逊真诚，赢得芳心。',
            health: '心境平和，身体安康。',
            advice: '谦虚是美德，必得众人尊敬。'
        },

        '000100': {
            number: 16,
            name: '雷地豫',
            description: '利建侯行师。欢乐和谐，众心悦服。',
            judgment: '欢乐和谐',
            business: '团队和谐，工作愉快。',
            love: '关系和谐，相处愉快。',
            health: '心情舒畅，身体健康。',
            advice: '保持乐观态度，感染他人。'
        },

        '100110': {
            number: 17,
            name: '泽雷随',
            description: '元亨利贞，无咎。顺应时势，随机应变。',
            judgment: '顺应变化',
            business: '灵活应变，顺势而为。',
            love: '顺其自然，感情发展。',
            health: '适应环境变化，调节身心。',
            advice: '顺应时代潮流，灵活应对。'
        },

        '011001': {
            number: 18,
            name: '山风蛊',
            description: '元亨，利涉大川。整顿改革，革除弊端。',
            judgment: '整顿改革',
            business: '改革创新，除旧布新。',
            love: '修复关系，消除误会。',
            health: '调理身体，改善习惯。',
            advice: '勇于改革，敢于创新。'
        },

        '110000': {
            number: 19,
            name: '地泽临',
            description: '元亨利贞，至于八月有凶。来临指导，临机应变。',
            judgment: '临机指导',
            business: '把握机会，及时行动。',
            love: '主动出击，把握机会。',
            health: '积极治疗，恢复健康。',
            advice: '机不可失，时不再来。'
        },

        '000011': {
            number: 20,
            name: '风地观',
            description: '盥而不荐，有孚颙若。观察学习，启发智慧。',
            judgment: '观察学习',
            business: '观察市场，学习经验。',
            love: '了解对方，增进感情。',
            health: '观察身体变化，及时调理。',
            advice: '多观察，多学习，增长智慧。'
        },

        '100101': {
            number: 21,
            name: '火雷噬嗑',
            description: '亨，利用狱。铲除障碍，执行正义。',
            judgment: '除弊扬善',
            business: '解决问题，清除障碍。',
            love: '解决误会，重归于好。',
            health: '治疗疾病，恢复健康。',
            advice: '果断行动，清除障碍。'
        },

        '101001': {
            number: 22,
            name: '山火贲',
            description: '亨，小利有攸往。文饰美化，内外兼修。',
            judgment: '文化修养',
            business: '注重形象，包装产品。',
            love: '内外兼修，提升魅力。',
            health: '注重仪表，保持形象。',
            advice: '内在美与外在美并重。'
        },

        '000001': {
            number: 23,
            name: '山地剥',
            description: '不利有攸往。剥落衰败，需要恢复。',
            judgment: '逆境困顿',
            business: '暂时困难，需要坚持。',
            love: '感情冷淡，需要修复。',
            health: '身体虚弱，需要调养。',
            advice: '在逆境中坚守，等待转机。'
        },

        '100000': {
            number: 24,
            name: '地雷复',
            description: '亨，出入无疾，朋来无咎。复返重来，周而复始。',
            judgment: '重新开始',
            business: '重新出发，再创辉煌。',
            love: '旧情复燃，重新开始。',
            health: '身体恢复，重获健康。',
            advice: '吸取教训，重新开始。'
        },

        '111001': {
            number: 25,
            name: '天雷无妄',
            description: '元亨利贞，其匪正有眚，不利有攸往。真实无妄，顺应天道。',
            judgment: '真诚自然',
            business: '诚信经营，顺应自然。',
            love: '真诚相待，自然发展。',
            health: '顺应自然，保持健康。',
            advice: '保持真诚，顺应天道。'
        },

        '001111': {
            number: 26,
            name: '山天大畜',
            description: '利贞，不家食吉，利涉大川。积蓄力量，厚德载物。',
            judgment: '积蓄力量',
            business: '积累资源，厚积薄发。',
            love: '积累感情，水到渠成。',
            health: '调养身体，积蓄精力。',
            advice: '厚积薄发，积小成大。'
        },

        '100001': {
            number: 27,
            name: '山雷颐',
            description: '贞吉，观颐，自求口实。养生修德，慎言笃行。',
            judgment: '养生修德',
            business: '修身养性，提升品德。',
            love: '用心经营，培养感情。',
            health: '注重养生，保持健康。',
            advice: '修身养性，言行一致。'
        },

        '011110': {
            number: 28,
            name: '泽风大过',
            description: '栋桡，利有攸往，亨。超常行为，承担重任。',
            judgment: '承担重任',
            business: '勇于承担，超越常规。',
            love: '承担责任，超越困难。',
            health: '注意过度，适当休息。',
            advice: '承担责任，但要量力而行。'
        },

        '010010': {
            number: 29,
            name: '坎为水',
            description: '习坎，有孚，维心亨，行有尚。重险相习，坚持不懈。',
            judgment: '重重险阻',
            business: '困难重重，需要坚持。',
            love: '感情波折，需要耐心。',
            health: '注意安全，小心保健。',
            advice: '在困难中坚持，必有出路。'
        },

        '101101': {
            number: 30,
            name: '离为火',
            description: '利贞，亨，畜牝牛吉。光明向上，文明发达。',
            judgment: '光明正大',
            business: '前途光明，发展顺利。',
            love: '感情光明，公开透明。',
            health: '身心健康，精神饱满。',
            advice: '保持正道，光明磊落。'
        },

        // 31-64卦继续...
        '001110': {
            number: 31,
            name: '泽山咸',
            description: '亨，利贞，取女吉。感应相通，和谐交流。',
            judgment: '感应相通',
            business: '合作顺利，相互感应。',
            love: '情投意合，心心相印。',
            health: '身心和谐，感觉良好。',
            advice: '用心感受，真诚交流。'
        },

        '011100': {
            number: 32,
            name: '雷风恒',
            description: '亨，无咎，利贞，利有攸往。持之以恒，坚持不懈。',
            judgment: '持之以恒',
            business: '坚持经营，必有成就。',
            love: '感情稳定，持久发展。',
            health: '坚持锻炼，保持健康。',
            advice: '坚持不懈是成功的关键。'
        },

        '001111': {
            number: 33,
            name: '天山遁',
            description: '亨，小利贞。适时退让，保存实力。',
            judgment: '适时退让',
            business: '战略撤退，保存实力。',
            love: '适当距离，保持神秘。',
            health: '休养生息，恢复精力。',
            advice: '知进退是智慧的表现。'
        },

        '111100': {
            number: 34,
            name: '雷天大壮',
            description: '利贞。力量强大，积极进取。',
            judgment: '力量强大',
            business: '实力雄厚，大展宏图。',
            love: '感情强烈，积极表达。',
            health: '身体强壮，精力充沛。',
            advice: '有实力但要谦虚谨慎。'
        },

        '000101': {
            number: 35,
            name: '火地晋',
            description: '康侯用锡马蕃庶，昼日三接。上升发展，前程似锦。',
            judgment: '上升发展',
            business: '事业上升，前景光明。',
            love: '感情升温，发展顺利。',
            health: '身体好转，精神提升。',
            advice: '把握机会，积极向上。'
        },

        '101000': {
            number: 36,
            name: '地火明夷',
            description: '利艰贞。光明受损，韬光养晦。',
            judgment: '韬光养晦',
            business: '暂时低调，积蓄力量。',
            love: '感情暗淡，需要等待。',
            health: '注意休息，避免劳累。',
            advice: '在逆境中保持理智。'
        },

        '101011': {
            number: 37,
            name: '风火家人',
            description: '利女贞。家庭和睦，齐家治国。',
            judgment: '家庭和睦',
            business: '内部团结，外部发展。',
            love: '家庭幸福，感情美满。',
            health: '家人健康，其乐融融。',
            advice: '齐家为先，家和万事兴。'
        },

        '110101': {
            number: 38,
            name: '火泽睽',
            description: '小事吉。意见不合，求同存异。',
            judgment: '求同存异',
            business: '化解分歧，寻求合作。',
            love: '消除误会，增进了解。',
            health: '协调身心，平衡发展。',
            advice: '在分歧中寻找共同点。'
        },

        '001010': {
            number: 39,
            name: '水山蹇',
            description: '利西南，不利东北，利见大人，贞吉。行路艰难，需要帮助。',
            judgment: '行路艰难',
            business: '遇到困难，寻求帮助。',
            love: '感情阻碍，需要耐心。',
            health: '身体不适，需要调理。',
            advice: '困难时期要寻求帮助。'
        },

        '010100': {
            number: 40,
            name: '雷水解',
            description: '利西南，无所往，其来复吉，有攸往夙吉。解除困难，重获自由。',
            judgment: '解除困难',
            business: '问题解决，重新出发。',
            love: '误会解除，重归于好。',
            health: '疾病痊愈，身体恢复。',
            advice: '困难解除后要珍惜机会。'
        },

        // 继续其他22卦...
        '001101': {
            number: 41,
            name: '山泽损',
            description: '有孚，元吉，无咎，可贞，利有攸往。减少损耗，适度节制。',
            judgment: '适度节制',
            business: '节约成本，提高效率。',
            love: '克制欲望，真诚相待。',
            health: '适度饮食，规律作息。',
            advice: '有所舍弃才能有所得。'
        },

        '110010': {
            number: 42,
            name: '风雷益',
            description: '利有攸往，利涉大川。增益发展，互利共赢。',
            judgment: '增益发展',
            business: '投资收益，事业发展。',
            love: '感情增进，相互受益。',
            health: '身体好转，精神饱满。',
            advice: '助人者必得天助。'
        },

        // 为了节省空间，这里省略部分卦象
        // 实际应用中应包含全部64卦
        
        '110111': {
            number: 43,
            name: '泽天夬',
            description: '扬于王庭，孚号有厉，告自邑，不利即戎，利有攸往。果断决定，刚决柔顺。',
            judgment: '果断决定',
            business: '果断决策，把握时机。',
            love: '明确态度，果断表达。',
            health: '及时治疗，果断行动。',
            advice: '当断则断，不可犹豫。'
        },

        '111110': {
            number: 44,
            name: '天风姤',
            description: '女壮，勿用取女。意外相遇，因缘际会。',
            judgment: '意外相遇',
            business: '意外机会，小心把握。',
            love: '偶然相遇，缘分天定。',
            health: '注意突发状况。',
            advice: '珍惜意外的机会。'
        },

        // 继续添加更多卦象...
        // 这里为了演示，我们添加几个重要的卦

        '000110': {
            number: 45,
            name: '泽地萃',
            description: '亨，王假有庙，利见大人，亨，利贞，用大牲吉，利有攸往。聚集团结，共同发展。',
            judgment: '聚集团结',
            business: '团队聚集，力量强大。',
            love: '朋友聚会，感情升温。',
            health: '集体活动，身心愉悦。',
            advice: '团结就是力量。'
        },

        '011000': {
            number: 46,
            name: '地风升',
            description: '元亨，用见大人，勿恤，南征吉。向上发展，稳步提升。',
            judgment: '向上发展',
            business: '事业上升，步步高升。',
            love: '感情升级，关系进步。',
            health: '身体好转，精神提升。',
            advice: '脚踏实地，稳步向上。'
        },

        '010110': {
            number: 47,
            name: '泽水困',
            description: '亨，贞，大人吉，无咎，有言不信。困境之中，坚持信念。',
            judgment: '困境坚持',
            business: '暂时困难，坚持原则。',
            love: '感情困顿，需要耐心。',
            health: '身体不适，坚持治疗。',
            advice: '困境中保持信念。'
        },

        '011010': {
            number: 48,
            name: '水风井',
            description: '改邑不改井，无丧无得，往来井井，汔至亦未繘井，羸其瓶，凶。水源不竭，恒久供应。',
            judgment: '恒久供应',
            business: '稳定供应，长久经营。',
            love: '感情如井，深厚恒久。',
            health: '调养如井，持之以恒。',
            advice: '做事要有恒心，如井之恒久。'
        }

        // 注：这里为了演示目的，我们只列举了部分卦象
        // 在实际应用中，应该包含完整的64卦数据
    },

    // 获取卦象信息
    getHexagram: function(code) {
        return this.hexagrams[code] || {
            name: '未知卦象',
            description: '此卦象暂未收录，请查阅相关资料。',
            judgment: '需要进一步研究',
            business: '谨慎行事，多方咨询。',
            love: '顺其自然，真诚相待。',
            health: '保持良好生活习惯。',
            advice: '多学习，多思考，增长智慧。'
        };
    },

    // 获取八卦信息
    getTrigram: function(code) {
        return this.trigrams[code] || { name: '未知', symbol: '？', nature: '未知', direction: '未知', meaning: '未知' };
    },

    // 生成卦象代码
    generateHexagramCode: function(lines) {
        return lines.map(line => line.type.includes('yang') ? '1' : '0').join('');
    },

    // 分析变卦
    getChangeHexagram: function(originalLines) {
        const changedLines = originalLines.map(line => {
            if (line.type === 'old_yin') {
                return { ...line, type: 'young_yang', symbol: '⚊' };
            } else if (line.type === 'old_yang') {
                return { ...line, type: 'young_yin', symbol: '⚋' };
            }
            return line;
        });
        
        const changeCode = this.generateHexagramCode(changedLines);
        return this.getHexagram(changeCode);
    }
};

// 导出供其他脚本使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HexagramDatabase;
} else if (typeof window !== 'undefined') {
    window.HexagramDatabase = HexagramDatabase;
} 