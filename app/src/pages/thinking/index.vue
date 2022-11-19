<template>
	<div>
		<!-- 背景图片 -->
		<div class="bg-all">
			<img id="bg" onerror="this.classList.add('error');" src="../../components/Home/img/background2.jpg">
			<div class="cover"></div>
		</div>
		<div class="return" @click="$router.push({ name: 'home' })">返回</div>
		<div id="content">
			<div class="item" v-for="(cons, index) in thinking" :key="index">{{ cons.con }}<br />{{ cons.time }}</div>
		</div>



	</div>

</template>

<script>
import { mapState } from 'vuex' 
export default {
	name: 'Pict',
	data() {
		return {
			page: 1,	//默认第一页
			perPage: 6,//每页多少条
			pageNo: 1,//当前页
			records: 200,//总数
			content: [{
				con: "I got a ban without any reason!I wanna dispute the sanction!I played Apex as usual in my house recently after a whole day work.I play Apex to relax in my spare time. You can relieve much pressure in the game! As a gamer."
				, time: '2022-8-16'
			},
			{
				con: '今天吃啥呢',
				time: '2022-8-16'
			}]
		}
	},
	mounted() {
		this.$store.dispatch('Thinking')
	},
	computed: {
        ...mapState({
            thinking: state => state.thinking,
        }),
    },
	methods: {
		loadoption() {
			this.pageNo = this.page;//让当前页等于，回调函数传回来的page的值，然后再去获取数据，在此更新页码
		}
	}
}
</script>

<style scoped>
*,
a,
p {
	text-decoration: none;
	transition: 0.3s;
	color: #efefef;
	user-select: none;
}

/*背景*/
.bg-all {
	z-index: 0;
	position: absolute;
	top: calc(0px + 0px);
	left: 0;
	width: 100%;
	height: calc(100% - 0px);
	transition: .25s;
}

#bg {
	transform: scale(1);

	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: opacity 1s, transform .25s, filter .25s;
	backface-visibility: hidden;
}

.cover {
	opacity: 1;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-image: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .5) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, .3) 166%);
	transition: .25s;
}

#content {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	width: 50%;
	height: 95%;
	background-color: rgba(161, 124, 203, 0.7);
	border-radius: 8px;
	box-shadow: 0px 0px 20px rgba(40, 40, 40, 0.1);
	z-index: 7;
	overflow: auto;
	display: flex;
	flex-direction: column;
	justify-content: baseline;
}

.item {
	margin-left: 1%;
	width: 95%;
	display: inline-block;
	background-color: rgba(117, 202, 148, 0.7);
	border-radius: 8px;
	box-shadow: 0px 0px 20px rgba(40, 40, 40, 0.1);
	margin-top: 10px;
	padding: 10px;
}

.return {
	position: fixed;
	left: 0;
	right: 0;
	width: 3%;
	height: 3%;
	background: rgb(0 0 0 / 25%);
	backdrop-filter: blur(10px);
	/*margin: 0.5rem;*/
	padding: 1rem;
	border-radius: 6px;
	cursor: pointer;
}

::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}
 
::-webkit-scrollbar-track,
::-webkit-scrollbar-thumb {
  border-radius: 999px;
  border: 5px solid transparent;
}
 
::-webkit-scrollbar-track {
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2) inset;
}
 
::-webkit-scrollbar-thumb {
  min-height: 20px;
  background-clip: content-box;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2) inset;
}
 
::-webkit-scrollbar-corner {
  background: transparent;
}

</style>