<style lang="less" scoped>
.login{

    width: 100%;
    height: 100%;
    background-color: #F8F8FF;
    position: relative;

    .title{

        font-size: 30px;
        position: absolute;
        top: 120px;
        left: 50%;
        transform: translateX(-50%);
    }

    .main{

        position: absolute;
        width: 600px;
        height: 350px;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        border-radius: 10px;
        background-color: rgba(220, 220, 220, 0.4);

        .userName{

            margin-top: 80px;
            margin-left: 100px;

            .userTitle{

                font-size: 15px;
            }
        }

        .passWord{

            margin-top: 60px;
            margin-left: 100px;

            .passTitle{

                font-size: 15px;
            }
        }

        .toLogin{

            width: 500px;
            height: 100px;
            margin-top: 30px;
            margin-left: 60px;

            .success{

                width: 100%;
                height: 45px;
                font-size: 18px;
            }
        }
    }
}
</style>

<template>
    <div class="login">
        <div class="title">后台管理系统</div>
        <div class="main">
            <p class="userName">
                <span class="userTitle">账 号 : </span>
                <Input v-model="userName" placeholder="请输入账户名" clearable style="width: 360px" />
            </p>
            <p class="passWord">
                <span class="passTitle">密 码 : </span>
                <Input v-model="passWord" type="password" placeholder="请输入密码" clearable style="width: 360px" />
            </p>
            <div class="toLogin">
                <Button class="success" @click="loginTo" type="success">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{

            userName:"",
            passWord:""
        }
    },
    methods: {
        loginTo(){
        
            if(this.userName=="" || this.passWord==""){

                this.$Message.info('账号或密码未填写 !');
                return
            }
            if(this.userName=="user" && this.passWord=="123456"){

                this.$Message.info('登录成功 !');
                this.$router.push("/home")
            }else{

                this.$Message.info('账号或密码错误 !');
            }
        }
    },
}
</script>