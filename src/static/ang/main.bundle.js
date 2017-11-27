webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/address/address.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div class='row'>\n\n    <!-- Shipping  -->\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header shipping-card-header\">\n          <!--Shipping Address <a data-toggle=\"modal\" data-target=\"#addShipping\" class=\"btn btn-link plus-btn\"><i class=\"fa fa-plus fa-lg\" aria-hidden=\"true\"></i></a>-->\n          <!--Shipping Address <button data-toggle=\"modal\" data-target=\"#addShipping\" class=\"btn-link plus-btn\"><i class=\"fa fa-plus fa-lg\" aria-hidden=\"true\"></i></button>-->\n          Shipping Address <i data-toggle=\"modal\" data-target=\"#addShipping\" class=\"fa fa-plus fa-lg plus-btn\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"card-body\">\n          <div *ngIf=\"shippingAddrs\" class=\"row\">\n            <div class=\"col-lg-6 addr\"  *ngFor=\"let item of shippingAddrs\">\n\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"d-flex w-100 justify-content-between\">\n                    <h5 class=\"card-title mb-1\">{{item.nick}}</h5>\n\n                    <label class=\"custom-control custom-checkbox\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"item.checked\">\n                      <span class=\"custom-control-indicator\"></span>\n                    </label>\n\n                  </div>\n                  <p class=\"card-text\"><b>Street</b> : {{item.street}}</p>\n                  <p class=\"card-text\"><b>Zipcode</b> : {{item.zipcode}}</p>\n                  <p class=\"card-text\"><b>State</b> : {{item.state}}</p>\n                  <p class=\"card-text\"><b>City</b> : {{item.city}}</p>\n\n                  <a href=\"#\" class=\"card-link\">Delete</a>\n                  <a href=\"#\" class=\"card-link\">Edit</a>\n                </div>\n              </div>\n            </div>\n            <!--<div class=\"col-lg-6\">-->\n\n              <!--<div class=\"card\">-->\n                <!--<div class=\"card-body\">-->\n                  <!--<div class=\"d-flex w-100 justify-content-between\">-->\n                    <!--<h5 class=\"card-title mb-1\">Card title</h5>-->\n                    <!--<label class=\"custom-control custom-checkbox\">-->\n                      <!--<input type=\"checkbox\" class=\"custom-control-input\">-->\n                      <!--<span class=\"custom-control-indicator\"></span>-->\n                    <!--</label>-->\n                  <!--</div>-->\n                  <!--<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the-->\n                    <!--card's content.</p>-->\n                  <!--<a href=\"#\" class=\"card-link\">Delete</a>-->\n                  <!--<a href=\"#\" class=\"card-link\">Edit</a>-->\n                <!--</div>-->\n              <!--</div>-->\n            <!--</div>-->\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <!-- Billing  -->\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header billing-card-header\">\n          Billing Address <i data-toggle=\"modal\" data-target=\"#addBilling\" class=\"fa fa-plus fa-lg plus-btn\" aria-hidden=\"true\"></i>\n          <!--<button type=\"button\" class=\"btn btn-link plus-btn\"><i class=\"fa fa-plus fa-lg\" aria-hidden=\"true\"></i></button>-->\n        </div>\n        <div class=\"card-body\">\n          <div *ngIf=\"billingAddrs\" class=\"row\">\n            <div class=\"col-lg-6 addr\" *ngFor=\"let item of billingAddrs\">\n\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"d-flex w-100 justify-content-between\">\n                    <h5 class=\"card-title mb-1\">{{item.nick}}</h5>\n                    <label class=\"custom-control custom-checkbox\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"item.checked\">\n                      <span class=\"custom-control-indicator\"></span>\n                    </label>\n                  </div>\n                  <p class=\"card-text\"><b>Street</b> : {{item.street}}</p>\n                  <p class=\"card-text\"><b>Zipcode</b> : {{item.zipcode}}</p>\n                  <p class=\"card-text\"><b>State</b> : {{item.state}}</p>\n                  <p class=\"card-text\"><b>City</b> : {{item.city}}</p>\n                  <a href=\"#\" class=\"card-link\">Delete</a>\n                  <a href=\"#\" class=\"card-link\">Edit</a>\n                </div>\n              </div>\n            </div>\n            <!--<div class=\"col-lg-6\">-->\n\n              <!--<div class=\"card\">-->\n                <!--<div class=\"card-body\">-->\n                  <!--<div class=\"d-flex w-100 justify-content-between\">-->\n                    <!--<h5 class=\"card-title mb-1\">Card title</h5>-->\n                    <!--<label class=\"custom-control custom-checkbox\">-->\n                      <!--<input type=\"checkbox\" class=\"custom-control-input\">-->\n                      <!--<span class=\"custom-control-indicator\"></span>-->\n                    <!--</label>-->\n                  <!--</div>-->\n                  <!--<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the-->\n                    <!--card's content.</p>-->\n                  <!--<a href=\"#\" class=\"card-link\">Delete</a>-->\n                  <!--<a href=\"#\" class=\"card-link\">Edit</a>-->\n                <!--</div>-->\n              <!--</div>-->\n            <!--</div>-->\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\"></div>\n    <div class=\"col-lg-4\">\n      <button type=\"button\" (click)=\"saveForm()\" class=\"btn btn-outline-primary\" style=\"width: 100%; margin-top: 1rem\">Save</button>\n    </div>\n    <div class=\"col-lg-4\"></div>\n\n  </div>\n\n\n</div>\n\n<!--Shipping MODAL-->\n<div class=\"modal fade\" id=\"addShipping\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginModalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"loginModalLabel\">ADD SHIPPING ADDRESS</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"shippingForm\" (ngSubmit)=\"shippingSubmitForm()\" novalidate>\n          <div class=\"form-group\">\n            <label for=\"street\">Address Name</label>\n            <input type=\"text\" formControlName=\"nick\" class=\"form-control\" id=\"nick\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"street\">Street</label>\n            <input type=\"text\" formControlName=\"street\" class=\"form-control\" id=\"street\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"city\">City</label>\n            <input type=\"text\" formControlName=\"city\" class=\"form-control\" id=\"city\">\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"state\">State</label>\n            <input type=\"text\" formControlName=\"state\" class=\"form-control\" id=\"state\">\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"zipcode\">Zipcode</label>\n            <input type=\"text\" formControlName=\"zipcode\" class=\"form-control\" id=\"zipcode\">\n          </div>\n\n          <!--<div class=\"form-check\">-->\n            <!--<label class=\"form-check-label\">-->\n              <!--<input type=\"checkbox\" class=\"form-check-input\">-->\n              <!--Check me out-->\n            <!--</label>-->\n          <!--</div>-->\n          <button type=\"submit\" class=\"btn btn-primary float-right\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--Billing MODAL-->\n<div class=\"modal fade\" id=\"addBilling\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"billinModalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"billinModalLabel\">ADD BILLING ADDRESS</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"billingForm\" (ngSubmit)=\"billingSubmitForm()\" novalidate>\n\n          <div class=\"form-group\">\n            <label for=\"street\">Address Name</label>\n            <input type=\"text\" formControlName=\"b_nick\" class=\"form-control\" id=\"b_nick\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"street\">Street</label>\n            <input type=\"text\" formControlName=\"b_street\" class=\"form-control\" id=\"b_street\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"city\">City</label>\n            <input type=\"text\" formControlName=\"b_city\" class=\"form-control\" id=\"b_city\">\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"state\">State</label>\n            <input type=\"text\" formControlName=\"b_state\" class=\"form-control\" id=\"b_state\">\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"zipcode\">Zipcode</label>\n            <input type=\"text\" formControlName=\"b_zipcode\" class=\"form-control\" id=\"b_zipcode\">\n          </div>\n\n          <!--<div class=\"form-check\">-->\n          <!--<label class=\"form-check-label\">-->\n          <!--<input type=\"checkbox\" class=\"form-check-input\">-->\n          <!--Check me out-->\n          <!--</label>-->\n          <!--</div>-->\n          <button type=\"submit\" class=\"btn btn-primary float-right\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_addr_service__ = __webpack_require__("../../../../../src/app/shared/services/addr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressComponent = (function () {
    function AddressComponent(fb, router, ads) {
        this.fb = fb;
        this.router = router;
        this.ads = ads;
        this.formError = false;
        this.formLoading = false;
        this.setupForm();
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.initSetting();
    };
    AddressComponent.prototype.initSetting = function () {
        var _this = this;
        this.ads.getShippingAddr(this.ads.getAuthDetails().username).subscribe(function (shippingData) {
            _this.shippingAddrs = shippingData;
            _this.ads.getBillingAddr(_this.ads.getAuthDetails().username).subscribe(function (billingData) {
                _this.billingAddrs = billingData;
                _this.checkedConform();
            });
        });
    };
    AddressComponent.prototype.checkedConform = function () {
        this.initShippingCheckedItem = this.shippingAddrs.filter(function (item) { return item.checked === true; });
        this.initBillingCheckedItem = this.billingAddrs.filter(function (item) { return item.checked === true; });
        // console.log("initShippingCheckedItem");
        // console.log(this.initShippingCheckedItem);
    };
    AddressComponent.prototype.shippingSubmitForm = function () {
        var _this = this;
        var formData = {
            nick: this.shippingForm.value.nick,
            street: this.shippingForm.value.street,
            zipcode: this.shippingForm.value.zipcode,
            city: this.shippingForm.value.city,
            state: this.shippingForm.value.state
        };
        // console.log(formData);
        this.ads.shippingPostAddr(formData)
            .subscribe(function (res) {
            // this.us.setUserData();
            console.log("addr ssss PART");
            _this.initSetting();
            _this.shippingForm.reset();
            $('#addShipping').modal('hide');
            // this.router.navigate(['/address']);
        }, function (err) {
            _this.formError = true;
        });
    };
    AddressComponent.prototype.saveForm = function () {
        this.shippingCheckedItem = this.shippingAddrs.filter(function (item) { return item.checked === true; });
        console.log("shippingCheckedItem");
        // console.log(this.shippingCheckedItem[0].nick);
        if (this.shippingCheckedItem.length < 1 || this.shippingCheckedItem.length > 1) {
            console.log("s하나만 선택해랑."); //클라이언트 단에 알림 경고창 UI 만들어줘야함.
            return;
        }
        this.billingCheckedItem = this.billingAddrs.filter(function (item) { return item.checked === true; });
        console.log("billingCheckedItem");
        // console.log(this.billingCheckedItem[0].nick);
        if (this.billingCheckedItem.length < 1 || this.billingCheckedItem.length > 1) {
            console.log("b하나만 선택해랑."); //클라이언트 단에 알림 경고창 UI 만들어줘야함.
            return;
        }
        if (this.shippingCheckedItem[0] !== this.initShippingCheckedItem[0]) {
            this.initShippingCheckedItem[0].checked = false;
            this.ads.shippingAddrCheckedUpdate(this.initShippingCheckedItem[0]).subscribe(function (res) { return console.log("s123"); });
            this.ads.shippingAddrCheckedUpdate(this.shippingCheckedItem[0]).subscribe(function (res) { return console.log("s456"); });
            this.initShippingCheckedItem[0] = this.shippingCheckedItem[0];
        }
        if (this.billingCheckedItem[0] !== this.initBillingCheckedItem[0]) {
            this.initBillingCheckedItem[0].checked = false;
            this.ads.billingAddrCheckedUpdate(this.initBillingCheckedItem[0]).subscribe(function (res) { return console.log("b123"); });
            this.ads.billingAddrCheckedUpdate(this.billingCheckedItem[0]).subscribe(function (res) { return console.log("b456"); });
            this.initBillingCheckedItem[0] = this.billingCheckedItem[0];
        }
    };
    AddressComponent.prototype.billingSubmitForm = function () {
        var _this = this;
        var formData = {
            nick: this.billingForm.value.b_nick,
            street: this.billingForm.value.b_street,
            zipcode: this.billingForm.value.b_zipcode,
            city: this.billingForm.value.b_city,
            state: this.billingForm.value.b_state
        };
        console.log(formData);
        this.ads.billingPostAddr(formData)
            .subscribe(function (res) {
            // this.us.setUserData();
            console.log("addr bbbbbb PART");
            _this.initSetting();
            _this.billingForm.reset();
            $('#addBilling').modal('hide');
            // this.router.navigate(['/address']);
        }, function (err) {
            _this.formError = true;
        });
    };
    AddressComponent.prototype.setupForm = function () {
        this.shippingForm = this.fb.group({
            nick: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,],
            street: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,],
            zipcode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,]],
            city: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,]],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
        this.billingForm = this.fb.group({
            b_nick: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,],
            b_street: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,],
            b_zipcode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,]],
            b_city: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,]],
            b_state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    return AddressComponent;
}());
AddressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-address',
        template: __webpack_require__("../../../../../src/app/address/address.component.html"),
        styles: [__webpack_require__("../../../../../src/app/address/address.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_addr_service__["a" /* AddrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_addr_service__["a" /* AddrService */]) === "function" && _c || Object])
], AddressComponent);

