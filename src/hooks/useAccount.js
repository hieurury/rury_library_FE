import {
    ref
}                          from    'vue';

const accountData = ref(null);

const setAccountData = (data) => {
    accountData.value = data;
}

const getAccountData = () => {
    return accountData.value;
}

const removeAccountData = () => {
    accountData.value = null;
}

export {
    setAccountData,
    getAccountData,
    removeAccountData
}