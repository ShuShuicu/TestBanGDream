<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const handleMenuClick = (e) => {
  router.push(e.key);
};

const menuItems = [
  {
    label: '首页',
    key: '/',
  },
  {
    label: '答题',
    key: '/answer',
  },
  // {
  //   label: '人格测试',
  //   key: '/personality',
  // },
  {
    label: '关于',
    key: '/about',
  },
]
</script>

<template>
  <main>
    <a-card>
      <div style="text-align: center;">
        <a-typography-title :level="2">少女乐队浓度测试</a-typography-title>
        <a-typography-title :level="4" style="margin-top: -20px;">(TestBanGDream)</a-typography-title>
      </div>
      <p style="text-align: center;">
        <a-typography-link href="https://space.bilibili.com/435502585" target="_blank">
          哔哩哔哩@Tomoriゞ
        </a-typography-link> | 同好群: <a-typography-text mark>574888080</a-typography-text>
      </p>
      <a-menu mode="horizontal" @click="handleMenuClick" :defaultSelectedKeys="['/']">
        <a-menu-item v-for="item in menuItems" :key="item.key">{{ item.label }}</a-menu-item>
      </a-menu>
      <RouterView />
    </a-card>
  </main>
</template>