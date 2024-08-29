<template>
  <div>

<el-col>
    <div class="el-title">
      <span style="color: #fff;">Minecraft</span>
    </div>
    <el-menu
      default-active="2"
      background-color="#00caca"
      text-color="#fff"
      active-text-color="#ffd04b">

      <el-menu-item index="0">
      <template slot="title">
      <i class="el-icon-menu"></i>
       <!-- 超链接  router-link进行跳转，相当于超链接也不一样   to:跳转的路由地址   tag：标签的名称-->
      <router-link to="/main" tag="span">Minecraft首页</router-link>
      
      </template>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-eleme"></i>
          <span >原P管理</span>
        </template>
        <el-menu-item-group>
         <router-link to="/userList" tag="span"><el-menu-item index="1-1">原p列表</el-menu-item></router-link>
         <router-link to="/roleList" tag="span"><el-menu-item index="1-2">商品列表</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-moon"></i>
          <span >原农混杂</span>
        </template>
        <el-menu-item-group>
          <router-link to="/userList1" tag="span"><el-menu-item index="2-1">原神启动</el-menu-item></router-link>
          <router-link to="/roleList1" tag="span"><el-menu-item index="2-2">英雄管理</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-view"></i>
          <span >火P管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/userList2" tag="span"><el-menu-item index="3-1">胜率统计</el-menu-item></router-link>
          <router-link to="/roleList2" tag="span"><el-menu-item index="3-2">人物管理</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-time"></i>
          <span >杀P管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/userList3" tag="span"><el-menu-item index="4-1">武将管理</el-menu-item></router-link>
          <router-link to="/roleList3" tag="span"><el-menu-item index="4-2">商品管理</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</div>
</template>
<style scoped>
.el-title{
  /* background-color:#409eff; */
  line-height: 80px;
  text-align: center;
  font-size: 25px;
}
</style>

