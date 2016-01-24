// JavaScript Document
    //创建和初始化地图函数：
    function initMap(id,a,b,z,t){
        createMap(id,a,b,z);//创建地图
        setMapEvent();//设置地图事件
        addMapControl(t,a,b);//向地图添加控件
		createICO();
    }
    
    //创建地图函数：
    function createMap(id,a,b,z){
        var map = new BMap.Map(id);//在百度地图容器中创建一个地图
        var point = new BMap.Point(a,b);//定义一个中心点坐标113.963658,22.545308
        map.centerAndZoom(point,z);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局]
		window.point = point;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(t,a,b){
				var opts = {
  position : new BMap.Point(a+0.000055,b+0.000065),  // 指定文本标注所在的地理位置
  offset   : new BMap.Size(0, 0)    //设置文本偏移量
}
var label = new BMap.Label(t, opts);  // 创建文本标注对象
	label.setStyle({
		 color : "red",
		 fontSize : "12px",
		 height : "20px",
		 lineHeight : "20px",
		 fontFamily:"微软雅黑"
	 });
map.addOverlay(label); 
                        }
    
    	//创建图标动画
	function createICO(){

var marker = new BMap.Marker(point);  // 创建标注
map.addOverlay(marker);              // 将标注添加到地图中
//marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
window.marker  = marker ;//将map变量存储在全局
	}
	initMap("mapsz",113.963658,22.545308,17,"深圳一博");//创建和初始化地图
    initMap("mapbj",116.318454,40.040754,17,"北京一博");//创建和初始化地图
	initMap("mapsh",121.606208,31.210742,17,"上海一博");//创建和初始化图图
	initMap("mapcd",104.104809,30.679461,18,"成都一博");//创建和初始化地图
	initMap("mapgz",113.440771,23.167193,15,"广州一博");//创建和初始化地图
	initMap("mapxa",108.921663,34.231254,17,"西安一博");//创建和初始化地图
	initMap("mapfz",119.335009,26.029261,17,"福州一博");//创建和初始化地图
	initMap("mapwh",114.40326,30.513409,17,"武汉一博");//创建和初始化地图
	initMap("maphz",120.201113,30.190385,17,"杭州一博");//创建和初始化地图
	initMap("mapNj",118.79238,31.990159,17,"南京一博");//创建和初始化地图
	initMap("mapTj",117.125737,39.106199,17,"天津一博");//创建和初始化地
	initMap("mapCs",113.012568,28.244792,17,"长沙一博");//创建和初始化地