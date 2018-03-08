webpackJsonp([1],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HometecnicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HometecnicoPage = (function () {
    function HometecnicoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HometecnicoPage.prototype.ngOnInit = function () {
    };
    HometecnicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\pages\hometecnico\hometecnico.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n   <candidato> </candidato>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\pages\hometecnico\hometecnico.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HometecnicoPage);
    return HometecnicoPage;
}());

//# sourceMappingURL=hometecnico.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfiloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modificaprofilo_modificaprofilo__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfiloPage = (function () {
    function ProfiloPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfiloPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__modificaprofilo_modificaprofilo__["a" /* ModificaprofiloPage */]);
    };
    ProfiloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\pages\profilo\profilo.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profilo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="speaker-detail">\n  <div text-center>\n    <img src="assets/imgs/profilo.png" alt="Immagine profilo"><br>\n\n    <ion-label>Fabio De Cicco</ion-label>\n    <ion-label>f.decicco3@gmail.com</ion-label>\n    <ion-label>3481478361</ion-label>\n\n    <ion-buttons>\n      <button ion-button (click)="onSignup()" small>Modifica</button>\n    </ion-buttons>\n\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\pages\profilo\profilo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ProfiloPage);
    return ProfiloPage;
}());

//# sourceMappingURL=profilo.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homecandidato_homecandidato__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_auth_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(db, authService, navCtrl, alertCtrl) {
        this.db = db;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.candidato = { fullname: '', email: '', telefono: '', password: '', key: '' };
        //   this.candidato={fullname : '',email : '', telefono : '', password : ''};
        //   this.confermaPassword = '';
    }
    SignupPage.prototype.onSignup = function () {
        if (this.candidato.password === this.confermaPassword && this.candidato.fullname !== '' && this.candidato.email !== '' && this.candidato.telefono !== '' && this.candidato.password !== '' && this.candidato.password.length > 6) {
            this.database = this.db.list('/account/candidati'),
                this.database.push(this.candidato);
            this.authService.signup(this.candidato.email, this.candidato.password);
            var alert_1 = this.alertCtrl.create({
                title: 'Conferma registrazione',
                subTitle: 'Registrazione avvenuta con successo!',
                buttons: ['OK']
            });
            alert_1.present();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__homecandidato_homecandidato__["a" /* HomecandidatoPage */]);
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Errore di inserimento',
                subTitle: 'Inserisci i dati correttamente!',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    SignupPage.prototype.onAnnulla = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Registrazione</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="login-page">\n\n\n\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" name="fullname" [(ngModel)]="candidato.fullname" placeholder="Fullname"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="candidato.email" placeholder="Email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="candidato.telefono" placeholder="Telefono"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-input type="password" [(ngModel)]="candidato.password" placeholder="Password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" [(ngModel)]="confermaPassword" placeholder="Conferma password"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <div padding>\n      <ion-row responsive-sm>\n        <ion-col>\n          <button ion-button (click)="onSignup()" type="submit" block>Conferma</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button (click)="onAnnulla()" block>Annulla</button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__app_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
        this.user = firebaseAuth.authState;
        this.valore = 2;
    }
    AuthService.prototype.signup = function (email, password) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('registrazione corretta!', value);
        })
            .catch(function (err) {
            console.log('registrazione scorretta', err.message);
        });
    };
    AuthService.prototype.login = function (email, password) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthService.prototype.logout = function () {
        this.firebaseAuth
            .auth
            .signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizzaoffertaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisualizzaoffertaPage = (function () {
    function VisualizzaoffertaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.offertaselezionata = navParams.get("offertaselezionata");
    }
    VisualizzaoffertaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\pages\visualizzaofferta\visualizzaofferta.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Offerta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="about-header">\n    <img src="assets/imgs/int.png" alt="ionic logo">\n  </div>\n  <dettagliofferta [offertaselezionata]=offertaselezionata> </dettagliofferta>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\pages\visualizzaofferta\visualizzaofferta.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], VisualizzaoffertaPage);
    return VisualizzaoffertaPage;
}());

//# sourceMappingURL=visualizzaofferta.js.map

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/my-files/my-files.module": [
		478,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 196;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaprofiloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilo_profilo__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homecandidato_homecandidato__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModificaprofiloPage = (function () {
    function ModificaprofiloPage(alertCtrl, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
    }
    ModificaprofiloPage.prototype.onSignup = function (form) {
        if (form.valid) {
            var alert_1 = this.alertCtrl.create({
                title: 'Modifica',
                subTitle: 'La modifica dei dati personali è avvenuta con successo!',
                buttons: ['OK']
            });
            alert_1.present();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__homecandidato_homecandidato__["a" /* HomecandidatoPage */]);
        }
    };
    ModificaprofiloPage.prototype.onAnnulla = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profilo_profilo__["a" /* ProfiloPage */]);
    };
    ModificaprofiloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\pages\modificaprofilo\modificaprofilo.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Modifica profilo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding class="speaker-detail">\n  <div text-center>\n    <img src="assets/imgs/profilo.png" alt="Immagine profilo"><br>\n\n    <form #signupForm="ngForm" novalidate>\n      <ion-list no-lines>\n        <ion-item>\n          <ion-label stacked color="primary">Email</ion-label>\n          <ion-input  name="username" type="text"  required>\n          </ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked color="primary">Password</ion-label>\n          <ion-input  name="password" type="password"  required>\n          </ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked color="primary">Nome</ion-label>\n          <ion-input name="nome" required>\n          </ion-input>\n        </ion-item>\n\n\n        <ion-item>\n          <ion-label stacked color="primary">Cognome</ion-label>\n          <ion-input name="cognome" required>\n          </ion-input>\n        </ion-item>\n\n      </ion-list>\n\n      <div padding>\n        <ion-row responsive-sm>\n          <ion-col>\n            <button ion-button (click)="onSignup(signupForm)" type="submit" block>Conferma</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button (click)="onAnnulla()" block>Annulla</button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </form>\n\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\pages\modificaprofilo\modificaprofilo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ModificaprofiloPage);
    return ModificaprofiloPage;
}());

