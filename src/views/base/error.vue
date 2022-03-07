<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const title = route.params.title || '404';
</script>

<template>
    <el-result
        icon="error"
        :title="title"
        sub-title="OOPS! Page lost..."
    >
        <template #extra>
            <el-button type="primary">
                <router-link to="/">Go to Home</router-link>
            </el-button>
        </template>
    </el-result>
</template>
