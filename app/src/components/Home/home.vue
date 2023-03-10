<template>
    <div>
        <!-- 背景图片 -->
        <div class="bg-all">
            <img id="bg" :src="bg_src">
            <div class="cover"></div>
        </div>
        <!-- 图Biao区域 -->
        <div class="icons">
            <!-- 图片 -->
            <div class="imgs">
                <img src="./img/logo.png" alt="">
            </div>
        </div>
        <!-- 介绍区域 -->
        <div class="introduction intro">
            <div class="intro_container">
                <span class="intro_content1">Hello 欢迎来到我的主页</span><br />
                <span class="intro_content2">今天也要加油啊</span>
            </div>
        </div>
        <div class="about">
            <a href="https://github.com/ythwfxy?tab=repositories" id="github" target="_blank">
                <i class="iconfont icon-github"></i>
            </a>
            <a href="http://wpa.qq.com/msgrd?v=3&uin=1832164480&site=qq&menu=yes" id="qq" target="_blank">
                <i class="iconfont icon-QQ-circle-fill"></i>
            </a>
            <a href="mailto:1832164480@qq.com" id="email" target="_blank">
                <i class="iconfont icon-youjian_o"></i>
            </a>
        </div>
        <!-- 功能区 -->
        <div class="infor">
            <div class="onetalk introduction">
                <div class="onetalk_content"><span id="onetalk_cont">{{ oneTalk.hitokoto }}</span></div>
                <div class="onetalk_author">-&nbsp;[&nbsp;<span id="onetalk_auth">{{ oneTalk.from }}</span>&nbsp;]&nbsp;
                </div>
            </div>
            <div class="times introduction">
                <div class="time"><span>{{ nowTime.days }}</span>
                    <span class="week">{{ weaTher.week }}</span>
                </div>
                <div class="time_show_c">
                    <span class="time_show">{{ nowTime.hours }}</span>
                </div>
                <div class="weather">
                    <span class="weather_left">{{ weaTher.wea }}</span>&nbsp;
                    <span class="weather_right">{{ weaTher.city }}</span>&nbsp;
                    <span class="tem_low">{{ weaTher.tem_night }}</span>℃~
                    <span class="tem_high">{{ weaTher.tem_day }}</span>℃
                </div>
            </div>
        </div>
        <div class="mass">
            <div class="first_row">
                <div class="music introduction item" @click="music = -music"><i
                        class="iconfont icon-yinle"></i><span>音乐</span></div>
                        <!-- shuo = -shuo -->
                <div class="think introduction item" @click="$router.push({name:'thinking'})"><i
                        class="iconfont icon-41shuoshuo"></i><span>说说</span></div>
                <div class="choice introduction item" @click="choice = -choice"><i
                        class="iconfont icon-choujiang"></i><span>选择器</span></div>
            </div>
            <div class="second_row">
                <div class="photo introduction item" @click="$router.push({name:'pict'})"><i class="iconfont icon-tupian"></i><span>图片</span></div>
                <div class="friend introduction item" @click="$router.push({name:'study'})"><i class="iconfont icon-pengyou"></i><span>学习</span></div>
                <div class="other introduction item" @click="changeBac"><i class="iconfont icon-qita"></i><span>其他</span></div>
            </div>
        </div>
        <!-- 音乐 -->
        <div :class="{ 'mus': 1 == 1, 'showMus': music == 1 }">
            <!-- Aplayer -->
            <aplayer :music="audio[0]" :list="audio" :showLrc="true"></aplayer>
        </div>
        <!-- 说说 -->
        <div :class="{ 'com': 1 == 1, 'com_show': shuo == 1 }">
            <div class="com_close fixed-top" @click="shuo = -1"><i class="iconfont icon-guanbi" id="close"></i></div>
            <div content_more>
                <div class="content_all">
                    <div class="content"><span id="content_w">你好</span></div>
                    <div class="content_time"><span id="content_t">2022-7-7</span></div>
                </div>
            </div>
            <div class="com_in">
                <input class="com_input" type="text">
                <div class="com_input_but"><span>发布</span></div>
            </div>
        </div>
        <!-- 选择器 -->
        <div :class="{ 'choices': 1 == 1, 'choices_show': choice == 1 }">
            <div class="com_close fixed-top" @click="choice = -1"><i class="iconfont icon-guanbi" id="close2"></i></div>
            <div class="eat_choice">
                <div class="eat_2" @click="eatChoice"><span>吃饭选择器</span></div>
            </div>
            <div class="sing_choice">
                <div class="sing_2" @click="singChoice"><span>唱歌选择器</span></div>
            </div>
        </div>
        <!-- 吃饭选择器 -->
        <div :class="{ 'choices_eat_show': 1, 'choices_eat_block': eat == 1 }">
            <div class="com_close fixed-top" @click="eat = -1"><i class="iconfont icon-guanbi" id="close3"></i></div>
            <div class="choices_meau_left">
                <div class="left_item">重庆小面</div>
                <div class="left_item">炒米饭</div>
                <div class="left_item">一楼八大菜系</div>
                <div class="left_item">二楼八大菜系</div>
                <div class="left_item">泡面</div>
            </div>
            <div class="choices_meau_right">
                <div class="right_item">麻汁面</div>
                <div class="right_item">卤肉饭</div>
                <div class="right_item">石锅饭</div>
                <div class="right_item">拉面</div>
                <div class="right_item">奢侈一把</div>
            </div>
        </div>
        <!-- 唱歌选择器 -->
        <div :class="{ 'choices_sing_show': 1, 'choices_sing_block': sing == 1 }">
            <div class="com_close fixed-top" @click="sing = -1"><i class="iconfont icon-guanbi" id="close4"></i></div>
            <div class="sing_show"><span id="sing">{{sing_show}}</span></div>
        </div>
        <!-- 其他：更换壁纸 -->

    </div>
