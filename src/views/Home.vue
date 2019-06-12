<style lang="less">
.home{

    width: 100%;    
    height: 100%;
    overflow: hidden;
    position: relative;

    .header{

        width: 100%;
        height: 80px;
        position: absolute;
        background-color:#AAAAAA;
        z-index: 3;
    }

    .silder{

        width: 300px;
        height: 100%;
        top: 80px;
        position: absolute;
        background-color:#888888;
        z-index: 2;
    }

    .content{

        width: 100%;
        height: 100%;
        top: 80px;
        left: 300px;
        position: absolute;
        background-color:#DDDDDD;
        z-index: 1;
        overflow: auto;

        .img{

            width: 200px;
            height: 200px;
            background-image: url("../assets/logo.png");
        }

        .footer{

            width:100%;
            height: 30px;
            background-color:#AAAAAA;
        }
    }
}
</style>

<template>
    <div class="home">
        <div class="header">11</div>
        <div class="silder">22</div>
        <div class="content">33
            <img src="../assets/logo.png" alt="">
            <div class="img"></div>
            {{msg.countryEn}}
            {{msg.country}}
            {{msg.city}}
            <ve-histogram :data="chartData"></ve-histogram>
            <div class="footer"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"",
            chartData: {
                columns: ['日期', '访问用户', '下单用户', '下单率'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                        { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                        { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                        { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                        { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                        { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                    ]
            }
        }
    },
    methods: {
        init(){
            this.$axios.get("https://www.tianqiapi.com/api/?version=v1").then(
                success=>{
                    // console.log(success.data)
                    this.msg=success.data
                }
            )
        },
        update(){
            this.chartData.columns[1]="访问用户小易"
        }
    },
    created() {
        this.init()
    },
    mounted(){
        // this.update() 
        
    }
}
</script>