//# sourceMappingURL=modificaprofilo.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizzacandidaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisualizzacandidaturePage = (function () {
    function VisualizzacandidaturePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VisualizzacandidaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\pages\visualizzacandidature\visualizzacandidature.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Candidature</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <candidaturaidonea> </candidaturaidonea>\n  <candidaturanonidonea> </candidaturanonidonea>\n  <candidaturadaverificare> </candidaturadaverificare>\n\n</ion-content>'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\pages\visualizzacandidature\visualizzacandidature.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], VisualizzacandidaturePage);
    return VisualizzacandidaturePage;
}());

//# sourceMappingURL=visualizzacandidature.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialPage = (function () {
    function TutorialPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\pages\tutorial\tutorial.html"*/'\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/imgs/logoApp.png" class="slide-image"/>\n      <h2 class="slide-title">\n        Benvenuti in <b>Fast Recruiting</b>\n      </h2>\n      <p>\n        L\'app per essere continuamente aggiornati sulle offerte di lavoro della <b>NexSoft S.p.a.</b>\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/imgs/nexsoft.png" class="slide-image"/>\n      <h2 class="slide-title" >Nexsoft S.p.a?</h2>\n      <p>Nexsoft S.P.A è una società italiana leader nel settore dei Servizi Informatici con oltre 120 dipendenti operanti sull’intero territorio nazionale. Un’azienda in continua crescita, che anno per anno, incrementa il numero dei suoi dipendenti.\n    </ion-slide>\n\n\n\n    <ion-slide>\n      <img src="assets/imgs/corporate.png" class="slide-image"/>\n      <h2 class="slide-title">Sei pronto ad iniziazre?</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        Continua\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\pages\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidaturaoffertaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CandidaturaoffertaPage = (function () {
    function CandidaturaoffertaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.offertaselezionata = navParams.get("offertaselezionata");
    }
    CandidaturaoffertaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\pages\candidaturaofferta\candidaturaofferta.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Candidatura offerta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<inviocandidatura> </inviocandidatura>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\pages\candidaturaofferta\candidaturaofferta.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CandidaturaoffertaPage);
    return CandidaturaoffertaPage;
}());

//# sourceMappingURL=candidaturaofferta.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizzacolloquioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisualizzacolloquioPage = (function () {
    function VisualizzacolloquioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.candidaturaselezionata = navParams.get("candidaturaselezionata");
    }
    VisualizzacolloquioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\pages\visualizzacolloquio\visualizzacolloquio.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Colloquio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="about-header">\n    <img src="assets/imgs/recruiment.png" alt="ionic logo">\n  </div>\n\n  <colloquio [candidaturaselezionata]=candidaturaselezionata> </colloquio>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\pages\visualizzacolloquio\visualizzacolloquio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], VisualizzacolloquioPage);
    return VisualizzacolloquioPage;
}());

//# sourceMappingURL=visualizzacolloquio.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizzacandidatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizzaoffertatecnico_visualizzaoffertatecnico__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hometecnico_hometecnico__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisualizzacandidatoPage = (function () {
    function VisualizzacandidatoPage(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.candidatoselezionato = navParams.get("candidatoselezionato");
    }
    VisualizzacandidatoPage.prototype.onVisualizzaOfferta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__visualizzaoffertatecnico_visualizzaoffertatecnico__["a" /* VisualizzaoffertatecnicoPage */]);
    };
    VisualizzacandidatoPage.prototype.onInvia = function () {
        var alert = this.alertCtrl.create({
            title: 'Giudizio inviato',
            subTitle: 'Il giudizio è stato inviato al Recruiter con successo!',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hometecnico_hometecnico__["a" /* HometecnicoPage */]);
    };
    VisualizzacandidatoPage.prototype.onAnnulla = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hometecnico_hometecnico__["a" /* HometecnicoPage */]);
    };
    VisualizzacandidatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\pages\visualizzacandidato\visualizzacandidato.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Candidato</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="speaker-detail">\n  <div text-center>\n    <ion-buttons>\n    <button ion-button (click)="onVisualizzaOfferta()" small>Visualizza offerta</button>\n  </ion-buttons>\n\n    <dettagliocandidato [candidatoselezionato]=candidatoselezionato> </dettagliocandidato>\n\n    <ion-list radio-group>\n      <ion-list-header>\n        Giudizio\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Idoneo</ion-label>\n        <ion-radio checked="true" value="idoneo"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Non idoneo</ion-label>\n        <ion-radio value="nonidoneo"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Da verificare</ion-label>\n        <ion-radio value="verificare" ></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <br>\n    <h4>\n      Note:\n    </h4>\n    <ion-textarea name="note" rows="10">\n    </ion-textarea>\n\n    <ion-row responsive-sm>\n      <ion-col>\n        <button ion-button (click)="onInvia()" type="submit" block>Invia</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button (click)="onAnnulla()" block>Annulla</button>\n      </ion-col>\n    </ion-row>\n\n\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\pages\visualizzacandidato\visualizzacandidato.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], VisualizzacandidatoPage);
    return VisualizzacandidatoPage;
}());