var _a, _b, _c;
//# sourceMappingURL=address.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/products/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__address_address_component__ = __webpack_require__("../../../../../src/app/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_order_component__ = __webpack_require__("../../../../../src/app/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_product_list_product_list_component__ = __webpack_require__("../../../../../src/app/products/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__done_done_component__ = __webpack_require__("../../../../../src/app/done/done.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_3__products_products_component__["a" /* ProductsComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_11__products_product_list_product_list_component__["a" /* ProductListComponent */],
            },
            {
                path: 'search',
                component: __WEBPACK_IMPORTED_MODULE_9__search_search_component__["a" /* SearchComponent */]
            },
            {
                path: ':categories',
                component: __WEBPACK_IMPORTED_MODULE_11__products_product_list_product_list_component__["a" /* ProductListComponent */]
            },
        ]
    },
    {
        path: 'product/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__products_product_detail_product_detail_component__["a" /* ProductDetailComponent */]
    },
    {
        path: 'cart',
        component: __WEBPACK_IMPORTED_MODULE_5__cart_cart_component__["a" /* CartComponent */]
    },
    {
        path: 'address',
        component: __WEBPACK_IMPORTED_MODULE_6__address_address_component__["a" /* AddressComponent */]
    },
    {
        path: 'order',
        component: __WEBPACK_IMPORTED_MODULE_7__order_order_component__["a" /* OrderComponent */]
    },
    {
        path: 'done',
        component: __WEBPACK_IMPORTED_MODULE_12__done_done_component__["a" /* DoneComponent */]
    },
    {
        path: 'checkout',
        component: __WEBPACK_IMPORTED_MODULE_8__checkout_checkout_component__["a" /* CheckoutComponent */]
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_9__search_search_component__["a" /* SearchComponent */]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">E-COMMERCE</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\n            aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <!--<li class=\"nav-item active\">-->\n        <!--<a class=\"nav-link\" href=\"#\">HOME <span class=\"sr-only\">(current)</span></a>-->\n        <!--</li>-->\n        <li class=\"nav-item\">\n          <a class=\"nav-link my-product\" routerLink=\"/products\">Products</a>\n        </li>\n        <li class=\"nav-item\">\n\n          <form [formGroup]=\"searchForm\" (ngSubmit)=\"searchSubmitForm()\" novalidate class=\"form-inline mt-2 mt-md-0\">\n            <div class=\"form-group\">\n              <!--<div class=\"form-group\">-->\n              <input [(ngModel)]=\"qKeyword\" formControlName=\"search\" type=\"text\" class=\"form-control\"\n                     placeholder=\"Search for...\"\n                     aria-label=\"Search for...\">\n              <span class=\"input-group-btn\">\n            <!--<button [routerLink]=\"['products/search']\" [queryParams]=\"{q:qKeyword}\" type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-search fa-lg\"></i></button>-->\n                <button type=\"submit\" class=\"btn btn-secondary\"><i class=\"fa fa-search fa-lg\"></i></button>\n\n              </span>\n            </div>\n          </form>\n\n          <!--<form class=\"form-inline mt-2 mt-md-0 \">-->\n          <!--<input class=\"form-control mr-sm-2 \" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">-->\n          <!--<a class=\"nav-link my-search-icon\" href=\"#\"> <i class=\"fa fa-search fa-lg\"></i></a>-->\n          <!--</form>-->\n\n        </li>\n      </ul>\n      <ul class=\"navbar-nav nav justify-content-end float-left\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" routerLink=\"/cart\"> <i class=\"fa fa-shopping-cart fa-lg\"></i><span\n            class=\"my-badge badge badge-pill badge-success\">{{navCartQty}}</span></a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"us.user$ | async; else notAuth\">\n          <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n        </li>\n        <ng-template #notAuth>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" data-toggle=\"modal\" data-target=\"#loginModal\">Sign In</a>\n          </li>\n        </ng-template>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<!--Login Modal-->\n<div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginModalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"loginModalLabel\">LOGIN TO YOUR ACCOUNT</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginSubmitForm()\" novalidate>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email address</label>\n            <input type=\"email\" formControlName=\"username\" class=\"form-control\" id=\"exampleInputEmail1\"\n                   aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n            <small id=\"emailHelp1\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"exampleInputPassword1\"\n                   placeholder=\"Password\">\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input type=\"checkbox\" class=\"form-check-input\">\n              Check me out\n            </label>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary float-right\">Submit</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#registerModal\" data-dismiss=\"modal\">NEW USER?</a>\n        <a class=\"nav-link\" href=\"#\">FORGOTTEN PASSWORD?</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--Register Modal-->\n<div class=\"modal fade\" id=\"registerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"registerModalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"registerModalLabel\">REGISTER ACCOUNT</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerSubmitForm()\" novalidate>\n          <div class=\"form-group\">\n            <label for=\"usernameInput\">Email address</label>\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" id=\"usernameInput\"\n                   placeholder=\"Email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Username</label>\n            <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"exampleInputEmail2\"\n                   aria-describedby=\"emailHelp\" placeholder=\"Username\">\n            <small id=\"emailHelp2\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"exampleInputPassword2\"\n                   placeholder=\"Password\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Confirm Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword3\" placeholder=\"Confirm Password\">\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input type=\"checkbox\" class=\"form-check-input\">\n              Check me out\n            </label>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary float-right\">Register</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<router-outlet></router-outlet>\n\n\n<!-- FOOTER -->\n<div class=\"my-footer\">\n  <hr>\n  <footer class=\"container\">\n    <p class=\"float-right\"><a href=\"#\">Back to top</a></p>\n    <p>&copy; 2017 Company, Inc. &middot; <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a></p>\n  </footer>\n\n</div><!-- /.container -->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_async_form_validators_service__ = __webpack_require__("../../../../../src/app/shared/services/async-form-validators.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helper_form_validators__ = __webpack_require__("../../../../../src/app/helper/form-validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = (function () {
    function AppComponent(fb, asyncValidators, us, router, cs) {
        this.fb = fb;
        this.asyncValidators = asyncValidators;
        this.us = us;
        this.router = router;
        this.cs = cs;
        this.formError = false;
        this.formLoading = false;
        this.navCartQty = 0;
        this.setupForm();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // after each navigation event ends, check if auth token is not expired
        this.router.events.subscribe(function (ev) {
            if (ev instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* NavigationEnd */] && !_this.us.isAuth()) {
                _this.us.logout();
            }
            if (ev instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* NavigationEnd */]) {
                _this.cs.getCart().subscribe(function (res) {
                    console.log(res);
                });
            }
        });
        this.cs.cartCreated$.subscribe(function (cart) {
            console.log(cart);
            var items = cart.items;
            var totalQty = 0;
            items.forEach(function (item) {
                totalQty += item.quantity;
            });
            console.log(totalQty);
            _this.navCartQty = totalQty;
        });
        if (localStorage.getItem('cart_token')) {
            this.cs.getCart().subscribe(function (res) {
                console.log(res);
            });
        }
    };
    AppComponent.prototype.logout = function () {
        this.us.logout();
        localStorage.removeItem('cart_token');
        this.navCartQty = 0;
        this.router.navigate(['/']);
    };
    AppComponent.prototype.goToEditProfile = function () {
        this.router.navigate(['/user/edit']);
    };
    AppComponent.prototype.setupForm = function () {
        this.registerForm = this.fb.group({
            username: [
                '',
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            ],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, Object(__WEBPACK_IMPORTED_MODULE_6__helper_form_validators__["a" /* emailValidator */])()]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, Object(__WEBPACK_IMPORTED_MODULE_6__helper_form_validators__["c" /* passwordValidator */])()]],
            passwordConfirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        }, { validator: Object(__WEBPACK_IMPORTED_MODULE_6__helper_form_validators__["b" /* passwordMatchValidator */])() });
        this.loginForm = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, Object(__WEBPACK_IMPORTED_MODULE_6__helper_form_validators__["a" /* emailValidator */])()]],
            // username: this.loginForm.value.username,
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
        this.searchForm = this.fb.group({
            search: ['']
        });
    };
    AppComponent.prototype.searchSubmitForm = function () {
        // this.formLoading = true;  //이건 나한테 필요 없음.
        var formData = {
            search: this.searchForm.value.search,
        };
        // console.log(formData);
        // console.log(this.qKeyword);
        // this.router.navigate(['/products/search'], { queryParams: { q: formData.search } });
        this.router.navigate(['/products/search'], { queryParams: { q: this.qKeyword } }); //위와 동일한 결과
    };
    AppComponent.prototype.registerSubmitForm = function () {
        var _this = this;
        this.formLoading = true; //이건 나한테 필요 없음.
        var formData = {
            username: this.registerForm.value.username,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password
        };
        this.us.register(formData)
            .first()
            .finally(function () { return _this.formLoading = false; })
            .subscribe(function (res) {
            // this.us.setUserData();
            console.log("register PART");
            _this.router.navigate(['/']);
            _this.registerForm.reset();
        }, function (err) {
            _this.formError = true;
        });
        $('#registerModal').modal('hide');
    };
    AppComponent.prototype.loginSubmitForm = function () {
        var _this = this;
        // TODO:
        // https://stackoverflow.com/questions/44631754/how-to-revert-markaspending-in-angular-2-form
        this.loginForm.markAsPending();
        var formData = {
            username: this.loginForm.value.username,
            password: this.loginForm.value.password,
        };
        this.us.login(formData)
            .first()
            .catch(function (err) {
            var formError;
            if (err.status === 401) {
                formError = { wrongPassword: 'Username or password is wrong' };
            }
            else {
                formError = { formError: 'There was an error during login' };
            }
            _this.loginForm.setErrors(formError);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(new Error(err));
        }).subscribe(function (res) {
            _this.us.setUserData();
            _this.router.navigate(['/']);
            if (localStorage.getItem('cart_token')) {
                _this.cs.getCart().subscribe(function (res2) {
                    console.log(res2);
                });
            }
            _this.loginForm.reset();
        });
        $('#loginModal').modal('hide');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_async_form_validators_service__["a" /* AsyncFormValidatorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_async_form_validators_service__["a" /* AsyncFormValidatorsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_cart_service__["a" /* CartService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export startServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider_src_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider_src_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_nouislider_src_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_order_component__ = __webpack_require__("../../../../../src/app/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__address_address_component__ = __webpack_require__("../../../../../src/app/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__products_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/products/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_async_form_validators_service__ = __webpack_require__("../../../../../src/app/shared/services/async-form-validators.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_helpers_service__ = __webpack_require__("../../../../../src/app/shared/services/helpers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_startup_service__ = __webpack_require__("../../../../../src/app/shared/services/startup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_services_category_service__ = __webpack_require__("../../../../../src/app/shared/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_services_product_service__ = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__products_product_list_product_list_component__ = __webpack_require__("../../../../../src/app/products/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_services_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_services_addr_service__ = __webpack_require__("../../../../../src/app/shared/services/addr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__core_module__ = __webpack_require__("../../../../../src/app/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_services_order_service__ = __webpack_require__("../../../../../src/app/shared/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__done_done_component__ = __webpack_require__("../../../../../src/app/done/done.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































function startServiceFactory(ss) {
    return function () { return ss.load(); };
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_33__done_done_component__["a" /* DoneComponent */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_8__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_10__order_order_component__["a" /* OrderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__address_address_component__["a" /* AddressComponent */],
            __WEBPACK_IMPORTED_MODULE_12__products_product_detail_product_detail_component__["a" /* ProductDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_13__checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_26__categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_28__products_product_list_product_list_component__["a" /* ProductListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider_src_nouislider__["NouisliderModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_31__core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_32__shared_services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_30__shared_services_addr_service__["a" /* AddrService */], __WEBPACK_IMPORTED_MODULE_27__shared_services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_25__shared_services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_21__shared_services_async_form_validators_service__["a" /* AsyncFormValidatorsService */], __WEBPACK_IMPORTED_MODULE_22__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_23__shared_services_helpers_service__["a" /* HelpersService */], __WEBPACK_IMPORTED_MODULE_24__shared_services_startup_service__["a" /* StartupService */], __WEBPACK_IMPORTED_MODULE_29__shared_services_cart_service__["a" /* CartService */],
            // service to get csrf token cookie from server before app initialization
            // otherwise each call to the django server will return a '403 Forbidden' error
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_INITIALIZER"],
                useFactory: startServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_24__shared_services_startup_service__["a" /* StartupService */]],
                multi: true
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*cart part*/\r\n.cart-input-group{\r\n  width: 160px;\r\n}\r\n.cart-input-group .cart-btn{\r\n  width: 50px;\r\n}\r\n._field{\r\n  text-align: center;\r\n}\r\n.cart-hr{\r\n  margin-top: 3rem;\r\n  margin-bottom: 3rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Breadcrumb NAV -->\n<nav class=\"breadcrumb\">\n  <div class=\"container\">\n    <h4>SHOPPING CART</h4>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n\n  <div class='row' *ngIf=\"cartItem\">\n\n    <div class='col-sm-9'>\n\n      <div *ngFor=\"let data of cartItem\">\n        <div class=\"alert\" role=\"alert\" style=\"border: 1px solid black\">\n          <button type=\"button\" (click)=\"deleteItem(data.item)\" class=\"close\" data-dismiss=\"alert\"\n                  aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <!--356*350-->\n              <img class=\"img-fluid\" [src]=\"data.image\" alt=\"image\">\n            </div>\n            <div class=\"col-lg-8\">\n              <h4 class=\"alert-heading\">{{data.item_title}}</h4>\n              <h6>${{data.price}} sale - $ {{data.sale_price}}</h6>\n              <hr class=\"cart-hr\">\n              <div class=\"row\">\n                <div class=\"col-lg-4\">\n                  <div class=\"input-group cart-input-group\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-secondary cart-btn\" type=\"button\">+</button>\n      </span>\n                    <input type=\"text\" class=\"form-control _field\" placeholder=\"Product name\" aria-label=\"Product name\"\n                           value={{data.quantity}}>\n                    <span class=\"input-group-btn\">\n        <button class=\"btn btn-secondary cart-btn\" type=\"button\">-</button>\n      </span>\n                  </div>\n\n                </div>\n                <div class=\"col-lg-6\"></div>\n                <div class=\"col-lg-2\">\n\n                  <div class=\"_cart-product-total-price\">${{data.line_item_total}}</div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <!--<div class=\"alert\" role=\"alert\" style=\"border: 1px solid black\">-->\n      <!--<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">-->\n      <!--<span aria-hidden=\"true\">&times;</span>-->\n      <!--</button>-->\n      <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-4\">-->\n      <!--<img class=\"img-fluid\" src=\"http://via.placeholder.com/356x350\" alt=\"image\">-->\n\n      <!--</div>-->\n      <!--<div class=\"col-lg-8\">-->\n      <!--<h4 class=\"alert-heading\">ABO PHARMA MAGNESIUM 250 MG + VITAMIN B COMPLEX Х 30</h4>-->\n      <!--<h6>€4.76</h6>-->\n      <!--<hr class=\"cart-hr\">-->\n      <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-4\">-->\n      <!--<div class=\"input-group cart-input-group\">-->\n      <!--<span class=\"input-group-btn\">-->\n      <!--<button class=\"btn btn-secondary cart-btn\" type=\"button\">+</button>-->\n      <!--</span>-->\n      <!--<input type=\"text\" class=\"form-control _field\" placeholder=\"Product name\" aria-label=\"Product name\"-->\n      <!--value=\"1\">-->\n      <!--<span class=\"input-group-btn\">-->\n      <!--<button class=\"btn btn-secondary cart-btn\" type=\"button\">-</button>-->\n      <!--</span>-->\n      <!--</div>-->\n\n      <!--</div>-->\n      <!--<div class=\"col-lg-6\"></div>-->\n      <!--<div class=\"col-lg-2\">-->\n\n      <!--<div class=\"_cart-product-total-price\">€209.44</div>-->\n      <!--</div>-->\n      <!--</div>-->\n\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--<div class=\"alert\" role=\"alert\" style=\"border: 1px solid black\">-->\n      <!--<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">-->\n      <!--<span aria-hidden=\"true\">&times;</span>-->\n      <!--</button>-->\n      <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-4\">-->\n      <!--<img class=\"img-fluid\" src=\"http://via.placeholder.com/356x350\" alt=\"image\">-->\n\n      <!--</div>-->\n      <!--<div class=\"col-lg-8\">-->\n      <!--<h4 class=\"alert-heading\">ABO PHARMA MAGNESIUM 250 MG + VITAMIN B COMPLEX Х 30</h4>-->\n      <!--<h6>€4.76</h6>-->\n      <!--<hr class=\"cart-hr\">-->\n      <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-4\">-->\n      <!--<div class=\"input-group cart-input-group\">-->\n      <!--<span class=\"input-group-btn\">-->\n      <!--<button class=\"btn btn-secondary cart-btn\" type=\"button\">+</button>-->\n      <!--</span>-->\n      <!--<input type=\"text\" class=\"form-control _field\" placeholder=\"Product name\" aria-label=\"Product name\"-->\n      <!--value=\"1\">-->\n      <!--<span class=\"input-group-btn\">-->\n      <!--<button class=\"btn btn-secondary cart-btn\" type=\"button\">-</button>-->\n      <!--</span>-->\n      <!--</div>-->\n\n      <!--</div>-->\n      <!--<div class=\"col-lg-6\"></div>-->\n      <!--<div class=\"col-lg-2\">-->\n\n      <!--<div class=\"_cart-product-total-price\">€209.44</div>-->\n      <!--</div>-->\n      <!--</div>-->\n\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n\n\n    </div>\n\n\n    <!-- Product Sidebar -->\n    <div class='col-sm-3' *ngIf=\"cart_summary\">\n\n\n      <h3>CART SUMMARY</h3>\n\n      <div id=\"cart-order-summary\">\n        <p>\n          <span>Subtotal:</span><span id=\"sub-total\">\n          {{cart_summary.subtotal}}</span>\n        </p>\n        <p>\n          <span>Shipping:</span><span>??????????</span>\n        </p>\n\n        <p>\n          <span>Tax:</span>\n          <span>${{cart_summary.tax_total}}</span>\n        </p>\n        <p class=\"total\">\n          <span>Order Total:</span>\n          <span id=\"grand-total\">${{cart_summary.total}}</span>\n        </p>\n\n        <div class=\"summary-actions\">\n          <a *ngIf=\"us.user$ | async; else notAuth\" class=\"btn btn-xl btn-primary checkout-btn load-next-page\"\n             routerLink=\"/order\">\n            <strong>Proceed to Checkout</strong>\n          </a>\n          <ng-template #notAuth>\n            <a class=\"btn btn-xl btn-primary checkout-btn load-next-page\" routerLink=\"/checkout\">\n              <strong>Proceed to Checkout</strong>\n            </a>\n          </ng-template>\n\n          <div class=\"cart-errors hide\">\n            Error - Please review your cart\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n    <!-- End Product Sidebar -->\n\n\n  </div>\n</div>\n\n\n<div class=\"container\" *ngIf=\"!cart_exist\">\n\n  <div class=\"jumbotron text-center\">\n    <h1>Your Cart is Empty.</h1>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = (function () {
    function CartComponent(cs, us) {
        this.cs = cs;
        this.us = us;
        this.cart_exist = true;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('cart_token')) {
            console.log("Not exist Cart_Token");
            this.cart_exist = false;
            return;
        }
        this.cs.getCart().subscribe(function (cart) {
            _this.cartItem = cart.items;
            if (_this.cartItem.length === 0) {
                _this.cart_exist = false;
                localStorage.removeItem('cart_token');
                _this.cart_summary = null;
                return;
            }
            _this.cart_summary = {
                subtotal: cart.subtotal,
                total: cart.total,
                tax_total: cart.tax_total
            };
            // console.log(this.cartItem);
            // console.log(this.cart_summary);
            _this.cart_exist = true;
            return;
        });
    };
    CartComponent.prototype.deleteItem = function (itemId) {
        var _this = this;
        this.cs.deleteItem(itemId).subscribe(function () {
            _this.cs.getCart().subscribe(function (cart) {
                _this.cartItem = cart.items;
                /*
                * Case : Empty Cart
                 */
                if (_this.cartItem.length === 0) {
                    _this.cart_exist = false;
                    console.log('user cart empty!');
                    localStorage.removeItem('cart_token');
                    _this.cart_summary = null;
                    return;
                }
                _this.cart_summary = {
                    subtotal: cart.subtotal,
                    total: cart.total,
                    tax_total: cart.tax_total
                };
                // console.log(this.cartItem);
                // console.log(this.cart_summary);
                _this.cart_exist = true;
                return;
            });
        });
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__("../../../../../src/app/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], CartComponent);

var _a, _b;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-second-nav{\r\n  padding-top: 1rem;\r\n  background-color: #e9ecef;\r\n}\r\n\r\n.my-second-nav .nav-item .nav-link{\r\n  color: #343a40 !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Second NAV-->\n<ul *ngIf=\"categories\" class=\"my-second-nav nav justify-content-center fixed-top\" style=\"z-index: 20; padding-top: 60px; padding-bottom:6px ;\">\n  <li *ngFor=\"let data of categories\" class=\"nav-item\">\n    <a class=\"nav-link \" [routerLink]=\"['/products',data.slug]\">{{data.title}}</a>\n  </li>\n\n  <!--<li class=\"nav-item dropdown\">-->\n  <!--<a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"-->\n  <!--aria-haspopup=\"true\" aria-expanded=\"false\">-->\n  <!--Dropdown link-->\n  <!--</a>-->\n  <!--<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">-->\n  <!--<a class=\"dropdown-item\" href=\"#\">Action</a>-->\n  <!--<a class=\"dropdown-item\" href=\"#\">Another action</a>-->\n  <!--<a class=\"dropdown-item\" href=\"#\">Something else here</a>-->\n  <!--</div>-->\n  <!--</li>-->\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_category_service__ = __webpack_require__("../../../../../src/app/shared/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesComponent = (function () {
    function CategoriesComponent(cs) {
        this.cs = cs;
        this.errorMessage = '';
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.getCategories().subscribe(function (categories) {
            console.log(categories);
            _this.categories = categories;
        }, function (err) {
            _this.errorMessage = err;
            console.log(err);
        });
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__("../../../../../src/app/categories/categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/categories/categories.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_category_service__["a" /* CategoryService */]) === "function" && _a || Object])
], CategoriesComponent);

var _a;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Breadcrumb NAV -->\n<nav class=\"breadcrumb\">\n  <div class=\"container\">\n    <h4>Please Sign In / Register</h4>\n  </div>\n</nav>\n\n\n<!-- CHECK OUT -->\n<div class=\"container\">\n  <div class='row'>\n    <div class='col-md-4'>\n      <div class=\"custom-controls-stacked\">\n        <label class=\"custom-control custom-radio\">\n          <input #register id=\"radioStacked3\" name=\"radio-stacked\" type=\"radio\" [value]=\"1\" [checked]=\"isChecked===1\"\n                 (click)=\"toggle(register.value)\" class=\"custom-control-input\">\n          <span class=\"custom-control-indicator\"></span>\n          <span class=\"custom-control-description\">REGISTER A NEW ACCOUNT</span>\n        </label>\n        <label class=\"custom-control custom-radio\">\n          <input #signin id=\"radioStacked4\" name=\"radio-stacked\" type=\"radio\" [value]=\"2\" [checked]=\"isChecked===2\"\n                 class=\"custom-control-input\" (click)=\"toggle(signin.value)\">\n          <span class=\"custom-control-indicator\"></span>\n          <span class=\"custom-control-description\">I ALREADY HAVE AN ACCOUNT</span>\n        </label>\n        <!--<label class=\"custom-control custom-radio\">-->\n        <!--<input id=\"radioStacked5\" name=\"radio-stacked\" type=\"radio\" class=\"custom-control-input\">-->\n        <!--<span class=\"custom-control-indicator\"></span>-->\n        <!--<span class=\"custom-control-description\">CONTINUE AS GUEST</span>-->\n        <!--</label>-->\n      </div>\n    </div>\n\n\n    <!-- Product Sidebar -->\n\n    <div *ngIf=\"isChecked==1; else num2\" class='col-md-8'>\n\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerSubmitForm()\" novalidate>\n            <div class=\"form-group\">\n              <label for=\"usernameInput\">Email address</label>\n              <input type=\"text\" formControlName=\"username\" class=\"form-control\" id=\"usernameInput\"\n                     placeholder=\"Email\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Username</label>\n              <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"exampleInputEmail2\"\n                     aria-describedby=\"emailHelp\" placeholder=\"Username\">\n              <small id=\"emailHelp2\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Password</label>\n              <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"exampleInputPassword2\"\n                     placeholder=\"Password\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Confirm Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword3\" placeholder=\"Confirm Password\">\n            </div>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input type=\"checkbox\" class=\"form-check-input\">\n                Check me out\n              </label>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary float-right\">Register</button>\n          </form>\n        </div>\n      </div>\n    </div>\n\n    <ng-template #num2>\n\n    <div class='col-md-8'>\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginSubmitForm()\" novalidate>\n\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Email address</label>\n              <input type=\"email\" formControlName=\"username\" class=\"form-control\" id=\"exampleInputEmail1\"\n                     aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n              <small id=\"emailHelp1\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Password</label>\n              <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"exampleInputPassword1\"\n                     placeholder=\"Password\">\n            </div>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input type=\"checkbox\" class=\"form-check-input\">\n                Check me out\n              </label>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary float-right\">Submit</button>\n          </form>\n        </div>\n      </div>\n    </div>\n    </ng-template>\n\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_async_form_validators_service__ = __webpack_require__("../../../../../src/app/shared/services/async-form-validators.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helper_form_validators__ = __webpack_require__("../../../../../src/app/helper/form-validators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CheckoutComponent = (function () {
    function CheckoutComponent(fb, asyncValidators, us, router, cs) {
        this.fb = fb;
        this.asyncValidators = asyncValidators;
        this.us = us;
        this.router = router;
        this.cs = cs;
        this.formError = false;
        this.formLoading = false;
        this.setupForm();
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.isChecked = 1;
    };
    CheckoutComponent.prototype.setupForm = function () {
        this.registerForm = this.fb.group({
            username: [
                '',
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                this.asyncValidators.usernameUnique()
            ],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, Object(__WEBPACK_IMPORTED_MODULE_7__helper_form_validators__["a" /* emailValidator */])()]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, Object(__WEBPACK_IMPORTED_MODULE_7__helper_form_validators__["c" /* passwordValidator */])()]],
            passwordConfirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        }, { validator: Object(__WEBPACK_IMPORTED_MODULE_7__helper_form_validators__["b" /* passwordMatchValidator */])() });
        this.loginForm = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, Object(__WEBPACK_IMPORTED_MODULE_7__helper_form_validators__["a" /* emailValidator */])()]],
            // username: this.loginForm.value.username,
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    CheckoutComponent.prototype.toggle = function (value) {
        console.log(value);
        this.isChecked = value;
    };
    CheckoutComponent.prototype.registerSubmitForm = function () {
        var _this = this;
        this.formLoading = true; //이건 나한테 필요 없음.
        var formData = {
            username: this.registerForm.value.username,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password
        };
        this.us.register(formData)
            .first()
            .finally(function () { return _this.formLoading = false; })
            .subscribe(function (res) {
            // this.us.setUserData();
            console.log("register PART");
            _this.router.navigate(['/']);
            _this.registerForm.reset();
        }, function (err) {
            _this.formError = true;
        });
    };
    CheckoutComponent.prototype.loginSubmitForm = function () {
        var _this = this;
        // TODO:
        // https://stackoverflow.com/questions/44631754/how-to-revert-markaspending-in-angular-2-form
        this.loginForm.markAsPending();
        var formData = {
            username: this.loginForm.value.username,
            password: this.loginForm.value.password,
        };
        this.us.login(formData)
            .first()
            .catch(function (err) {
            var formError;
            if (err.status === 401) {
                formError = { wrongPassword: 'Username or password is wrong' };
            }
            else {
                formError = { formError: 'There was an error during login' };
            }
            _this.loginForm.setErrors(formError);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(new Error(err));
        }).subscribe(function (res) {
            _this.us.setUserData();
            _this.router.navigate(['/order']);
            if (localStorage.getItem('cart_token')) {
                _this.cs.getCart().subscribe(function (res2) {
                    console.log(res2);
                });
            }
            _this.loginForm.reset();
        });
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__("../../../../../src/app/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_async_form_validators_service__["a" /* AsyncFormValidatorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_async_form_validators_service__["a" /* AsyncFormValidatorsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_cart_service__["a" /* CartService */]) === "function" && _e || Object])
], CheckoutComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../src/app/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// had to install animations with " yarn add @angular/animations@latest"



// import {
//   NonAuthGuard,
//   AuthGuard,
//   HelpersService,
//   UserService,
//   MoviesService
// } from './services';
// import { SharedModule } from './../shared/shared.module';
// auth0/angular2-jwt custom configuration for csfr and token stored in cookies
function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthConfig"]({
        tokenName: 'token',
        // initially considering to store token in cookies with Set-Cookie header
        // but could not retrieve it when client and server where hosted on different domains
        // so, reverting to localStorage on final version
        // tokenGetter: (() => Cookie.get('token')),
        noTokenScheme: true,
        globalHeaders: [{
                // in order for this to work I had to get the csrf token with APP_INITIALIZER on app.module.ts
                'X-CSRFToken': localStorage.getItem('csrftoken'),
            }],
    }), http, options);
}
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            // SharedModule,
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
        ],
        providers: [
            // HelpersService,
            // MoviesService,
            // UserService,
            // AuthGuard,
            // NonAuthGuard,
            // Does not work with themoviedb api, so it gets handled individually on each get/post request
            // { provide: XSRFStrategy, useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken') }
            {
                provide: __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
            }
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/done/done.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoneComponent = (function () {
    function DoneComponent(router) {
        this.router = router;
    }
    DoneComponent.prototype.ngOnInit = function () {
        console.log("I am done");
    };
    return DoneComponent;
}());
DoneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-done',
        template: "\n    <div class=\"jumbotron text-center\">\n      <h1>Your Order Is Completed.</h1>\n      <p>Going to main page <a routerLink=\"/\">home</a>.</p>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], DoneComponent);

var _a;
//# sourceMappingURL=done.component.js.map

/***/ }),

