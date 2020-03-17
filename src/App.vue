<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive">
        </router-view>
    </div>
</template> 
<script>
export default {
    name: "app",
    data() {
        return {
            isRouterAlive: true
        }
    },
    methods: {
        reload() {
            this.isRouterAlive = false;
            this.$nextTick(() => (this.isRouterAlive = true))
        }
    }
}
</script> 
<style>
body {
    margin: 0px;
    padding: 0px;
    background: #1f2d3d;
    font-family: "NSimsun", Arial;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
}
#app {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    min-width: 1200px;
}
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

@media (max-width: 1400px) {
    body {
        font-size: 12px;
    }
}
</style>
