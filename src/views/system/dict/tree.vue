<script setup>
import { reactive } from 'vue';
import { Dict } from '@/api/system';

const emit = defineEmits(['update:modelValue']);

const state = reactive({ data: [] });
Dict.tree().then(({ data }) => (state.data = data));
</script>

<template>
    <el-tree
        :data="state.data"
        :props="{ label: 'name' }"
        node-key="id"
        default-expand-all
        @node-click="emit('update:modelValue', $event)"
    />
</template>
