<template>
  <div id="operation-log">
    <!-- <page-title name="操作日志"></page-title> -->
    <div class="operation-log-content">
      <Form>
        <FormItem label="时间区间">
          <!-- <IntervalSection
            style="width: 500px;display: inline-block;"
            :intervalSection='intervalSection'
            @dateRangeSelect='getData'
            @calculateCycle='getData'>
          </IntervalSection> -->
          <Button type="primary" @click="exportCsv" class="exportBtn">导出日志</Button>
        </FormItem>
        <FormItem>
          <Table border height="800" :columns="table.columns" :data="table.data" class="operation-table"></Table>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
  // import pageTitle from '../../component/page-title.vue';
  // import IntervalSection from '../../component/interval-section';
  import { mapState } from 'vuex';
  export default {
    name: 'operation-log',
    components: {
      // pageTitle,IntervalSection
    },
    computed:{
      ...mapState(['userInfo']),
    },
    data (){
      return {
        intervalSection: {				            // 统计周期
          dateRange: [],
          timeRange: 0
        },
        table: {
          columns: [
            { title: '时间', key: 'ptTime' },
            { title: '操作人员', key: 'wstrUserRealName' },
            { title: '职位', key: 'iUserID' },
            { title: '内容', key: 'wstrLine' },
          ],
          data: []
        },
      };
    },
    methods:{
      getData(){
        // let [dtBegin, dtEnd] = this.intervalSection.dateRange;
        // if(this.intervalSection.dateRange.length <= 0) {
        //   dtBegin = this.intervalSection.prevDateRange[0];
        //   dtEnd = this.intervalSection.prevDateRange[1];
        // }
        // if (dtBegin === dtEnd) {//当日
        //   this.api.log.getOperLogByLineNum (this.userInfo.iGroupID, 50).then(res => {
        //     if(res.data.msgBody.err.level < 3){
        //       this.table.data = res.data.msgBody.listLog || [];
        //     }else {
        //       this.$Message.error(`>>> [err] 获取系统日志${ res.data.msgBody.err.MSGInfo }`);
        //     }
        //   });
        // }else{
        //   this.api.log.getOperLogByDate (this.userInfo.iGroupID, dtBegin, dtEnd).then(res => {
        //     if(res.data.msgBody.err.level < 3){
        //       this.table.data = res.data.msgBody.listLog || [];
        //     }else {
        //       this.$Message.error(`>>> [err] 获取系统日志${ res.data.msgBody.err.MSGInfo }`);
        //     }
        //   });
        // }
      },
      exportCsv(){
        // let [dtBegin, dtEnd] = this.intervalSection.dateRange;
        // this.api.log.exportOperLogByDate (this.userInfo.iGroupID, dtBegin, dtEnd).then(res => {
        //   if(res.data.msgBody.err.level < 3){
        //     const wstrFileName = res.data.msgBody.wstrFileName;
        //     window.open('/api/download?filepath=' + wstrFileName);
        //   }else {
        //     this.$Message.error(`>>> [err] 导出操作日志${ res.data.msgBody.err.MSGInfo }`);
        //   }
        // });
      }
    },
    mounted(){
      // this.eventHub.$emit('scroll', {
      //   name: "operation-log", type: "id"
      // });
    }
  };
</script>

<style lang= "less">
  #operation-log {
    height: 100%;
    padding: 0 15px 0 0;
    overflow-y:auto;
    .operation-log-content{
      background-color: white;
      padding: 20px;
      .exportBtn{
        float: right;
      }
    }
  }
</style>