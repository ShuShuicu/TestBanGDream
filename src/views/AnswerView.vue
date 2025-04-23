<script setup>
import { ref } from 'vue';

// 番剧选择
const animeSelected = ref(false);
const selectedAnime = ref('');

// 题目数据
const questions = {
    'A': [ // 轻音少女题目
        {
            question: "1. 平泽唯的别名是什么？",
            options: ["Yui", "Nijika", "呆唯", "Azusa"],
            answer: 0
        },
        {
            question: "2. 轻音部的社团活动室是哪个？",
            options: ["兔山街", "放学后茶会", "樱高轻音部", "音乐教室"],
            answer: 3
        },
        {
            question: "3. 秋山澪最害怕什么？",
            options: ["蜘蛛", "鬼故事", "高处", "考试"],
            answer: 1
        },
        {
            question: "4. 以下哪首不是她们创作的歌曲？",
            options: ["Don't say lazy", "ふわふわ時間", "天使にふれたよ!", "God knows..."],
            answer: 3
        },
        {
            question: "5. 田井中律的乐器是什么？",
            options: ["吉他", "贝斯", "键盘", "鼓"],
            answer: 3
        },
        {
            question: "6. 中野梓的外号？",
            options: ["Nakano Azusa", "Tainaka Ritsu", "阿梓喵", "千早爱音"],
            answer: 2
        },
        {
            question: "7. 平泽唯的妹妹叫什么名字？",
            options: ["平泽忧", "平泽茜", "平泽葵", "平泽樱"],
            answer: 0
        },
        {
            question: "8. 琴吹䌷家的职业是？",
            options: ["医院院长", "企业社长", "学校老师", "甜品店老板"],
            answer: 1
        },
        {
            question: "9. 轻音部的顾问老师是谁？",
            options: ["山中佐和子", "平冢静", "藤原纪香", "樱井良子"],
            answer: 0
        },
        {
            question: "10. 以下哪首是第一季的OP歌曲？",
            options: ["Don't say lazy", "Cagayake!GIRLS", "ふわふわ時間", "天使にふれたよ!"],
            answer: 1
        }
    ],
    'B': [ // 孤独摇滚题目
        {
            question: "1. 后藤一里使用的吉他是什么型号？",
            options: ["Gibson SG Standard", "Fender Mustang", "Gibson Les Paul Custom", "Fender Telecaster"],
            answer: 1
        },
        {
            question: "2. 结束乐队的贝斯手是谁？",
            options: ["喜多郁代", "伊地知虹夏", "山田凉", "后藤二里"],
            answer: 2
        },
        {
            question: "3. 后藤一里的网名是什么？",
            options: ["吉他英雄", "摇滚小孤独", "吉他孤独星人", "摇滚战士"],
            answer: 0
        },
        {
            question: "4. STARRY酒吧的老板是谁？",
            options: ["伊地知星歌", "伊地知虹夏", "广井菊里", "PA小姐"],
            answer: 0
        },
        {
            question: "5. 以下哪首是结束乐队创作的歌曲？",
            options: ["ギターと孤独と蒼い惑星", "Don't say lazy", "カラカラ", "フラッシュバッカー"],
            answer: 0
        },
        {
            question: "6. 后藤一里最喜欢的音乐人是谁？",
            options: ["John Lennon", "Kurt Cobain", "Jimmy Page", "Eddie Van Halen"],
            answer: 3
        },
        {
            question: "7. 喜多郁代原本是哪个乐队的？",
            options: ["SICK HACK", "银河列车", "结束乐队", "流星队"],
            answer: 0
        },
        {
            question: "8. 山田凉经常因为什么向队友借钱？",
            options: ["买食物", "买乐器设备", "买衣服", "买游戏"],
            answer: 1
        },
        {
            question: "9. 后藤一里第一次Live表演穿的衣服是？",
            options: ["校服", "运动服", "自制服装", "妈妈的衣服"],
            answer: 2
        },
        {
            question: "10. 以下哪首不是动画中的插曲？",
            options: ["あのバンド", "星座になれたら", "転がる岩、君に朝が降る", "フラッシュバッカー"],
            answer: 2
        }
    ],
    'C': [ // GBC(少女乐队的呐喊)
        {
            question: "1. 桃香最初加入的乐队叫什么名字？",
            options: ["钻石星尘", "红姜", "空白", "无刺有刺"],
            answer: 0
        },
        {
            question: "2. 桃香的乐器是什么？",
            options: ["贝斯", "吉他", "鼓", "键盘"],
            answer: 1
        },
        {
            question: "3. 以下哪首是钻石星尘的歌曲？",
            options: ["空の箱", "青春コンプレックス", "転がる岩", "フラッシュバッカー"],
            answer: 0
        },
        {
            question: "4. 仁菜和桃香第一次见面的地点是？",
            options: ["Livehouse", "学校天台", "音乐教室", "街头表演"],
            answer: 3
        },
        {
            question: "5. 486的职业是？",
            options: ["学生", "偶像", "音乐制作人", "乐队经纪人"],
            answer: 1
        },
        {
            question: "6. 仁菜在学期间经历了什么？",
            options: ["校园霸凌", "三好学生奖", "放空の箱", "加入社团"],
            answer: 0
        },
        {
            question: "7. 仁菜和桃香组建的新乐队叫什么？",
            options: ["Togenashi Togeari", "空白", "钻石星尘", "MyGO!!!!!"],
            answer: 1
        },
        {
            question: "8. 动画中出现的音乐节叫什么名字？",
            options: ["SICK HACK", "STARRY", "FUJI ROCK", "摇滚音乐节"],
            answer: 2
        },
        {
            question: "9. 仁菜最初为什么想组建乐队？",
            options: ["为了出名", "为了赚钱", "为了证明自己", "为了找到同伴"],
            answer: 3
        },
        {
            question: "10. 动画的OP歌曲是什么？",
            options: ["雑踏、僕らの街", "空の箱", "転がる岩", "フラッシュバッカー"],
            answer: 0
        }
    ],
    'D': [ // MyGO/Ave Mujica
        {
            question: "1. Ave Mujica乐队的键盘手是谁？",
            options: ["千早爱音", "丰川祥子", "椎名立希", "要乐奈"],
            answer: 1
        },
        {
            question: "2. CRYCHIC的主唱是谁？",
            options: ["高松灯", "三角初华", "若叶睦", "八幡海铃"],
            answer: 0
        },
        {
            question: "3. 以下哪首是Ave Mujica的歌曲？",
            options: ["迷星叫", "焚音打", "影色舞", "顔"],
            answer: 3
        },
        {
            question: "4. Ave Mujica的演出风格是？",
            options: ["哥特金属", "视觉系", "死亡金属", "交响金属"],
            answer: 3
        },
        {
            question: "5. 要乐奈的昵称是什么？",
            options: ["Raana", "Naki", "Tomori", "Soyo"],
            answer: 0
        },
        {
            question: "6. 以下哪位不是Ave Mujica的成员？",
            options: ["丰川祥子", "三角初华", "若叶睦", "椎名立希"],
            answer: 3
        },
        {
            question: "7. MyGO乐队最初是如何组建的？",
            options: ["学校社团", "网络招募", "CRYCHIC重组", "街头偶遇"],
            answer: 2
        },
        {
            question: "8. 动画中出现的Livehouse叫什么？",
            options: ["STARRY", "SPACE", "CIRCLE", "RIOT"],
            answer: 1
        },
        {
            question: "9. 以下哪首是MyGO的歌曲？",
            options: ["迷星叫", "UNITE", "STAR BEAT~", "忘れてやらない"],
            answer: 3
        },
        {
            question: "10. 动画中祥子离开CRYCHIC的原因是？",
            options: ["家庭原因", "音乐理念不合", "学业压力", "健康问题"],
            answer: 0
        }
    ],
    'E': [ // BanG Dream系列
        {
            question: "1. Poppin'Party的主唱是谁？",
            options: ["户山香澄", "市谷有咲", "山吹沙绫", "牛込里美"],
            answer: 0
        },
        {
            question: "2. Roselia的键盘手是谁？",
            options: ["今井莉莎", "宇田川亚子", "白金燐子", "凑友希那"],
            answer: 2
        },
        {
            question: "3. 以下哪首是Poppin'Party的代表曲？",
            options: ["キズナミュージック♪", "BLACK SHOUT", "Returns", "Daylight"],
            answer: 0
        },
        {
            question: "4. RAISE A SUILEN的鼓手是谁？",
            options: ["朝日六花", "佐藤益木", "鳰原令王那", "珠手知由"],
            answer: 1
        },
        {
            question: "5. Morfonica的主唱是谁？",
            options: ["仓田真白", "八潮瑠唯", "桐谷透子", "广町七深"],
            answer: 0
        },
        {
            question: "6. 以下哪支乐队不属于BanG Dream企划？",
            options: ["Poppin'Party", "Roselia", "结束乐队", "RAISE A SUILEN"],
            answer: 2
        },
        {
            question: "7. 户山香澄的吉他是什么颜色？",
            options: ["粉色", "黄色", "红色", "蓝色"],
            answer: 2
        },
        {
            question: "8. Roselia的贝斯手是？",
            options: ["凑友希那", "今井莉莎", "宇田川亚子", "山田凉"],
            answer: 1
        },
        {
            question: "9. 动画中SPACE Livehouse的老板是？",
            options: ["山吹沙绫的父亲", "要乐奈的外婆", "牛込里美的母亲", "丰川祥子"],
            answer: 1
        },
        {
            question: "10. BanG Dream手游的全称是？",
            options: ["BanG Dream! Girls Band Party!", "BanG Dream! Music Festival", "BanG Dream! Live Stage", "BanG Dream! Band Session"],
            answer: 0
        }
    ],
    'F': [ // LoveLive全系列
        {
            question: "1. μ's的队长是谁？",
            options: ["高坂穗乃果", "绚濑绘里", "南小鸟", "东条希"],
            answer: 0
        },
        {
            question: "2. Aqours的center是谁？",
            options: ["高海千歌", "樱内梨子", "松浦果南", "黑泽露比"],
            answer: 0
        },
        {
            question: "3. 以下哪首是μ's的代表曲？",
            options: ["Snow halation", "青空Jumping Heart", "未来の僕らは知ってるよ", "TOKIMEKI Runners"],
            answer: 0
        },
        {
            question: "4. Liella!的一期生有几人？",
            options: ["5", "7", "9", "11"],
            answer: 2
        },
        {
            question: "5. 虹咲学园学园偶像同好会的活动理念是？",
            options: ["大家一起实现梦想", "每个人的光芒", "最棒的演唱会", "与粉丝一起成长"],
            answer: 1
        },
        {
            question: "6. 以下哪位不是Aqours的成员？",
            options: ["高海千歌", "樱内梨子", "上原步梦", "黑泽露比"],
            answer: 2
        },
        {
            question: "7. μ's的Final Live举办于哪一年？",
            options: ["2014", "2016", "2018", "2020"],
            answer: 1
        },
        {
            question: "8. Liella!的唐可可来自哪个国家？",
            options: ["中国", "韩国", "美国", "英国"],
            answer: 0
        },
        {
            question: "9. 虹咲学园学园偶像同好会的第一首歌曲是？",
            options: ["Dream with You", "NEO SKY, NEO MAP!", "TOKIMEKI Runners", "未来の僕らは知ってるよ"],
            answer: 0
        },
        {
            question: "10. 以下哪个不是LoveLive系列的子企划？",
            options: ["μ's", "Aqours", "结束乐队", "Liella!"],
            answer: 2
        }
    ],
    'G': [ // 摇滚乃是淑女爱好

    ],
    'H': [ // 吹响吧！上低音号
        {
            question: "1. 主角黄前久美子演奏的乐器是？",
            options: ["小号", "长号", "上低音号", "圆号"],
            answer: 2
        },
        {
            question: "2. 北宇治高中的目标是？",
            options: ["全国大赛金奖", "关西大赛出线", "京都府第一", "全国大赛出场"],
            answer: 0
        },
        {
            question: "3. 以下哪位不是久美子的同班同学？",
            options: ["加藤叶月", "川岛绿辉", "高坂丽奈", "田中明日香"],
            answer: 3
        },
        {
            question: "4. 泷升老师的职业是？",
            options: ["音乐老师", "职业指挥家", "前职业演奏家", "音乐大学研究生"],
            answer: 2
        },
        {
            question: "5. 以下哪首是动画中的比赛曲目？",
            options: ["三日月之舞", "莉兹与青鸟", "普罗旺斯之风", "宝岛"],
            answer: 0
        },
        {
            question: "6. 高坂丽奈演奏的乐器是？",
            options: ["小号", "长笛", "单簧管", "双簧管"],
            answer: 0
        },
        {
            question: "7. 久美子的姐姐叫什么名字？",
            options: ["黄前麻美子", "黄前优子", "黄前香织", "黄前美玲"],
            answer: 0
        },
        {
            question: "8. 动画中出现的比赛场馆在哪个城市？",
            options: ["东京", "大阪", "名古屋", "京都"],
            answer: 1
        },
        {
            question: "9. 以下哪部是《吹响吧！上低音号》的剧场版？",
            options: ["誓言的终章", "莉兹与青鸟", "利兹与青鸟", "欢迎来到北宇治"],
            answer: 0
        },
        {
            question: "10. 久美子最初为什么选择上低音号？",
            options: ["喜欢音色", "姐姐的影响", "老师推荐", "被外观吸引"],
            answer: 3
        }
    ]
};

