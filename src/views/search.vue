<template>
    <div class="wrap">
       <my-header :back='true' :backs='false'>
       <form>
           <input type="text"><button type="button">搜索</button>
       </form>
   </my-header>
    </div>
</template>

<style scoped>
form{
    width:90%;
    height: 30px;
   border:1px solid #ccc;
}
 input{
    width: 80%;
    height: 100%;
    outline: none;
    border: 0;
}
form button{
    width: 20%;
    height: 100%;
    outline:none;
    border:0;
    background: none;
}

</style>
