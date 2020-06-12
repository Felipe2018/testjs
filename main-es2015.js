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

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/elements */ "./node_modules/@angular/elements/__ivy_ngcc__/fesm2015/elements.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _labs_descarga_excel_labs_descarga_excel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./labs-descarga-excel/labs-descarga-excel.component */ "./src/app/labs-descarga-excel/labs-descarga-excel.component.ts");






class AppModule {
    constructor(injector) {
        this.injector = injector;
        const FRM_BUTTOM_COMPONENT = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_1__["createCustomElement"])(_labs_descarga_excel_labs_descarga_excel_component__WEBPACK_IMPORTED_MODULE_4__["LabsDescargaExcelComponent"], { injector });
        customElements.define('labs-descarga-excel', FRM_BUTTOM_COMPONENT);
    }
    ngDoBootstrap() { }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); }, imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_labs_descarga_excel_labs_descarga_excel_component__WEBPACK_IMPORTED_MODULE_4__["LabsDescargaExcelComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_labs_descarga_excel_labs_descarga_excel_component__WEBPACK_IMPORTED_MODULE_4__["LabsDescargaExcelComponent"]],
                entryComponents: [_labs_descarga_excel_labs_descarga_excel_component__WEBPACK_IMPORTED_MODULE_4__["LabsDescargaExcelComponent"]],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
                ],
                bootstrap: []
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/labs-descarga-excel/labs-descarga-excel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/labs-descarga-excel/labs-descarga-excel.component.ts ***!
  \**********************************************************************/
