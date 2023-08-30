(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/buscar/buscar.component */ "./src/app/pages/buscar/buscar.component.ts");
/* harmony import */ var _pages_pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pelicula/pelicula.component */ "./src/app/pages/pelicula/pelicula.component.ts");








const routes = [
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'pelicula/:id',
        component: _pages_pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_5__["PeliculaComponent"]
    },
    {
        path: 'buscar/:texto',
        component: _pages_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__["BuscarComponent"]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                    _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/cast-slideshow/cast-slideshow.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/cast-slideshow/cast-slideshow.component.ts ***!
  \***********************************************************************/
/*! exports provided: CastSlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastSlideshowComponent", function() { return CastSlideshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/poster.pipe */ "./src/app/pipes/poster.pipe.ts");





function CastSlideshowComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "poster");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, actor_r1.profile_path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", actor_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", actor_r1.name, " ");
} }
class CastSlideshowComponent {
    constructor() { }
    ngOnInit() {
        // console.log(this.cast);
    }
    ngAfterViewInit() {
        const swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-container', {
            slidesPerView: 5.3,
            freeMode: true,
            spaceBetween: 15
        });
    }
}
CastSlideshowComponent.ɵfac = function CastSlideshowComponent_Factory(t) { return new (t || CastSlideshowComponent)(); };
CastSlideshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CastSlideshowComponent, selectors: [["app-cast-slideshow"]], inputs: { cast: "cast" }, decls: 3, vars: 1, consts: [[1, "swiper-container"], [1, "swiper-wrapper"], ["class", "swiper-slide text-white text-center", 4, "ngFor", "ngForOf"], [1, "swiper-slide", "text-white", "text-center"], [1, "img-thumbnail", 3, "src", "alt"]], template: function CastSlideshowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CastSlideshowComponent_div_2_Template, 4, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cast);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_3__["PosterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FzdC1zbGlkZXNob3cvY2FzdC1zbGlkZXNob3cuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CastSlideshowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cast-slideshow',
                templateUrl: './cast-slideshow.component.html',
                styleUrls: ['./cast-slideshow.component.css']
            }]
    }], function () { return []; }, { cast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-starrating */ "./node_modules/ng-starrating/__ivy_ngcc__/fesm2015/ng-starrating.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideshow/slideshow.component */ "./src/app/components/slideshow/slideshow.component.ts");
/* harmony import */ var _peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./peliculas-poster-grid/peliculas-poster-grid.component */ "./src/app/components/peliculas-poster-grid/peliculas-poster-grid.component.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cast-slideshow/cast-slideshow.component */ "./src/app/components/cast-slideshow/cast-slideshow.component.ts");










class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ng_starrating__WEBPACK_IMPORTED_MODULE_3__["RatingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_5__["SlideshowComponent"],
        _peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_6__["PeliculasPosterGridComponent"],
        _cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_8__["CastSlideshowComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ng_starrating__WEBPACK_IMPORTED_MODULE_3__["RatingModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]], exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_5__["SlideshowComponent"],
        _peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_6__["PeliculasPosterGridComponent"],
        _cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_8__["CastSlideshowComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_5__["SlideshowComponent"],
                    _peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_6__["PeliculasPosterGridComponent"],
                    _cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_8__["CastSlideshowComponent"]
                ],
                exports: [
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_5__["SlideshowComponent"],
                    _peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_6__["PeliculasPosterGridComponent"],
                    _cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_8__["CastSlideshowComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    ng_starrating__WEBPACK_IMPORTED_MODULE_3__["RatingModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    buscarPelicula(texto) {
        texto = texto.trim();
        if (texto.length === 0) {
            return;
        }
        this.router.navigate(['/buscar', texto]);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 12, vars: 0, consts: [[1, "navbar", "navbar-expand-sm"], [1, "container-fluid"], ["routerLink", "/home", 1, "navbar-brand"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mb-2", "mb-lg-0"], [1, "d-flex"], ["type", "search", "placeholder", "Buscar pel\u00EDcula", "aria-label", "Search", 1, "form-control", "mr-2", 3, "keyup.enter"], ["txtBuscar", ""], ["type", "submit", 1, "btn", "btn-outline-success", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function NavbarComponent_Template_input_keyup_enter_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.buscarPelicula(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.buscarPelicula(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/peliculas-poster-grid/peliculas-poster-grid.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/peliculas-poster-grid/peliculas-poster-grid.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PeliculasPosterGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeliculasPosterGridComponent", function() { return PeliculasPosterGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-starrating */ "./node_modules/ng-starrating/__ivy_ngcc__/fesm2015/ng-starrating.js");
/* harmony import */ var _pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/poster.pipe */ "./src/app/pipes/poster.pipe.ts");






function PeliculasPosterGridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeliculasPosterGridComponent_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const movie_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onMovieClick(movie_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "poster");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "star-rating", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, movie_r1.poster_path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", movie_r1.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 6, movie_r1.vote_average, "1.1-2"), " ");
} }
class PeliculasPosterGridComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        // console.log(this.movies);
    }
    onMovieClick(movie) {
        this.router.navigate(['/pelicula', movie.id]);
    }
}
PeliculasPosterGridComponent.ɵfac = function PeliculasPosterGridComponent_Factory(t) { return new (t || PeliculasPosterGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PeliculasPosterGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeliculasPosterGridComponent, selectors: [["app-peliculas-poster-grid"]], inputs: { movies: "movies" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-md-3 mb-5 animate__animated animate__fadeIn", 4, "ngFor", "ngForOf"], [1, "col-md-3", "mb-5", "animate__animated", "animate__fadeIn"], [1, "img-fluid", "poster", 3, "src", "click"], [1, "col-10", "text-white"], ["totalstars", "10", "checkedcolor", "yellow", "uncheckedcolor", "grey", "size", "14px", "readonly", "false", 3, "value"], [1, "col-2", "text-white"]], template: function PeliculasPosterGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PeliculasPosterGridComponent_div_1_Template, 12, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_starrating__WEBPACK_IMPORTED_MODULE_3__["StarRatingComponent"]], pipes: [_pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_4__["PosterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: ["h3[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n}\r\n\r\n.poster[_ngcontent-%COMP%] {\r\n    border-radius: 10px;\r\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\r\n    margin: 5px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZWxpY3VsYXMtcG9zdGVyLWdyaWQvcGVsaWN1bGFzLXBvc3Rlci1ncmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZWxpY3VsYXMtcG9zdGVyLWdyaWQvcGVsaWN1bGFzLXBvc3Rlci1ncmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5wb3N0ZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBtYXJnaW46IDVweFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeliculasPosterGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-peliculas-poster-grid',
                templateUrl: './peliculas-poster-grid.component.html',
                styleUrls: ['./peliculas-poster-grid.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { movies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/slideshow/slideshow.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/slideshow/slideshow.component.ts ***!
  \*************************************************************/
/*! exports provided: SlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function() { return SlideshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a1) { return { "background-size": "cover", "background-image": a1 }; };
function SlideshowComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "url(https://image.tmdb.org/t/p/w500" + movie_r1.backdrop_path + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 3, movie_r1.overview, 0, 130), "... ");
} }
class SlideshowComponent {
    constructor() { }
    ngAfterViewInit() {
        this.mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-container', {
            loop: true,
        });
    }
    ngOnInit() {
        // console.log(this.movies);
    }
    onSlideNext() {
        this.mySwiper.slideNext();
    }
    onSlidePrev() {
        this.mySwiper.slidePrev();
    }
}
SlideshowComponent.ɵfac = function SlideshowComponent_Factory(t) { return new (t || SlideshowComponent)(); };
SlideshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideshowComponent, selectors: [["app-slideshow"]], inputs: { movies: "movies" }, decls: 6, vars: 1, consts: [[1, "swiper-container"], [1, "swiper-wrapper"], ["class", "swiper-slide", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "swiper-button-prev", 3, "click"], [1, "swiper-button-next", 3, "click"], [1, "swiper-slide", 3, "ngStyle"], [1, "movie-description"]], template: function SlideshowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SlideshowComponent_div_2_Template, 7, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideshowComponent_Template_div_click_4_listener() { return ctx.onSlidePrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideshowComponent_Template_div_click_5_listener() { return ctx.onSlideNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".swiper-container[_ngcontent-%COMP%] {\r\n    height: 330px;\r\n    width: 100%;\r\n}\r\n\r\n.swiper-button-prev[_ngcontent-%COMP%], .swiper-button-next[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n.movie-description[_ngcontent-%COMP%] {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    bottom: 0;\r\n    padding: 5px 30px;\r\n    position: absolute;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXNob3cvc2xpZGVzaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NsaWRlc2hvdy9zbGlkZXNob3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN3aXBlci1idXR0b24tcHJldiwgLnN3aXBlci1idXR0b24tbmV4dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb3ZpZS1kZXNjcmlwdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideshowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slideshow',
                templateUrl: './slideshow.component.html',
                styleUrls: ['./slideshow.component.css']
            }]
    }], function () { return []; }, { movies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/buscar/buscar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/buscar/buscar.component.ts ***!
  \**************************************************/
/*! exports provided: BuscarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarComponent", function() { return BuscarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/peliculas.service */ "./src/app/services/peliculas.service.ts");
/* harmony import */ var _components_peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/peliculas-poster-grid/peliculas-poster-grid.component */ "./src/app/components/peliculas-poster-grid/peliculas-poster-grid.component.ts");





class BuscarComponent {
    constructor(activatedRoute, peliculasService) {
        this.activatedRoute = activatedRoute;
        this.peliculasService = peliculasService;
        this.texto = '';
        this.movies = [];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.texto = params.texto;
            this.peliculasService.buscarPeliculas(params.texto).subscribe(movies => {
                this.movies = movies;
            });
        });
    }
}
BuscarComponent.ɵfac = function BuscarComponent_Factory(t) { return new (t || BuscarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"])); };
BuscarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuscarComponent, selectors: [["app-buscar"]], decls: 8, vars: 2, consts: [[1, "text-capitalize"], [1, "row"], [1, "col"], [3, "movies"]], template: function BuscarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Buscar pel\u00EDculas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-peliculas-poster-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.texto, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx.movies);
    } }, directives: [_components_peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_3__["PeliculasPosterGridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1c2Nhci9idXNjYXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuscarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buscar',
                templateUrl: './buscar.component.html',
                styleUrls: ['./buscar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peliculas.service */ "./src/app/services/peliculas.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/slideshow/slideshow.component */ "./src/app/components/slideshow/slideshow.component.ts");
/* harmony import */ var _components_peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/peliculas-poster-grid/peliculas-poster-grid.component */ "./src/app/components/peliculas-poster-grid/peliculas-poster-grid.component.ts");






function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-slideshow", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx_r0.moviesSlideshow);
} }
function HomeComponent_app_peliculas_poster_grid_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-peliculas-poster-grid", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx_r1.movies);
} }
class HomeComponent {
    constructor(peliculasService) {
        this.peliculasService = peliculasService;
        this.movies = [];
        this.moviesSlideshow = [];
    }
    onScroll() {
        const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
        const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
        if (pos > max) {
            // TODO: llamar el servicio
            if (this.peliculasService.cargando) {
                return;
            }
            this.peliculasService.getCartelera().subscribe(movies => {
                this.movies.push(...movies);
            });
        }
    }
    ngOnInit() {
        this.peliculasService.getCartelera()
            .subscribe(movies => {
            // console.log(resp.results);
            this.movies = movies;
            this.moviesSlideshow = movies;
        });
    }
    ngOnDestroy() {
        this.peliculasService.resetCarteleraPage();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_peliculas_service__WEBPACK_IMPORTED_MODULE_1__["PeliculasService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 2, consts: [["class", "row", 4, "ngIf"], [1, "mt-5"], [3, "movies", 4, "ngIf"], [1, "row"], [1, "col"], [3, "movies"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cartelera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pel\u00EDculas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_app_peliculas_poster_grid_5_Template, 1, 1, "app-peliculas-poster-grid", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movies.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movies.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_3__["SlideshowComponent"], _components_peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_4__["PeliculasPosterGridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_1__["PeliculasService"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pelicula/pelicula.component */ "./src/app/pages/pelicula/pelicula.component.ts");
/* harmony import */ var _buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buscar/buscar.component */ "./src/app/pages/buscar/buscar.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-starrating */ "./node_modules/ng-starrating/__ivy_ngcc__/fesm2015/ng-starrating.js");









class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
            ng_starrating__WEBPACK_IMPORTED_MODULE_7__["RatingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        _pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_3__["PeliculaComponent"],
        _buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__["BuscarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
        ng_starrating__WEBPACK_IMPORTED_MODULE_7__["RatingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                    _pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_3__["PeliculaComponent"],
                    _buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__["BuscarComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                    ng_starrating__WEBPACK_IMPORTED_MODULE_7__["RatingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/pelicula/pelicula.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/pelicula/pelicula.component.ts ***!
  \******************************************************/
/*! exports provided: PeliculaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeliculaComponent", function() { return PeliculaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/peliculas.service */ "./src/app/services/peliculas.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-starrating */ "./node_modules/ng-starrating/__ivy_ngcc__/fesm2015/ng-starrating.js");
/* harmony import */ var _components_cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cast-slideshow/cast-slideshow.component */ "./src/app/components/cast-slideshow/cast-slideshow.component.ts");
/* harmony import */ var _pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/poster.pipe */ "./src/app/pipes/poster.pipe.ts");









function PeliculaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "poster");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "star-rating", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeliculaComponent_div_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onRegresar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Regresar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r0.pelicula.poster_path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.pelicula.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.pelicula.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.pelicula.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 8, ctx_r0.pelicula.vote_average, "1.1-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.pelicula.overview, " ");
} }
function PeliculaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-cast-slideshow", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cast", ctx_r1.cast);
} }
class PeliculaComponent {
    constructor(activatedRoute, peliculasService, location, router) {
        this.activatedRoute = activatedRoute;
        this.peliculasService = peliculasService;
        this.location = location;
        this.router = router;
        this.cast = [];
    }
    ngOnInit() {
        const { id } = this.activatedRoute.snapshot.params;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.peliculasService.getPeliculaDetalle(id),
            this.peliculasService.getCast(id)
        ]).subscribe(([pelicula, cast]) => {
            if (!pelicula) {
                this.router.navigateByUrl('/home');
                return;
            }
            this.pelicula = pelicula;
            this.cast = cast.filter(actor => actor.profile_path !== null);
        });
        // this.peliculasService.getPeliculaDetalle( id ).subscribe( movie => {
        // if ( !movie ) {
        //   this.router.navigateByUrl('/home');
        //   return;
        // }
        // this.pelicula = movie;
        // });
        // this.peliculasService.getCast( id ).subscribe( cast => {
        //   console.log(cast)
        //   this.cast = cast.filter( actor => actor.profile_path !== null );
        // });
    }
    onRegresar() {
        this.location.back();
    }
}
PeliculaComponent.ɵfac = function PeliculaComponent_Factory(t) { return new (t || PeliculaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__["PeliculasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PeliculaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeliculaComponent, selectors: [["app-pelicula"]], decls: 2, vars: 2, consts: [["class", "row animate__animated animate__fadeIn animate__faster", 4, "ngIf"], ["class", "row mt-5", 4, "ngIf"], [1, "row", "animate__animated", "animate__fadeIn", "animate__faster"], [1, "col-md-6"], [1, "img-thumbnail", 3, "src", "alt"], [1, "row"], [1, "col"], ["totalstars", "10", "checkedcolor", "yellow", "uncheckedcolor", "grey", "size", "15px", "readonly", "false", 3, "value"], [1, "col", "text-white"], [1, "row", "mt-3"], [1, "row", "mt-5"], [1, "btn", "btn-outline-info", 3, "click"], [3, "cast"]], template: function PeliculaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PeliculaComponent_div_0_Template, 20, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PeliculaComponent_div_1_Template, 3, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cast.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_starrating__WEBPACK_IMPORTED_MODULE_5__["StarRatingComponent"], _components_cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["CastSlideshowComponent"]], pipes: [_pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_7__["PosterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbGljdWxhL3BlbGljdWxhLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeliculaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pelicula',
                templateUrl: './pelicula.component.html',
                styleUrls: ['./pelicula.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__["PeliculasService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _poster_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poster.pipe */ "./src/app/pipes/poster.pipe.ts");




class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_poster_pipe__WEBPACK_IMPORTED_MODULE_2__["PosterPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_poster_pipe__WEBPACK_IMPORTED_MODULE_2__["PosterPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _poster_pipe__WEBPACK_IMPORTED_MODULE_2__["PosterPipe"]
                ],
                exports: [
                    _poster_pipe__WEBPACK_IMPORTED_MODULE_2__["PosterPipe"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/poster.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/poster.pipe.ts ***!
  \**************************************/
/*! exports provided: PosterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterPipe", function() { return PosterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PosterPipe {
    transform(poster) {
        if (poster) {
            return `https://image.tmdb.org/t/p/w500${poster}`;
        }
        else {
            return './assets/no-image.jpg';
        }
    }
}
PosterPipe.ɵfac = function PosterPipe_Factory(t) { return new (t || PosterPipe)(); };
PosterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "poster", type: PosterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PosterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'poster'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/peliculas.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/peliculas.service.ts ***!
  \***********************************************/
/*! exports provided: PeliculasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeliculasService", function() { return PeliculasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class PeliculasService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3';
        this.carteleraPage = 1;
        this.cargando = false;
    }
    get params() {
        return {
            api_key: '1865f43a0549ca50d341dd9ab8b29f49',
            language: 'es-ES',
            page: this.carteleraPage.toString()
        };
    }
    resetCarteleraPage() {
        this.carteleraPage = 1;
    }
    getCartelera() {
        if (this.cargando) {
            // cargando peliculas
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        this.cargando = true;
        return this.http.get(`${this.baseUrl}/movie/now_playing`, {
            params: this.params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resp) => resp.results), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.carteleraPage += 1;
            this.cargando = false;
        }));
    }
    buscarPeliculas(texto) {
        const params = Object.assign(Object.assign({}, this.params), { page: '1', query: texto });
        // https://api.themoviedb.org/3/search/movie
        return this.http.get(`${this.baseUrl}/search/movie`, {
            params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => resp.results));
    }
    getPeliculaDetalle(id) {
        return this.http.get(`${this.baseUrl}/movie/${id}`, {
            params: this.params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null)));
    }
    getCast(id) {
        return this.http.get(`${this.baseUrl}/movie/${id}/credits`, {
            params: this.params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => resp.cast), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([])));
    }
}
PeliculasService.ɵfac = function PeliculasService_Factory(t) { return new (t || PeliculasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PeliculasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PeliculasService, factory: PeliculasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeliculasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\juliu\Desktop\IT 2023\Cusos Fernando Herrera\Angular de cero a experto 2019\angular-peliculas\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map