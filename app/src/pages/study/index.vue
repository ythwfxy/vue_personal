<template>
    <div class="container">
        <el-collapse v-model="activeNames" @change="handleChange" class="colla">
            <el-collapse-item :title="item.theme" :name="i" class="colla-it" v-for="(item,i) in study" :key="i">
                <div>{{item.content1}}</div>
                <div v-if="item.content2">{{item.content2}}</div>
            </el-collapse-item>
        </el-collapse>
        <div class="return" @click="$router.push({ name: 'home' })">返回</div>
    </div>
</template>

<script>
import { mapState } from 'vuex' 
export default {
    data() {
        return {
            activeNames: ['1']
        }
    },
    methods: {
        handleChange(val){
            console.log(val)
        }
    },
    mounted() {
        this.$store.dispatch('Study')
    },
    computed: {
        ...mapState({
            study: state => state.study,
        }),
    },
}
</script>

<style>
body {
    background-color: bisque;
}
.container {
    border-radius: 15px;
    width: 80%;
    position: absolute;
    left: 10%;
    top: 5%;
    overflow: hidden;
}
.return {
    position: fixed;
	left: 0;
	top: 0;
	width: 3%;
	height: 3%;
	background: rgb(0 0 0 / 25%);
	padding: 1rem;
	border-radius: 6px;
	cursor: pointer;
    color: white;
}
</style>