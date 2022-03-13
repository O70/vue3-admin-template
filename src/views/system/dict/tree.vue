<script setup>
import { reactive } from 'vue';
import { Dict } from '@/api/system';

// Dict.list(
//     {
//         // id: 'd5f51227-9a18-4ec9-9f4c-9f97ac644981',
//         // name: '科',
//         // code: 'DICT_SEX_MAN',
//         // level: '000002',
//         // parentId: 'd557e48a-d8ba-48df-8b5a-48b5efdc0c20',
//         parentId: 'd0042ad3-7744-4e4e-8e88-124ba333ac63',
//         // enabled: true
//     }
// ).then(data => console.log('...', data));

Dict.children('DICT_SYSTEM').then(data => console.log('...', data));

const emit = defineEmits(['update:modelValue']);

const state = reactive({ data: [] });
// Dict.tree().then(({ data }) => (state.data = data));
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
