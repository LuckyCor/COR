<template>
    <div class="title">
        <!--头像-->
    <div class="u_name">
        <img src="../assets/touxiang.jpg" alt=""/>
    </div>
<!--用户名下拉菜单-->
<el-dropdown style="margin-left: 20px;">
  <span class="el-dropdown-link" >
    <h1 class="u_name_text">行云<i class="el-icon-arrow-down el-icon--right"></i></h1>
  </span>
  <el-dropdown-menu slot="dropdown">
    <router-link to="/" tag="span"><el-dropdown-item><i class="el-icon-refresh"></i>切换账号</el-dropdown-item></router-link>
    <router-link to="/" tag="span"><el-dropdown-item type="primary" @click="unlogin()"><i class="el-icon-switch-button"></i>退出</el-dropdown-item></router-link>
  </el-dropdown-menu>
</el-dropdown>
    </div>
</template>


<script>
export default{
    methods:{
        unlogin(){
        this.$router.push("/login")
    },
}
}

</script>

<style  scoped>
.title{
    display: flex;
    height: 80px;
    align-items: center;/**纵向居中 */
    float: right;
    padding-right: 60px;
}

.u_name img{
    width:60px;
    height: 60px;
    border-radius: 50%;
    display: block;
}
.u_name_text{
    color: #fff;
}
</style>