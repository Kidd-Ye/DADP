<template>
  <div id="system-log">
    <!-- <page-title name="系统日志"></page-title> -->
    <div class="system-log-content">
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
          <Table border height="800" :columns="table.columns" :data="table.data" class="system-table"></Table>
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
    name: 'system-log',
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
            { title: '时间', key: 'ptTime', width: 300},
            { title: '内容', key: 'wstrLine' },
          ],
          data: []
        },
      };
    },
    methods:{
      setAccount(){
        // this.$router.push('/product-manage/account');
      },
      getData(){
        // let [dtBegin, dtEnd] = this.intervalSection.dateRange;
        // if(this.intervalSection.dateRange.length <= 0) {
        //   dtBegin = this.intervalSection.prevDateRange[0];
        //   dtEnd = this.intervalSection.prevDateRange[1];
        // }
        // if (dtBegin === dtEnd) {//当日
        //   this.api.log.getSysLogByLineNum (50).then(res => {
        //     if(res.data.msgBody.err.level < 3){
        //       this.table.data = res.data.msgBody.listLog || [];
        //     }else {
        //       this.$Message.error(`>>> [err] 获取系统日志${ res.data.msgBody.err.MSGInfo }`);
        //     }
        //   });
        // }else{
        //   this.api.log.getSysLogByDate (dtBegin, dtEnd).then(res => {
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
        // this.api.log.exportSysLogByDate (this.userInfo.iGroupID, dtBegin, dtEnd).then(res => {
        //   if(res.data.msgBody.err.level < 3){
        //     const wstrFileName = res.data.msgBody.wstrFileName;
        //     window.open('/api/download?filepath=' + wstrFileName);
        //   }else {
        //     this.$Message.error(`>>> [err] 导出系统日志${ res.data.msgBody.err.MSGInfo }`);
        //   }
        // });
      },
    },
    mounted(){
      // this.eventHub.$emit('scroll', {
      //   name: "system-log", type: "id"
      // });
    }
  };
</script>

<style lang= "less">
  #system-log {
    height: 100%;
    padding:0 15px 0 0;
    overflow-y:auto;
    .system-log-content{
      background-color: white;
      padding: 20px;
      .exportBtn{
        float: right;
      }
    }
  }
</style>