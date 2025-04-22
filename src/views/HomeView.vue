<script setup>
import { ref } from 'vue';
import { Checkbox, Button, Modal, Tag, message } from 'ant-design-vue';

const checkedList = ref([]);
const visible = ref(false);
const selectedContent = ref({
  title: '',
  description: '',
  level: '',
  tags: [],
  character: ''
});

const resultTitle = ref('你的少女乐队浓度是');

const contentMap = {
  // 单个选择
  'A': {
    title: '轻音少女浓度检测',
    description: '放学后茶会时间到！你喜欢轻松愉快的校园乐队日常，热爱喝茶吃点心~',
    level: '萌系音乐番入门级',
    tags: ['轻松日常', '校园生活', '萌系'],
  },
  'B': {
    title: '孤独摇滚浓度检测',
    description: '结束乐队需要你这样的粉丝！你欣赏社恐少女的成长故事，喜欢独特的摇滚风格。',
    level: '个性派摇滚爱好者',
    tags: ['社恐主角', '摇滚精神', '成长故事'],
  },
  'C': {
    title: 'GBC(少女乐队的呐喊)浓度检测',
    description: '你对现实向的乐队故事感兴趣，喜欢充满张力的音乐表演和人物关系！',
    level: '现实系乐队番爱好者',
    tags: ['现实向', '音乐张力', '复杂关系'],
  },
  'D': {
    title: 'MyGO/Ave Mujica浓度检测',
    description: '迷子集会中...你喜欢充满谜团和戏剧性的乐队故事，对CRYCHIC的真相充满好奇！',
    level: '悬疑系乐队番专家',
    tags: ['悬疑剧情', '戏剧冲突', '乐队谜团'],
  },
  'E': {
    title: 'BanG Dream浓度检测',
    description: '你是多乐队企划的忠实粉丝！Poppin Party、Roselia、RAISE A SUILEN...每支乐队都有你喜欢的点！',
    level: '多乐队企划追随者',
    tags: ['多乐队', '偶像元素', '跨媒体'],
  },
  'F': {
    title: 'LoveLive全系列浓度检测',
    description: 'μ\'s到Liella!全系列制霸！你是学园偶像的忠实粉丝，喜欢大家一起实现梦想的故事！',
    level: '学园偶像大师',
    tags: ['学园偶像', '团体梦想', '全系列'],
  },
  'G': {
    title: '摇滚乃是淑女爱好浓度检测',
    description: '你发现了这部隐藏佳作！喜欢古典与摇滚的融合，欣赏大小姐们的反差萌！',
    level: '古典摇滚融合爱好者',
    tags: ['古典音乐', '摇滚精神', '大小姐'],
  },
  'H': {
    title: '吹响吧！上低音号浓度检测',
    description: '北宇治高校吹奏乐部欢迎你！你喜欢真实细腻的音乐成长故事，为少女们的青春与音乐感动！',
    level: '吹奏乐番达人',
    tags: ['吹奏乐', '青春成长', '音乐竞赛'],
  },

  // 两个组合
  'AG': {
    title: '轻音×摇滚淑女混合浓度',
    description: '你喜欢校园乐队的轻松日常和古典与摇滚的反差融合！',
    level: '校园音乐反差厨',
    tags: ['校园日常', '古典摇滚', '反差萌']
  },
  'BG': {
    title: '孤独摇滚×摇滚淑女混合浓度',
    description: '你热爱各种形式的摇滚精神，从社恐少女到优雅大小姐！',
    level: '全方位摇滚厨',
    tags: ['个性摇滚', '古典摇滚', '摇滚精神']
  },
  'CG': {
    title: 'GBC×摇滚淑女混合浓度',
    description: '你喜欢现实向的乐队故事和古典与摇滚的独特融合！',
    level: '现实系音乐番厨',
    tags: ['现实向', '古典摇滚', '深度欣赏']
  },
  'DG': {
    title: 'MyGO×摇滚淑女混合浓度',
    description: '你欣赏充满戏剧性的乐队故事和古典与摇滚的反差表现！',
    level: '戏剧性音乐厨',
    tags: ['悬疑剧情', '古典摇滚', '戏剧冲突']
  },
  'EG': {
    title: 'BanG Dream×摇滚淑女混合浓度',
    description: '你喜欢多乐队企划和古典与摇滚的独特融合！',
    level: '多元音乐风格厨',
    tags: ['多乐队', '古典摇滚', '广泛涉猎']
  },
  'FG': {
    title: 'LoveLive×摇滚淑女混合浓度',
    description: '这个组合很特别！你同时喜欢学园偶像和古典摇滚？',
    level: '独特音乐品味厨',
    tags: ['学园偶像', '古典摇滚', '稀有组合']
  },
  'AH': {
    title: '轻音×上低音号混合浓度',
    description: '你喜欢校园音乐番，从轻音部的悠闲到吹奏乐部的热血！',
    level: '校园音乐番双修厨',
    tags: ['校园日常', '吹奏乐', '音乐成长']
  },
  'BH': {
    title: '孤独摇滚×上低音号混合浓度',
    description: '你喜欢个性摇滚少女和吹奏乐少女的成长故事！',
    level: '音乐少女成长厨',
    tags: ['个性摇滚', '吹奏乐', '青春成长']
  },

  // 三个组合
  'ABG': {
    title: '轻音×孤独×摇滚淑女三重奏',
    description: '你对乐队番的理解很全面！从萌系到个性摇滚再到古典融合！',
    level: '三重音乐番厨',
    tags: ['日常系', '摇滚系', '古典融合']
  },
  'BCG': {
    title: '孤独×GBC×摇滚淑女特殊浓度',
    description: '你喜欢个性鲜明、充满张力的乐队故事和古典摇滚的融合！',
    level: '摇滚三重奏厨',
    tags: ['个性角色', '现实张力', '古典摇滚']
  },
  'DEG': {
    title: 'MyGO×BanG Dream×摇滚淑女混合浓度',
    description: '你喜欢戏剧性乐队、多乐队企划和古典摇滚的丰富内容！',
    level: '多元音乐番厨',
    tags: ['戏剧性', '多乐队', '古典摇滚']
  },
  'ABH': {
    title: '轻音×孤独×上低音号三重奏',
    description: '你喜欢校园音乐、个性摇滚和热血吹奏乐的完美结合！',
    level: '音乐番三修厨',
    tags: ['校园日常', '个性摇滚', '吹奏乐']
  },
  'BCH': {
    title: '孤独×GBC×上低音号三重奏',
    description: '你喜欢现实向音乐番，从社恐摇滚到热血吹奏乐！',
    level: '现实音乐三重厨',
    tags: ['个性摇滚', '现实向', '吹奏乐']
  },

  // 四个组合
  'ABCG': {
    title: '轻音×孤独×GBC×摇滚淑女四重奏',
    description: '你对音乐番的理解已经达到专业级别！从轻松日常到深度剧情再到古典融合！',
    level: '四重音乐番大师',
    tags: ['全风格', '深度理解', '古典融合']
  },
  'BCDEG': {
    title: '孤独×GBC×MyGO×摇滚淑女特殊浓度',
    description: '你喜欢充满个性和深度的乐队故事与古典摇滚的融合！',
    level: '摇滚四重奏大师',
    tags: ['个性作品', '深度剧情', '古典摇滚']
  },
  'ABGH': {
    title: '轻音×摇滚淑女×上低音号四重奏',
    description: '你喜欢校园音乐、古典摇滚和热血吹奏乐的独特组合！',
    level: '音乐番四修大师',
    tags: ['校园日常', '古典摇滚', '吹奏乐']
  },

  // 五个及以上组合
  'ABCDEG': {
    title: '六重音乐番大师',
    description: '你就是音乐动画的化身！从校园乐队到古典摇滚无所不包！',
    level: '音乐番半神',
    tags: ['全系列', '深度理解', '古典融合']
  },
  'ABCDEFG': {
    title: '究极音乐番之神',
    description: '你就是音乐动画的化身！建议直接进入动画行业或组建自己的古典摇滚乐队！',
    level: '音乐番之神',
    tags: ['全能大师', '终极粉丝', '古典摇滚']
  },
  'ABCDEFGH': {
    title: '究极音乐番完全体',
    description: '你已经掌握了所有少女音乐动画的真谛！从轻音到吹奏乐无所不精！',
    level: '音乐番完全体',
    tags: ['全系列制霸', '终极理解', '音乐全能']
  }
};