//# sourceMappingURL=visualizzacandidato.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizzaoffertatecnicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisualizzaoffertatecnicoPage = (function () {
    function VisualizzaoffertatecnicoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VisualizzaoffertatecnicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\pages\visualizzaoffertatecnico\visualizzaoffertatecnico.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Offerta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div >\n    <h1>Programmatore Web</h1>\n    <h4>\n      Competenze:\n    </h4>\n    <p>\n      HTML 5, CSS, Ionic, Angular4, JavaScript, XML\n    </p>\n    <h4>\n      Titolo di studio:\n    </h4>\n    <p>\n      Laurea in informatica\n    </p>\n    <h4>\n      Luogo di lavoro:\n    </h4>\n    <p>\n      Via Antonio Amato, 20, 84131 Salerno (SA)\n    </p>\n    <h4>\n      Data:\n    </h4>\n    <p>\n      27/11/2017\n    </p>\n    <h4>\n      Descrizione:\n    </h4>\n    <p>\n      Cerchiamo esperti programmatori Web che abbiano buone conoscenze in linguaggi di programmazione HTML5, CSS3, JavaScript.\n      Questo progetto si svolgerà nella sede aziendale di Salerno affiancati a esperti programmatori che vi faranno un training iniziale sulle\n      tecnologie che si andranno ad utilizzare.\n    </p>\n\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\pages\visualizzaoffertatecnico\visualizzaoffertatecnico.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], VisualizzaoffertatecnicoPage);
    return VisualizzaoffertatecnicoPage;
}());

//# sourceMappingURL=visualizzaoffertatecnico.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MappaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MappaPage = (function () {
    function MappaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MappaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\pages\mappa\mappa.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mappa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="map-page">\n  <div id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\pages\mappa\mappa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], MappaPage);
    return MappaPage;
}());

//# sourceMappingURL=mappa.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Offerta; });
var Offerta = (function () {
    function Offerta(titolo, luogodilavoro, skill, annuncio, titolodistudio, key) {
        this.titolo = titolo;
        this.luogodilavoro = luogodilavoro;
        this.annuncio = annuncio;
        this.skill = skill;
        this.titolodistudio = titolodistudio;
        this.key = key;
    }
    return Offerta;
}());

//# sourceMappingURL=offerta.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Candidato; });
var Candidato = (function () {
    function Candidato(fullname, email, telefono, password, key) {
        this.fullname = fullname;
        this.email = email;
        this.telefono = telefono;
        this.password = password;
        this.key = key;
    }
    return Candidato;
}());

