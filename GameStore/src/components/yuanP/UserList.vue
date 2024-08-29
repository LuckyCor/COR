<template>
  <div class="background">
    <!--搜索框-->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="姓名">
    <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
  </el-form-item>
    <el-form-item label="出生日期">
    <el-input v-model="formInline.birthday" placeholder="请输入出生日期"></el-input>
  </el-form-item>
  <el-form-item label="电话">
    <el-input v-model="formInline.phone" placeholder="请输入电话"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" icon="el-icon-search">查询</el-button>
       <el-button type="primary"  @click="dialogFormVisible = true" >添加<i class="el-icon-upload el-icon--right"></i></el-button>
  </el-form-item>
</el-form>
<!--添加表单-->
<el-dialog title="添加用户" :inline="true" :visible.sync="dialogFormVisible" width="25%">
  <el-form :model="form" :inline="true" style="width:450px">
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  <el-form-item label="出生日期">
     <el-date-picker
      v-model="form.birthday"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item>
      <el-form-item label="电话">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>
      <el-form-item label="地址">
      <el-input v-model="form.address"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>



    <!--表单-->
    <div class="background2">
    <el-table :data="tableData" border style="width: 100%; ">
      <el-table-column prop="id" label="编号" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="birthday" label="出生日期" width="180">
      </el-table-column>
      <el-table-column prop="phone" label="电话" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button  size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
    <!-- 分页 -->
    <div style="text-align: center; margin-top: 20px">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
      dialogFormVisible: false,//新增弹框
      formInline:{
        name:"",
        birthday:"",
        phone:"",
      },
      form:{
        name:"",
        birthday:"",
        phone:"",
        address:"",

      },
      tableData: [
        {
          id: "001",
          name: "万叶",
          birthday: "2000-1-1",
          phone: "1000000001",
          address: "美国佛罗里达州",
        },
        {
          id: "002",
          name: "钟离",
          birthday: "2000-5-20",
          phone: "1000000002",
          address: "美国亚拉巴马州",
        },
        {
          id: "003",
          name: "雷电将军",
          birthday: "2000-6-18",
          phone: "10000000003",
          address: "美国内华达州",
        },
        {
          id: "004",
          name: "八重神子",
          birthday: "2000-11-11",
          phone: "10000000004",
          address: "美国佛蒙特州",
        },
        {
          id: "005",
          name: "旅行者",
          birthday: "2000-12-12",
          phone: "10000000005",
          address: "美国纽约",
        },
        {
          id: "006",
          name: "胡桃",
          birthday: "2000-2-28",
          phone: "10000000006",
          address: "美国洛杉矶",
        },
      ],
    };
  },
};
</script>
<style>
.background{
    width:100%;
    height:100%;
    /* background: #42b983; */
    background-image: url("../../assets/role44.png");
    background-size:cover;
}
.background2{
  background-color:Transparent;
  
}
</style>