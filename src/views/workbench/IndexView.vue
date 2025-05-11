<script lang="ts" setup>
import { useUserStore } from '@/store'

const userStore = useUserStore()

const hitokoto = ref('')

onMounted(() => {
  fetch('https://v1.hitokoto.cn')
    .then((res) => res.json())
    .then((data) => (hitokoto.value = data.hitokoto))
    .catch(() => (hitokoto.value = 'PHP 是世界上最好的语言！'))
})
</script>

<template>
  <AppPage :show-footer="true" min-w-375>
    <div min-w-375 flex-1>
      <n-watermark
        :content="userStore.name"
        :font-size="16"
        :height="128"
        :line-height="16"
        :rotate="-15"
        :width="192"
        :x-offset="12"
        :y-offset="28"
        cross
        selectable
      >
        <n-card rounded-10>
          <div flex items-center>
            <img :src="userStore.avatar" rounded-full width="60" />
            <div ml-20>
              <p text-16>Hello, {{ userStore.name }} ！</p>
              <n-gradient-text
                gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
                mt-5
                text-12
                op-60
              >
                {{ hitokoto }}
              </n-gradient-text>
            </div>
            <div ml-auto hidden items-center md:flex>
              <n-statistic :value="4" label="待办" w-80>
                <template #suffix> / 10</template>
              </n-statistic>
              <n-statistic label="Stars" ml-20 w-80>
                <a href="https://github.com/TheTNB/admin">
                  <img allt="stars" src="https://badgen.net/github/stars/TheTNB/admin" />
                </a>
              </n-statistic>
              <n-statistic label="Forks" ml-20 w-80>
                <a href="https://github.com/TheTNB/admin">
                  <img allt="forks" src="https://badgen.net/github/forks/TheTNB/admin" />
                </a>
              </n-statistic>
            </div>
          </div>
        </n-card>
      </n-watermark>

      <n-card :segmented="true" mt-15 rounded-10 size="small" title="项目">
        <template #header-extra>
          <n-button text type="primary"> 更多</n-button>
        </template>
        <div flex flex-wrap justify-around>
          <n-card
            v-for="i in 20"
            :key="i"
            size="small"
            title="耗子Admin"
            mb-10
            mt-10
            w-300
            flex-shrink-0
            cursor-pointer
            hover:card-shadow
          >
            <p op-60>
              一个基于 Vue3、Vite3、TypeScript、Pinia、Unocss、Naive UI 的轻量级后台管理模板
            </p>
          </n-card>
          <div h-0 w-300 />
          <div h-0 w-300 />
          <div h-0 w-300 />
          <div h-0 w-300 />
        </div>
      </n-card>
    </div>
  </AppPage>
</template>