//# sourceMappingURL=candidato.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(323);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_homecandidato_homecandidato__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_visualizzaofferta_visualizzaofferta__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_candidaturaofferta_candidaturaofferta__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_visualizzacolloquio_visualizzacolloquio__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_hometecnico_hometecnico__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profilo_profilo__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modificaprofilo_modificaprofilo__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_visualizzacandidature_visualizzacandidature__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_tutorial__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_visualizzacandidato_visualizzacandidato__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mappa_mappa__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_visualizzaoffertatecnico_visualizzaoffertatecnico__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_inviocandidatura_inviocandidatura__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__auth_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_candidaturaidonea_candidaturaidonea__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_offerta_offerta__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_candidato_candidato__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_dettagliofferta_dettagliofferta__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_dettagliocandidato_dettagliocandidato__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_colloquio_colloquio__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_candidaturanonidonea_candidaturanonidonea__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_candidaturadaverificare_candidaturadaverificare__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_data_data__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var firebaseConfig = {
    apiKey: "AIzaSyDr-dQ8Rp8dAtxhSJc7GDdGU1Joo_MKTZ4",
    authDomain: "fastrecruiting-c6284.firebaseapp.com",
    databaseURL: "https://fastrecruiting-c6284.firebaseio.com",
    projectId: "fastrecruiting-c6284",
    storageBucket: "fastrecruiting-c6284.appspot.com",
    messagingSenderId: "576205137004"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_homecandidato_homecandidato__["a" /* HomecandidatoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_visualizzaofferta_visualizzaofferta__["a" /* VisualizzaoffertaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_candidaturaofferta_candidaturaofferta__["a" /* CandidaturaoffertaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_visualizzacolloquio_visualizzacolloquio__["a" /* VisualizzacolloquioPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_hometecnico_hometecnico__["a" /* HometecnicoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profilo_profilo__["a" /* ProfiloPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modificaprofilo_modificaprofilo__["a" /* ModificaprofiloPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_visualizzacandidature_visualizzacandidature__["a" /* VisualizzacandidaturePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_visualizzacandidato_visualizzacandidato__["a" /* VisualizzacandidatoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mappa_mappa__["a" /* MappaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_visualizzaoffertatecnico_visualizzaoffertatecnico__["a" /* VisualizzaoffertatecnicoPage */],
                __WEBPACK_IMPORTED_MODULE_27__components_offerta_offerta__["a" /* OffertaComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_candidato_candidato__["a" /* CandidatoComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_dettagliofferta_dettagliofferta__["a" /* DettaglioffertaComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_dettagliocandidato_dettagliocandidato__["a" /* DettagliocandidatoComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_inviocandidatura_inviocandidatura__["a" /* InviocandidaturaComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_candidato_candidato__["a" /* CandidatoComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_candidaturaidonea_candidaturaidonea__["a" /* CandidaturaidoneaComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_candidaturanonidonea_candidaturanonidonea__["a" /* CandidaturanonidoneaComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_candidaturadaverificare_candidaturadaverificare__["a" /* CandidaturadaverificareComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_colloquio_colloquio__["a" /* ColloquioComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_22_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/my-files/my-files.module#MyFilesPageModule', name: 'MyFilesPage', segment: 'my-files', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_homecandidato_homecandidato__["a" /* HomecandidatoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_visualizzaofferta_visualizzaofferta__["a" /* VisualizzaoffertaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_candidaturaofferta_candidaturaofferta__["a" /* CandidaturaoffertaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_visualizzacolloquio_visualizzacolloquio__["a" /* VisualizzacolloquioPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_hometecnico_hometecnico__["a" /* HometecnicoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profilo_profilo__["a" /* ProfiloPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modificaprofilo_modificaprofilo__["a" /* ModificaprofiloPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_visualizzacandidature_visualizzacandidature__["a" /* VisualizzacandidaturePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_visualizzacandidato_visualizzacandidato__["a" /* VisualizzacandidatoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mappa_mappa__["a" /* MappaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_visualizzaoffertatecnico_visualizzaoffertatecnico__["a" /* VisualizzaoffertatecnicoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_34__providers_data_data__["a" /* DataProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_homecandidato_homecandidato__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_hometecnico_hometecnico__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profilo_profilo__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_visualizzacandidature_visualizzacandidature__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tutorial_tutorial__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_homecandidato_homecandidato__["a" /* HomecandidatoPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home candidato', component: __WEBPACK_IMPORTED_MODULE_4__pages_homecandidato_homecandidato__["a" /* HomecandidatoPage */], icon: 'home' },
            { title: 'Home tecnico', component: __WEBPACK_IMPORTED_MODULE_5__pages_hometecnico_hometecnico__["a" /* HometecnicoPage */], icon: 'home' },
            { title: 'Profilo', component: __WEBPACK_IMPORTED_MODULE_6__pages_profilo_profilo__["a" /* ProfiloPage */], icon: 'person' },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Signup', component: __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' },
            { title: 'Visualizza candidature', component: __WEBPACK_IMPORTED_MODULE_9__pages_visualizzacandidature_visualizzacandidature__["a" /* VisualizzacandidaturePage */], icon: 'briefcase' },
            { title: 'Tutorial', component: __WEBPACK_IMPORTED_MODULE_10__pages_tutorial_tutorial__["a" /* TutorialPage */], icon: 'play' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-avatar item-start>\n      <div class="logo">\n        <img src="assets/imgs/logoApp.png">\n        <h4>Fabio De Cicco</h4>\n\n      </div>\n    </ion-avatar>\n\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>\n        Navigate\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon item-start [name]="p.icon" ></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomecandidatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomecandidatoPage = (function () {
    function HomecandidatoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomecandidatoPage.prototype.ngOnInit = function () {
    };
    HomecandidatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\pages\homecandidato\homecandidato.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n\n\n<offerta> </offerta>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\pages\homecandidato\homecandidato.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomecandidatoPage);
    return HomecandidatoPage;
}());

