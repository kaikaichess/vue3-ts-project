<template>
    <div class="login-box">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="70px"
            class="demo-ruleForm">
            <h2 class="title">后台管理系统</h2>
            <el-form-item label="账号" prop="username">
                <el-input v-model="ruleForm.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)" class="loginBtn">登录</el-button>
                <el-button @click="resetForm()" class="loginBtn">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import type { FormInstance } from 'element-plus'
import { LoginData } from '../type/login'
import { login } from '../request/api'
export default defineComponent({
    setup() {
        const data = reactive(new LoginData())
        const rules = {
            username: [
                { required: true, message: '请输入账号', trigger: 'blur' },
                { min: 3, max: 10, message: '账号的长度在 3~10 之间', trigger: 'blur' },
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 3, max: 10, message: '密码长度在 3~10 之间', trigger: 'blur' },
            ]
        }
        // 登录
        const ruleFormRef = ref<FormInstance>()
        const submitForm = async (formEl: FormInstance | undefined) => {
            if (!formEl) return
            // 对表单的内容进行验证，valid是布尔值，为true表示验证成功，反之则为失败
            await formEl.validate((valid, fields) => {
                if (valid) {
                    // console.log('submit!')
                    login(data.ruleForm).then((res) => {
                        console.log(res);
                        
                    })
                } else {
                    console.log('error submit!', fields)
                }
            })
        }
        // 重置
        const resetForm = () => {
            data.ruleForm.username = ""
            data.ruleForm.password = ""
        }
        return { ...toRefs(data), rules, resetForm, ruleFormRef, submitForm };
    },
});
</script>

<style lang="scss" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background: url("../assets/bg.webp");
    padding: 1px;
    text-align: center;

    h2 {
        margin-bottom: 10px;
    }

    .demo-ruleForm {
        width: 500px;
        background-color: #fff;
        margin: 200px auto;
        padding: 40px;
        border-radius: 20px;
    }

    .loginBtn {
        width: 48%;
    }
}
</style>
