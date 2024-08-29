<template>
    <div>
      <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">

    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      label="Gender"
      prop="gender">
    </el-table-column>
    <el-table-column
      label="Address"
      prop="address">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" >
     
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div style="float: center; ">
   
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
  <div style="float: right; margin-top: 20px;">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item >
    <el-input v-model="formInline.user" placeholder="Name"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
      </div>
    </div>
    
  </template>
  
  <script>
export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        tableData: [{
          
          name: '李白',
          gender:'男',
          address: '打野'
        }, {
        
          name: '李信',
          gender:'男',
          address: '上路'
        }, {
          
          name: '貂蝉',
          gender:'女',
          address: '中路'
        }, {
          
          name: '孙尚香',
          gender:'女',
          address: '下路'
        },
        {
          
          name: '东皇太一',
          gender:'男',
          address: '游走'
        },{
          
          name: '大司命',
          gender:'男',
          address: '打野'
        },{
          
          name: '吕布',
          gender:'男',
          address: '上路'
        }],
        search: ''
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
  </script>
  
  <style scoped>

  </style>