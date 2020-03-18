<template>
  <div id="content">
    <!-- <div style="height:16px" v-if="this.$route.path!='/login'"></div> -->
    <router-view ></router-view>
  </div>
</template>
<script>
</script>
<style>
#content {
    background: #ebf0f5;
    height: 100%;
    /* padding-top: 60px; */
}
</style>