//# sourceMappingURL=homecandidato.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviocandidaturaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_visualizzaofferta_visualizzaofferta__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_homecandidato_homecandidato__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InviocandidaturaComponent = (function () {
    function InviocandidaturaComponent(db, alertCtrl, navCtrl, navParams) {
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.today = Date.now();
        this.candidatura = { id_candidato: 'FABIO',
            id_offerta: 'test',
            id_tecnico: 'CAZZZZZ',
            data: this.today,
            titolo: 'vincenzoooooo',
            skill: 'asd',
            cv: 'asd',
            lettera: 'asd',
            note_recruiter: 'asd',
            note_tecnico: 'asd',
            note_candidato: '',
            giudizio: 'asd',
            data_colloquio: '03/11/1992/',
            ora_colloquio: '16:00',
            luogo_colloquio: 'Salerno',
            messaggio: "Salve, è stato selezionato per un colloquio presso la nostra sede a Salerno il giorno 5 marzo alle ore 16:00.",
            key: "" };
        this.chiave = this.navParams.get('chiave');
    }
    InviocandidaturaComponent.prototype.onTapAnnulla = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_visualizzaofferta_visualizzaofferta__["a" /* VisualizzaoffertaPage */]);
    };
    InviocandidaturaComponent.prototype.onTapCandidati = function () {
        this.database = this.db.list('/candidature/candidature_da_verificare'),
            this.database.push(this.candidatura);
        this.candidatura.id_offerta = this.chiave;
        var alert = this.alertCtrl.create({
            title: 'Candidatura effettuata',
            subTitle: 'La tua richiesta di candidaturaidonea è stata inviata con successo!',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_homecandidato_homecandidato__["a" /* HomecandidatoPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], InviocandidaturaComponent.prototype, "offertaselezionata", void 0);
    InviocandidaturaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'inviocandidatura',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\components\inviocandidatura\inviocandidatura.html"*/'<div>\n  <h6>\n    Titolo di studio:\n\n\n  </h6>\n  <ion-item>\n    <ion-input type="text" name="titolo" [(ngModel)]="candidatura.titolo" placeholder="Titolo di studio"></ion-input>\n  </ion-item>\n\n  <h6>\n    Skill possedute:\n  </h6>\n  <ion-list>\n    <ion-item>\n      <ion-label>Skill possedute</ion-label>\n      <ion-select [(ngModel)]="candidatura.skill" multiple="true" okText="Fatto">\n        <ion-option value="HTML5">HTML5</ion-option>\n        <ion-option value="CSS3">CSS3</ion-option>\n        <ion-option value="JavaScript">JavaScript</ion-option>\n        <ion-option value="JSON">JSON</ion-option>\n        <ion-option value="AJAX">AJAX</ion-option>\n        <ion-option value="Jquery">JQuery</ion-option>\n        <ion-option value="XML">XML</ion-option>\n        <ion-option value="PHP">PHP</ion-option>\n        <ion-option value="Java">Java</ion-option>\n        <ion-option value="Ionic">Ionic</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <h6>\n    Note:\n  </h6>\n  <ion-item>\n    <ion-input type="text" name="note" [(ngModel)]="candidatura.note_candidato" placeholder="Inserisci note"></ion-input>\n  </ion-item>\n\n\n  <ion-col>\n    <button ion-button (click)="onTapCandidati(loginForm)" type="submit" block>Allega CV</button>\n  </ion-col>\n\n  <ion-col>\n    <button ion-button (click)="onTapCandidati(loginForm)" type="submit" block>Allega lettera di presentazione</button>\n  </ion-col>\n\n  <ion-row responsive-sm>\n    <ion-col>\n      <button ion-button (click)="onTapCandidati()" type="submit" block>Candidati</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button (click)="onTapAnnulla()" color="light" block>Annulla</button>\n    </ion-col>\n  </ion-row>\n</div>'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\components\inviocandidatura\inviocandidatura.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], InviocandidaturaComponent);
    return InviocandidaturaComponent;
}());

//# sourceMappingURL=inviocandidatura.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidaturaidoneaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_visualizzacolloquio_visualizzacolloquio__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_candidatura__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(33);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CandidaturaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CandidaturaidoneaComponent = (function () {
    function CandidaturaidoneaComponent(db, navCtrl, navParams) {
        var _this = this;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.candidaturalist = [];
        this.database = this.db.list('/candidature/candidature_non_idonee');
        this.db.list('/candidature/candidature_non_idonee', function (ref) { return ref.orderByChild('nome'); }).snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                _this.candidatura = new __WEBPACK_IMPORTED_MODULE_3__app_candidatura__["a" /* Candidatura */](it.id_candidato, it.id_offerta, it.id_tecnico, it.data, it.titolo, it.skill, it.cv, it.lettera, it.note_recruiter, it.note_tecnico, it.note_candidato, it.giudizio, it.data_colloquio, it.ora_colloquio, it.luogo_colloquio, it.messaggio, it.key);
                _this.candidaturalist.push(_this.candidatura);
            });
        });
    }
    CandidaturaidoneaComponent.prototype.selezione = function (c, chiave) {
        this.candidaturaselezionata = c;
        this.chiave = chiave;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_visualizzacolloquio_visualizzacolloquio__["a" /* VisualizzacolloquioPage */], { candidaturaselezionata: this.candidaturaselezionata, chiave: this.chiave });
    };
    CandidaturaidoneaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'candidaturaidonea',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\components\candidaturaidonea\candidaturaidonea.html"*/'<ion-list>\n  <ion-item-sliding *ngFor="let candidatura of candidaturalist" (click)="selezione(candidatura,candidatura.$key)">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/jobverde.png">\n      </ion-avatar>\n      <h1>{{candidatura.$key}}</h1>\n      <h2> {{ candidatura.id_offerta }}</h2>\n      <p>{{ candidatura.titolo }}</p>\n\n    </ion-item>\n  </ion-item-sliding>\n\n\n\n\n</ion-list>'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\components\candidaturaidonea\candidaturaidonea.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], CandidaturaidoneaComponent);
    return CandidaturaidoneaComponent;
}());

