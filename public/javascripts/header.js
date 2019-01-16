/*1.创建组件*/
Vue.component("top_hd",{
    template:'<div class="top_hd"><img src="images/logo.png" alt="" class="logo"><div class="loading"><span>下载酷狗</span></div><a href="/search.html" class="search_btn"></a></div>'
});
/*导航 方法1*/
/*Vue.component("nav_hd",{
    template:'<div class="nav_hd"><ul><li><a href="/">新歌</a></li><li><a href="/top.html">排行</a></li><li><a href="/songMenu.html">歌单</a></li> <li><a href="/Songer.html">歌手</a></li> </ul></div>'
});*/
//方法2：
Vue.component("nav_hd",{
    data:function(){
        return {
            navList:[
                {url: "/", title: "新歌"},
                {url: "/top.html", title: "排行"},
                {url: "/songMenu.html", title: "歌单"},
                {url: "/Songer.html", title: "歌手"},
            ],
            urss:location.pathname  // location.pathname 获取打开的不同页面的地址路径
        }
    },
    /*下划线 方法1*/
    /*template:'<div class="nav_hd"><ul><li v-for="lis in navList"><a :href="lis.url">{{lis.title}}</a></li></ul></div>'*/
    /*下划线 方法2*/
    template:'<div class="nav_hd"><ul><li v-for="lis in navList"><a :href="lis.url==urss?\'javescript:;\':lis.url" :class="{active_nav:lis.url==urss}">{{lis.title}}</a></li></ul></div>'
});

/*2.实例 */
new Vue({
    el:"#app1",
});


/*Vue.component("info_hd",{
    template:'<div class="info_hd"> <div class="info_hd_title"><p v-text="topTitle"></p></div> <img src="images/20150331161100773965.png" alt=""/> <div class="info_time"> <span>上次更新时间：2018-08-07</span> </div> </div>'
});
new Vue({
    el:"#app2",
});*/






