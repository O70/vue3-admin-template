<script setup>
import { ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { User, Lock } from '@element-plus/icons-vue';
import encryption from '@/utils/encryption';

const router = useRouter();
const route = useRoute();
const store = useStore();

// const form = reactive({ username: '13677889091', password: '111111' });
const form = reactive({ username: '13312345678', password: '111111' });
const loading = ref(false);

function handleLogin() {
    loading.value = true;
    console.log(encryption(form).replaceAll('Bearer ', ''));
    store.dispatch('user/signin', encryption(form))
        // .then(() => router.push(route.query.redirect ?? '/'))
        .then(() => console.log('redirect...'))
        .catch(error => console.error('Signin error:', error))
        .finally(() => (loading.value = false));
}
</script>

<template>
    <el-row class="login-container">
        <el-col :span="8" :push="8" style="top: 20vh;">
            <h3 class="title">Login Form</h3>

            <el-form
                :model="form"
                class="login-form"
                auto-complete="on"
                label-position="left"
                size="large"
            >
                <el-form-item prop="username">
                    <el-input
                        v-model="form.username"
                        placeholder="Username"
                        name="username"
                        type="text"
                        tabindex="1"
                        auto-complete="on"
                        :prefix-icon="User"
                    />
                </el-form-item>

                <el-form-item prop="password">
                    <el-input
                        v-model="form.password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        tabindex="2"
                        auto-complete="on"
                        :prefix-icon="Lock"
                    />
                </el-form-item>

                <el-button
                    type="primary"
                    style="width:100%;"
                    color="#373835"
                    :loading="loading"
                    @click="handleLogin"
                >
                    Login
                </el-button>
            </el-form>

            <div class="signup">
                <el-space>
                    <el-link type="info" href="/signup/org" target="_blank">单位注册</el-link>
                    <el-link type="info" href="/signup/user" target="_blank">个人注册</el-link>
                </el-space>
            </div>
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped>
$bg:#282923;
$light_gray:#fff;
$cursor: #fff;

.login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
    }

    .el-input {

        :deep(input) {
            background: transparent;
            -webkit-appearance: none;
            color: $light_gray;
            caret-color: $cursor;

            &:-webkit-autofill {
                box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-text-fill-color: $cursor !important;
            }
        }
    }

    .signup {
        margin-top: 10px;
        text-align: right;
    }
}
</style>