/***/ "../../../../../src/app/helper/form-validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = emailValidator;
/* harmony export (immutable) */ __webpack_exports__["b"] = passwordMatchValidator;
/* harmony export (immutable) */ __webpack_exports__["c"] = passwordValidator;
function emailValidator() {
    return function (control) {
        var email = control.value;
        var emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = emailRe.test(email);
        return valid ? null : { emailInvalid: true };
    };
}
function passwordMatchValidator() {
    return function (control) {
        var password = control.get('password').value;
        var passwordConfirm = control.get('passwordConfirm').value;
        var valid = (password === passwordConfirm);
        return valid ? null : { passwordMismatch: true };
    };
}
function passwordValidator() {
    return function (control) {
        var password = control.value;
        var errors = {};
        if (password.length < 7) {
            errors['tooShort'] = true;
        }
        if (!/[A-Z]+/.test(password)) {
            errors['noCapitalLetter'] = true;
        }
        if (/^[a-zA-Z0-9]+$/.test(password) || password.length === 0) {
            errors['noSpecialChars'] = true;
        }
        var valid = Object.keys(errors).length === 0;
        return valid ? null : errors;
    };
}
//# sourceMappingURL=form-validators.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"first-slide\" src=\"static/ang/assets/images/nature/iphone_feature.jpg\"\n           alt=\"First slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block text-left\">\n          <h1>Example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget\n            metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sample Button</a></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"second-slide\" src=\"static/ang/assets/images/nature/1.jpg\"\n           alt=\"Second slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h1>Another example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget\n            metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sample Button</a></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"third-slide\" src=\"static/ang/assets/images/nature/2.jpg\"\n           alt=\"Third slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block text-right\">\n          <h1>One more for good measure.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget\n            metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sample Button</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<!-- Card TEST 01\n================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n<div class=\"album \">\n\n  <div class=\"container\">\n    <h3 class=\"album-head\">NEW PRODUCTS</h3>\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-lg-3\" style=\"margin-bottom: 20px\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Special title treatment</h4>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Sample Button</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">\n\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Special title treatment</h4>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">\n\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Special title treatment</h4>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">\n\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Special title treatment</h4>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Card TEST 02\n================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n<div class=\"album-best-selling\">\n  <div class=\"container\">\n    <h3 class=\"album-head\" style=\"margin-top: 10px\">BEST SELLING</h3>\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Special title treatment</h4>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">\n\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Special title treatment</h4>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">\n\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Special title treatment</h4>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">\n\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Special title treatment</h4>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: "\n    <div class=\"jumbotron text-center\">\n      <h1>404 Not Found</h1>\n      <p>You may be lost. Follow the breadcrumbs back <a routerLink=\"/\">home</a>.</p>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"success\">SUCCESS</h1>\n\n<!-- Address Book -->\n<div class=\"container\">\n  <form>\n    <br>\n    <div class='row _order'>\n\n      <!-- Shipping  -->\n      <div class=\"col-lg-3\">\n        <div class=\"card\">\n          <div class=\"card-header order-card-header\">\n            Shipping Address\n          </div>\n          <div class=\"card-body\" *ngIf=\"shippingAddr\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <h5 class=\"card-title mb-1\">{{shippingAddr[0].nick}}</h5>\n            </div>\n            <p class=\"card-text\"><b>Street</b> : {{shippingAddr[0].street}}</p>\n            <p class=\"card-text\"><b>Zipcode</b> : {{shippingAddr[0].zipcode}}</p>\n            <p class=\"card-text\"><b>State</b> : {{shippingAddr[0].state}}</p>\n            <p class=\"card-text\"><b>City</b> : {{shippingAddr[0].city}}</p>\n            <a routerLink=\"/address\" class=\"card-link\">Change an Address</a>\n          </div>\n        </div>\n      </div>\n\n      <!-- Billing  -->\n      <div class=\"col-lg-3\">\n        <div class=\"card\">\n          <div class=\"card-header order-card-header\">\n            Billing Address\n          </div>\n          <div class=\"card-body\" *ngIf=\"billingAddr\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <h5 class=\"card-title mb-1\">{{billingAddr[0].nick}}</h5>\n            </div>\n            <p class=\"card-text\"><b>Street</b> : {{billingAddr[0].street}}</p>\n            <p class=\"card-text\"><b>Zipcode</b> : {{billingAddr[0].zipcode}}</p>\n            <p class=\"card-text\"><b>State</b> : {{billingAddr[0].state}}</p>\n            <p class=\"card-text\"><b>City</b> : {{billingAddr[0].city}}</p>\n            <a routerLink=\"/address\" class=\"card-link\">Change an Address</a>\n          </div>\n        </div>\n      </div>\n\n      <!-- Order Summary  -->\n      <div class=\"col-lg-3\">\n        <div class=\"card\">\n          <div class=\"card-header order-card-header\">\n            Order Summary\n          </div>\n          <div class=\"card-body\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <h5 class=\"card-title mb-1\">Card title</h5>\n            </div>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the\n              card's content.</p>\n            <a routerLink=\"/cart\" class=\"card-link\">Go Back To Cart</a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-3\">\n        <div class=\"card\">\n          <div class=\"card-header order-card-header\">\n            Payment Method\n          </div>\n          <div class=\"card-body\">\n\n            <div id=\"payment-form\"></div>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4\"></div>\n      <div class=\"col-lg-4\">\n        <button type=\"submit\" class=\"btn btn-outline-primary\" style=\"width: 100%; margin-top: 1rem\">Complete Order\n        </button>\n      </div>\n      <div class=\"col-lg-4\"></div>\n\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_order_service__ = __webpack_require__("../../../../../src/app/shared/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_addr_service__ = __webpack_require__("../../../../../src/app/shared/services/addr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderComponent = (function () {
    function OrderComponent(us, os, router, ads) {
        this.us = us;
        this.os = os;
        this.router = router;
        this.ads = ads;
        this.success = false;
    }
    OrderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initSetting();
        this.subscription = this.os.getOrderData(this.us.getAuthDetails().username).subscribe(function (data) {
            _this.orderData = data;
            var c = _this;
            braintree.setup(data.client_token, "dropin", {
                container: "payment-form",
                onPaymentMethodReceived: function (obj) {
                    // console.log(obj);
                    // console.log(obj.nonce);
                    if (obj.nonce) {
                        var payment_method_nonce = obj.nonce;
                        var order_token = data.order_token;
                        c.os.orderConform({ payment_method_nonce: payment_method_nonce, order_token: order_token }).subscribe(function (zzz) {
                            console.log("your order is OK.");
                            localStorage.removeItem('cart_token');
                            c.router.navigate(['/done']);
                            window.location.reload();
                        });
                    }
                }
            });
        });
    };
    OrderComponent.prototype.initSetting = function () {
        var _this = this;
        this.ads.getShippingAddr(this.ads.getAuthDetails().username).subscribe(function (shippingData) {
            _this.shippingAddr = shippingData.filter(function (item) { return item.checked === true; });
            console.log(_this.shippingAddr);
            _this.ads.getBillingAddr(_this.ads.getAuthDetails().username).subscribe(function (billingData) {
                _this.billingAddr = billingData.filter(function (item) { return item.checked === true; });
                console.log(_this.billingAddr);
            });
        });
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order',
        template: __webpack_require__("../../../../../src/app/order/order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order/order.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */], { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["h" /* PathLocationStrategy */] }]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_order_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_addr_service__["a" /* AddrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_addr_service__["a" /* AddrService */]) === "function" && _d || Object])
], OrderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".og-price {\r\n  color:red;\r\n  text-decoration:line-through;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Breadcrumb NAV -->\n<nav class=\"breadcrumb\" style=\"margin-top: 8px\">\n  <div class=\"container\">\n    <a class=\"breadcrumb-item my-cursor\" (click)=\"goProducts()\">Products</a>\n    <!--<a class=\"breadcrumb-item\" routerLink=\"products\">Categories</a>-->\n    <span class=\"breadcrumb-item active\">iPhone6S</span></div>\n</nav>\n\n<div *ngIf=\"product\" class=\"container\">\n  <div class='row'>\n\n    <div class='col-sm-8'>\n      <h2>{{product.title}}</h2>\n      <div>\n        <img id='img' class='img-fluid' [src]='product.image'/>\n      </div>\n\n      <p class='lead'>\n        Here is description part. </p>\n    </div>\n\n\n    <!-- Product Sidebar -->\n    <div class='col-sm-4'>\n\n      <form #f=\"ngForm\" *ngIf=\"variation.length>=2\">\n        <p class='lead'>\n\n        </p>\n\n        <!--<div *ngIf=\"!f.value.state\">-->\n        <!--<h3 *ngIf=\"!variation[0].sale_price; else elseBlock\">{{product.price}}</h3>-->\n        <!--<ng-template #elseBlock><h3 >{{variation[0].sale_price}}</h3><p class=\"og-price\"> {{product.price}} </p></ng-template>-->\n        <!--</div>-->\n\n        <div *ngIf=\"f.value.state\">\n          <h3 *ngIf=\"!(f.value.state.sale_price); else elseBlock\">{{ f.value.state.price }}</h3>\n          <ng-template #elseBlock><h3>{{ f.value.state.sale_price }}</h3>\n            <p class=\"og-price\">{{ f.value.state.price }} </p></ng-template>\n        </div>\n\n        <div>\n          <select name=\"state\" ngModel class=\"form-control\">\n            <option selected>Choose a item</option>\n            <option *ngFor=\"let data of variation\" [ngValue]=\"data.id\">\n              {{data.title}}\n            </option>\n          </select>\n        </div>\n\n        <br/>\n        <input class='form-control' type='number' name='qty' value='1' [(ngModel)]=\"qty\"/>\n        <br/>\n        <button id='submit-btn1' type='submit' (click)=\"saveCart(f.value)\" class='btn btn-default'>Add to Cart1\n        </button>\n      </form>\n\n      <form *ngIf=\"variation.length==1\">\n        <p class='lead'>\n\n        </p>\n        <h3 *ngIf=\"!variation[0].sale_price; else elseBlock\">{{product.price}}</h3>\n        <ng-template #elseBlock><h3>{{variation[0].sale_price}}</h3>\n          <p class=\"og-price\"> {{product.price}} </p></ng-template>\n\n        <br/>\n        <input class='form-control' type='number' name='qty' value='1' [(ngModel)]=\"qty\"/>\n        <br/>\n        <button id='submit-btn2' type='submit' (click)=\"saveCart({state:variation[0].id, qty:qty})\"\n                class='btn btn-default'>Add to Cart2\n        </button>\n      </form>\n\n      <br/>\n      <hr/>\n      <p>\n        Share<br/>\n        <a href=\"#\">\n          <i class=\"fa fa-facebook-square fa-3x\"></i></a>\n        <a href=\"#\">\n          <i class=\"fa fa-twitter-square fa-3x\"></i></a>\n      </p>\n\n      <hr/>\n      <h4>Related Products</h4>\n\n      <div class='row'>\n        <div class='col-xs-6'>\n          <!--{% include \"products/product_thumbnail.html\" with product=product price=\"True\" %}-->\n        </div>\n      </div>\n      <div class=\"row\">\n      </div>\n\n\n    </div>\n    <!-- End Product Sidebar -->\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_product_service__ = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = (function () {
    function ProductDetailComponent(us, cs, ps, route, router) {
        this.us = us;
        this.cs = cs;
        this.ps = ps;
        this.route = route;
        this.router = router;
        this.qty = 1;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.us.user$.value);
        this.route.params.forEach(function (param) {
            _this.ps.getProduct(param.id).subscribe(function (product) {
                _this.product = product;
                _this.variation = product.variation_set;
                console.log(_this.product);
                console.log(_this.variation);
            });
        });
    };
    ProductDetailComponent.prototype.saveCart = function (f) {
        var _this = this;
        console.log(f);
        console.log(this.qty);
        if (this.us.user$.value) {
            f.username = this.us.user$.value.username;
        }
        //cf. 토큰이 없거나 기존에 있는 토큰이 아니라면 서버에서 카트를 새로 만들어버림..<<<고쳐야할듯...
        if (!localStorage.getItem('cart_token')) {
            this.cs.init_postCart(f).subscribe(function (data) {
                console.log(data);
                localStorage.setItem('cart_token', data.token);
                _this.cs.getCart().subscribe(function (res) {
                    console.log(res);
                });
            });
            return;
        }
        this.cs.postCart(f, localStorage.getItem('cart_token')).subscribe(function (data) {
            console.log(data);
            console.log("cart item add OK");
            _this.cs.getCart().subscribe(function (res) {
                console.log(res);
            });
        });
    };
    ProductDetailComponent.prototype.goProducts = function () {
        this.router.navigateByUrl("/products");
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-detail',
        template: __webpack_require__("../../../../../src/app/products/product-detail/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-detail/product-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object])
], ProductDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"album\" style=\"margin-top: 2rem\">\n  <div class=\"container\">\n    <h3 class=\"album-head\">ALL</h3>\n\n    <div *ngIf=\"products\" class=\"row album-content\">\n      <div *ngFor=\"let product of products\" class=\"col-sm-6 col-lg-3\" style=\"margin-bottom: 20px\">\n        <div class=\"card\" [routerLink]=\"['/product',product.id]\">\n          <!--http://via.placeholder.com/356x280-->\n          <img class=\"card-img-top\" [src]=\"product.image\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">{{product.title}}</h4>\n            <p class=\"card-text\">{{product.price}}</p>\n            <a [routerLink]=\"['/product',product.id]\" class=\"btn btn-primary\">Detail</a>\n          </div>\n        </div>\n      </div>\n      <!--<div class=\"col-sm-6 col-lg-3\">-->\n      <!--<div class=\"card\">-->\n      <!--<img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">-->\n\n      <!--<div class=\"card-body\">-->\n      <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n      <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n      <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--<div class=\"col-sm-6 col-lg-3\">-->\n      <!--<div class=\"card\">-->\n      <!--<img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">-->\n\n      <!--<div class=\"card-body\">-->\n      <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n      <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n      <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--<div class=\"col-sm-6 col-lg-3\">-->\n      <!--<div class=\"card\">-->\n      <!--<img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">-->\n\n      <!--<div class=\"card-body\">-->\n      <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n      <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n      <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--<div class=\"col-sm-6 col-lg-3\">-->\n      <!--<div class=\"card\">-->\n      <!--<img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">-->\n\n      <!--<div class=\"card-body\">-->\n      <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n      <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n      <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--<div class=\"col-sm-6 col-lg-3\">-->\n      <!--<div class=\"card\">-->\n      <!--<img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">-->\n\n      <!--<div class=\"card-body\">-->\n      <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n      <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n      <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--<div class=\"col-sm-6 col-lg-3\">-->\n      <!--<div class=\"card\">-->\n      <!--<img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">-->\n\n      <!--<div class=\"card-body\">-->\n      <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n      <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n      <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--<div class=\"col-sm-6 col-lg-3\">-->\n      <!--<div class=\"card\">-->\n      <!--<img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">-->\n\n      <!--<div class=\"card-body\">-->\n      <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n      <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n      <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--<div class=\"col-sm-6 col-lg-3\">-->\n      <!--<div class=\"card\">-->\n      <!--<img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">-->\n\n      <!--<div class=\"card-body\">-->\n      <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n      <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n      <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n\n    </div>\n    <!--<div class=\"row album-content\">-->\n    <!--<div class=\"col-sm-6 col-lg-3\">-->\n    <!--<div class=\"card\">-->\n    <!--<img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">-->\n    <!--<div class=\"card-body\">-->\n    <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n    <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n    <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"col-sm-6 col-lg-3\">-->\n    <!--<div class=\"card\">-->\n    <!--<img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">-->\n\n    <!--<div class=\"card-body\">-->\n    <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n    <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n    <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"col-sm-6 col-lg-3\">-->\n    <!--<div class=\"card\">-->\n    <!--<img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">-->\n\n    <!--<div class=\"card-body\">-->\n    <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n    <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n    <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"col-sm-6 col-lg-3\">-->\n    <!--<div class=\"card\">-->\n    <!--<img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">-->\n\n    <!--<div class=\"card-body\">-->\n    <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n    <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n    <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/products/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_product_service__ = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = (function () {
    function ProductListComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            console.log(param);
            // case URL : http://localhost:8000/products
            if (!param.categories) {
                _this.subscription = _this.service.getAllProducts().subscribe(function (products) {
                    _this.products = products;
                    console.log(_this.products);
                });
            }
            else {
                _this.subscription = _this.service.getProducts(param.categories).subscribe(function (products) {
                    _this.products = products;
                    console.log(_this.products);
                });
            }
        });
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/products/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-list/product-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], ProductListComponent);

