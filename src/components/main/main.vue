<template>
    <el-container style="height:100%;overflow-y: hidden;">
        <el-header>
        </el-header>
        <el-container>
            <el-aside style="max-width: 188px;width: auto;">
            </el-aside>
            <el-main>
                <v-content></v-content>
            </el-main>
        </el-container>
        <el-footer>
        </el-footer>
    </el-container>
</template>

<script>
//内容
import Content from './content'
export default {
    components: {
        'v-content': Content
    }
}
</script>

<style>
</style>