<template>
     <dl class="dilist" :class='classname' @click="$router.push(`/details/${bookid}?title=${title}`)">
        <dt><img v-lazy="img" alt=""></dt>
        <dd>
            <h4>{{title}}</h4>
            <slot v-if="classname==='leftblock'"></slot>
        </dd>
    </dl>
   
</template>
<script>
export default {
    props:{
        title:String,
        bookid:{
            type:Number,
            required:true,
        },
        img:String,
        classname:String
    }
}
</script>
<style>
.dilist{
    padding:0 5px;
    
}
.upblock{
    width: 33%;
    height: 180px;
    display:inline-block;
    text-align: center;
}

.upblock dt{
    width: 100px;
    height: 120px;
}
.upblock dt img{
    width: 100px;
    height: 120px;
}
.upblock dd{
    width: 100%;
    height: 60px;
    margin-top: 5px;
    overflow: hidden;
}
.leftblock{
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: space-between;
}
.leftblock dt{
    width: 120px;
    height: 150px;

}

.leftblock dt img{
    width: 100%;
    height: 100%;
}
.leftblock dd{
    flex: 1;
    padding: 0 13px;
}
.leftblock dd p{
    margin:10px 0;
    font-size: 14px;
}
.leftblock dd p:nth-child(2){
    font-size: 12px;
    text-indent: 2em;
}
</style>