//# sourceMappingURL=candidaturaidonea.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffertaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_offerta__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_visualizzaofferta_visualizzaofferta__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(33);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OffertaComponent = (function () {
    function OffertaComponent(db, navCtrl, navParams) {
        var _this = this;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jobsofferlist = [];
        this.newItem = '';
        this.database = this.db.list('/offerte/', function (ref) { return ref.orderByChild('titolo'); });
        this.db.list('/offerte/', function (ref) { return ref.orderByChild('titolo'); }).snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                _this.ob = new __WEBPACK_IMPORTED_MODULE_1__app_offerta__["a" /* Offerta */](it.titolo, it.luogodilavoro, it.skill, it.annuncio, it.titolodistudio, it.key);
                _this.jobsofferlist.push(_this.ob);
                console.log('Annuncio: ', it.annuncio, ' Luogo di lavoro: ', it.luogodilavoro, ' titolo di studio: ', it.titolodistudio, ' key: ', it.key);
            });
        });
    }
    OffertaComponent.prototype.selezione = function (o, chiave) {
        this.offertaselezionata = o;
        this.chiave = chiave;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_visualizzaofferta_visualizzaofferta__["a" /* VisualizzaoffertaPage */], { offertaselezionata: this.offertaselezionata, chiave: this.chiave });
    };
    OffertaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'offerta',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\components\offerta\offerta.html"*/'\n    <ion-list>\n        <ion-item-sliding *ngFor="let offerta of jobsofferlist" (click)="selezione(offerta,offerta.$key)">\n                 <ion-item>\n                     <ion-avatar item-start>\n                         <img src="assets/imgs/job.png">\n                     </ion-avatar>\n                     <h1>{{offerta.$key}}</h1>\n                     <h2> {{ offerta.titolo }}</h2>\n                     <p>{{ offerta.annuncio }}</p>\n\n                  </ion-item>\n\n        </ion-item-sliding>\n    </ion-list>'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\components\offerta\offerta.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], OffertaComponent);
    return OffertaComponent;
}());

//# sourceMappingURL=offerta.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_candidato__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_visualizzacandidato_visualizzacandidato__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(33);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CandidatoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CandidatoComponent = (function () {
    function CandidatoComponent(db, navCtrl) {
        var _this = this;
        this.db = db;
        this.navCtrl = navCtrl;
        this.candidatilist = [];
        this.database = this.db.list('/candidati/');
        this.db.list('/candidati/', function (ref) { return ref.orderByChild('nome'); }).snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                _this.candidato = new __WEBPACK_IMPORTED_MODULE_1__app_candidato__["a" /* Candidato */](it.fullname, it.email, it.telefono, it.password, it.key);
                _this.candidatilist.push(_this.candidato);
                console.log('Candidato: ', it.fullname, ' Email: ', it.email, ' Telefono: ', it.telefono, ' password: ', it.password, ' key: ', it.key);
            });
        });
    }
    CandidatoComponent.prototype.selezione = function (o) {
        this.candidatoselezionato = o;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_visualizzacandidato_visualizzacandidato__["a" /* VisualizzacandidatoPage */], { candidatoselezionato: this.candidatoselezionato });
    };
    CandidatoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'candidato',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\components\candidato\candidato.html"*/'\n  <ion-list>\n    <ion-item-sliding *ngFor="let candidato of candidatilist" (click)="selezione(candidato)">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/profilo.png">\n        </ion-avatar>\n        <h2> {{ candidato.fullname }}</h2>\n\n      </ion-item>\n\n\n    </ion-item-sliding>\n  </ion-list>'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\components\candidato\candidato.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], CandidatoComponent);
    return CandidatoComponent;
}());

//# sourceMappingURL=candidato.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettaglioffertaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_offerta__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_homecandidato_homecandidato__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_candidaturaofferta_candidaturaofferta__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DettaglioffertaComponent = (function () {
    function DettaglioffertaComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chiave = this.navParams.get('chiave');
    }
    DettaglioffertaComponent.prototype.onTapAnnulla = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_homecandidato_homecandidato__["a" /* HomecandidatoPage */]);
    };
    DettaglioffertaComponent.prototype.onTapCandidati = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_candidaturaofferta_candidaturaofferta__["a" /* CandidaturaoffertaPage */], { offertaselezionata: this.offertaselezionata, chiave: this.chiave });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_offerta__["a" /* Offerta */])
    ], DettaglioffertaComponent.prototype, "offertaselezionata", void 0);
    DettaglioffertaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'dettagliofferta',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\components\dettagliofferta\dettagliofferta.html"*/'<!-- Generated template for the DettaglioffertaComponent component -->\n<div *ngIf="offertaselezionata">\n    <div >\n      <h1>{{offertaselezionata.titolo}}</h1>\n     <br>\n      <p>\n        {{offertaselezionata.annuncio}}\n      </p>\n      <h6>\n        Competenze richieste:\n      </h6>\n      <p>\n        {{offertaselezionata.competenze}}\n      </p>\n      <h6>\n        Titolo di studio:\n      </h6>\n      <p>\n        {{offertaselezionata.titolodistudio}}\n      </p>\n      <h6>\n        Luogo di lavoro:\n      </h6>\n      <p>\n        {{offertaselezionata.luogo}}\n      </p>\n      <h6>\n        Data di pubblicazione annuncio:\n      </h6>\n      <p>\n        {{offertaselezionata.data}}\n      </p>\n\n\n        <ion-row responsive-sm>\n            <ion-col>\n                <button ion-button (click)="onTapCandidati()" type="submit" block>Candidati</button>\n            </ion-col>\n            <ion-col>\n                <button ion-button (click)="onTapAnnulla()" color="light" block>Annulla</button>\n            </ion-col>\n        </ion-row>\n\n\n\n    </div>\n'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\components\dettagliofferta\dettagliofferta.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
    ], DettaglioffertaComponent);
    return DettaglioffertaComponent;
}());

