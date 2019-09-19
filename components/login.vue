<template>
  <div>
    <div class="logo">
        <a href="">
            <img src="" alt="">
        </a>
    </div>
    <div class="container loginBox justify-content mt-5 p-5">
        <div class="loginHeader mb-5">
            <div class="nav mt-5" v-if="Tag==1">
                <button class="btn btn-lg border-bottom w-50 btn-success">登陸</button>
                <button class="btn btn-lg border-bottom w-50" @click="tag">注冊</button>
            </div>
            <div class="nav mt-5" v-else>
                <button class="btn btn-lg border-bottom w-50" @click="tag">登陸</button>
                <button class="btn btn-lg border-bottom w-50  btn-success">注冊</button>
            </div>
        </div>
        <div class="loginbody" v-if="Tag==1">
            <p class="text-danger">{{logerr}}</p>
            <input type="text" class="container form-control mb-3" v-model="username" placeholder="用户名">
            <input type="password" class="container form-control mb-3" v-model="userpassword" @keyup.enter="login" placeholder="密码">
            <button class="container btn btn-lg btn-primary" @click="login">登录</button>
        </div>
        <div class="loginbody" v-else>
            <p class="text-danger">{{regerr}}</p>
            <input type="text" class="container form-control mb-3" v-model="username" placeholder="用户名">
            <input type="password" class="container form-control mb-3" v-model="userpassword"  @keyup.enter="register" placeholder="密码">
            <button class="container btn btn-lg btn-primary" @click="register">注册</button>
        </div>
    </div>

</div>
</template>

<script>

export default {

    data:function(){
        return {
            Tag:this.$route.params.tag,
            username:'',
            userpassword:'',
            regerr:'',
            logerr:'',
            userid:'',
        }
    },
    methods:{
        tag(){
            this.Tag=!this.Tag;
        },
        login(){
            var data={
                    username:this.username,
                    userpassword:this.userpassword
                    };
            this.$ajax({
                url:'http://localhost/api/login.php',
                method:'POST',
                data:this.qs.stringify(data),
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            }).then(res=> {
                if(res.data.result == true) {
                    this.$router.replace({path:'/' })
                    };
                this.logerr=res.data.result;

            })
            
        },
        register(){
            var data={
                    username:this.username,
                    userpassword:this.userpassword
                    };
            this.$ajax({
                url:'http://localhost/api/register.php',
                method:'POST',
                data:this.qs.stringify(data),
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            }).then(res=> {
                this.regerr=res.data.result;
            })
            this.userpassword='';
            this.username='';
        },
    },

}
</script>

<style lang="scss" scoped>
    .loginBox{
        width: 400px;
    }
</style>>
