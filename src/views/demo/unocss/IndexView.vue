<template>
  <CommonPage :show-footer="true">
    <p>
      文档：<a c-blue hover-decoration-underline href="https://uno.antfu.me/" target="_blank"
        >https://uno.antfu.me/</a
      >
    </p>
    <p>
      playground：
      <a c-blue hover-decoration-underline href="https://unocss.antfu.me/play/" target="_blank">
        https://unocss.antfu.me/play/
      </a>
    </p>

    <div mt-20 w-350 f-c-c flex-col>
      <div flex flex-wrap justify-around b-1 rounded-10 p-10 bc-ccc>
        <div m-20 h-50 w-50 f-c-c b-1 rounded-5 p-10>
          <span h-6 w-6 rounded-3 bg-black dark:bg-white />
        </div>
        <div m-20 h-50 w-50 flex justify-between b-1 rounded-5 p-10>
          <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          <span h-6 w-6 self-end rounded-3 bg-black dark:bg-white />
        </div>
        <div m-20 h-50 w-50 flex justify-between b-1 rounded-5 p-10>
          <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          <span h-6 w-6 self-center rounded-3 bg-black dark:bg-white />
          <span h-6 w-6 self-end rounded-3 bg-black dark:bg-white />
        </div>
        <div m-20 h-50 w-50 flex justify-between b-1 rounded-5 p-10>
          <div flex-col justify-between>
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          </div>
          <div flex-col justify-between>
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          </div>
        </div>
        <div m-20 h-50 w-50 flex-col items-center justify-between b-1 rounded-5 p-10>
          <div w-full flex justify-between>
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          </div>
          <div h-6 w-6 rounded-3 bg-black dark:bg-white />
          <div w-full flex justify-between>
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          </div>
        </div>
        <div m-20 h-50 w-50 flex-col justify-between b-1 rounded-5 p-10>
          <div w-full flex justify-between>
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          </div>
          <div w-full flex justify-between>
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          </div>
          <div w-full flex justify-between>
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          </div>
        </div>
      </div>
      <h2 mt-10 text-14 color-gray font-normal>Flex 骰子</h2>
    </div>
  </CommonPage>
</template>