//# sourceMappingURL=dettagliofferta.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettagliocandidatoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_candidato__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DettagliocandidatoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DettagliocandidatoComponent = (function () {
    function DettagliocandidatoComponent() {
        console.log('Hello DettagliocandidatoComponent Component');
        this.text = 'Hello World';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_candidato__["a" /* Candidato */])
    ], DettagliocandidatoComponent.prototype, "candidatoselezionato", void 0);
    DettagliocandidatoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'dettagliocandidato',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\components\dettagliocandidato\dettagliocandidato.html"*/'<!-- Generated template for the DettagliocandidatoComponent component -->\n<div *ngIf="candidatoselezionato">\n  <div >\n\n    <ion-card>\n      <ion-label>{{candidatoselezionato.nome}} {{candidatoselezionato.cognome}}</ion-label>\n      <ion-label>{{candidatoselezionato.email}}</ion-label>\n      <ion-label>{{candidatoselezionato.telefono}}</ion-label>\n      <ion-label>{{candidatoselezionato.titolo}}</ion-label>\n\n\n      <h4>\n        Skill possedute:\n      </h4>\n      <p>\n        Java;  PHP;  HTML5;  JSON;  XML\n      </p>\n\n\n\n      <ion-buttons>\n        <button ion-button  small>CV</button>\n      </ion-buttons>\n      <ion-buttons>\n        <button ion-button  small>Lettera di presentazione</button>\n      </ion-buttons>\n    </ion-card>\n    <ion-card>\n      <br>\n      <h4>\n        Note Recruiter:\n      </h4>\n      <p>\n        Penso che questo ragazzo possa essere la persona giusta per sviluppare questo progetto. Ti invito ad analizzarlo!!!\n      </p>\n    </ion-card>\n\n  </div>\n</div>'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\components\dettagliocandidato\dettagliocandidato.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DettagliocandidatoComponent);
    return DettagliocandidatoComponent;
}());

//# sourceMappingURL=dettagliocandidato.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColloquioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_candidatura__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_mappa_mappa__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ColloquioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ColloquioComponent = (function () {
    function ColloquioComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chiave = this.navParams.get('chiave');
        //this.candidaturaselezionata=this.navParams.get('candidaturaselezionata');
    }
    ColloquioComponent.prototype.onTapAprimappa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_mappa_mappa__["a" /* MappaPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__app_candidatura__["a" /* Candidatura */])
    ], ColloquioComponent.prototype, "candidaturaselezionata", void 0);
    ColloquioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'colloquio',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\components\colloquio\colloquio.html"*/'<!-- Generated template for the ColloquioComponent component -->\n<div *ngIf="candidaturaselezionata">\n  {{chiave}}\n\n  <h1>{{candidaturaselezionata.id_offerta}}</h1>\n\n\n\n\n  <div padding class="about-info">\n    <h4>Informazioni sul colloquio</h4>\n\n<h6>Data:</h6>\n       {{candidaturaselezionata.data_colloquio}}\n    <h6>Ora: </h6>\n    {{candidaturaselezionata.ora_colloquio}}\n\n\n        <h6>Location: </h6>\n        {{candidaturaselezionata.luogo_colloquio}}\n\n    <p>\n      {{candidaturaselezionata.luogo_colloquio}}\n    </p>\n\n      <h6>Messaggio: </h6>\n      <p>{{candidaturaselezionata.messaggio}} </p>\n  </div>\n\n\n</div>\n'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\components\colloquio\colloquio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ColloquioComponent);
    return ColloquioComponent;
}());

//# sourceMappingURL=colloquio.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidaturanonidoneaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_candidatura__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(33);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CandidaturanonidoneaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CandidaturanonidoneaComponent = (function () {
    function CandidaturanonidoneaComponent(db, navCtrl, navParams) {
        var _this = this;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.candidaturalist = [];
        this.database = this.db.list('/candidature/candidature_non_idonee');
        this.db.list('/candidature/candidature_non_idonee', function (ref) { return ref.orderByChild('nome'); }).snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                _this.candidatura = new __WEBPACK_IMPORTED_MODULE_1__app_candidatura__["a" /* Candidatura */](it.id_candidato, it.id_offerta, it.id_tecnico, it.data, it.titolo, it.skill, it.cv, it.lettera, it.note_recruiter, it.note_tecnico, it.note_candidato, it.giudizio, it.data_colloquio, it.ora_colloquio, it.luogo_colloquio, it.messaggio, it.key);
                _this.candidaturalist.push(_this.candidatura);
            });
        });
    }
    CandidaturanonidoneaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'candidaturanonidonea',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\components\candidaturanonidonea\candidaturanonidonea.html"*/'<ion-list>\n  <ion-item-sliding *ngFor="let candidatura of candidaturalist">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/jobrosso.png">\n      </ion-avatar>\n      <h2> {{ candidatura.id_offerta }}</h2>\n      <h2> {{ candidatura.cv }}</h2>\n\n      <p>{{ candidatura.titolo }}</p>\n\n    </ion-item>\n  </ion-item-sliding>\n\n\n\n\n</ion-list>'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\components\candidaturanonidonea\candidaturanonidonea.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], CandidaturanonidoneaComponent);
    return CandidaturanonidoneaComponent;
}());

