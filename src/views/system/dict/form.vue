<script setup>
import { ref } from 'vue';

const model = {
    id: null,
    name: null,
    code: null,
    parent: null,
    level: null,
    value: null,
    enabled: false,
    remark: null
};
const form = ref(Object.assign({}, model));

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

const formRef = ref();

function handleSave() {
    console.log(formRef.value.validate);
    console.log('Save:', JSON.parse(JSON.stringify(form.value)));
}
</script>

<template>
    <el-form
        ref="formRef"
        :model="form"
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
            <el-button type="primary" @click="handleSave">保存</el-button>
            <el-button>重置</el-button>
        </el-form-item>
    </el-form>
</template>
