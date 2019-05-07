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
       <div class="pubuliu">
           <router-link to="/search" tag="div" class="search">输入书名、关键字</router-link> 
           <span class="iconfont icon-pubuliu" @click="handover"></span>
       </div>
       <div class="block">
          <dl-list v-for="item in Blockbuster" 
                :key="item.fiction_id"
                :img="item.cover"
                :title='item.title'
                :bookid="item.fiction_id"
                :classname='classname'
                >
                <div>
                       <p>{{item.authors}}</p> 
                       <p>{{item.summary}}</p>
                       <p>{{item.latest}}</p>
                </div>
                </dl-list>
        </div>
    </main>
</div>
    
</template>
<script>

export default {
    data(){
        return {
            Blockbuster:[],
            classname:'leftblock'
        }
    },
    created(){
        this.$ajax.get('/api/home').then(res=>{
             this.Blockbuster=res.data.items[2].data.data 
        })
    },
    methods:{
        handover(){
            this.classname=this.classname==='upblock'?"leftblock":'upblock'
        }
    }
}
</script>

<style scoped>
.pubuliu{
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    margin: 5px 0;
}
.search{
    width: 80%;
    
    border: 1px solid #ccc;
    text-indent: 24px;
    line-height: 35px;
    color: #ccc;
}
.pubuliu span{
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    border: 1px solid #ccc;
    display: inline-block;
}
</style>