/*! exports provided: LabsDescargaExcelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabsDescargaExcelComponent", function() { return LabsDescargaExcelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_excel_excel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/excel/excel.service */ "./src/app/services/excel/excel.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function LabsDescargaExcelComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LabsDescargaExcelComponent {
    constructor(excelService) {
        this.excelService = excelService;
        this.fileName = 'file';
        this.type = 'primary';
        this.theme = 'light';
        this.text = 'Descargar';
        this.h = 'medium';
        this.icon = true;
        this.timestamp = false;
        this.disabled = false;
        this.columnsHeader = [];
        this.data = [];
    }
    getDownload() {
        const tag = this.text;
        if (this.data.length > 0) {
            this.disabled = true;
            this.text = 'Por favor espere...';
            this.excelService.exportXlsx(this.data, this.fileName, eval(this.timestamp.toString()), this.columnsHeader);
        }
        setTimeout(() => {
            this.disabled = false;
            this.text = tag;
        }, 2500);
    }
    ngOnInit() {
        this.icon = eval(this.icon.toString());
    }
}
LabsDescargaExcelComponent.ɵfac = function LabsDescargaExcelComponent_Factory(t) { return new (t || LabsDescargaExcelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_excel_excel_service__WEBPACK_IMPORTED_MODULE_1__["ExcelService"])); };
LabsDescargaExcelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabsDescargaExcelComponent, selectors: [["labs-descarga-excel"]], inputs: { fileName: ["file-name", "fileName"], type: "type", theme: "theme", text: "text", h: "h", icon: "icon", timestamp: "timestamp", disabled: "disabled", columnsHeader: ["columns-header", "columnsHeader"], data: ["columns-content", "data"] }, decls: 5, vars: 7, consts: [["mat-flat-button", "", 3, "ngClass", "color", "disabled", "click"], ["height", "18", "width", "18", "viewBox", "0 0 1792 1792", 4, "ngIf"], [1, "wrap-text"], ["height", "18", "width", "18", "viewBox", "0 0 1792 1792"], ["d", "M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-979-234v106h281v-106h-75l103-161q5-7 10-16.5t7.5-13.5 3.5-4h2q1 4 5 10 2 4 4.5 7.5t6 8 6.5 8.5l107 161h-76v106h291v-106h-68l-192-273 195-282h67v-107h-279v107h74l-103 159q-4 7-10 16.5t-9 13.5l-2 3h-2q-1-4-5-10-6-11-17-23l-106-159h76v-107h-290v107h68l189 272-194 283h-68z"]], template: function LabsDescargaExcelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LabsDescargaExcelComponent_Template_button_click_1_listener() { return ctx.getDownload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LabsDescargaExcelComponent__svg_svg_2_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.theme + "-theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.h === "large" ? "btn-large" : ctx.h === "small" ? "" : "btn-medium")("color", ctx.type)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".mat-button,.mat-raised-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button,.mat-fab,.mat-mini-fab{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(0)}.cdk-high-contrast-active .mat-ripple-element{display:none}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast: active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-start{/*!*/}@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation:cdk-text-field-autofill-start 0s 1ms;animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation:cdk-text-field-autofill-end 0s 1ms;animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}body{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:transparent}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#02a5a5}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#1464a5}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-primary[disabled],.mat-button.mat-accent[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#02a5a5}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#1464a5}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#f44336}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button .mat-ripple-element,.mat-icon-button .mat-ripple-element,.mat-stroked-button .mat-ripple-element{opacity:.1;background-color:currentColor}.mat-button-focus-overlay{background:#000}.mat-stroked-button:not([disabled]){border-color:rgba(0,0,0,.12)}.mat-flat-button,.mat-raised-button,.mat-fab,.mat-mini-fab{color:rgba(0,0,0,.87);background-color:#fff}.mat-flat-button.mat-primary,.mat-raised-button.mat-primary,.mat-fab.mat-primary,.mat-mini-fab.mat-primary{color:#fff}.mat-flat-button.mat-accent,.mat-raised-button.mat-accent,.mat-fab.mat-accent,.mat-mini-fab.mat-accent{color:#fff}.mat-flat-button.mat-warn,.mat-raised-button.mat-warn,.mat-fab.mat-warn,.mat-mini-fab.mat-warn{color:#fff}.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-accent[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-flat-button.mat-primary,.mat-raised-button.mat-primary,.mat-fab.mat-primary,.mat-mini-fab.mat-primary{background-color:#02a5a5}.mat-flat-button.mat-accent,.mat-raised-button.mat-accent,.mat-fab.mat-accent,.mat-mini-fab.mat-accent{background-color:#1464a5}.mat-flat-button.mat-warn,.mat-raised-button.mat-warn,.mat-fab.mat-warn,.mat-mini-fab.mat-warn{background-color:#f44336}.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-accent[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-flat-button.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element,.mat-fab.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-flat-button.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element,.mat-fab.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-flat-button.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element,.mat-fab.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-stroked-button:not([class*=mat-elevation-z]),.mat-flat-button:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mat-raised-button[disabled]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-fab:not([class*=mat-elevation-z]),.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]),.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}.mat-fab[disabled]:not([class*=mat-elevation-z]),.mat-mini-fab[disabled]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.dark-theme .mat-button,.dark-theme .mat-icon-button,.dark-theme .mat-stroked-button{color:inherit;background:transparent}.dark-theme .mat-button.mat-primary,.dark-theme .mat-icon-button.mat-primary,.dark-theme .mat-stroked-button.mat-primary{color:#0e2245}.dark-theme .mat-button.mat-accent,.dark-theme .mat-icon-button.mat-accent,.dark-theme .mat-stroked-button.mat-accent{color:#2f639c}.dark-theme .mat-button.mat-warn,.dark-theme .mat-icon-button.mat-warn,.dark-theme .mat-stroked-button.mat-warn{color:#f44336}.dark-theme .mat-button.mat-primary[disabled],.dark-theme .mat-button.mat-accent[disabled],.dark-theme .mat-button.mat-warn[disabled],.dark-theme .mat-button[disabled][disabled],.dark-theme .mat-icon-button.mat-primary[disabled],.dark-theme .mat-icon-button.mat-accent[disabled],.dark-theme .mat-icon-button.mat-warn[disabled],.dark-theme .mat-icon-button[disabled][disabled],.dark-theme .mat-stroked-button.mat-primary[disabled],.dark-theme .mat-stroked-button.mat-accent[disabled],.dark-theme .mat-stroked-button.mat-warn[disabled],.dark-theme .mat-stroked-button[disabled][disabled]{color:rgba(255,255,255,.3)}.dark-theme .mat-button.mat-primary .mat-button-focus-overlay,.dark-theme .mat-icon-button.mat-primary .mat-button-focus-overlay,.dark-theme .mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#0e2245}.dark-theme .mat-button.mat-accent .mat-button-focus-overlay,.dark-theme .mat-icon-button.mat-accent .mat-button-focus-overlay,.dark-theme .mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#2f639c}.dark-theme .mat-button.mat-warn .mat-button-focus-overlay,.dark-theme .mat-icon-button.mat-warn .mat-button-focus-overlay,.dark-theme .mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#f44336}.dark-theme .mat-button[disabled] .mat-button-focus-overlay,.dark-theme .mat-icon-button[disabled] .mat-button-focus-overlay,.dark-theme .mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.dark-theme .mat-button .mat-ripple-element,.dark-theme .mat-icon-button .mat-ripple-element,.dark-theme .mat-stroked-button .mat-ripple-element{opacity:.1;background-color:currentColor}.dark-theme .mat-button-focus-overlay{background:#fff}.dark-theme .mat-stroked-button:not([disabled]){border-color:rgba(255,255,255,.12)}.dark-theme .mat-flat-button,.dark-theme .mat-raised-button,.dark-theme .mat-fab,.dark-theme .mat-mini-fab{color:#fff;background-color:#424242}.dark-theme .mat-flat-button.mat-primary,.dark-theme .mat-raised-button.mat-primary,.dark-theme .mat-fab.mat-primary,.dark-theme .mat-mini-fab.mat-primary{color:#fff}.dark-theme .mat-flat-button.mat-accent,.dark-theme .mat-raised-button.mat-accent,.dark-theme .mat-fab.mat-accent,.dark-theme .mat-mini-fab.mat-accent{color:#fff}.dark-theme .mat-flat-button.mat-warn,.dark-theme .mat-raised-button.mat-warn,.dark-theme .mat-fab.mat-warn,.dark-theme .mat-mini-fab.mat-warn{color:#fff}.dark-theme .mat-flat-button.mat-primary[disabled],.dark-theme .mat-flat-button.mat-accent[disabled],.dark-theme .mat-flat-button.mat-warn[disabled],.dark-theme .mat-flat-button[disabled][disabled],.dark-theme .mat-raised-button.mat-primary[disabled],.dark-theme .mat-raised-button.mat-accent[disabled],.dark-theme .mat-raised-button.mat-warn[disabled],.dark-theme .mat-raised-button[disabled][disabled],.dark-theme .mat-fab.mat-primary[disabled],.dark-theme .mat-fab.mat-accent[disabled],.dark-theme .mat-fab.mat-warn[disabled],.dark-theme .mat-fab[disabled][disabled],.dark-theme .mat-mini-fab.mat-primary[disabled],.dark-theme .mat-mini-fab.mat-accent[disabled],.dark-theme .mat-mini-fab.mat-warn[disabled],.dark-theme .mat-mini-fab[disabled][disabled]{color:rgba(255,255,255,.3)}.dark-theme .mat-flat-button.mat-primary,.dark-theme .mat-raised-button.mat-primary,.dark-theme .mat-fab.mat-primary,.dark-theme .mat-mini-fab.mat-primary{background-color:#0e2245}.dark-theme .mat-flat-button.mat-accent,.dark-theme .mat-raised-button.mat-accent,.dark-theme .mat-fab.mat-accent,.dark-theme .mat-mini-fab.mat-accent{background-color:#2f639c}.dark-theme .mat-flat-button.mat-warn,.dark-theme .mat-raised-button.mat-warn,.dark-theme .mat-fab.mat-warn,.dark-theme .mat-mini-fab.mat-warn{background-color:#f44336}.dark-theme .mat-flat-button.mat-primary[disabled],.dark-theme .mat-flat-button.mat-accent[disabled],.dark-theme .mat-flat-button.mat-warn[disabled],.dark-theme .mat-flat-button[disabled][disabled],.dark-theme .mat-raised-button.mat-primary[disabled],.dark-theme .mat-raised-button.mat-accent[disabled],.dark-theme .mat-raised-button.mat-warn[disabled],.dark-theme .mat-raised-button[disabled][disabled],.dark-theme .mat-fab.mat-primary[disabled],.dark-theme .mat-fab.mat-accent[disabled],.dark-theme .mat-fab.mat-warn[disabled],.dark-theme .mat-fab[disabled][disabled],.dark-theme .mat-mini-fab.mat-primary[disabled],.dark-theme .mat-mini-fab.mat-accent[disabled],.dark-theme .mat-mini-fab.mat-warn[disabled],.dark-theme .mat-mini-fab[disabled][disabled]{background-color:rgba(255,255,255,.12)}.dark-theme .mat-flat-button.mat-primary .mat-ripple-element,.dark-theme .mat-raised-button.mat-primary .mat-ripple-element,.dark-theme .mat-fab.mat-primary .mat-ripple-element,.dark-theme .mat-mini-fab.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.dark-theme .mat-flat-button.mat-accent .mat-ripple-element,.dark-theme .mat-raised-button.mat-accent .mat-ripple-element,.dark-theme .mat-fab.mat-accent .mat-ripple-element,.dark-theme .mat-mini-fab.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.1)}.dark-theme .mat-flat-button.mat-warn .mat-ripple-element,.dark-theme .mat-raised-button.mat-warn .mat-ripple-element,.dark-theme .mat-fab.mat-warn .mat-ripple-element,.dark-theme .mat-mini-fab.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.dark-theme .mat-stroked-button:not([class*=mat-elevation-z]),.dark-theme .mat-flat-button:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.dark-theme .mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.dark-theme .mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.dark-theme .mat-raised-button[disabled]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.dark-theme .mat-fab:not([class*=mat-elevation-z]),.dark-theme .mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.dark-theme .mat-fab:not([disabled]):active:not([class*=mat-elevation-z]),.dark-theme .mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}.dark-theme .mat-fab[disabled]:not([class*=mat-elevation-z]),.dark-theme .mat-mini-fab[disabled]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}button.mat-primary svg,button.mat-accent svg{fill:#fff}button.mat-tertiary{border:1px solid #1464a5 !important;background-color:#fff !important;color:#1464a5 !important}button.mat-tertiary svg{fill:#1464a5}button.mat-default{color:#121212 !important;background-color:#e9e9e9 !important}button.mat-default:active{background-color:#d3d3d3 !important}button.mat-default:disabled,button.mat-tertiary:disabled{color:rgba(18,18,18,.4) !important}button.mat-support:disabled{background-color:transparent !important}button{padding-left:.7em !important;box-shadow:0 1px 3px 0px rgba(0,0,0,.2) !important}button:hover{box-shadow:none !important}button:hover .mat-button-wrapper{opacity:.85}button:disabled{box-shadow:none !important;border:0 !important;pointer-events:none}button:disabled svg{fill:rgba(18,18,18,.4)}button.btn-medium{line-height:40px !important}button.btn-large{line-height:50px !important}.light-theme button.mat-primary:disabled,.light-theme button.mat-accent:disabled{background-color:#ccc !important}.light-theme button.mat-support:disabled{color:#d3d3d3 !important}.light-theme button.mat-support:disabled svg{fill:#d3d3d3}.dark-theme button.mat-primary:disabled,.dark-theme button.mat-accent:disabled{background-color:#ccc !important;color:rgba(18,18,18,.4) !important}.dark-theme button.mat-primary:disabled svg,.dark-theme button.mat-accent:disabled svg{fill:rgba(18,18,18,.4)}.dark-theme button.mat-support{background-color:transparent !important;color:#ccc !important}.dark-theme button.mat-support svg{fill:#ccc}.dark-theme button.mat-tertiary{border:1px solid #0e2245 !important;color:#0e2245 !important}.dark-theme button.mat-tertiary:disabled{color:rgba(18,18,18,.4) !important}.dark-theme button.mat-tertiary:disabled svg{fill:rgba(18,18,18,.4)}.dark-theme button.mat-tertiary svg{fill:#0e2245}button .wrap-text{margin-left: .4em;position: relative;top: 2px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFicy1kZXNjYXJnYS1leGNlbC9sYWJzLWRlc2NhcmdhLWV4Y2VsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0R0FBNEcsZ0RBQWdELENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxZQUFZLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsdUJBQXVCLENBQUMsaUNBQWlDLGdCQUFnQixDQUFDLG9CQUFvQixpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQywyREFBMkQsQ0FBQyxrQkFBa0IsQ0FBQyw4Q0FBOEMsWUFBWSxDQUFDLHFCQUFxQixRQUFRLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsbURBQW1ELG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsY0FBYyxDQUFDLFlBQVksQ0FBQyw2QkFBNkIsWUFBWSxDQUFDLDRCQUE0QixZQUFZLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLGtCQUFrQixpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsdUNBQXVDLENBQUMseURBQXlELENBQUMsU0FBUyxDQUFDLG1EQUFtRCxTQUFTLENBQUMsOENBQThDLG1EQUFtRCxVQUFVLENBQUMsQ0FBQywyQkFBMkIsMEJBQTBCLENBQUMsaUdBQWlHLFNBQVMsQ0FBQyw2Q0FBNkMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLHdCQUF3QixjQUFjLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGlEQUF5QyxJQUFJLENBQUMsQ0FBOUMseUNBQXlDLElBQUksQ0FBQyxDQUFDLCtDQUF1QyxJQUFJLENBQUMsQ0FBNUMsdUNBQXVDLElBQUksQ0FBQyxDQUFDLG9EQUFvRCxzREFBNkMsQ0FBN0MsOENBQThDLENBQUMsMERBQTBELG9EQUEyQyxDQUEzQyw0Q0FBNEMsQ0FBQywrQkFBK0IsV0FBVyxDQUFDLHlDQUF5Qyx3QkFBd0IsQ0FBQyxpQ0FBaUMsQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsQ0FBQyxpREFBaUQsd0JBQXdCLENBQUMsaUNBQWlDLENBQUMsbUJBQW1CLENBQUMsS0FBSyw4Q0FBOEMsQ0FBQyxpREFBaUQsYUFBYSxDQUFDLHNCQUFzQixDQUFDLHFGQUFxRixhQUFhLENBQUMsa0ZBQWtGLGFBQWEsQ0FBQyw0RUFBNEUsYUFBYSxDQUFDLDBiQUEwYixxQkFBcUIsQ0FBQyxtS0FBbUssd0JBQXdCLENBQUMsZ0tBQWdLLHdCQUF3QixDQUFDLDBKQUEwSix3QkFBd0IsQ0FBQyw2SkFBNkosNEJBQTRCLENBQUMsNkdBQTZHLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLG9DQUFvQyw0QkFBNEIsQ0FBQywyREFBMkQscUJBQXFCLENBQUMscUJBQXFCLENBQUMsMkdBQTJHLFVBQVUsQ0FBQyx1R0FBdUcsVUFBVSxDQUFDLCtGQUErRixVQUFVLENBQUMsb2pCQUFvakIscUJBQXFCLENBQUMsMkdBQTJHLHdCQUF3QixDQUFDLHVHQUF1Ryx3QkFBd0IsQ0FBQywrRkFBK0Ysd0JBQXdCLENBQUMsb2pCQUFvakIsZ0NBQWdDLENBQUMsMkxBQTJMLHFDQUFxQyxDQUFDLHVMQUF1TCxxQ0FBcUMsQ0FBQywrS0FBK0sscUNBQXFDLENBQUMsaUdBQWlHLHFIQUFxSCxDQUFDLGlEQUFpRCxzSEFBc0gsQ0FBQyx3RUFBd0Usd0hBQXdILENBQUMsMkRBQTJELHFIQUFxSCxDQUFDLG1GQUFtRix3SEFBd0gsQ0FBQyxpSUFBaUkseUhBQXlILENBQUMsdUdBQXVHLHFIQUFxSCxDQUFDLHFGQUFxRixhQUFhLENBQUMsc0JBQXNCLENBQUMseUhBQXlILGFBQWEsQ0FBQyxzSEFBc0gsYUFBYSxDQUFDLGdIQUFnSCxhQUFhLENBQUMsMGtCQUEwa0IsMEJBQTBCLENBQUMsdU1BQXVNLHdCQUF3QixDQUFDLG9NQUFvTSx3QkFBd0IsQ0FBQyw4TEFBOEwsd0JBQXdCLENBQUMsaU1BQWlNLDRCQUE0QixDQUFDLGlKQUFpSixVQUFVLENBQUMsNkJBQTZCLENBQUMsc0NBQXNDLGVBQWUsQ0FBQyxnREFBZ0Qsa0NBQWtDLENBQUMsMkdBQTJHLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQywySkFBMkosVUFBVSxDQUFDLHVKQUF1SixVQUFVLENBQUMsK0lBQStJLFVBQVUsQ0FBQyxvdkJBQW92QiwwQkFBMEIsQ0FBQywySkFBMkosd0JBQXdCLENBQUMsdUpBQXVKLHdCQUF3QixDQUFDLCtJQUErSSx3QkFBd0IsQ0FBQyxvdkJBQW92QixzQ0FBc0MsQ0FBQywyT0FBMk8scUNBQXFDLENBQUMsdU9BQXVPLHFDQUFxQyxDQUFDLCtOQUErTixxQ0FBcUMsQ0FBQyx5SEFBeUgscUhBQXFILENBQUMsNkRBQTZELHNIQUFzSCxDQUFDLG9GQUFvRix3SEFBd0gsQ0FBQyx1RUFBdUUscUhBQXFILENBQUMsMkdBQTJHLHdIQUF3SCxDQUFDLHlKQUF5Six5SEFBeUgsQ0FBQywrSEFBK0gscUhBQXFILENBQUMsNkNBQTZDLFNBQVMsQ0FBQyxvQkFBb0IsbUNBQW1DLENBQUMsZ0NBQWdDLENBQUMsd0JBQXdCLENBQUMsd0JBQXdCLFlBQVksQ0FBQyxtQkFBbUIsd0JBQXdCLENBQUMsbUNBQW1DLENBQUMsMEJBQTBCLG1DQUFtQyxDQUFDLHlEQUF5RCxrQ0FBa0MsQ0FBQyw0QkFBNEIsdUNBQXVDLENBQUMsT0FBTyw0QkFBNEIsQ0FBQyxrREFBa0QsQ0FBQyxhQUFhLDBCQUEwQixDQUFDLGlDQUFpQyxXQUFXLENBQUMsZ0JBQWdCLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixzQkFBc0IsQ0FBQyxrQkFBa0IsMkJBQTJCLENBQUMsaUJBQWlCLDJCQUEyQixDQUFDLGlGQUFpRixnQ0FBZ0MsQ0FBQyx5Q0FBeUMsd0JBQXdCLENBQUMsNkNBQTZDLFlBQVksQ0FBQywrRUFBK0UsZ0NBQWdDLENBQUMsa0NBQWtDLENBQUMsdUZBQXVGLHNCQUFzQixDQUFDLCtCQUErQix1Q0FBdUMsQ0FBQyxxQkFBcUIsQ0FBQyxtQ0FBbUMsU0FBUyxDQUFDLGdDQUFnQyxtQ0FBbUMsQ0FBQyx3QkFBd0IsQ0FBQyx5Q0FBeUMsa0NBQWtDLENBQUMsNkNBQTZDLHNCQUFzQixDQUFDLG9DQUFvQyxZQUFZLENBQUMsa0JBQWtCLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2xhYnMtZGVzY2FyZ2EtZXhjZWwvbGFicy1kZXNjYXJnYS1leGNlbC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWJ1dHRvbiwubWF0LXJhaXNlZC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9uLC5tYXQtZmxhdC1idXR0b24sLm1hdC1mYWIsLm1hdC1taW5pLWZhYntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1yaXBwbGV7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5tYXQtcmlwcGxlOm5vdCg6ZW1wdHkpe3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfS5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVke292ZXJmbG93OnZpc2libGV9Lm1hdC1yaXBwbGUtZWxlbWVudHtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246b3BhY2l0eSx0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO3RyYW5zZm9ybTpzY2FsZSgwKX0uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtcmlwcGxlLWVsZW1lbnR7ZGlzcGxheTpub25lfS5jZGstdmlzdWFsbHktaGlkZGVue2JvcmRlcjowO2NsaXA6cmVjdCgwIDAgMCAwKTtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O291dGxpbmU6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX0uY2RrLW92ZXJsYXktY29udGFpbmVyLC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHl7ZGlzcGxheTpub25lfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5jZGstb3ZlcmxheS1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjEwMDA7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjpvcGFjaXR5IDQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO29wYWNpdHk6MH0uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjF9QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpey5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6LjZ9fS5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMzIpfS5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjB9LmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLXdpZHRoOjFweDttaW4taGVpZ2h0OjFweH0uY2RrLWdsb2JhbC1zY3JvbGxibG9ja3twb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnR7LyohKi99QGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmR7LyohKi99LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxse2FuaW1hdGlvbjpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXN9LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpe2FuaW1hdGlvbjpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgMHMgMW1zfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZXtyZXNpemU6bm9uZX10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5ne3BhZGRpbmc6MnB4IDAgIWltcG9ydGFudDtib3gtc2l6aW5nOmNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG8gIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW4gIWltcG9ydGFudH10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3h7cGFkZGluZzoycHggMCAhaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ggIWltcG9ydGFudDtoZWlnaHQ6MCAhaW1wb3J0YW50fWJvZHl7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbntjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9Lm1hdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5e2NvbG9yOiMwMmE1YTV9Lm1hdC1idXR0b24ubWF0LWFjY2VudCwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50e2NvbG9yOiMxNDY0YTV9Lm1hdC1idXR0b24ubWF0LXdhcm4sLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojMDJhNWE1fS5tYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMxNDY0YTV9Lm1hdC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtaWNvbi1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXN0cm9rZWQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnR7b3BhY2l0eTouMTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQ6IzAwMH0ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZmxhdC1idXR0b24sLm1hdC1yYWlzZWQtYnV0dG9uLC5tYXQtZmFiLC5tYXQtbWluaS1mYWJ7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWZhYi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5e2NvbG9yOiNmZmZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtZmFiLm1hdC1hY2NlbnQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50e2NvbG9yOiNmZmZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sLm1hdC1mYWIubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2Fybntjb2xvcjojZmZmfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWZhYi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzAyYTVhNX0ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1mYWIubWF0LWFjY2VudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojMTQ2NGE1fS5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLC5tYXQtZmFiLm1hdC13YXJuLC5tYXQtbWluaS1mYWIubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LWZsYXQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXJhaXNlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXJhaXNlZC1idXR0b246bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5kYXJrLXRoZW1lIC5tYXQtYnV0dG9uLC5kYXJrLXRoZW1lIC5tYXQtaWNvbi1idXR0b24sLmRhcmstdGhlbWUgLm1hdC1zdHJva2VkLWJ1dHRvbntjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9LmRhcmstdGhlbWUgLm1hdC1idXR0b24ubWF0LXByaW1hcnksLmRhcmstdGhlbWUgLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSwuZGFyay10aGVtZSAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5e2NvbG9yOiMwZTIyNDV9LmRhcmstdGhlbWUgLm1hdC1idXR0b24ubWF0LWFjY2VudCwuZGFyay10aGVtZSAubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQsLmRhcmstdGhlbWUgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50e2NvbG9yOiMyZjYzOWN9LmRhcmstdGhlbWUgLm1hdC1idXR0b24ubWF0LXdhcm4sLmRhcmstdGhlbWUgLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiwuZGFyay10aGVtZSAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9LmRhcmstdGhlbWUgLm1hdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5kYXJrLXRoZW1lIC5tYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5kYXJrLXRoZW1lIC5tYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwuZGFyay10aGVtZSAubWF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5kYXJrLXRoZW1lIC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5kYXJrLXRoZW1lIC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5kYXJrLXRoZW1lIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5kYXJrLXRoZW1lIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1zdHJva2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRde2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjMpfS5kYXJrLXRoZW1lIC5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLmRhcmstdGhlbWUgLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5kYXJrLXRoZW1lIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMwZTIyNDV9LmRhcmstdGhlbWUgLm1hdC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5kYXJrLXRoZW1lIC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5kYXJrLXRoZW1lIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6IzJmNjM5Y30uZGFyay10aGVtZSAubWF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5kYXJrLXRoZW1lIC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwuZGFyay10aGVtZSAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5kYXJrLXRoZW1lIC5tYXQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5kYXJrLXRoZW1lIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLmRhcmstdGhlbWUgLm1hdC1zdHJva2VkLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5kYXJrLXRoZW1lIC5tYXQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsLmRhcmstdGhlbWUgLm1hdC1pY29uLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LC5kYXJrLXRoZW1lIC5tYXQtc3Ryb2tlZC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudHtvcGFjaXR5Oi4xO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yfS5kYXJrLXRoZW1lIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZDojZmZmfS5kYXJrLXRoZW1lIC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pe2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9LmRhcmstdGhlbWUgLm1hdC1mbGF0LWJ1dHRvbiwuZGFyay10aGVtZSAubWF0LXJhaXNlZC1idXR0b24sLmRhcmstdGhlbWUgLm1hdC1mYWIsLmRhcmstdGhlbWUgLm1hdC1taW5pLWZhYntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzQyNDI0Mn0uZGFyay10aGVtZSAubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5kYXJrLXRoZW1lIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwuZGFyay10aGVtZSAubWF0LWZhYi5tYXQtcHJpbWFyeSwuZGFyay10aGVtZSAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5e2NvbG9yOiNmZmZ9LmRhcmstdGhlbWUgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LC5kYXJrLXRoZW1lIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50LC5kYXJrLXRoZW1lIC5tYXQtZmFiLm1hdC1hY2NlbnQsLmRhcmstdGhlbWUgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50e2NvbG9yOiNmZmZ9LmRhcmstdGhlbWUgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwuZGFyay10aGVtZSAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sLmRhcmstdGhlbWUgLm1hdC1mYWIubWF0LXdhcm4sLmRhcmstdGhlbWUgLm1hdC1taW5pLWZhYi5tYXQtd2Fybntjb2xvcjojZmZmfS5kYXJrLXRoZW1lIC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5kYXJrLXRoZW1lIC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5kYXJrLXRoZW1lIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5kYXJrLXRoZW1lIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5kYXJrLXRoZW1lIC5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5kYXJrLXRoZW1lIC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwuZGFyay10aGVtZSAubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5kYXJrLXRoZW1lIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5kYXJrLXRoZW1lIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRde2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjMpfS5kYXJrLXRoZW1lIC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksLmRhcmstdGhlbWUgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LC5kYXJrLXRoZW1lIC5tYXQtZmFiLm1hdC1wcmltYXJ5LC5kYXJrLXRoZW1lIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojMGUyMjQ1fS5kYXJrLXRoZW1lIC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwuZGFyay10aGVtZSAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwuZGFyay10aGVtZSAubWF0LWZhYi5tYXQtYWNjZW50LC5kYXJrLXRoZW1lIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiMyZjYzOWN9LmRhcmstdGhlbWUgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwuZGFyay10aGVtZSAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sLmRhcmstdGhlbWUgLm1hdC1mYWIubWF0LXdhcm4sLmRhcmstdGhlbWUgLm1hdC1taW5pLWZhYi5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9LmRhcmstdGhlbWUgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwuZGFyay10aGVtZSAubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwuZGFyay10aGVtZSAubWF0LWZsYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwuZGFyay10aGVtZSAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwuZGFyay10aGVtZSAubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwuZGFyay10aGVtZSAubWF0LWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5kYXJrLXRoZW1lIC5tYXQtZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLmRhcmstdGhlbWUgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwuZGFyay10aGVtZSAubWF0LW1pbmktZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwuZGFyay10aGVtZSAubWF0LW1pbmktZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9LmRhcmstdGhlbWUgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5kYXJrLXRoZW1lIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5kYXJrLXRoZW1lIC5tYXQtZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLmRhcmstdGhlbWUgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9LmRhcmstdGhlbWUgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLmRhcmstdGhlbWUgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwuZGFyay10aGVtZSAubWF0LWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLmRhcmstdGhlbWUgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0uZGFyay10aGVtZSAubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLmRhcmstdGhlbWUgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLmRhcmstdGhlbWUgLm1hdC1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwuZGFyay10aGVtZSAubWF0LW1pbmktZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0uZGFyay10aGVtZSAubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5kYXJrLXRoZW1lIC5tYXQtZmxhdC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5kYXJrLXRoZW1lIC5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5kYXJrLXRoZW1lIC5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKX0uZGFyay10aGVtZSAubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0uZGFyay10aGVtZSAubWF0LWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwuZGFyay10aGVtZSAubWF0LW1pbmktZmFiOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0uZGFyay10aGVtZSAubWF0LWZhYjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5kYXJrLXRoZW1lIC5tYXQtbWluaS1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDVweCAyMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5kYXJrLXRoZW1lIC5tYXQtZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwuZGFyay10aGVtZSAubWF0LW1pbmktZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9YnV0dG9uLm1hdC1wcmltYXJ5IHN2ZyxidXR0b24ubWF0LWFjY2VudCBzdmd7ZmlsbDojZmZmfWJ1dHRvbi5tYXQtdGVydGlhcnl7Ym9yZGVyOjFweCBzb2xpZCAjMTQ2NGE1ICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7Y29sb3I6IzE0NjRhNSAhaW1wb3J0YW50fWJ1dHRvbi5tYXQtdGVydGlhcnkgc3Zne2ZpbGw6IzE0NjRhNX1idXR0b24ubWF0LWRlZmF1bHR7Y29sb3I6IzEyMTIxMiAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2U5ZTllOSAhaW1wb3J0YW50fWJ1dHRvbi5tYXQtZGVmYXVsdDphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZDNkM2QzICFpbXBvcnRhbnR9YnV0dG9uLm1hdC1kZWZhdWx0OmRpc2FibGVkLGJ1dHRvbi5tYXQtdGVydGlhcnk6ZGlzYWJsZWR7Y29sb3I6cmdiYSgxOCwxOCwxOCwuNCkgIWltcG9ydGFudH1idXR0b24ubWF0LXN1cHBvcnQ6ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCAhaW1wb3J0YW50fWJ1dHRvbntwYWRkaW5nLWxlZnQ6LjdlbSAhaW1wb3J0YW50O2JveC1zaGFkb3c6MCAxcHggM3B4IDBweCByZ2JhKDAsMCwwLC4yKSAhaW1wb3J0YW50fWJ1dHRvbjpob3Zlcntib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudH1idXR0b246aG92ZXIgLm1hdC1idXR0b24td3JhcHBlcntvcGFjaXR5Oi44NX1idXR0b246ZGlzYWJsZWR7Ym94LXNoYWRvdzpub25lICFpbXBvcnRhbnQ7Ym9yZGVyOjAgIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lfWJ1dHRvbjpkaXNhYmxlZCBzdmd7ZmlsbDpyZ2JhKDE4LDE4LDE4LC40KX1idXR0b24uYnRuLW1lZGl1bXtsaW5lLWhlaWdodDo0MHB4ICFpbXBvcnRhbnR9YnV0dG9uLmJ0bi1sYXJnZXtsaW5lLWhlaWdodDo1MHB4ICFpbXBvcnRhbnR9LmxpZ2h0LXRoZW1lIGJ1dHRvbi5tYXQtcHJpbWFyeTpkaXNhYmxlZCwubGlnaHQtdGhlbWUgYnV0dG9uLm1hdC1hY2NlbnQ6ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojY2NjICFpbXBvcnRhbnR9LmxpZ2h0LXRoZW1lIGJ1dHRvbi5tYXQtc3VwcG9ydDpkaXNhYmxlZHtjb2xvcjojZDNkM2QzICFpbXBvcnRhbnR9LmxpZ2h0LXRoZW1lIGJ1dHRvbi5tYXQtc3VwcG9ydDpkaXNhYmxlZCBzdmd7ZmlsbDojZDNkM2QzfS5kYXJrLXRoZW1lIGJ1dHRvbi5tYXQtcHJpbWFyeTpkaXNhYmxlZCwuZGFyay10aGVtZSBidXR0b24ubWF0LWFjY2VudDpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNjY2MgIWltcG9ydGFudDtjb2xvcjpyZ2JhKDE4LDE4LDE4LC40KSAhaW1wb3J0YW50fS5kYXJrLXRoZW1lIGJ1dHRvbi5tYXQtcHJpbWFyeTpkaXNhYmxlZCBzdmcsLmRhcmstdGhlbWUgYnV0dG9uLm1hdC1hY2NlbnQ6ZGlzYWJsZWQgc3Zne2ZpbGw6cmdiYSgxOCwxOCwxOCwuNCl9LmRhcmstdGhlbWUgYnV0dG9uLm1hdC1zdXBwb3J0e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtjb2xvcjojY2NjICFpbXBvcnRhbnR9LmRhcmstdGhlbWUgYnV0dG9uLm1hdC1zdXBwb3J0IHN2Z3tmaWxsOiNjY2N9LmRhcmstdGhlbWUgYnV0dG9uLm1hdC10ZXJ0aWFyeXtib3JkZXI6MXB4IHNvbGlkICMwZTIyNDUgIWltcG9ydGFudDtjb2xvcjojMGUyMjQ1ICFpbXBvcnRhbnR9LmRhcmstdGhlbWUgYnV0dG9uLm1hdC10ZXJ0aWFyeTpkaXNhYmxlZHtjb2xvcjpyZ2JhKDE4LDE4LDE4LC40KSAhaW1wb3J0YW50fS5kYXJrLXRoZW1lIGJ1dHRvbi5tYXQtdGVydGlhcnk6ZGlzYWJsZWQgc3Zne2ZpbGw6cmdiYSgxOCwxOCwxOCwuNCl9LmRhcmstdGhlbWUgYnV0dG9uLm1hdC10ZXJ0aWFyeSBzdmd7ZmlsbDojMGUyMjQ1fWJ1dHRvbiAud3JhcC10ZXh0e21hcmdpbi1sZWZ0OiAuNGVtO3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IDJweDt9Il19 */"], encapsulation: 3 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabsDescargaExcelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'labs-descarga-excel',
                template: `
    <span [class]="theme + '-theme'">
      <button mat-flat-button
        [ngClass]="h === 'large' ? 'btn-large' : h === 'small' ? '' : 'btn-medium'"
        (click)="getDownload()" [color]="type" [disabled]="disabled">
        <svg *ngIf="icon" height="18" width="18" viewBox="0 0 1792 1792">
           <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-979-234v106h281v-106h-75l103-161q5-7 10-16.5t7.5-13.5 3.5-4h2q1 4 5 10 2 4 4.5 7.5t6 8 6.5 8.5l107 161h-76v106h291v-106h-68l-192-273 195-282h67v-107h-279v107h74l-103 159q-4 7-10 16.5t-9 13.5l-2 3h-2q-1-4-5-10-6-11-17-23l-106-159h76v-107h-290v107h68l189 272-194 283h-68z"/>
        </svg> <span class="wrap-text">{{ text }}</span>
      </button>
    </span>
  `,
                styleUrls: ['./labs-descarga-excel.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].ShadowDom
            }]
    }], function () { return [{ type: _services_excel_excel_service__WEBPACK_IMPORTED_MODULE_1__["ExcelService"] }]; }, { fileName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['file-name']
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], h: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timestamp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columnsHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['columns-header']
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['columns-content']
        }] }); })();


