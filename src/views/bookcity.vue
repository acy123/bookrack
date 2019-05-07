<template>
<div class="wrap">
   <my-header :back='false' :backs='false'>
       <ul>
            <router-link to="/bookcity" tag="li">书城</router-link>
            <router-link to="/bookshelf" tag="li">书架</router-link>
        </ul>
          <router-link to="/use" tag="span"><i class="iconfont icon-icon_addperson"></i></router-link>
   </my-header>
    <main>
        <router-link to="/search" tag="div" class="search">输入书名、关键字</router-link>
        <div class="swiper-container" ref='swiper'>
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="val in swiperList" :key="val.id">
                    <img :src="val.ad_pic_url" alt="">
                </div>
            </div>
        </div>
        <div class="list">
            <span v-for="item in list" :key="item.id">{{item.title}}</span>
        </div>
        <div class="block">
            <h3>本周最火</h3>
            <div>
                <dl-list v-for="item in weekHot" 
                :key="item.fiction_id"
                :img="item.cover"
                :title='item.title'
                :bookid="item.fiction_id"
                classname='upblock'
                >
                </dl-list>
            </div>
        </div>
        <div class="block">
            <h3>重磅推荐</h3>
            <div>
                <dl-list v-for="item in Blockbuster" 
                :key="item.fiction_id"
                :img="item.cover"
                :title='item.title'
                :bookid="item.fiction_id"
                classname='leftblock'
                >
                <div>
                       <p>{{item.authors}}</p> 
                       <p>{{item.summary}}</p>
                       <p>{{item.latest}}</p>
                </div>
                </dl-list>
            </div>
        </div>
    </main>
</div>
    
</template>
<script>
import Swiper from 'swiper';
let list=[{title:'限免',id:0},{title:'女生',id:1},{title:'男生',id:2},{title:'分类',id:3}]
export default {
    data(){
        return{
            swiperList:[],
            list,
            weekHot:[],
            Blockbuster:[]
        }
    },
    created(){
        this.$ajax.get('/api/home').then(res=>{
           this.swiperList=res.data.items[0].data.data;
           this.weekHot=res.data.items[1].data.data;
           this.Blockbuster=res.data.items[2].data.data

           this.$nextTick(()=>{
               new Swiper(this.$refs.swiper,{
                   autoplay:true,
                   loop:true
               })
           })
        })
    }
}
</script>

<style scoped>
.search{
    width: 90%;
    margin: 5px 5%;
    border: 1px solid #ccc;
    text-indent: 24px;
    line-height: 35px;
    color: #ccc;
}
.swiper-slide img{
    width: 100%;
    height: 100%;
}
.list{
    width: 100%;
    height: 50px;
    display: flex;
    background: #eef;
    font-size: 14px;
    
}
.list>span{
    flex:1;
    text-align: center;
    line-height: 50px;
}
.block{
    border-top: 8px solid #eee;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding:0 10px;
}
.block div{
    margin-top:10px;
}
h3 {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ccc;
    border-left: 3px solid orangered;
    line-height: 40px;
    text-indent: 1em;
}
</style>
