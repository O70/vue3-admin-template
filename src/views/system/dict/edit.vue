<script setup>
import { ref, reactive, watch } from 'vue';
import { Dict } from '@/api/system';

const props = defineProps({
    entity: {
        type: Object,
        default: null
    }
});

const model = {
    id: null,
    name: null,
    code: null,
    parent: null,
    parentId: null,
    level: null,
    value: null,
    enabled: false,
    remark: null
};
const form = reactive(Object.assign({}, model));

watch(() => props.entity, ({
    id,
    name,
    code,
    parent,
    level,
    value,
    enabled,
    remark
}) => Object.assign(form, {
    id,
    name,
    code,
    parent: parent?.name ?? null,
    parentId: parent?.id ?? null,
    level,
    value,
    enabled,
    remark
}));

const items = [
    [
        { prop: 'name', label: '名称' },
        { prop: 'code', label: '编码' }
    ],
    [
        { prop: 'parent', label: '父级', disabled: true },
        { prop: 'level', label: '层级' }
    ],
    [
        { prop: 'value', label: '值' },
        { prop: 'enabled', label: '启用', type: 'switch' }
    ]
];

const rules = {
    name: [
        { required: true, message: '请输入名称' },
        { max: 150, message: '内容过长' }
    ],
    code: [
        { required: true, message: '请输入编码' },
        { max: 150, message: '内容过长' }
    ],
    level: [
        { required: true, message: '请输入层级' },
        { max: 150, message: '内容过长' }
    ],
    remark: { max: 150, message: '内容过长' }
};

const formRef = ref();
const loading = ref(false);

function handleSave() {
    formRef.value.validate(valid => valid && (() => {
        loading.value = true;
        const { parentId: id, ...other } = form;
        const data = Object.assign(other, id ? { parent: { id }} : null);
        Dict.save(data).finally(() => (loading.value = false));
    })());
}
</script>

<template>
    <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        :label-width="140"
        label-suffix=":"
    >
        <el-row
            v-for="(row, ri) in items"
            :key="`row-${ri}`"
            :gutter="15"
        >
            <el-col
                v-for="(col, ci) in row"
                :key="`col-${ri}-${ci}`"
                :span="12"
            >
                <el-form-item :prop="col.prop" :label="col.label">
                    <el-switch
                        v-if="col.type === 'switch'"
                        v-model="form[col.prop]"
                    />
                    <el-input
                        v-else
                        v-model.trim="form[col.prop]"
                        :disabled="col.disabled"
                        clearable
                    />
                </el-form-item>
            </el-col>
        </el-row>

        <el-form-item prop="remark" label="备注">
            <el-input
                v-model.trim="form.remark"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4 }"
            />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" :loading="loading" @click="handleSave">保存</el-button>
            <el-button>重置</el-button>
        </el-form-item>
    </el-form>
</template>
