<script setup>
import {
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NSpace,
    NSwitch
}                            from    'naive-ui';
import {
    isDark
}                            from    '../hooks/useDark';
</script>


<template>
    <div>
        <NLayout>
            <NLayoutHeader bordered>
                <NSpace justify="space-between" class="p-4">
                    <NSpace>
                        <h2 class="dark:text-white text-black text-2xl uppercase font-semibold">Profile</h2>
                    </NSpace>
                    <NSpace>
                        <NSwitch v-model:value="isDark">
                            <template #icon>
                                <i v-if="!isDark"class="fa-solid fa-sun"></i>
                                <i v-if="isDark"class="fa-solid fa-moon"></i>
                            </template>
                        </NSwitch>
                    </NSpace>
                </NSpace>
            </NLayoutHeader>
            <NLayoutContent>
                <router-view />
            </NLayoutContent>
            <NLayoutFooter></NLayoutFooter>
        </NLayout>
    </div>
</template>


<style scoped>

</style>