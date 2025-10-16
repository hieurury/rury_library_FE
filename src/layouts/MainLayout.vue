<script setup>
import { 
    NAvatar, 
    NSpace, 
    NConfigProvider, 
    darkTheme,
    NGradientText,
    NSwitch
} from 'naive-ui';
import { isDark, toggleDark } from '../hooks/useDark';
</script>


<template>
    <header>
        <nav class="bg-gradient-to-r from-white to-slate-200 shadow 
        dark:from-gray-800 dark:to-gray-900
        lg:py-4 lg:text-lg lg:px-[10%]
        text-gray-700">
            <NSpace justify="space-between" align="center">
                <NSpace align="center">
                    <NAvatar
                        round
                        size="large"
                        src="/logo.png"
                    />
                    <div class="flex items-center text-2xl">
                        <NGradientText type="warning"
                        >RuryLib</NGradientText>
                    </div>
                </NSpace>
                <NSpace>
                    <NButton type="info">
                        <RouterLink to="/register">Đăng ký</RouterLink>
                    </NButton>
                </NSpace>
                <NSpace class="uppercase font-semibold dark:text-gray-300" size="large" align="center">
                    <router-link to="/">Trang chủ</router-link>
                    <router-link to="/about">Danh mục</router-link>
                    <NSwitch v-model:value="isDark">
                        <template #icon> 
                            <span v-if="isDark">
                                <i class="fa-solid fa-sun"></i>
                            </span>
                            <span v-else>
                                <i class="fa-solid fa-moon"></i>
                            </span>
                        </template>
                    </NSwitch>
                </NSpace>
            </NSpace>
        </nav>
    </header>
    <main>
        <router-view />
    </main>
    <footer></footer>
</template>

<style scoped>

</style>