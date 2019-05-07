<template>
     <header>
         <router-link to="/" v-if="back" tag="b"><i class="iconfont icon-fanhui"></i></router-link>
        <slot></slot>
         
      
    </header>
</template>
<script>
export default {
    props:{
        back:{
            type:Boolean,
            required:true
        },
        backs:{
            type:Boolean,
            required:true
        }
    }
}
</script>

<style>
header {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #eee;
    padding: 0 15px;
}
header>ul{
    width: 75%;
    display: flex;  
}
header>ul li{
    flex: 1;
    text-align: center;  
}
header>ul li.router-link-exact-active{
    color: orangered;
}
header span{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right:20px;
}
</style>
