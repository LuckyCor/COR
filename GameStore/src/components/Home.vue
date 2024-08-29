<template>
<div>
<el-container>
<!--侧边栏-->
  <el-aside width="200px" >
  <Menu></Menu>
  </el-aside>
  <el-container>
  <!--头部-->
    <el-header height="80px">
      <Header></Header>

    
    </el-header>
    <!--主体-->
    <el-main>
     <router-view></router-view>

</el-main>
    <!-- <el-footer height="50px">Cor2024(个人)版权所有；作者邮箱:www.163.com</el-footer> -->
  </el-container>
</el-container>
</div>
</template>

<!--导入组件-->
<script>
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
export default{
    name:"Home",
    components:{
        Menu,//注册
        Header,
        Main,
    },
    // data() {
    //   return {
    //     activeName: 'first'
    //   };
    // },
    // methods: {
    //   handleClick(tab, event) {
    //     console.log(tab, event);
    //   }
    // }
};

</script>

<style>
 .el-header, .el-footer {
    background-color: #a6ffff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .src_hearder{
    text-align: right;
    margin: 10px;
  }
  .el-aside {
    background-color:#00caca;
    height:100vh;
  }



</style>