</template>

<script>
import aplayer from "vue-aplayer";
import img1 from './img/background2.jpg'
import { mapState } from 'vuex' 
export default {
    name: 'Home',
    data() {
        return {
            nowTime: {
                days: '2000 年 0 月 00 日 ',
                hours: '00:00:00'
            },
            music: -1,
            shuo: -1,
            choice: -1,
            eat: -1,
            sing: -1,
            sing_show:'你好',
            bg_src:img1,
            audio: [{
                title: "枫",
                artist: "周杰伦",
                src: require('../../assets/music/url/枫 - 周杰伦.mp3'),
                pic: "https://y.qq.com/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000",
                lrc: '[ti:枫][ar:周杰伦 (Jay Chou)][al:十一月的萧邦][by:][offset:0][00:00.00]枫 - 周杰伦 (Jay Chou)[00:03.79]词：弹头（宋健彰）[00:07.58]曲：周杰伦[00:11.37]编曲：钟兴民[00:15.17]制作人：周杰伦[00:18.96]乌云在我们心里搁下一块阴影[00:24.55][00:26.02]我聆听沉寂已久的心情[00:31.29][00:31.95]清晰透明就像美丽的风景[00:38.96][00:39.79]总在回忆里才看的清[00:44.40][00:47.15]被伤透的心能不能够继续爱我[00:53.01][00:54.23]我用力牵起没温度的双手[00:59.78][01:00.75]过往温柔已经被时间上锁[01:08.07]只剩挥散不去的难过[01:14.22][01:15.60]缓缓飘落的枫叶像思念[01:20.91]我点燃烛火温暖岁末的秋天[01:27.09][01:28.02]极光掠夺天边[01:31.54]北风掠过想你的容颜[01:35.48][01:35.98]我把爱烧成了落叶[01:39.58]却换不回熟悉的那张脸[01:44.06]缓缓飘落的枫叶像思念[01:49.42]为何挽回要赶在冬天来之前[01:56.24][01:56.84]爱你穿越时间[02:00.01]两行来自秋末的眼泪[02:04.48]让爱渗透了地面[02:08.12]我要的只是你在我身边[02:12.92][02:26.84]被伤透的心能不能够继续爱我[02:32.92][02:33.83]我用力牵起没温度的双手[02:40.16]过往温柔已经被时间上锁[02:46.98][02:47.77]只剩挥散不去的难过[02:52.92][02:54.77]在山腰间飘逸的红雨随着北风凋零[03:04.59][03:05.10]我轻轻摇曳风铃[03:09.12]想唤醒被遗弃的爱情[03:14.86][03:15.78]雪花已铺满了地[03:18.41][03:19.39]生怕窗外枫叶已结成冰[03:23.81]缓缓飘落的枫叶像思念[03:29.14]我点燃烛火温暖岁末的秋天[03:36.21]极光掠夺天边[03:39.71]北风掠过想你的容颜[03:44.16]我把爱烧成了落叶[03:47.89]却换不回熟悉的那张脸[03:52.24]缓缓飘落的枫叶像思念[03:57.60]为何挽回要赶在冬天来之前[04:04.71]爱你穿越时间[04:08.22]两行来自秋末的眼泪[04:13.33][04:18.64]让爱渗透了地面[04:22.19]我要的只是你在我身边',
                theme: "#171513"
            },
            {
                title: "空心",
                artist: "光泽",
                src: require("../../assets/music/url/空心 - 光泽.mp3"),
                pic: "https://y.qq.com/music/photo_new/T002R300x300M000001vjIoV01nThA.jpg?max_age=2592000",
                lrc: "[ti:空心][ar:光泽][al:空心][by:][offset:0][00:00.00]空心 - 光泽[00:05.09]词：姚若龙[00:10.19]曲：G.Z光泽[00:15.28]热爱曾是唯一的信仰[00:17.78][00:21.90]相互凝望让对方捆绑[00:24.66][00:28.81]在那时候简单的好傻[00:31.54][00:35.75]却又空前绝后快乐啊[00:38.37][00:41.30]直到现实狠狠推一把[00:45.63][00:48.26]跌到浑身是伤疤[00:52.10][00:55.09]你在欲望面前投降[00:59.34][01:01.96]我在伤痛后面成长[01:06.28][01:13.38]终于知道爱都有翅膀[01:16.03][01:20.25]怎么拥抱它终究要飞翔[01:22.95][01:27.11]漆黑空心也想被释放[01:29.85][01:33.99]奈何思念比恨更顽强[01:36.83][01:44.40]有个怀抱暖得像张床[01:46.95][01:51.09]有份善良微笑多晴朗[01:53.79][01:57.96]有一张唇美丽又疯狂[02:00.70][02:04.80]为何爱谁心都空荡荡[02:07.64][02:10.45]当我听说你与他散场[02:14.90][02:17.43]狼狈回家带着伤[02:21.35][02:24.28]朋友都说那是惩罚[02:28.52][02:31.10]我的心却多么痛啊[02:35.36][02:42.55]虽然知道爱都有翅膀[02:45.52][02:49.45]因为太爱所以会原谅[02:52.12][02:56.32]漆黑空心也想被释放[02:59.06][03:03.15]奈何思念比恨更顽强[03:05.92][03:09.28]无法割舍就别怕感伤[03:12.82][03:15.94]我也嫌我对你太滚烫[03:19.69][03:22.87]深爱就像一种命一样[03:26.38][03:29.72]没有任何方法能阻挡[03:33.24][03:37.40]就算知道爱都有翅膀[03:40.07][03:44.29]还是愿意让你停靠在我肩膀[03:48.35][03:51.23]你也不用把我当作家[03:54.05][03:57.95]把我当成一棵树吧",
                theme: "#b7daff"
            },
            {
                title: "蒲公英的约定",
                artist: "周杰伦",
                src: require("../../assets/music/url/蒲公英的约定 - 周杰伦.mp3"),
                pic: "https://y.qq.com/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg?max_age=2592000",
                lrc: "[ti:蒲公英的约定][ar:周杰伦][al:我很忙][by:][offset:0][00:00.00]蒲公英的约定 - 周杰伦 (Jay Chou)[00:07.34]词：方文山[00:14.68]曲：周杰伦[00:22.02]编曲：林迈可[00:29.36]小学篱笆旁的蒲公英[00:35.10][00:35.92]是记忆里有味道的风景[00:42.07][00:43.04]午睡操场传来蝉的声音[00:48.39][00:50.07]多少年后也还是很好听[00:56.16][00:57.61]将愿望折纸飞机寄成信[01:03.38][01:04.25]因为我们等不到那流星[01:10.19][01:11.32]认真投决定命运的硬币[01:17.15][01:18.29]却不知道到底能去哪里[01:23.88][01:25.61]一起长大的约定[01:29.80][01:30.54]那样清晰 打过勾的我相信[01:39.45]说好要一起旅行[01:44.68]是你如今 唯一坚持的任性[01:54.94][02:22.36]在走廊上罚站打手心[02:27.76][02:28.94]我们却注意窗边的蜻蜓[02:34.71][02:36.04]我去到哪里你都跟很紧[02:41.79][02:43.13]很多的梦在等待着进行[02:49.46][02:50.13]一起长大的约定[02:54.47][02:55.21]那样清晰 打过勾的我相信[03:04.13]说好要一起旅行[03:08.45][03:09.31]是你如今 唯一坚持的任性[03:18.31]一起长大的约定[03:22.24][03:23.40]那样真心[03:26.84]与你聊不完的曾经[03:32.39]而我已经分不清[03:36.79][03:37.58]你是友情还是错过的爱情",
                theme: "#b7daff"
            },
            {
                title: "清明雨上",
                artist: "许嵩",
                src: require("../../assets/music/url/清明雨上 - 许嵩.mp3"),
                pic: "https://y.qq.com/music/photo_new/T002R300x300M000002KSDg90IaScI.jpg?max_age=2592000",
                lrc: "[ti:清明雨上][ar:许嵩][al:曾经的歌系列 43][by:][offset:0][00:00.00]清明雨上 - 许嵩[00:07.01]词：许嵩[00:14.03]曲：许嵩[00:21.05]编曲：许嵩[00:28.06]窗透初晓 日照西桥 云自摇[00:33.84]想你当年荷风微摆的衣角[00:41.30]木雕流金 岁月涟漪 七年前封笔[00:47.52]因为我今生挥毫只为你[00:54.47]雨打湿了眼眶 年年倚井盼归堂[01:01.07]最怕不觉泪已拆两行[01:06.94]我在人间彷徨 寻不到你的天堂[01:13.47]东瓶西镜放 恨不能遗忘[01:20.16]又是清明雨上 折菊寄到你身旁[01:27.20]把你最爱的歌来轻轻唱[01:47.48]远方有琴 愀然空灵 声声催天雨[01:54.08]涓涓心事说给自己听[02:00.66]月影憧憧 烟火几重 烛花红[02:07.32]红尘旧梦 梦断都成空[02:13.91]雨打湿了眼眶 年年倚井盼归堂[02:20.56]最怕不觉泪已拆两行[02:26.37]我在人间彷徨 寻不到你的天堂[02:32.95]东瓶西镜放 恨不能遗忘[02:39.53]又是清明雨上 折菊寄到你身旁[02:46.60]把你最爱的歌来轻轻唱[02:52.33]我在人间彷徨 寻不到你的天堂[02:59.41]东瓶西镜放 恨不能遗忘[03:06.00]又是清明雨上 折菊寄到你身旁[03:13.03]把你最爱的歌来轻轻唱",
                theme: "#b7daff"
            },
            {
                title: "八小时时差",
                artist: "郑鱼",
                src: require("../../assets/music/url/八小时时差 - 郑鱼.mp3"),
                pic: "https://y.qq.com/music/photo_new/T002R300x300M000004UnhxH4dmAyM.jpg?max_age=2592000",
                lrc: "[ti:八小时时差][ar:郑鱼][al:八小时时差][by:qingxiu_karakal][offset:0][00:00.00]八小时时差 - 郑鱼[00:00.17]词 Lyrics by：上弦月[00:00.30]曲 Compose by：BEN小样[00:00.44]编曲 Arranger：张炜[00:00.55]吉他 Guitar：詹华[00:00.66]贝斯 Bass：温嘉宇[00:00.79]混音师 Mixing engineer：张炜[00:00.94]母带后期混音师 Mastering engineer：张炜[00:01.18]录音棚 Recording studio：苏州超级星声[00:01.43]音乐监制 Executive producer：颖儿（Lam Wing）[00:01.62]艺人统筹 Artist co ordination：冼嘉欣[00:01.84]推广策划 Promotion planning：XRay/赵若海/张彬[00:02.13]OP：繁星互娱[00:02.24][00:02.75]我数着八小时时差[00:05.11]忘了自己孤单多久了[00:08.01]连另一座城市的天气都关心[00:11.64]还怎么让自己放得下[00:13.66][00:14.35]我数着八小时时差[00:17.03]忘了自己孤单多久了[00:19.53][00:20.12]羡慕和你同城的每个陌生人[00:23.74]而你会偶尔想起我吗[00:26.13][00:27.18]你说用回忆可以联络的鬼话[00:29.59][00:30.18]除了我没有人会相信吧[00:32.33][00:32.94]每一次想起你[00:35.28]就想你能感应啊[00:37.60][00:38.20]怪过缘分太仓促吗[00:39.73]我们当时不懂珍惜吗[00:41.80]那些时光真的回不去了[00:44.03][00:44.65]你在没有我的地方[00:46.69]早已习惯了吧[00:48.66][00:50.58]我数着八小时时差[00:52.57][00:53.20]忘了自己孤单多久了[00:55.56][00:56.16]连另一座城市的天气都关心[00:59.60]还怎么让自己放得下[01:01.72][01:02.31]我数着八小时时差[01:04.55][01:05.10]忘了自己孤单多久了[01:08.01]羡慕和你同城的每个陌生人[01:11.55]而你会偶尔想起我吗[01:13.77][01:27.28]你说用回忆可以联络的鬼话[01:29.72][01:30.26]除了我没有人会相信吧[01:32.14][01:32.97]每一次想起你[01:34.73][01:35.25]多想你能感应啊[01:37.49][01:38.23]怪过缘分太仓促吗[01:39.92]我们当时不懂珍惜吗[01:41.92]那些时光真的回不去了[01:44.19][01:44.74]你在没有我的地方[01:46.71]早已习惯了吧[01:48.72][01:50.38]我数着八小时时差[01:52.57][01:53.18]忘了自己孤单多久了[01:55.46][01:56.08]连另一座城市的天气都关心[01:59.42]还怎么让自己放得下[02:01.74][02:02.53]我数着八小时时差[02:04.54][02:05.09]忘了自己孤单多久了[02:07.51][02:08.08]羡慕和你同城的每个陌生人[02:11.58]而你会偶尔想起我吗[02:13.71][02:15.08]你说用回忆可以联络的鬼话[02:17.46][02:18.12]除了我没有人会相信吧[02:20.40][02:20.98]每一次想起你[02:23.31]多想你能感应啊[02:25.62][02:26.22]怪过缘分太仓促吗[02:27.91]我们当时不懂珍惜吗[02:29.86]那些时光真的回不去了[02:32.66]你在没有我的地方[02:34.96]早已习惯了吧[02:36.98][02:38.33]我数着八小时时差[02:40.58][02:41.12]忘了自己孤单多久了[02:43.49][02:44.01]连另一座城市的天气都关心[02:47.51]还怎么让自己放得下[02:49.74][02:50.46]我数着八小时时差[02:52.39][02:53.10]忘了自己孤单多久了[02:55.47][02:56.12]羡慕和你同城的每个陌生人[02:59.64]而你会偶尔想起我吗",
                theme: "#b7daff"
            },
            {
                title: "花海",
                artist: "周杰伦",
                src: require("../../assets/music/url/花海 - 周杰伦.mp3"),
                pic: "https://y.qq.com/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg?max_age=2592000",
                lrc: "[ti:花海][ar:周杰伦][al:魔杰座][by:][offset:0][00:00.00]花海 - 周杰伦 (Jay Chou)[00:02.47]词：古小力/黄淩嘉[00:04.95]曲：周杰伦[00:07.43]编曲：黄雨勋[00:09.90]制作人：周杰伦[00:12.38]吉他：李庭匡[00:14.86]录音师：杨瑞代[00:17.33]录音室：JVR Studio[00:19.81]混音师：杨大纬[00:22.29]混音室：杨大纬工作室[00:24.77]OP：JVR Music Int'l Ltd.[00:27.24]静止了 所有的花开[00:33.56]遥远了 清晰了爱[00:39.91]天郁闷 爱却很喜欢[00:46.33]那时候我不懂这叫爱[00:52.70]你喜欢 站在那窗台[00:59.02]你好久 都没再来[01:05.43]彩色的时间染上空白[01:12.80]是你流的泪晕开[01:17.52]不要你离开[01:20.72]距离隔不开[01:23.93]思念变成海[01:26.73]在窗外进不来[01:30.34]原谅说太快[01:33.55]爱成了阻碍[01:36.72]手中的风筝放太快回不来[01:43.16]不要你离开[01:46.28]回忆划不开[01:49.54]欠你的宠爱[01:52.36]我在等待重来[01:55.92]天空仍灿烂[01:59.07]它爱着大海[02:02.32]情歌被打败[02:05.58]爱已不存在[02:35.26]你喜欢 站在那窗台[02:41.46]你好久 都没再来[02:47.82]彩色的时间染上空白[02:55.09]是你流的泪晕开[02:59.88]不要你离开[03:03.14]距离隔不开[03:06.35]思念变成海[03:09.16]在窗外进不来[03:12.70]原谅说太快[03:15.96]爱成了阻碍[03:19.12]手中的风筝放太快回不来[03:25.48]不要你离开[03:28.72]回忆划不开[03:31.90]欠你的宠爱[03:34.79]我在等待重来[03:38.33]天空仍灿烂[03:41.51]它爱着大海[03:44.75]情歌被打败[03:47.94]爱已不存在",
                theme: "#b7daff"
            },
            {
                title: "单相思",
                artist: "Aimer",
                src: require("../../assets/music/url/カタオモイ - Aimer.mp3"),
                pic: "https://y.qq.com/music/photo_new/T002R300x300M000001Dos6E4bRsRx.jpg?max_age=2592000",
                lrc: "[ti:カタオモイ (单相思)][ar:Aimer (エメ)][al:daydream (白日梦)][by:][offset:0][kana:1111し1うち1さわ1たか1ひと1きょく1うち1さわ1たか1ひと1たと1きみ1かお1むかし1ふ1ぼく1おも1ひ1こころ1うた1きみ1あふ1たか1こえ1だ1おも1どお1うた1いっ1しょ1うた1わ1はく1しゅ1ひび1わた1かん1せい1きみ1わ1わ1ゆめ1かな1に1あ1こと1ば1み1ゆめ1かな1あい1いち1ど1ひと1り1う1しあわ1あじ2きょう1お1ひ1あま1す1た1やま1たに1ぜん1ぶ1き1き1こと1ば1す1ば1とく1べつ1そば1お1ぼく1おも1とし1ふ1す1わ1わ1ゆめ1かな1に1あ1こと1ば1み1ゆめ1かな1あい1あふ1きみ1ぼく1わす1つら1ぼく1さき1とお1たび1だ1ぜっ1たい1ゆる1う1か1で1あ1かた1さい1あく1ぼく1きみ1こい1ぼく1こころ1きみ1かた1おも1す1わ1わ1わ1ゆめ1かな1に1あ1こと1ば1み1ゆめ1かな1あい][00:00.00]カタオモイ (单相思) - Aimer (エメ)[00:00.79]词：内澤崇仁[00:01.59]曲：内澤崇仁[00:02.39]例えば君の顔に昔より[00:06.72][00:07.29]シワが増えても[00:09.98]それでもいいんだ[00:12.19]僕がギターを思うように[00:15.85]弾けなくなっても[00:17.23]心の歌は君で溢れているよ[00:21.77]高い声も出せずに[00:24.29]思い通り歌えない[00:26.84]それでもうなずきながら[00:29.09]一緒に歌ってくれるかな[00:31.70]割れんばかりの拍手も[00:34.03]響き渡る歓声もいらない[00:37.05]君だけ分かってよ分かってよ[00:40.84][00:41.77]Darlin'夢が叶ったの[00:46.74]お似合いの言葉が見つからないよ[00:51.92]Darlin'夢が叶ったの[00:56.65]「愛してる」[00:58.32][00:59.28]たった一度のたった一人の[01:03.97]生まれてきた幸せ[01:06.95]味わってるんだよ[01:09.03]今日がメインディッシュで[01:11.65]終わりの日には[01:12.85]甘酸っぱいデザートを食べるの[01:15.22]山も谷も全部フルコースで[01:18.67]気が利くような言葉はいらない[01:21.56]素晴らしい特別もいらない[01:24.07]ただずっとずっと[01:25.96]側に置いていてよ[01:28.93]僕の想いは歳をとると[01:32.44]増えてくばっかだ好きだよ[01:35.08]分かってよ分かってよ[01:38.56]ねえ darlin'夢が叶ったの[01:43.68]お似合いの言葉が見つからないよ[01:48.89]Darlin'夢が叶ったの[01:53.55]愛が溢れていく[01:59.06][02:21.07]君が僕を忘れてしまっても[02:25.78]ちょっと辛いけど[02:28.63]それでもいいから[02:30.70]僕より先にどこか遠くに[02:35.65]旅立つことは[02:37.40]絶対許さないから[02:40.54]生まれ変わったとしても[02:42.77]出会い方が最悪でも[02:45.65]また僕は君に恋するんだよ[02:50.66]僕の心は君にいつも片想い[02:55.59]好きだよ[02:56.68]分かってよ分かってよ[02:59.08]分かってよ[03:02.87]Darlin'夢が叶ったの[03:07.86]お似合いの言葉が見つからないよ[03:13.00]Darlin'夢が叶ったの[03:17.57]ねえ darlin'「愛してる」",
                theme: "#b7daff"
            },
            {
                title: "前前前世 (Movie ver.)",
                artist: "RADWIMPS",
                src: require("../../assets/music/url/前前前世(Movie ver.) - RADWIMPS.mp3"),
                pic: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000007oL0R1hDyxV.jpg",
                lrc: '[ti:前前前世 (Movie ver.)][ar:RADWIMPS (ラッドウィンプス)][al:君の名は。 (《你的名字。》动画电影原声带)][by:][offset:0][kana:1ぜん1ぜん1ぜん1せい1し1の1だ1よう1じ1ろう1きょく1の1だ1よう1じ1ろう1め1さ1め1あ1おそ1おこ1きみ1と1こころ2からだ1お1こ1きみ1かみ1ひとみ1むね1いた1おな1とき1す1はな1はる1むかし1し1こえ1う1なに1い1きみ1ぜん1ぜん1ぜん1せい1ぼく1きみ1さが1わら1かた1きみ1ぜん1ぜん1ぜん1ぶ1まよ1いち1さが1ゼロ1う1ちゅう1はな1きみ1ねむ1あいだ1なん1おく1なん1こう1ねん1ぶん1もの1がたり1かた1すがた1め1うつ1きみ1し1きみ1たわむ1きみ1き1いた1あい1ぎん1が1なん1こ1ぶん1は1で1あ1て1こわ1にぎ1きみ1ぜん1ぜん1ぜん1せい1ぼく1きみ1さが1さわ1こえ1なみだ1かく1めい1ぜん1や1ぼく1だれ1と1まよ1きみ1はた1た1きみ1ぼく1あきら1かた1うば1と1ぜん1ぜん1ぜん1せい1ぼく1きみ1さが1わら1かた1きみ1ぜん1ぜん1ぜん1ぶ1まよ1いち1さが1なん1こう1ねん1うた1くち][00:00.00]前前前世 (Movie ver.) - RADWIMPS (ラッドウィンプス)[00:06.77]词：野田洋次郎[00:13.55]曲：野田洋次郎[00:20.33]やっと眼を覚ましたかい[00:23.79][00:24.70]それなのになぜ眼も[00:26.64]合わせやしないんだい?[00:28.50][00:30.25]「遅いよ」と怒る君[00:33.31][00:35.00]これでもやれるだけ[00:36.71]飛ばしてきたんだよ[00:38.58][00:40.01]心が身体を追い越してきたんだよ[00:44.17][00:45.62]君の髪や瞳だけで胸が痛いよ[00:49.68][00:50.40]同じ時を吸いこんで[00:52.37]離したくないよ[00:55.16]遥か昔から知るその声に[01:00.22]生まれてはじめて[01:03.07]何を言えばいい?[01:07.92]君の前前前世から僕は[01:10.30]君を探しはじめたよ[01:12.67]そのぶきっちょな笑い方を[01:14.87]めがけてやってきたんだよ[01:17.80]君が全然全部なくなって[01:20.30]チリヂリになったって[01:22.62]もう迷わない[01:23.90]また１から探しはじめるさ[01:26.71][01:27.51]むしろ０から[01:29.15]また宇宙をはじめてみようか[01:32.37][01:43.91]どっから話すかな[01:46.89][01:48.29]君が眠っていた間のストーリー[01:51.75][01:53.77]何億何光年分の物語を[01:59.86]語りにきたんだよ[02:02.12][02:03.40]けどいざその姿この眼に映すと[02:07.01][02:08.89]君も知らぬ君とジャレて[02:11.06]戯れたいよ[02:13.15][02:13.78]君の消えぬ痛みまで[02:15.78]愛してみたいよ[02:18.27][02:19.16]銀河何個分かの果てに出逢えた[02:23.51]その手を壊さずに[02:26.52]どう握ったならいい?[02:31.29]君の前前前世から僕は[02:33.71]君を探しはじめたよ[02:35.91]その騒がしい声と涙をめがけ[02:39.13]やってきたんだよ[02:41.09]そんな革命前夜の僕らを[02:43.82]誰が止めるというんだろう[02:45.96]もう迷わない[02:47.48]君のハートに旗を立てるよ[02:50.18][02:50.92]君は僕から諦め方を奪い取ったの[02:56.17][03:53.18]前前前世から僕は[03:55.09]君を探しはじめたよ[03:57.42]そのぶきっちょな[03:58.77]笑い方をめがけて[04:00.35]やってきたんだよ[04:02.62]君が全然全部なくなって[04:05.13]チリヂリになったって[04:07.39]もう迷わない[04:08.76]また１から探しはじめるさ[04:11.79][04:12.80]何光年でも[04:13.96]この歌を口ずさみながら',
                theme: "#171513"
            },
            ],

        }
    },
    components: { aplayer },
    computed: {
        ...mapState({
            oneTalk: state => state.oneTalk,
            weaTher: state => state.weaTher
        }),
    },
    methods: {
        timeFormate(timeStamp) {
            let year = new Date(timeStamp).getFullYear()
            let month = new Date(timeStamp).getMonth() + 1 < 10 ? '0' + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1
            let date = new Date(timeStamp).getDate() < 10 ? '0' + new Date(timeStamp).getDate() : new Date(timeStamp).getDate()
            let hh = new Date(timeStamp).getHours() < 10 ? '0' + new Date(timeStamp).getHours() : new Date(timeStamp).getHours()
            let mm = new Date(timeStamp).getMinutes() < 10 ? '0' + new Date(timeStamp).getMinutes() : new Date(timeStamp).getMinutes()
            let ss = new Date(timeStamp).getSeconds() < 10 ? '0' + new Date(timeStamp).getSeconds() : new Date(timeStamp).getSeconds()
            this.nowTime.days = year + ' 年 ' + month + ' 月 ' + date + ' 日 '
            this.nowTime.hours = hh + ' : ' + mm + ' : ' + ss

        }, // 实时刷新当前时间，格式化
        nowTimes() {
            this.timeFormate(new Date())
            setInterval(this.nowTimes, 1000)
            this.clear()
        },
        clear() {
            clearInterval(this.nowTimes)
            this.nowTimes = null
        },
        eatChoice() {
            this.eat = -this.eat
            var eatList = ['重庆小面', '炒米饭', '一楼八大菜系', '二楼八大菜系', '泡面', '麻汁面', '卤肉饭', '石锅饭', '拉面', '奢侈一把']
            var eat = Math.floor(Math.random() * eatList.length);
            setTimeout(() => {
                alert(eatList[eat])
            }, 2000);
        },
        singChoice() {
            this.sing = -this.sing
            var i=0
            var singList = ['爱不会绝迹', '默', '说好的幸福呢', '一笑倾城', '风度', '清明雨上', '蒲公英的约定', '恶作剧', '形容']
            var sing=Math.floor(Math.random()*singList.length);
            const time1 = setInterval(() => {
                this.sing_show=singList[i]
                i = i + 1
                if (i >= singList.length) {
                    i = 0
                }
            }, 200)
            setTimeout(() => {
                i = 0
                clearInterval(time1)
                this.sing_show = singList[sing]
                alert(singList[sing])
            }, 2000);
        },
        changeBac(){
            var t=new Date().getTime()
            this.bg_src=`https://api.ixiaowai.cn/api/api.php?t=${t}`
        }

    },
    mounted() {
        this.$store.dispatch('Onetalk')
        this.$store.dispatch('Weather')
        this.nowTimes()

    },
    beforeDestroy() {
        this.clear()
    }
}
</script>

