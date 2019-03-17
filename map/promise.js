// 获取元素
let add = document.querySelector('.address'); 
// 获取当前位置
let geolocation = new BMap.Geolocation();
// 生成地图
let map = new BMap.Map("allmap");
// 配置
const options = {
    enableHighAccuracy: true
}

/**
 * 获取经纬度
 * 
 * @param {Object} [enableHighAccuracy=true] ( 地图配置参数 )
 */
const getPosition = option => new Promise( resolve => {
    geolocation.getCurrentPosition(function(r){ 
    // 如果获取定位信息成功的话，那定位信息将在这个回调函数里面返回
        let { latitude, longitude } = r;
        resolve({
            latitude,
            longitude
        })
    },option)
})

getPosition().then( ({ latitude, longitude }) => {
    console.log(latitude, longitude)
    // 写入地图
    map.centerAndZoom(new BMap.Point(latitude, longitude), 11); //经纬度
    map.enableScrollWheelZoom(true);
});