<script setup>
import DictTree from './tree.vue';
import DictForm from './form.vue';
</script>

<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <DictTree />
        </el-col>
        <el-col :span="18">
            <DictForm />
        </el-col>
    </el-row>
</template>

<style scoped>
.el-col:nth-child(1) {
    border: 1px solid red;
}
</style>
