<script setup>
import { reactive } from 'vue';
import SidebarItem from './SidebarItem.vue';
import { useRouter, useRoute } from 'vue-router';

const { options: { routes }} = useRouter();
const available = routes.filter(({ meta }) => !meta?.hidden);
const { path: activeMenu } = useRoute();

const [menuBg, textColor, activeTextColor] = ['#181915', '#FFFFFF', '#FFD04B'];

const scrollbar = reactive({ height: 0 });
const handleResize = height => (scrollbar.height = height);
</script>

<template>
    <el-scrollbar
        v-resize="handleResize"
        :height="scrollbar.height"
        :wrap-style="`background-color: ${menuBg};`"
    >
        <el-menu
            :background-color="menuBg"
            :text-color="textColor"
            :active-text-color="activeTextColor"
            :router="true"
            :default-active="activeMenu"
            :style="{ borderRight: `1px solid ${menuBg}` }"
        >
            <SidebarItem
                v-for="item in available"
                :key="item.path"
                :data="item"
                :base-path="item.path"
            />
        </el-menu>
    </el-scrollbar>
</template>
