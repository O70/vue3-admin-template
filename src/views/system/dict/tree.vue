<script setup>
import { reactive } from 'vue';
import { Dict } from '@/api/system';

const collect = reactive({ data: [] });
Dict.tree().then(({ data: [data] }) => (collect.data = [data]));

function handleNodeClick(data) {
    console.table(data)
}
</script>

<template>
    <el-tree
        :data="collect.data"
        :props="{ label: 'name' }"
        node-key="id"
        default-expand-all
        @node-click="handleNodeClick"
    />
</template>