var _a, _b;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<app-categories></app-categories>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductsComponent);

//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- CHECK OUT -->\n<div class=\"container\">\n  <br>\n  <div class='row'>\n\n    <div class='col-md-2'>\n      <form [formGroup]=\"searchFilterForm\" novalidate (ngSubmit)=\"getQueryParams()\">\n        <div class=\"form-group\">\n          <label for=\"Search\">Search</label>\n          <input formControlName=\"search\" type=\"text\" class=\"form-control\" id=\"Search\" aria-describedby=\"SearchHelp\" placeholder=\"Search\">\n        </div>\n        <div *ngIf=\"categories\">\n          <div *ngFor=\"let data of categories; let i = index\" class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input (change)=\"onChange(data.slug, $event.target.checked)\"  type=\"checkbox\" class=\"form-check-input\">{{data.title}}\n            </label>\n          </div>\n        </div>\n\n        <div class=\"page-header\">\n          <h6>PRICE RANGES</h6>\n        </div>\n        <span>{{ searchFilterForm.value | json }}</span>\n        <!--<span>{{ someValue | json }}</span>-->\n\n        <nouislider  (ngModelChange)=\"onChange($event)\" [connect]=\"true\" [min]=\"0\" [max]=\"600\" [step]=\"10\"\n                    [formControl]=\"searchFilterForm.controls.range\"></nouislider>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Apply Filter</button>\n        <button type=\"submit\" class=\"btn btn-primary\">Clear Filters</button>\n      </form>\n    </div>\n    <!--<pre>Form values: {{searchFilterForm.value | json}}</pre>-->\n    <!-- Product Sidebar -->\n    <div class='col-md-10'>\n      <div class=\"album \">\n        <div class=\"container\">\n          <h3 class=\"album-head\">PRODUCTS</h3>\n          <div *ngIf=\"products\" class=\"row album-content\">\n            <div *ngFor=\"let data of products\" class=\"col-lg-4 col-md-6\">\n              <div class=\"card\">\n                <img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">\n\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">{{data.title}}</h4>\n                  <p class=\"card-text\">{{data.price}}</p>\n                  <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                </div>\n              </div>\n            </div>\n            <!--<div class=\"col-lg-4  col-md-6\">-->\n            <!--<div class=\"card\">-->\n            <!--<img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">-->\n\n            <!--<div class=\"card-body\">-->\n            <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n            <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n            <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n            <!--</div>-->\n            <!--</div>-->\n            <!--</div>-->\n            <!--<div class=\"col-lg-4  col-md-6\">-->\n            <!--<div class=\"card\">-->\n            <!--<img class=\"card-img-top\" src=\"http://via.placeholder.com/356x280\" alt=\"Card image cap\">-->\n\n            <!--<div class=\"card-body\">-->\n            <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n            <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n            <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n            <!--</div>-->\n            <!--</div>-->\n            <!--</div>-->\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_product_service__ = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_category_service__ = __webpack_require__("../../../../../src/app/shared/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchComponent = (function () {
    function SearchComponent(location, router, formBuilder, cs, route, ps) {
        this.location = location;
        this.router = router;
        this.formBuilder = formBuilder;
        this.cs = cs;
        this.route = route;
        this.ps = ps;
        this.errorMessage = '';
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchFilterForm = this.formBuilder.group({
            range: [[0, 600]],
            search: ['',],
            searchCategories: this.formBuilder.array([])
        });
        // console.log(this.searchFilterForm.value);
        this.subscription_cs = this.cs.getCategories().subscribe(function (categories) {
            // console.log(categories);
            _this.categories = categories;
        }, function (err) {
            _this.errorMessage = err;
            console.log(err);
        });
        //   this.router.events.subscribe((e) => {
        //   if (e instanceof NavigationEnd) {
        //     searchUrl=e.url.split("?")[1];
        //     console.log("맴맴맴맴");
        //     console.log(searchUrl);
        //   }
        // });
        var searchUrl;
        this.route.queryParams.forEach(function (params) {
            searchUrl = _this.location.path().split("?")[1];
            // console.log("queryParams");
            console.log(params);
            _this.subscription_ps = _this.ps.getSearchProducts(searchUrl).subscribe(function (products) {
                _this.products = products;
                console.log("FIRST 리퀘스트");
                // console.log(this.products);
            });
        });
    };
    SearchComponent.prototype.getQueryParams = function () {
        this.router.navigate(['products/search'], {
            queryParams: {
                q: this.searchFilterForm.value.search,
                max_price: this.max_price,
                min_price: this.min_price,
                category_slug: this.searchFilterForm.value.searchCategories
            }
        });
        // let searchUrl:any;
        // searchUrl= this.location.path().split("?")[1];
        //
        // this.subscription_ps = this.ps.getSearchProducts(searchUrl).subscribe(products => {
        //   this.products = products;
        //   console.log("세컨드 리퀘스트");
        //   // console.log(this.products);
        //
        // });
    };
    SearchComponent.prototype.onChange = function (slug, isChecked) {
        this.min_price = this.searchFilterForm.value.range[0];
        this.max_price = this.searchFilterForm.value.range[1];
        var emailFormArray = this.searchFilterForm.controls.searchCategories;
        if (isChecked) {
            emailFormArray.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](slug));
        }
        else {
            var index = emailFormArray.controls.findIndex(function (x) { return x.value == slug; });
            emailFormArray.removeAt(index);
        }
    };
    // onChange(){
    //   this.min_price= this.searchFilterForm.value.range[0];
    //   this.max_price=this.searchFilterForm.value.range[1];
    // }
    SearchComponent.prototype.ngOnDestroy = function () {
        this.subscription_ps.unsubscribe();
        this.subscription_cs.unsubscribe();
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_category_service__["a" /* CategoryService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_product_service__["a" /* ProductService */]) === "function" && _f || Object])
], SearchComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/addr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_service__ = __webpack_require__("../../../../../src/app/shared/services/helpers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { config } from './../../../config';
var endpoint = "locolhost:8000";
var AddrService = (function () {
    function AddrService(http, hs, auth) {
        this.http = http;
        this.hs = hs;
        this.auth = auth;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
        this.user$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](this.getAuthDetails());
        this.user = false;
        this.setUserData();
    }
    AddrService.prototype.getShippingAddr = function (param) {
        // need to set withCredentials to send csrf token for Django
        return this.auth.get("/api/address/shipping/?q=" + param, { withCredentials: true }).map(function (res) { return res.json(); });
    };
    AddrService.prototype.shippingAddrCheckedUpdate = function (data) {
        // need to set withCredentials to send csrf token for Django
        return this.auth.post("/address/shipping/checked/", data, { withCredentials: true });
    };
    AddrService.prototype.billingAddrCheckedUpdate = function (data) {
        // need to set withCredentials to send csrf token for Django
        return this.auth.post("/address/billing/checked/", data, { withCredentials: true });
    };
    AddrService.prototype.getBillingAddr = function (param) {
        // need to set withCredentials to send csrf token for Django
        return this.auth.get("/api/address/billing/?q=" + param, { withCredentials: true }).map(function (res) { return res.json(); });
    };
    AddrService.prototype.shippingPostAddr = function (formData) {
        // need to set withCredentials to send csrf token for Django
        return this.auth.post("/address/shipping/", formData, { withCredentials: true });
    };
    AddrService.prototype.billingPostAddr = function (formData) {
        // need to set withCredentials to send csrf token for Django
        return this.auth.post("/address/billing/", formData, { withCredentials: true });
    };
    AddrService.prototype.getAuthDetails = function () {
        var cookieToken = this.getToken();
        if (cookieToken) {
            console.log("-----getAuthDetails-----");
            return this.jwtHelper.decodeToken(cookieToken);
        }
        else {
            return false;
        }
    };
    AddrService.prototype.setUserData = function () {
        console.log("-----setUserData-----");
        this.user$.next(this.getAuthDetails());
        this.user = this.getAuthDetails();
    };
    AddrService.prototype.getToken = function () {
        console.log("-----getToken-----");
        return localStorage.getItem('token');
    };
    return AddrService;
}());
AddrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__helpers_service__["a" /* HelpersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__helpers_service__["a" /* HelpersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"]) === "function" && _c || Object])
], AddrService);

var _a, _b, _c;
//# sourceMappingURL=addr.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/async-form-validators.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncFormValidatorsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AsyncFormValidatorsService = (function () {
    function AsyncFormValidatorsService(us) {
        this.us = us;
        this.debounceTime = 1000;
    }
    AsyncFormValidatorsService.prototype.usernameUnique = function () {
        var _this = this;
        return function (c) {
            var username = c.value;
            // hack to achieve debounce with async form validator
            clearTimeout(_this.timeout);
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (observer) {
                _this.timeout = setTimeout(function () {
                    _this.us.usernameIsUnique(username)
                        .map(function (isUnique) { return isUnique ? null : { isNotUnique: true }; })
                        .subscribe(function (res) { observer.next(res); observer.complete(); });
                }, _this.debounceTime);
            });
        };
    };
    return AsyncFormValidatorsService;
}());
AsyncFormValidatorsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object])
], AsyncFormValidatorsService);

var _a;
//# sourceMappingURL=async-form-validators.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartService = (function () {
    function CartService(http) {
        this.http = http;
        //observable source
        this.cartCreateSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        //observable stream
        this.cartCreated$ = this.cartCreateSource.asObservable();
    }
    CartService.prototype.getCart = function () {
        var _this = this;
        return this.http.get('/api/cart/?token=' + localStorage.getItem('cart_token'))
            .map(function (res) { return res.json(); }) //subscribe은 component에서 해주면 됨. 따라서 return 해줘야한다!
            .do(function (cart) { return _this.cartCreated(cart); })
            .catch(this.handleError);
    };
    /**
     * The user was created. Add this info to our stream
     */
    CartService.prototype.cartCreated = function (cart) {
        console.log('cartCreated Test');
        this.cartCreateSource.next(cart);
    };
    // This is single product-detail
    CartService.prototype.init_postCart = function (data) {
        var url = '/api/cart/?item=' + data.state + '&qty=' + data.qty;
        if (data.username) {
            url = '/api/cart/?item=' + data.state + '&qty=' + data.qty + '&username=' + data.username;
        }
        return this.http.get(url)
            .map(function (res) { return res.json(); }) //subscribe은 component에서 해주면 됨. 따라서 return 해줘야한다!
            .catch(this.handleError);
    };
    //f==data
    CartService.prototype.postCart = function (data, token) {
        var url = '/api/cart/?token=' + token + '&item=' + data.state + '&qty=' + data.qty;
        if (data.username) {
            url = '/api/cart/?token=' + token + '&item=' + data.state + '&qty=' + data.qty + '&username=' + data.username;
        }
        return this.http.get(url)
            .map(function (res) { return res.json(); }) //subscribe은 component에서 해주면 됨. 따라서 return 해줘야한다!
            .catch(this.handleError);
    };
    CartService.prototype.deleteItem = function (itemId) {
        return this.http.get('/api/cart/?token=' + localStorage.getItem('cart_token') + '&item=' + itemId + '&delete=True')
            .map(function (res) { return res.json(); }) //subscribe은 component에서 해주면 됨. 따라서 return 해줘야한다!
            .catch(this.handleError);
    };
    /**
     * Handle any errors from the API
     */
    CartService.prototype.handleError = function (error) {
        var errMessage;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = error.message ? error.message : error.toString();
        }
        console.log(errMessage);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMessage);
    };
    return CartService;
}());
CartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CartService);

