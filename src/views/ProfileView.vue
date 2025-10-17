<script setup>
import {
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NGrid,
    NGi,
    NThing,
    NSpace,
    NAvatar,
    NImage,
    NTag,
    NDivider,
    NCard,
    NQrCode,
}                               from    'naive-ui';
import {
    getAccountData
}                               from    '../hooks/useAccount';
import {
    getUserInfo
}                               from    '../services/apiUser'; 
import {
    ref,
    onMounted,
    computed
}                               from    'vue';
import {
    useRouter
}                               from    'vue-router'
import BookMarkControll         from    '../components/BookMarkControll.vue';

// ==================== GLOBAL VARIABLES =======================//
const API_BASE                  =       import.meta.env.VITE_API_BASE;
const router                    =       useRouter();

const userInfo                  =       ref(null);
onMounted(async () => {
    const userData = getAccountData();
    if(!userData) {
        router.push('/auth/login');
    } else {
        const rs = await getUserInfo(userData.MADOCGIA);
        userInfo.value = rs.data;
    }
    console.log(userInfo.value);
})
</script>



<template>
    <NLayout has-sider sider-placement="left">
        <NLayoutSider 
        bordered 
        collapse-mode="transform"
        :collapsed-width="120"
        :width="340" 
        show-trigger="arrow-circle">
            <h1>huhu</h1>
        </NLayoutSider>
        <NLayoutContent class="min-h-screen p-4">
            <NSpace vertical justify="start" align="" :class="`relative min-h-[250px] bg-[url('/banner/book-bg1.png')] bg-cover bg-center border border-gray-300 rounded-md p-4`">
                <NSpace class="absolute -bottom-10">
                    <NGrid cols="3" class="shadow-lg rounded-md min-w-md bg-slate-300/50 backdrop-blur-md border border-gray-300 p-4">
                            <NGi span="1">
                                <NSpace justify="center" class="h-full" vertical="true" align="center">
                                    <NImage width="100" src="/users/default-avatar.svg"></NImage>
                                </NSpace>
                            </NGi>
                            <NGi span="2">
                                <NThing class="relative p-2">
                                    <template #description>
                                        <h3 class="text-2xl text-gray-300 font-semibold uppercase">{{ `${userInfo?.HOLOT} ${userInfo?.TEN}` }}</h3>
                                        <NGrid cols="2">
                                            <NGi span="1">
                                                <NP class="text-gray-300">
                                                    Giới tính: {{ userInfo?.PHAI ? 'Nam' : 'Nữ' }}
                                                </NP>
                                            </NGi>
                                        </NGrid>
                                        <NDivider />
                                        <NTag type="info">{{ userInfo?.GOI?.TenGoi }}</NTag>
                                        <BookMarkControll 
                                        :img="userInfo?.GOI?.HuyHieu" 
                                        :children="{width: '50px'}"
                                        :position="{
                                            top: '0px',
                                            right: '0px'
                                        }"/>
                                    </template>
                                </NThing>
                            </NGi>
                        </NGrid>
                </NSpace>
            </NSpace>
            <NSpace class="mt-12"> 
                
            </NSpace>
        </NLayoutContent>
    </NLayout>
</template>


<style scoped>

</style>