// 获取标签颜色
const getTagColor = (tag) => {
  const colorMap = {
    '轻松日常': 'pink',
    '摇滚精神': 'red',
    '现实向': 'orange',
    '悬疑剧情': 'purple',
    '多乐队': 'cyan',
    '学园偶像': 'magenta',
    '古典音乐': 'gold',
    '古典摇滚': 'volcano',
    '大小姐': 'lime',
    '吹奏乐': 'geekblue',
    '青春成长': 'green',
    '音乐竞赛': 'blue'
  };
  return colorMap[tag] || 'blue';
};

// 处理未定义的组合
const getDefaultResponse = (keys) => {
  const nameMap = {
    'A': '轻音少女',
    'B': '孤独摇滚',
    'C': 'GBC',
    'D': 'MyGO/Ave Mujica',
    'E': 'BanG Dream系列',
    'F': 'LoveLive系列',
    'G': '摇滚乃是淑女爱好',
    'H': '吹响吧！上低音号'
  };

  const names = keys.split('').sort().map(k => nameMap[k]).join(' + ');
  const count = keys.length;

  let level = '';
  if (count === 3) level = '三重音乐番厨';
  else if (count === 4) level = '四重音乐番大师';
  else if (count === 5) level = '五重音乐番达人';
  else if (count === 6) level = '六重音乐番半神';
  else if (count === 7) level = '七重音乐番之神';
  else if (count === 8) level = '完全体音乐番厨';

  return {
    title: `独特音乐番组合 (${count}重)`,
    description: `你选择了特别的组合：${names}，这个搭配展现了你的独特品味！`,
    level: level || '特殊混合型',
    tags: ['独特组合', `${count}重搭配`, '稀有品味']
  };
};