var _a;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.endPoint = '/api/blog/';
    }
    /**
     * Get all categories
     */
    CategoryService.prototype.getCategories = function () {
        return this.http.get('/api/categories/')
            .map(function (res) { return res.json(); }) //subscribe은 component에서 해주면 됨. 따라서 return 해줘야한다!
            .catch(this.handleError);
    };
    /**
     * Handle any errors from the API
     */
    CategoryService.prototype.handleError = function (error) {
        var errMessage;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = error.message ? error.message : error.toString();
        }
        console.log(errMessage);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMessage);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/helpers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var endpoint = "locolhost:8000";
var HelpersService = (function () {
    function HelpersService(http) {
        this.http = http;
    }
    // getCsrf(): Observable<any> {
    //   const options = new RequestOptions({ withCredentials: true });
    //   const csrfToken = localStorage.getItem('csrftoken');
    //   if (!csrfToken) {
    //     return this.http.get(`${endpoint}/movies/auth/csrf`, options)
    //       .first()
    //       .map(res => res.json())
    //       .do(res => localStorage.setItem('csrftoken', res.data));
    //   }
    //   return Observable.of(csrfToken);
    // }
    HelpersService.prototype.createHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({
            'Content-Type': 'application/json',
            'X-CSRFToken': localStorage.getItem('csrftoken')
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return options;
    };
    return HelpersService;
}());
HelpersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]) === "function" && _a || Object])
], HelpersService);