//# sourceMappingURL=candidaturanonidonea.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidaturadaverificareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_candidatura__ = __webpack_require__(79);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {Candidatura} from "../../app/candidatura";
/**
 * Generated class for the CandidaturadaverificareComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CandidaturadaverificareComponent = (function () {
    function CandidaturadaverificareComponent(db, navCtrl, navParams) {
        var _this = this;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.candidaturalist = [];
        this.database = this.db.list('/candidature/candidature_non_idonee');
        this.db.list('/candidature/candidature_non_idonee', function (ref) { return ref.orderByChild('nome'); }).snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                _this.candidatura = new __WEBPACK_IMPORTED_MODULE_3__app_candidatura__["a" /* Candidatura */](it.id_candidato, it.id_offerta, it.id_tecnico, it.data, it.titolo, it.skill, it.cv, it.lettera, it.note_recruiter, it.note_tecnico, it.note_candidato, it.giudizio, it.data_colloquio, it.ora_colloquio, it.luogo_colloquio, it.messaggio, it.key);
                _this.candidaturalist.push(_this.candidatura);
            });
        });
    }
    CandidaturadaverificareComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'candidaturadaverificare',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\components\candidaturadaverificare\candidaturadaverificare.html"*/'<ion-list>\n  <ion-item-sliding *ngFor="let candidatura of candidaturalist">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/jobgiallo.png">\n      </ion-avatar>\n      <h1>{{candidatura.$key}}</h1>\n      <h2> {{ candidatura.id_offerta }}</h2>\n      <p>{{ candidatura.titolo }}</p>\n\n    </ion-item>\n  </ion-item-sliding>\n\n\n\n\n</ion-list>'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\components\candidaturadaverificare\candidaturadaverificare.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CandidaturadaverificareComponent);
    return CandidaturadaverificareComponent;
}());

//# sourceMappingURL=candidaturadaverificare.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = (function () {
    function DataProvider(http) {
        this.http = http;
        console.log('Hello DataProvider Provider');
    }
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homecandidato_homecandidato__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_auth_service__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(authService, navCtrl, alertCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.candidato = { email: '', password: '' };
        this.valore = 0;
    }
    LoginPage.prototype.onLogin = function () {
        this.authService.login(this.candidato.email, this.candidato.password);
        console.log(this.valore);
        if (this.valore === 1) {
            var alert_1 = this.alertCtrl.create({
                title: 'Login',
                subTitle: 'Login riuscito!',
                buttons: ['OK']
            });
            alert_1.present();
            this.candidato.email = this.candidato.password = '';
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__homecandidato_homecandidato__["a" /* HomecandidatoPage */]);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.onTapInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\fdeci\FastRecruiting\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content scroll="false">\n  <div class="splash-bg"></div>\n  <div class="splash-info">\n    <div class="splash-logo"></div>\n    <div class="splash-intro">\n      Fast Recruiting Nexsoft S.p.a.\n\n    </div>\n  </div>\n  <div padding>\n      <ion-list>\n        <ion-item>\n          <ion-input type="text" [(ngModel)]="candidato.email" placeholder="Email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="password" [(ngModel)]="candidato.password" placeholder="Password"></ion-input>\n        </ion-item>\n\n      </ion-list>\n    <button ion-button block (click)="onSignup()">Registrati</button>\n    <button ion-button block (click)="onLogin()" class="login">Login</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\fdeci\FastRecruiting\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__app_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Candidatura; });
var Candidatura = (function () {
    function Candidatura(id_candidato, id_offerta, id_tecnico, data, titolo, skill, cv, lettera, note_recruiter, note_tecnico, note_candidato, giudizio, data_colloquio, ora_colloquio, luogo_colloquio, messaggio, key) {
        this.id_candidato = id_candidato;
        this.id_offerta = id_offerta;
        this.id_tecnico = id_tecnico;
        this.data = data;
        this.titolo = titolo;
        this.skill = skill;
        this.cv = cv;
        this.lettera = lettera;
        this.note_recruiter = note_recruiter;
        this.note_tecnico = note_tecnico;
        this.note_candidato = note_candidato;
        this.giudizio = giudizio;
        this.data_colloquio = data_colloquio;
        this.ora_colloquio = ora_colloquio;
        this.luogo_colloquio = luogo_colloquio;
        this.messaggio = messaggio;
        this.key = key;
    }
    return Candidatura;
}());

//# sourceMappingURL=candidatura.js.map

/***/ })

},[303]);
//# sourceMappingURL=main.js.map