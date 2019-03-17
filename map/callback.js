// 获取元素
let add = document.querySelector('.address'); 
//获取当前位置
let geolocation = new BMap.Geolocation();
// 生成地图
let map = new BMap.Map("allmap");
// 配置
const options = {
    enableHighAccuracy: true
}
// 定位回调
const cb = r => {
    let { latitude, longitude } = r;
    console.log(latitude, longitude)
    map.centerAndZoom(new BMap.Point(latitude, longitude), 11); //经纬度
    map.enableScrollWheelZoom(true);
}
// 获取定位信息
geolocation.getCurrentPosition(cb,options)