/***/ }),

/***/ "./src/app/services/excel/excel.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/excel/excel.service.ts ***!
  \*************************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);




const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
class ExcelService {
    constructor() { }
    exportXlsx(json, excelFileName, time, header) {
        let arrStr;
        if (typeof header === 'string') {
            arrStr = [JSON.parse(header)];
        }
        else {
            arrStr = [header];
        }
        ;
        let ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].aoa_to_sheet(arrStr);
        let newJson = eval(JSON.stringify(json));
        newJson = eval(newJson);
        if (Array.isArray(newJson)) {
            const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_add_json(ws, newJson, { skipHeader: true, origin: "A2" });
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, excelFileName, time);
        }
    }
    saveAsExcelFile(buffer, fileName, time) {
        const data = new Blob([buffer], { type: EXCEL_TYPE });
        if (time) {
            file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + '_' + new Date().getTime() + EXCEL_EXTENSION);
        }
        else {
            file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + EXCEL_EXTENSION);
        }
    }
}
ExcelService.ɵfac = function ExcelService_Factory(t) { return new (t || ExcelService)(); };
ExcelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExcelService, factory: ExcelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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

module.exports = __webpack_require__(/*! D:\GIT\ForumLabs\LABS-ComponentesWeb\Lab-Componentes\labs-exceldownload-cpw-ang\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map