<template>
  <div >
   <div ><el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="武将名称">
    <el-input v-model="formInline.user" placeholder="武将名称"></el-input>
  </el-form-item>
  <el-form-item label="神话降临">
    <el-select v-model="formInline.region" placeholder="是否神将">
      <el-option label="是" value="shanghai"></el-option>
      <el-option label="否" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
</div> 
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
    fixed
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="shili"
      label="势力"
      width="50">
    </el-table-column>
    <el-table-column
      prop="guanzhi"
      label="官职"
      width="300">
    </el-table-column>
    <el-table-column
      prop="xueliang"
      label="血量"
      width="100">
    </el-table-column>
    <el-table-column
      prop="jineng"
      label="技能"
      width="150">
    </el-table-column>
    <el-table-column
      prop="qiangdu"
      label="强度"
      width="50">
    </el-table-column>
    <el-table-column
      prop="says"
      label="台词"
      width="300">
    </el-table-column>
    <el-table-column
      prop="shoujia"
      label="售价"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div style="text-align: center; margin-top: 20px">
    <el-pagination layout="prev, pager, next" :total="50">
</el-pagination>
</div>
  </div>
  
</template>

<script>
 export default {
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        tableData: [{
          name: '神甘宁',
          shili: '吴',
          guanzhi:'西陵太守',
          xueliang: '3',
          jineng:"魄袭，劫营",
          qiangdu: '高',
          says: '裹甲衔枚，劫营如入无人之境！劫营速战，措手不及！',
          shoujia: '70宝珠',
        },
        {
          name: '神赵云',
          shili: '蜀',
          guanzhi:'留营司马',
          xueliang: '2',
          jineng:"绝境，龙魂",
          qiangdu: '中',
          says: '龙战于野，其血玄黄',
          shoujia: '7000将魂',
        },
        {
          name: '神吕布',
          shili: '群',
          guanzhi:'中郎将',
          xueliang: '6',
          jineng:"狂暴，无谋，无前，神愤",
          qiangdu: '高',
          says: '哪个说我有勇无谋？ ',
          shoujia: '9000将魂',
        },{
          name: '神诸葛亮',
          shili: '蜀',
          guanzhi:'丞相',
          xueliang: '3',
          jineng:"七星，狂风，大雾",
          qiangdu: '中',
          says: '祈星辰之力，佑我蜀汉！伏望天恩，誓讨汉贼！',
          shoujia: '限时出售',
        },{
          name: '神司马懿',
          shili: '魏',
          guanzhi:'宣王',
          xueliang: '4',
          jineng:"忍戒，拜印，连破",
          qiangdu: '中',
          says: '韬光养晦，静待时机',
          shoujia: '80宝珠',
        },{
          name: '神刘备',
          shili: '蜀',
          guanzhi:'汉昭烈帝',
          xueliang: '6',
          jineng:"龙怒，结营",
          qiangdu: '低',
          says: '龙怒降临，岂是尔等凡人可抗？',
          shoujia: '5000将魂',
        },{
          name: '神陆逊',
          shili: '吴',
          guanzhi:'荆州牧',
          xueliang: '4',
          jineng:"军略，摧克",
          qiangdu: '中',
          says: '才略计谋，此为行军之法。',
          shoujia: '15555将魂',
        },{
          name: '界徐盛',
          shili: '吴',
          guanzhi:'芜湖侯',
          xueliang: '4',
          jineng:"破军",
          qiangdu: '高',
          says: '若敢来犯，必叫你大败而归！',
          shoujia: '50宝珠',
        },]
      }
    }
  }

</script>
<style >
.background{
    height:100%;
    /* background-image: url("../../assets/sgs11.png"); */
    background-size:cover;
}
</style>