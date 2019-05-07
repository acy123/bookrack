<template>
    <div class="wrap">
        <my-header :back='true' :backs="true">
      <span>{{$route.query.title}}</span>
      <router-link to="/" tag="b"><i class="iconfont icon-zhuiocn02"></i></router-link>
        </my-header>
        
            <div class="loading" v-if="loadopen">loading...</div>
            <template v-if="!loadopen">
                <main  v-if="item.code===0">
                    {{item.msg}}
                </main>
                <main v-else>
                    <dl-list
                        :key="item.item.fiction_id"
                        :img="item.item.cover"
                        :title='item.item.title'
                        :bookid="item.item.fiction_id"
                        classname='leftblock'
                        >
                        <div class="late">
                            <div>{{item.item.authors}}</div> 
                            <div>价格:{{item.item.price}}书币/1000字</div>
                            <div>评分:{{item.item.score}}</div>
                        </div>
                    </dl-list>
                    <div class="count">
                        <div class="btn"><button @click="reading">开始阅读</button><button>下载</button></div>
                        <p class="cont">{{item.item.content}}</p>
                        <div class="hots">最新更新:{{item.item.latest}}</div>
                    </div>
                    <div class="tally">
                        <h4>类别标签</h4>
                        <span>都市</span>
                        <span>李一飞</span>
                        <span>许盈盈</span>
                    </div>
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
                </main>
            </template>
        </div>
    
</template>
<script>
export default {
    data(){
        return {
            item:null,
            loadopen:true,
            weekHot:[]
        }
    },
    props:{
        bookid:{
            type:String
        }
    },
    watch:{
        '$route'(val){ 
            this.getdata(val.params.bookid)
        }
    },
    created(){
        this.getdata(this.bookid)

        this.$ajax.get('/api/home').then(res=>{
            this.weekHot=res.data.items[2].data.data;
        })
    },
    methods:{
        getdata(id){
            this.$ajax.get('api/retail?id='+id).then(res=>{
                this.item=res.data;
                this.loadopen=false
            });
        },
        reading(){       
             this.$router.push('/ready')     
        }
    }
}
</script>
<style scoped>
header span{
    width: 60%;
    display: inline-block;
}

.leftblock{
    display: flex;
    height: 160px;
     padding: 15px;
}
.leftblock dd .late div{
    font-size: 14px;
    margin-top: 10px;
}
.btn{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
     padding: 15px;
}
.btn button{
    width: 45%;
    height: 45px;
    outline: none;
    border: none;
    background: #fff;
    border: 1px solid #ccc;
}
.cont{
    width: 100%;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    line-height: 30px;
     padding: 15px;
}
.hots{
    height: 40px;
    line-height: 35px;
    border-bottom: 5px solid #eee;
    text-align: center;
}
.tally{
    width: 100%;
    height: 80px;
    padding: 0 15px;
    border-bottom: 5px solid #eee;
    margin-bottom:8px; 
}
.tally h4{
 height: 35px;
 line-height: 35px;   
}
.tally span{
    display: inline-block;
    border: 1px solid pink;
    padding: 5px 8px;
    font-size: 14px;
}
</style>