// 答题状态
const currentQuestion = ref(0);
const selectedOptions = ref([]);
const score = ref(0);
const quizCompleted = ref(false);

// 选择番剧
const selectAnime = () => {
    if (selectedAnime.value) {
        animeSelected.value = true;
        selectedOptions.value = Array(questions[selectedAnime.value].length).fill(null);
    }
};

// 答题操作
const handleOptionChange = (index, optionIndex) => {
    selectedOptions.value[index] = optionIndex;
};

const nextQuestion = () => {
    if (currentQuestion.value < questions[selectedAnime.value].length - 1) {
        currentQuestion.value++;
    }
};

const prevQuestion = () => {
    if (currentQuestion.value > 0) {
        currentQuestion.value--;
    }
};

const submitQuiz = () => {
    let correct = 0;
    questions[selectedAnime.value].forEach((q, index) => {
        if (selectedOptions.value[index] === q.answer) {
            correct++;
        }
    });
    score.value = correct * 10;
    quizCompleted.value = true;
};

const resetQuiz = () => {
    animeSelected.value = false;
    selectedAnime.value = '';
    currentQuestion.value = 0;
    selectedOptions.value = [];
    score.value = 0;
    quizCompleted.value = false;
};
</script>

<template>
    <div direction="vertical" class="content">
        <template v-if="!animeSelected">
            <a-divider>选择要挑战的番剧</a-divider>
            <a-radio-group v-model:value="selectedAnime" style="width: 100%;">
                <a-row :gutter="[16, 16]">
                    <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <a-radio value="A">轻音少女</a-radio>
                    </a-col>
                    <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <a-radio value="B">孤独摇滚</a-radio>
                    </a-col>
                    <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <a-radio value="C">GBC(少女乐队的呐喊)</a-radio>
                    </a-col>
                    <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <a-radio value="D">MyGO/Ave Mujica</a-radio>
                    </a-col>
                    <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <a-radio value="E">BanG Dream系列</a-radio>
                    </a-col>
                    <!-- <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <a-radio value="F">LoveLive全系列</a-radio>
                    </a-col>
                    <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <a-radio value="G">摇滚乃是淑女爱好</a-radio>
                    </a-col>
                    <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <a-radio value="H">吹响吧！上低音号</a-radio>
                    </a-col> -->
                </a-row>
            </a-radio-group>
            <a-button type="primary" @click="selectAnime" :disabled="!selectedAnime" class="submit-btn"
                style="margin-top: 20px;">
                开始测试
            </a-button>
        </template>

        <template v-else-if="!quizCompleted">
            <a-divider>{{
                selectedAnime === 'A' ? '轻音少女' :
                    selectedAnime === 'B' ? '孤独摇滚' :
                        selectedAnime === 'C' ? 'GBC(少女乐队的呐喊)' :
                            selectedAnime === 'D' ? 'MyGO/Ave Mujica' :
                                selectedAnime === 'E' ? 'BanG Dream系列' : 'Null'
            }}</a-divider>
            <h3>{{ questions[selectedAnime][currentQuestion].question }}</h3>
            <a-radio-group v-model:value="selectedOptions[currentQuestion]"
                @change="(e) => handleOptionChange(currentQuestion, e.target.value)" style="width: 100%;margin: 16px 0;">
                <a-row :gutter="[16, 16]">
                    <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" v-for="(option, index) in questions[selectedAnime][currentQuestion].options">
                        <a-radio
                            :key="index" :value="index">
                            {{ option }}
                        </a-radio>
                    </a-col>
                </a-row>
            </a-radio-group>

            <div style="text-align: right; margin-top: 24px;">
                <a-space>
                    <a-button v-if="currentQuestion > 0" @click="prevQuestion">上一题</a-button>
                    <a-button v-if="currentQuestion < questions[selectedAnime].length - 1" @click="nextQuestion"
                        type="primary">
                        下一题
                    </a-button>
                    <a-button v-if="currentQuestion === questions[selectedAnime].length - 1" @click="submitQuiz"
                        type="primary">
                        提交
                    </a-button>
                </a-space>
            </div>
        </template>

        <template v-else>
            <a-divider>{{
                selectedAnime === 'A' ? '轻音少女' :
                    selectedAnime === 'B' ? '孤独摇滚' :
                        selectedAnime === 'C' ? 'GBC(少女乐队的呐喊)' :
                            selectedAnime === 'D' ? 'MyGO/Ave Mujica' :
                                selectedAnime === 'E' ? 'BanG Dream系列' :
                                    selectedAnime === 'F' ? 'LoveLive全系列' : 'Null'
            }}测试结果</a-divider>
            <p style="font-size: 16px;">你的得分: {{ score }}/100</p>
            <p v-if="score >= 90">太厉害了！你一定是骨灰级粉丝！</p>
            <p v-else-if="score >= 70">不错哦！对番剧很了解！</p>
            <p v-else-if="score >= 50">还可以，再多看几遍吧！</p>
            <p v-else-if="score >= 30">差强人意，建议多看几遍~</p>
            <p v-else>加油！建议重温这部番剧~</p>
            <div style="text-align: right; margin-top: 24px;">
                <a-button @click="resetQuiz" type="primary">返回选择</a-button>
            </div>
        </template>
    </div>
</template>