<script setup>
import {
    NGrid,
    NGi,
    NThing,
    NSpace,
    NAvatar,
    NImage,
    NTag,
    NDivider,
}                               from    'naive-ui';
import {
    getAccountData
}                               from    '../../hooks/useAccount';
import {
    getUserInfo
}                               from    '../../services/apiUser'; 
import {
    ref,
    onMounted,
    computed
}                               from    'vue';
import {
    useRouter
}                               from    'vue-router'
import BookMarkControll         from    '../../components/BookMarkControll.vue';


// ==================== GLOBAL VARIABLES =======================//
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
<NSpace justify="center" align="center" class="min-h-screen">
    <NGrid cols="3" class="shadow-lg rounded-md min-w-md bg-slate-700">
        <NGi span="1">
            <NSpace justify="center" align="center">
                <NImage width="100" src="/users/default-avatar.svg"></NImage>
            </NSpace>
        </NGi>
        <NGi span="2">
            <NThing class="relative p-2">
                <template #description>
                    <h3 class="text-2xl text-gray-300 font-semibold uppercase">{{ `${userInfo?.HOLOT} ${userInfo?.TEN}` }}</h3>
                    <NDivider />
                    <NTag type="warning">{{ userInfo?.GOI?.TenGoi }}</NTag>
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
</template>


<style scoped>

</style>