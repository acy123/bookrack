<template>
    <div class="wrap">
        <div class="top">
            <div class="iconfont icon-xiaomi"></div>
            <p>小米账户登录</p>
        </div>
        <section>
            <form action="javascript">
                <input type="text" placeholder="邮箱/手机号/小米Id" v-model="username">
                <input type="password" placeholder="密码" v-model="pwd"> 
                 <button type="button" @click="ringUp">登录</button>
                 <button type="button">手机短信登录/注册</button>     
            </form>
           <div class="register"><span>注册</span>|<span>忘记密码</span></div>
        </section>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            pwd:''
        }
    },
    methods:{
        ringUp(){
            if(this.username!=''&&this.pwd!=''){
                 this.$ajax.post('/api/login',{
                    username:this.username,
                    pwd:this.pwd
                }).then(res=>{   
                    if(res.data.code===1){
                        localStorage.setItem('user',res.data.username);
                        this.$router.push('/')
                    }else{
                        alert(res.data.msg);
                    }
                })
            }
        }
    }
}
</script>

<style>
.top{
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.top .iconfont{
    width: 50px;
    height: 50px;
    background: orangered;
    text-align: center;
    line-height: 50px;
    font-size: 40px;
    color: #fff;
    border-radius: 8px;
}
.top p{
    font-weight: bold;
    margin-top:10px; 
}
section{
    flex: 1;
    padding: 0 20px;
}
form{
    width: 100%;

}
form input{
    width: 100%;
    height: 35px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;   margin-top: 5px;
}
form button{
    width: 100%;
    height: 35px;
    outline: none;
    border: none;
    border: 1px solid #ccc;
    background: #fff;
    margin-top: 15px;
    border-radius: 7px;
}
.register{
    margin: 20px 0;
    width: 100%;
    text-align: center;
    font-size: 14px;
}
.register span{
    padding: 0 5px;
    font-size: 14px;
}
</style>
