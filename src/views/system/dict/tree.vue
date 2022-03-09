<script setup>
import { Dict } from '@/api/system';
const dicts = await Dict.tree();

console.log('dicts:', dicts)
</script>

<template>
    Dict Tree
</template>