var _a;
//# sourceMappingURL=helpers.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderService = (function () {
    function OrderService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    OrderService.prototype.getOrderData = function (username) {
        var data = { username: username, cart_token: localStorage.getItem('cart_token') };
        return this.auth.post("/api/checkout/", data, { withCredentials: true })
            .map(function (res) { return res.json(); }) //subscribe은 component에서 해주면 됨. 따라서 return 해줘야한다!
            .catch(this.handleError);
    };
    OrderService.prototype.orderConform = function (data) {
        return this.auth.post("/api/checkout/finalize/", data, { withCredentials: true })
            .map(function (res) { return res.json(); }) //subscribe은 component에서 해주면 됨. 따라서 return 해줘야한다!
            .catch(this.handleError);
    };
    // getOrderData(username): Observable<any> {
    //   let data = {username: username, cart_token: localStorage.getItem('cart_token')};
    //   return this.http.get('/api/checkout/?cart_token=' + localStorage.getItem('cart_token') + '&username=' + username)
    //     .map(res => res.json()) //subscribe은 component에서 해주면 됨. 따라서 return 해줘야한다!
    //     .catch(this.handleError);
    // }
    /**
     * Handle any errors from the API
     */
    OrderService.prototype.handleError = function (error) {
        var errMessage;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = error.message ? error.message : error.toString();
        }
        console.log(errMessage);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMessage);
    };
    return OrderService;
}());
OrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"]) === "function" && _b || Object])
], OrderService);

