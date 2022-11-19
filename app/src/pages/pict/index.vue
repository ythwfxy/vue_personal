<template>
	<div>
		<!-- 背景图片 -->
		<div class="bg-all">
			<img id="bg" onerror="this.classList.add('error');" src="../../components/Home/img/background2.jpg">
			<div class="cover"></div>
		</div>
		<div class="return" @click="$router.push({ name: 'home' })">返回</div>
		<div id="content">
			<div class="row" v-for="(row, index) in pic " :key='index'>
				<div class="item" v-for="(imgs, indexs) in row" :key='indexs'><img :src="imgs.Imgurl" alt=""></div>
			</div>
			<Pagination :pageNo="Info.pageNo" :pageSize="Info.pageSize" :total="Infos.total" :continues="5"
				@getPageNo="getPageNo">
			</Pagination>
		</div>



	</div>

</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'Pict',
	data() {
		return {
			Info: {
				pageSize: 6,//每页多少条
				pageNo: 1,//当前页
				total: null,//总数
			},
			// pic: [[
			// 	{
			// 		Imgurl: './img/background2.jpg',
			// 		id: 1,
			// 	},
			// 	{
			// 		Imgurl: './img/background2.jpg',
			// 		id: 1,
			// 	},
			// 	{
			// 		Imgurl: './img/background2.jpg',
			// 		id: 1,
			// 	}],
			// [
			// 	{
			// 		Imgurl: './img/background2.jpg',
			// 		id: 1,
			// 	},
			// 	{
			// 		Imgurl: './img/background2.jpg',
			// 		id: 1,
			// 	},
			// 	{
			// 		Imgurl: './img/background2.jpg',
			// 		id: 1,
			// 	}]
			// ],
		}
	},
	computed: {
		...mapState({
			pic: state => state.pic,
			Infos: state => state.Info,
		}),
	},
	methods: {
		getData() {
			this.$store.dispatch("PicInfo", this.Info);
		},
		getPageNo(pageNo) {
			//整理带给服务器参数
			this.Info.pageNo = pageNo;
			//再次发请求
			this.getData();
		}
	},
	mounted(){
		this.$store.dispatch('PicInfo',this.Info)
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
	width: 80%;
	height: 80%;
	background-color: rgba(249, 249, 249, 0.7);
	border-radius: 8px;
	box-shadow: 0px 0px 20px rgba(40, 40, 40, 0.1);
	z-index: 7;
	overflow: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

.row {
	width: 100%;
	height: 40%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

.item {
	width: 25%;
	height: 100%;

}

.item img {
	width: 100%;
	height: 100%;
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

.try {
	position: absolute;
	top: 20px;
	right: 0;
	width: 100%;
	height: 20%;
}
</style>