const handleChange = () => {
  // 额外的处理逻辑
};

const showModal = () => {
  if (checkedList.value.length === 0) {
    message.warning('请至少选择一个番剧');
    return;
  }

  visible.value = true;
  const key = checkedList.value.sort().join('');

  // 如果没有匹配的内容，使用默认响应
  selectedContent.value = contentMap[key] || getDefaultResponse(key);

  // 更新对话框标题
  resultTitle.value = `你的少女乐队浓度是：${selectedContent.value.level}`;
};

const handleOk = () => {
  visible.value = false;
};
</script>

<template>
  <div class="content">
    <a-divider>选择追过的番剧</a-divider>
    <a-checkbox-group v-model:value="checkedList" @change="handleChange">
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <a-checkbox value="A">轻音少女</a-checkbox>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <a-checkbox value="B">孤独摇滚</a-checkbox>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <a-checkbox value="C">GBC(少女乐队的呐喊)</a-checkbox>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <a-checkbox value="D">MyGO/Ave Mujica</a-checkbox>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <a-checkbox value="E">BanG Dream系列</a-checkbox>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <a-checkbox value="F">LoveLive全系列</a-checkbox>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <a-checkbox value="G">摇滚乃是淑女爱好</a-checkbox>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <a-checkbox value="H">吹响吧！上低音号</a-checkbox>
        </a-col>
      </a-row>
    </a-checkbox-group>
    <a-button type="primary" @click="showModal" :disabled="!checkedList.length" class="submit-btn" style="margin-top: 20px;">
      检测少女乐队浓度
    </a-button>
    <a-modal v-model:visible="visible" :title="resultTitle" @ok="handleOk" width="650px" :footer="null">
      <div class="concentration-result">
        <h3>{{ selectedContent.title }}</h3>
        <p class="description">{{ selectedContent.description }}</p>
        <div class="level-info">
          <span class="level-label">浓度级别:</span>
          <span class="level-value">{{ selectedContent.level }}</span>
        </div>
        <div v-if="selectedContent.tags?.length" class="tags">
          <a-tag v-for="tag in selectedContent.tags" :key="tag" :color="getTagColor(tag)">
            {{ tag }}
          </a-tag>
        </div>
        <a-button type="primary" @click="handleOk" class="close-btn">了解</a-button>
      </div>
    </a-modal>
  </div>
</template>

<style scoped>

.concentration-result {
  padding: 20px;
  text-align: center;
}

.concentration-result h3 {
  color: #1890ff;
  margin-bottom: 20px;
  font-size: 22px;
}

.description {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 25px;
  color: #555;
}

.level-info {
  margin: 25px 0;
  padding: 15px;
  background: #f0f9ff;
  border-radius: 6px;
  display: inline-block;
}

.level-label {
  font-weight: bold;
  margin-right: 10px;
  font-size: 16px;
}

.level-value {
  color: #ff4d4f;
  font-size: 20px;
  font-weight: bold;
}

.tags {
  margin: 25px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.close-btn {
  margin-top: 20px;
  padding: 0 30px;
  height: 40px;
  font-size: 16px;
}
</style>