<script setup>
import { reactive, watch } from 'vue';
import DictTree from './tree.vue';
import DictEdit from './edit.vue';

const state = reactive({
    checked: null,
    entity: null
});

watch(() => state.checked, value => (state.entity = value));
</script>

<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <DictTree v-model="state.checked" />
        </el-col>
        <el-col :span="18">
            <DictEdit v-model:entity="state.entity" />
        </el-col>
    </el-row>
</template>
