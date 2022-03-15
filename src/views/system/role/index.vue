<script setup>
import { Role } from '@/api/system';

Role.page({
    page: 3,
    size: 50,
    params: {
        name: 'xxx',
        code: 'XXXX'
    }
}).then((data) => console.log(data));
</script>

<template>
    Roles
</template>