var _a, _b;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.endPoint = '/api/blog/';
    }
    /**
     * Get all categories
     */
    ProductService.prototype.getAllProducts = function () {
        return this.http.get('/api/products/')
            .map(function (res) { return res.json(); }) //subscribe은 component에서 해주면 됨. 따라서 return 해줘야한다!
            .catch(this.handleError);
    };
    ProductService.prototype.getProducts = function (categories) {
        return this.http.get('/api/categories/' + categories + '/')
            .map(function (res) { return res.json().product_set; }) //subscribe은 component에서 해주면 됨. 따라서 return 해줘야한다!
            .catch(this.handleError);
    };
    // This is single product-detail
    ProductService.prototype.getProduct = function (id) {
        return this.http.get('/api/products/' + id + '/')
            .map(function (res) { return res.json(); }) //subscribe은 component에서 해주면 됨. 따라서 return 해줘야한다!
            .catch(this.handleError);
    };
    ProductService.prototype.getSearchProducts = function (params) {
        console.log(params);
        // products/?q=&category_id=1&category_id=2&max_price=&min_price=&q=
        return this.http.get('/api/products/?' + params)
            .map(function (res) { return res.json(); }) //subscribe은 component에서 해주면 됨. 따라서 return 해줘야한다!
            .catch(this.handleError);
    };
    /**
     * Handle any errors from the API
     */
    ProductService.prototype.handleError = function (error) {
        var errMessage;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = error.message ? error.message : error.toString();
        }
        console.log(errMessage);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMessage);
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/startup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { config } from './../../config';
var StartupService = (function () {
    function StartupService(http) {
        this.http = http;
    }
    StartupService.prototype.load = function () {
        return this.getCsrf()
            .toPromise()
            .catch(function () { return Promise.resolve(); });
    };
    StartupService.prototype.getCsrf = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({ withCredentials: true });
        var csrfToken = localStorage.getItem('csrftoken');
        if (!csrfToken) {
            return this.http.get("/auth/csrf", options)
                .first()
                .map(function (res) { return res.json(); })
                .do(function (res) { return localStorage.setItem('csrftoken', res.data); });
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(csrfToken);
    };
    return StartupService;
}());
StartupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]) === "function" && _a || Object])
], StartupService);

