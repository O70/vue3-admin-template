<script setup>
import { reactive } from 'vue';
import { Navbar, Sidebar, AppMain } from './components';

const scrollbar = reactive({ height: 0 });
const handleResize = height => (scrollbar.height = height - 60);
</script>

<template>
    <el-container class="layout-container">
        <el-aside>
            <Sidebar />
        </el-aside>
        <el-container>
            <el-header>
                <Navbar />
            </el-header>
            <el-main>
                <el-scrollbar v-resize="handleResize" :height="scrollbar.height">
                    <div class="scroll-content">
                        <AppMain />
                    </div>
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
    .el-header {
        line-height: 60px;
        padding: 0;
    }

    .el-main {
        padding: 0;
    }

    .scroll-content {
        padding: 20px;
    }
}
</style>
