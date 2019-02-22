<template>
  <i :class="'iconfont i-icon icon-' + name" :style ="iconStyle"></i>
</template>

<script>
  export default {
    name: 'i-icon',
    props: {
      // icon 的类名
      name: {
        type: String,
        required: true,
      },
      // icon 大小
      size: {
        type: [Number, String],
        default: 14,
      },
      // icon 颜色
      color: {
        type: String,
        default: '#444444',
      },
    },
    computed: {
      iconStyle (){
        return {
          fontSize: this.size + 'px',
          color: this.color,
          margin: 0,
          padding: 0,
          display: 'inline-block',
          fontWeight: 'normal',
          lineHeight: 1,
          speak: 'none',
          textTransform: 'none',
          textRendering: 'auto',
          verticalAlign: 'middle',
        };
      }
    }
  };
</script>