var _a;
//# sourceMappingURL=startup.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_service__ = __webpack_require__("../../../../../src/app/shared/services/helpers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { config } from './../../../config';
var endpoint = "locolhost:8000";
var UserService = (function () {
    function UserService(http, hs) {
        this.http = http;
        this.hs = hs;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
        this.user$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](this.getAuthDetails());
        this.user = false;
        this.setUserData();
    }
    UserService.prototype.authPost = function (url, data) {
        var options = this.hs.createHeaders();
        return this.http.post(url, data, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getOrSetUsername = function () {
        var username = this.user.username || localStorage.getItem('username');
        if (!username) {
            username = btoa(Math.random().toString());
            localStorage.setItem('username', username);
        }
        return username;
    };
    UserService.prototype.usernameIsUnique = function (username) {
        return this.http.get("/auth/register/?u=" + username)
            .first()
            .map(function (res) { return res.json(); })
            .map(function (res) { return !res.data.username_exists; });
    };
    UserService.prototype.register = function (formData) {
        return this.authPost("/auth/register/", formData);
        // .do(res => this.setToken(res.data));
    };
    // editProfile(formData: any): Observable<any> {
    //   // need to set withCredentials to send csrf token for Django
    //   return this.auth.post(`${endpoint}/movies/user/update/`, formData, { withCredentials: true });
    // }
    //
    // editPassword(formData: any): Observable<any> {
    //   return this.auth.post(
    //     `${endpoint}/movies/user/update-password/`,
    //     formData,
    //     { withCredentials: true }
    //   );
    // }
    UserService.prototype.logout = function () {
        localStorage.removeItem('token');
        // Cookie.delete('token', '/');
        this.setUserData();
    };
    UserService.prototype.isAuth = function () {
        var cookieToken = this.getToken();
        if (cookieToken === 'undefined') {
            return false;
        }
        if (cookieToken) {
            return !this.jwtHelper.isTokenExpired(cookieToken);
        }
        else {
            return false;
        }
    };
    UserService.prototype.getAuthDetails = function () {
        var cookieToken = this.getToken();
        if (cookieToken === 'undefined') {
            return false;
        }
        if (cookieToken) {
            console.log(cookieToken);
            return this.jwtHelper.decodeToken(cookieToken);
        }
        else {
            return false;
        }
    };
    UserService.prototype.setUserData = function () {
        console.log("-----setUserData-----");
        this.user$.next(this.getAuthDetails());
        this.user = this.getAuthDetails();
    };
    // login(formData: any): Observable<any> {
    //   return this.authPost(`/auth/login/`, formData)
    //     .do(res => this.setToken(res.data));
    // }
    // private setToken(token: any): void {
    //   console.log("-----setToken-----");
    //
    //   if(token)
    //     localStorage.setItem('token', token);
    //
    //   if(!token)
    //     console.log("token is undefined");
    // }
    UserService.prototype.login = function (formData) {
        var _this = this;
        return this.authPost("/auth/login/", formData)
            .do(function (res) { return _this.setToken(res); });
    };
    UserService.prototype.setToken = function (data) {
        console.log("-----setToken-----");
        console.log(data);
        if (data.cart_token)
            localStorage.setItem('cart_token', data.cart_token);
        if (data.token)
            localStorage.setItem('token', data.token);
        if (!data.token)
            console.log("token is undefined");
    };
    UserService.prototype.getToken = function () {
        console.log("-----getToken-----");
        return localStorage.getItem('token');
    };
    /**
     * Handle any errors from the API
     */
    UserService.prototype.handleError = function (error) {
        var errMessage;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = error.message ? error.message : error.toString();
        }
        console.log(errMessage);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMessage);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__helpers_service__["a" /* HelpersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__helpers_service__["a" /* HelpersService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map