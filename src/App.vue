<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const handleMenuClick = (e) => {
  router.push(e.key);
};
</script>

<template>
  <main>
    <a-card>
      <a-typography-title :level="2" style="text-align: center;">少女乐队浓度测试</a-typography-title>
      <p style="text-align: center;">
        <a-typography-link href="https://space.bilibili.com/435502585" target="_blank">
          哔哩哔哩@Tomoriゞ
        </a-typography-link> | 同好群: <a-typography-text mark>574888080</a-typography-text>
      </p>
      <a-menu mode="horizontal" @click="handleMenuClick" :defaultSelectedKeys="['/']">
        <a-menu-item key="/">首页</a-menu-item>
        <a-menu-item key="/about">关于</a-menu-item>
      </a-menu>
      <RouterView />
    </a-card>
  </main>
</template>