<style lang="css" scoped>
@font-face {
    font-family: "Pacifico-Regular";
    src: url('../../assets/font/Pacifico-Regular.ttf') format('truetype');
}

@font-face {
    font-family: "MiSans";
    src: url('../../assets/font/MiSans-Regular.woff') format('woff');
}

@font-face {
    font-family: "iconfont";
    /* Project id 3494997 */
    src: url('../../assets/font/iconfont.woff2') format('woff2'),
        url('../../assets/font/iconfont.woff') format('woff'),
        url('../../assets/font/iconfont.ttf') format('truetype');
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-guanbi:before {
    content: "\eb6a";
}

.icon-yinle:before {
    content: "\e600";
}

.icon-tupian:before {
    content: "\e63e";
}

.icon-pengyou:before {
    content: "\e746";
}

.icon-qita:before {
    content: "\e6fe";
}

.icon-41shuoshuo:before {
    content: "\e658";
}

.icon-choujiang:before {
    content: "\e604";
}

.icon-QQ-circle-fill:before {
    content: "\e887";
}

.icon-youjian_o:before {
    content: "\ebca";
}

.icon-github:before {
    content: "\e603";
}

*,
a,
p {
    text-decoration: none;
    transition: 0.3s;
    color: #efefef;
    user-select: none;
    font-family: 'MiSans', sans-serif;
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

.icons {
    position: absolute;
    left: 300px;
    top: 240px;
    display: flex;
}

.imgs img:first {
    width: 120px;
    border-radius: 50%;
}

.introduction {
    background: rgb(0 0 0 / 25%);
    backdrop-filter: blur(10px);
    /*margin: 0.5rem;*/
    padding: 1rem;
    border-radius: 6px;
    cursor: pointer;
}

.intro {
    position: absolute;
    left: 300px;
    top: 500px;
}

.intro_container {
    margin: 20px 10px;
    font-size: 1.1rem;
    width: 300px;
    font-size: 22px;

}

.intro_content1 {
    color: aqua;
}

.intro_content2 {
    display: block;
    margin-top: 5px;
    color: aqua;
}


.about {
    position: absolute;
    display: flex;
    top: 650px;
    left: 300px;
    align-items: center;
}

.about i {
    font-size: 2.5rem;
    margin: 0px 20px;
}

/* 右侧信息部分 */
.infor {
    position: absolute;
    display: flex;
    top: 180px;
    left: 1000px;

}

.infor .onetalk {
    width: 320px;
    height: 160px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 17.6px;
}

.infor .onetalk .onetalk_author {
    align-self: flex-end;
    color: aqua;
    margin-top: 20px;
}

#onetalk_cont {
    background-image: -webkit-linear-gradient(left, green, yellow, pink, blue, red 25%, green 35%,
            blue 50%, yellow 60%, red 75%, pink 85%, blue 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    animation: stream 15s infinite linear;
    background-size: 200% 100%;
}

#onetalk_auth {
    background-image: -webkit-linear-gradient(left, green, yellow, pink, blue, red 25%, green 35%,
            blue 50%, yellow 60%, red 75%, pink 85%, blue 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    animation: stream 15s infinite linear;
    background-size: 200% 100%;
}

.infor .times {
    width: 320px;
    height: 160px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
}

.mass {
    position: absolute;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 600px;
    top: 500px;
    left: 1000px;
}

.mass .first_row {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.mass .second_row {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 24px;
}

.item {
    width: 150px;
    height: 75px;
    text-align: center;
    line-height: 75px;
    font-size: 17.6px;
}

.mass span {
    margin-left: 5px;
}

/* 音乐 */
.mus {
    width: 0;
    z-index: 999;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    transition: all 0.5s;
    background-color: transparent;
}

.showMus {
    width: 20% !important;
}

/* 说说 */
.com {
    width: 46%;
    z-index: 1000;
    display: none;
    position: fixed;
    height: 82%;
    right: 4%;
    background: rgb(0 0 0 / 25%);
    backdrop-filter: blur(10px);
    top: 7%;
    border-radius: 10px;
    padding: 20px;
    overflow: auto;

}

.com_show {
    display: block !important;
}

.content_more {
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;

}

.content_all {
    margin-top: 10px;
    width: 100%;
    border-style: solid;
    border-color: aquamarine;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;

}

.content_time {
    align-self: flex-end;
}

.com_close {
    top: 4px;
    right: 8px;
    font-size: 1.45rem;
    cursor: pointer;
    position: relative;
}

.com_in {
    position: fixed;
    bottom: 5px;
    background-color: transparent;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.fixed-top {
    position: fixed;
    top: 0;
    right: 8px;
    z-index: 1030;
}

.com_input {
    border-radius: 10px;
    width: 100%;
    color: rgb(149, 0, 255);
}

.com_input_but {
    margin-left: 20px;
    width: auto;
}

/* 选择器 */
.choices {
    width: 20%;
    z-index: 1000;
    display: none;
    position: fixed;
    height: 20%;
    right: 40%;
    background: rgb(0 0 0 / 25%);
    backdrop-filter: blur(10px);
    top: 7%;
    border-radius: 10px;
    padding: 20px;
    overflow: auto;

}

.choices_show {
    display: block !important;
}

.eat_choice {
    width: 40%;
    height: 40%;
    z-index: 10001;
    position: fixed;
    top: 27%;
    left: 7%;
    background: rgb(0 255 255 / 25%);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    text-align: center;
    display: table;
    cursor: pointer;
}

.eat_2 {
    height: 100%;
    vertical-align: middle;
    display: table-cell;
}

.sing_choice {
    width: 40%;
    height: 40%;
    z-index: 10001;
    position: fixed;
    top: 27%;
    right: 7%;
    background: rgb(0 255 255 / 25%);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    text-align: center;
    display: table;
    cursor: pointer;
}

.sing_2 {
    height: 100%;
    vertical-align: middle;
    display: table-cell;
}

/* 吃饭选择器 */
.choices_eat_show {
    width: 15%;
    z-index: 1005;
    display: none;
    position: fixed;
    height: 20%;
    right: 40%;
    background: rgba(230, 122, 122, 0.25);
    backdrop-filter: blur(10px);
    top: 40%;
    border-radius: 10px;
    padding: 20px;
    overflow: auto;
    justify-content: space-around;
    flex-direction: row;
}

.choices_eat_block {
    display: flex !important;
}

.choices_meau_left {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

.choices_meau_right {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

/* 唱歌选择器 */
.choices_sing_show {
    width: 10%;
    z-index: 1005;
    display: none;
    position: fixed;
    height: 5%;
    right: 40%;
    background: rgba(87, 43, 220, 0.25);
    backdrop-filter: blur(10px);
    top: 40%;
    border-radius: 10px;
    padding: 20px;
    overflow: auto;
}

.sing_show {
    width: 80%;
    height: 80%;
    text-align: center;
    font-size: 24px;
}

.choices_sing_block {
    display: flex !important;
}
</style>