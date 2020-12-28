(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\dadi\googlemaps\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_childs_childs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/childs/childs.component */ "vWNd");



class AppComponent {
    constructor() {
        this.title = 'googlemaps';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-childs");
    } }, directives: [_components_childs_childs_component__WEBPACK_IMPORTED_MODULE_1__["ChildsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Xd5K":
/*!***********************************!*\
  !*** ./src/app/classes/latlng.ts ***!
  \***********************************/
/*! exports provided: Latlng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Latlng", function() { return Latlng; });
class Latlng {
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_childs_childs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/childs/childs.component */ "vWNd");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_childs_childs_component__WEBPACK_IMPORTED_MODULE_3__["ChildsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_childs_childs_component__WEBPACK_IMPORTED_MODULE_3__["ChildsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vWNd":
/*!*******************************************************!*\
  !*** ./src/app/components/childs/childs.component.ts ***!
  \*******************************************************/
/*! exports provided: ChildsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildsComponent", function() { return ChildsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_latlng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/latlng */ "Xd5K");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ChildsComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildsComponent_li_4_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.changeCenter(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
// import shp from 'shpjs';
class ChildsComponent {
    constructor() {
        //创建标记的数据
        this.locations = [
            { lat: -31.56391, lng: 147.154312, },
            { lat: -33.718234, lng: 150.363181 },
            { lat: -33.727111, lng: 150.371124 },
            { lat: -33.848588, lng: 151.209834 },
            { lat: -33.851702, lng: 151.216968 },
            { lat: -34.671264, lng: 150.863657 },
            { lat: -35.304724, lng: 148.662905 },
            { lat: -36.817685, lng: 175.699196 },
            { lat: -36.828611, lng: 175.790222 },
        ];
        this.uluru = { lat: -25.344, lng: 131.036 };
    }
    //初始化地图
    newMap(value) {
        var divMap = document.querySelector('#map');
        var that = this;
        //创建一个地图对象
        this.map = new google.maps.Map(document.querySelector('#map'), {
            zoom: 5,
            center: value,
        });
    }
    //点击鼠标创建创建标记
    newMarker() {
        var that = this;
        that.markers = that.locations.map((location, i) => {
            return new google.maps.Marker({
                position: location,
                map: that.map,
                title: `${i}`,
                label: `${i + 1}`
            });
        });
    }
    //改变中心点
    changeCenter(value) {
        this.map.setCenter({
            lat: value.lat,
            lng: value.lng
        });
    }
    //删除标记
    deleteMarker() {
        this.markers.map((item) => {
            item.setMap(null);
        });
    }
    //划线操作，根据我们得到的数据 Polyline绘制折线
    painImg() {
        var that = this;
        const flightpath = new google.maps.Polyline({
            path: that.locations,
            geodesic: true,
            strokeColor: 'yellow',
            strokeOpacity: 0.5,
            strokeWeight: 2
        });
        this.deleteMarker();
        flightpath.setMap(that.map);
    }
    //绘制多边形的函数
    painMoreImg() {
        //flightpaths相当于是我们绘制了一个多边形，如果我们想在地图上展示它，我们就需要把它放到地图上
        this.flightPaths = new google.maps.Polygon({
            paths: this.locations,
        });
        this.flightPaths.setMap(this.map);
        console.log(this.flightPaths.getPath().getAt(2).toString());
    }
    changeColor() {
        this.flightPaths.setOptions({
            fillColor: 'red'
        });
        console.log(1);
        console.log(this.flightPaths.fillColor);
    }
    importData() {
    }
    //在地图上生成一个infoWindow
    producetInfoWindow() {
        alert(1);
        let infoWindow = new google.maps.InfoWindow({
            content: 'hello google'
        });
        const marker = new google.maps.Marker({
            position: this.uluru,
            map: this.map,
        });
        infoWindow.open(this.map, marker);
    }
    //导入数据生成的多边形
    Ploygonpain(value) {
        let that = this;
        //导入的数据，被转换为geoJSON在转换为坐标点，再到这的生成多边形 Ploygon
        let ployGon = new google.maps.Polygon({
            paths: value,
            strokeColor: 'red',
            strokeOpacity: .6,
            strokeWeight: 2,
            fillColor: 'red',
        });
        ployGon.setMap(that.map);
    }
    // twoMap(value){
    //   let map = new google.maps.Map(document.getElementById('app'),{
    //     center:{lat: -25.344, lng: 131.036},
    //     zoom:4,
    //   })
    //   let polygon = new google.maps.Polygon({
    //       paths:value,
    //       fillColor:'red',
    //       strokeColor:'yellow'
    //   })
    //   polygon.setMap(map)
    //   polygon.addListener('click',(event)=>{
    //     console.log(event.latLng.lat(),event.latLng.lng())
    //   })
    // }
    //使用h5自带的方法 fileRead把shapfile解析成二进制，然后转为Geojson文件
    changShap() {
        console.log(this);
        let that = this;
        let reader = new FileReader(); //实例化一个reader对象，对shapefile文件进行读取
        reader.readAsArrayBuffer(this.uploadFile.files[0]); //解析我上传的文件
        reader.onerror = function () {
            console.log('解析出错了');
        };
        reader.onloadstart = function () {
            console.log('解析开始');
        };
        reader.onprogress = function () {
            console.log('解析正在加载');
        };
        reader.onload = function () {
            var fileData = this.result; //fileData就是我们读取到的二进制文件
            //2.我们通过引入shapfile文件进行解析二进制那个转换为GeoJson文件
            let shapfile = __webpack_require__(/*! shapefile */ "wmoj");
            shapfile.read(fileData).then(geoJson => {
                console.log(geoJson);
                // const geoFeatures = that.convertToFeatures(geoJson);//对geoJSON对象数据进行处理
                // const mapData = new google.maps.Data();  //创建google map数据层
                // // console.log(geoFeatures)
                // //  把数据显示在数据层上
                // mapData.addGeoJson({  //返回一个数组 parsed json  序列化
                //   type: 'FeatureCollection',
                //   features: geoFeatures
                // });
                // console.log(mapData)
                // mapData.setMap(that.map);  //把数据层显示在地图上
                //设置地图上的数据层的样式
                // mapData.setStyle({
                //   fillColor:'yellow',
                //   strokeWeight:2,
                //   strokeColor:'red'
                // })
                // return;
                //features  特征
                //geometry  几何
                //coordinates  坐标
                const eqfeed_callback = function (geoJson) {
                    for (let i = 0; i < geoJson.features.length; i++) {
                        let arr = []; //MultiPolygon多变型的数组 一个feature就是一个数组
                        const coords = geoJson.features[i].geometry.coordinates; //得到一个数组
                        let type = coords.length; //geoJson.features[i].geometry.type;  //得到当前几何的类型是什么，geoJSON的对象类型可以是point ploygon lineString
                        if (type !== 1) {
                            console.log(coords.length);
                            //解析MultiPolygon的多边形的数据
                            if (coords[0].length === 1) {
                                for (let j = 0; j < coords.length; j++) { //便利coords里面的数组
                                    let arr1 = [];
                                    for (let h = 0; h < coords[j].length; h++) {
                                        for (let k = 0; k < coords[j][h].length; k++) {
                                            let str = new _classes_latlng__WEBPACK_IMPORTED_MODULE_1__["Latlng"]();
                                            str.lat = coords[j][h][k][1];
                                            str.lng = coords[j][h][k][0];
                                            arr1.push(str);
                                        }
                                    }
                                    arr.push(arr1);
                                }
                                that.Ploygonpain(arr);
                                // }else if(coords[0].length !==1){
                                //   let MulityPolygon:any[] = [] //Polygon多变型的数组 一个feature就是一个数组 下面是对polygon的坐标解析
                                //   for (let j=0;j<coords.length;j++){
                                //     for(let h=0;h<coords[j].length;h++) {
                                //       let str = new Latlng(); //生成坐标点
                                //       str.lat = coords[j][h][1];
                                //       str.lng = coords[j][h][0];
                                //       MulityPolygon.push(str);
                                //     }
                                //   };
                                //   that.Ploygonpain(MulityPolygon)
                            }
                        }
                        else if (type === 1) {
                            let arr12 = [];
                            //解析Ploygon的数据
                            let arrMulity = []; //Polygon多变型的数组 一个feature就是一个数组 下面是对polygon的坐标解析
                            for (let j = 0; j < coords.length; j++) {
                                for (let h = 0; h < coords[j].length; h++) {
                                    let str = new _classes_latlng__WEBPACK_IMPORTED_MODULE_1__["Latlng"](); //生成坐标点
                                    str.lat = coords[j][h][1];
                                    str.lng = coords[j][h][0];
                                    arrMulity.push(str);
                                }
                            }
                            ;
                            // that.Ploygonpain(arrMulity)
                        }
                    }
                };
                eqfeed_callback(geoJson);
            });
        };
    }
    ngAfterViewInit() {
        this.newMap(this.uluru);
        this.uploadFile = document.getElementById('uploadFile');
    }
    convertToFeatures(data) {
        // Google map API is only support Feature and FeatureCollection.
        let geoFeatures = [];
        if (Array.isArray(data)) {
            data.forEach((item) => {
                geoFeatures = geoFeatures.concat(this.convertToFeatures(item));
            });
        }
        else {
            //进行判断，判断geoJson数据里面的类型时features 还是 featuresCollection 还是GeometryCollection
            switch (data.type) {
                case 'FeatureCollection':
                    geoFeatures = data.features;
                    break;
                case 'Feature':
                    geoFeatures.push(data);
                    break;
                case 'GeometryCollection': //返回一个
                    geoFeatures = data.geometries.map((item) => {
                        return {
                            type: 'Feature',
                            properties: {},
                            geometry: item,
                        };
                    });
                    break;
                default:
                    geoFeatures.push({
                        type: 'Feature',
                        properties: {},
                        geometry: data
                    });
            }
        }
        return geoFeatures;
    }
}
ChildsComponent.ɵfac = function ChildsComponent_Factory(t) { return new (t || ChildsComponent)(); };
ChildsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChildsComponent, selectors: [["app-childs"]], decls: 22, vars: 1, consts: [["id", "map"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "file", "id", "uploadFile", 3, "change"], [3, "click"], ["id", "app", 2, "width", "800px", "height", "800px"]], template: function ChildsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "google\u5730\u56FE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChildsComponent_li_4_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChildsComponent_Template_input_change_5_listener() { return ctx.changShap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u4E0A\u4F20\u6587\u4EF6\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildsComponent_Template_button_click_7_listener() { return ctx.newMarker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u521B\u5EFA\u6807\u8BB0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildsComponent_Template_button_click_9_listener() { return ctx.deleteMarker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u5220\u9664\u6807\u8BB0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildsComponent_Template_button_click_11_listener() { return ctx.painImg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u7ED8\u56FE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildsComponent_Template_button_click_13_listener() { return ctx.painMoreImg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u7ED8\u5236\u591A\u8FB9\u5F62");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildsComponent_Template_button_click_15_listener() { return ctx.changeColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u6539\u53D8\u591A\u8FB9\u5F62\u7684\u989C\u8272");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildsComponent_Template_button_click_17_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u5BFC\u5165\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildsComponent_Template_button_click_19_listener() { return ctx.producetInfoWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u751F\u6210\u4E00\u4E2AinfoWindow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["#map[_ngcontent-%COMP%] {\n  height: 400px;\n  \n  width: 100%;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGlsZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7QUFDRiIsImZpbGUiOiJjaGlsZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIC8qIFRoZSBoZWlnaHQgaXMgNDAwIHBpeGVscyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIFRoZSB3aWR0aCBpcyB0aGUgd2lkdGggb2YgdGhlIHdlYiBwYWdlICovXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChildsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-childs',
                templateUrl: './childs.component.html',
                styleUrls: ['./childs.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map