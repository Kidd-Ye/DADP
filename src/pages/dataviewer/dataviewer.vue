<template>
  <div id="viewer">
    <!-- <page-title name="操作日志"></page-title> -->
    <div class="viewer-content">
      <Form>
        <FormItem label="数据视窗">
          <Button type="primary" @click="exportXlsx" class="exportBtn">导出数据</Button>
          <!-- <Button type="primary" @click="importXlsx" class="exportBtn">导入数据</Button> -->
          <Upload 
            action="" 
            :before-upload="handleBeforeUpload"
            :show-upload-list="false"
            style="position:absolute;width:200px;right:0px">
            <i-button type="ghost" icon="ios-cloud-upload-outline" webkitdirectory>导入数据</i-button>
          </Upload>
        </FormItem>
        <FormItem>
          <Table border height="800" :columns="table.columns" :data="table.data" class="viewer-table"></Table>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'viewer',
    components: {
      // pageTitle,IntervalSection
    },
    data (){
      return {
        intervalSection: {				            // 统计周期
          dateRange: [],
          timeRange: 0
        },
        table: {
          columns: [
            { title: '标题1', key: 'ptTime' },
            { title: '标题2', key: 'wstrUserRealName' },
            { title: '标题3', key: 'iUserID' },
            { title: '标题4', key: 'wstrLine' },
          ],
          data: []
        },
      };
    },
    methods:{
      importXlsx(){
        
      },
      exportXlsx(){
        
      },
      getObjectURL(file) {  
        var url = null;  
        if (window.createObjcectURL != undefined) {  
          url = window.createOjcectURL(file);  
        } else if (window.URL != undefined) {  
          url = window.URL.createObjectURL(file);  
        } else if (window.webkitURL != undefined) {  
          url = window.webkitURL.createObjectURL(file);  
        }  
        return url;  
      },
      handleBeforeUpload(file){
        console.log(this.getObjectURL(file));
        return false;
      },
    },
    mounted(){
      
    }
  };
</script>

<style lang= "less">
  #viewer {
    height: 100%;
    padding: 0 15px 0 0;
    overflow-y:auto;
    .viewer-content{
      background-color: white;
      padding: 20px;
      .ivu-form .ivu-form-item-label{
        font-size: 20px;
        color: black;
      }
      .exportBtn{
        float: right;
        margin-left:20px;
      }
    }
  }
</style>