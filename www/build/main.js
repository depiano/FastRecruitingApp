webpackJsonp([1],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfiloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modificaprofilo_modificaprofilo__ = __webpack_require__(258);
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
        this.fullname = sessionStorage.getItem('SessionFullname');
        this.email = sessionStorage.getItem('SessionEmail');
        this.telefono = sessionStorage.getItem('SessionTelefono');
    }
    ProfiloPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__modificaprofilo_modificaprofilo__["a" /* ModificaprofiloPage */]);
    };
    ProfiloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/pages/profilo/profilo.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profilo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="speaker-detail">\n  <div text-center>\n    <img src="assets/imgs/profilo.png" alt="Immagine profilo"><br>\n\n    <ion-label>{{fullname}}</ion-label>\n    <ion-label>{{email}}</ion-label>\n    <ion-label>{{telefono}}</ion-label>\n\n    <ion-buttons>\n      <button ion-button (click)="onSignup()" small>Modifica</button>\n    </ion-buttons>\n\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/pages/profilo/profilo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ProfiloPage);
    return ProfiloPage;
}());

//# sourceMappingURL=profilo.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(310);
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

/***/ 156:
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/pages/visualizzaofferta/visualizzaofferta.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Offerta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="about-header">\n    <img src="assets/imgs/int.png" alt="ionic logo">\n  </div>\n  <dettagliofferta [offertaselezionata]=offertaselezionata> </dettagliofferta>\n\n</ion-content>\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/pages/visualizzaofferta/visualizzaofferta.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], VisualizzaoffertaPage);
    return VisualizzaoffertaPage;
}());

//# sourceMappingURL=visualizzaofferta.js.map

/***/ }),

/***/ 173:
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
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/my-files/my-files.module": [
		528,
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
webpackAsyncContext.id = 215;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaprofiloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilo_profilo__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_md5_typescript_Md5__ = __webpack_require__(155);
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
    function ModificaprofiloPage(db, alertCtrl, navCtrl) {
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.flag = 0;
        this.key = sessionStorage.getItem('SessionKey');
        this.email = sessionStorage.getItem('SessionEmail');
        this.fullname = sessionStorage.getItem('SessionFullname');
        this.telefono = sessionStorage.getItem('SessionTelefono');
        this.type = sessionStorage.getItem('SessionType');
        this.candidato = { fullname: '' + this.fullname, email: '' + this.email,
            telefono: '' + this.telefono, password: '' };
        /*
        modifica qui in base alla sessione xk nn sai se è un tecnico o un candidato.
         */
        if (this.type === 'Tecnico') {
            this.database = this.db.list('/account/tecnico/');
        }
        else {
            this.database = this.db.list('/account/candidati/');
        }
    }
    ModificaprofiloPage.prototype.onAnnulla = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profilo_profilo__["a" /* ProfiloPage */]);
    };
    ModificaprofiloPage.prototype.onSignup = function (confpassword) {
        this.confpassword = confpassword;
        if (this.candidato.telefono.length < 1) {
            console.log('Telefono non valido');
            return;
        }
        this.database.update(this.key, { telefono: this.candidato.telefono });
        if (this.candidato.password.length === 0 && this.confpassword.length === 0) {
            console.log('Error: Password e Conferma password nulle!');
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
        if (this.candidato.password.length !== 0 && this.confpassword.length !== 0) {
            if (this.candidato.password === this.confpassword) {
                this.database.update(this.key, { password: __WEBPACK_IMPORTED_MODULE_5__node_modules_md5_typescript_Md5__["a" /* Md5 */].init(this.candidato.password) });
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
            else {
                console.log('Impossibile aggiornare la password xk non uguali.');
            }
        }
        else {
            console.log('Impossibile aggiornare la password.');
        }
    };
    ModificaprofiloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/pages/modificaprofilo/modificaprofilo.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Modifica profilo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding class="speaker-detail">\n  <div text-center>\n    <img src="assets/imgs/profilo.png" alt="Immagine profilo"><br>\n\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" name="fullname" [(ngModel)]="candidato.fullname" placeholder="Fullname" disabled #fullname></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="candidato.email" placeholder="Email" name="email" disabled #email></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="candidato.telefono" placeholder="Telefono" name="telefono" #telefono></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-input type="password" [(ngModel)]="candidato.password" placeholder="Password" name="password" #password></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" ng-model=\'confpassword\' placeholder="Conferma password" name="confpassword" #confpassword id="confpassword"></ion-input>\n      </ion-item>\n\n\n    </ion-list>\n\n      <div padding>\n        <ion-row responsive-sm>\n          <ion-col>\n            <button ion-button (click)="onSignup(confpassword.value)" type="submit" block>Conferma</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button (click)="onAnnulla()" block>Annulla</button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/pages/modificaprofilo/modificaprofilo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ModificaprofiloPage);
    return ModificaprofiloPage;
}());

//# sourceMappingURL=modificaprofilo.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_md5_typescript_Md5__ = __webpack_require__(155);
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
        this.candidato = { fullname: '', email: '', telefono: '', password: '' };
        this.confermaPassword = '';
        this.flag = false;
        this.memorizzato = false;
        this.database = this.db.list('/account/candidati');
    }
    SignupPage.prototype.onControlData = function () {
        var _this = this;
        this.flag = false;
        if (this.candidato.password === '' || this.candidato.email === '' || this.candidato.password === '' ||
            this.candidato.telefono === '' || this.confermaPassword === '') {
            var campivuoti = this.alertCtrl.create({
                title: 'Campi vuoti',
                subTitle: 'Riempire tutti i campi',
                buttons: ['OK']
            });
            campivuoti.present();
        }
        else {
            this.database.valueChanges().forEach(function (el) {
                el.forEach(function (element) {
                    if (element.email === _this.candidato.email) {
                        _this.flag = true;
                        var emailEsistente = _this.alertCtrl.create({
                            title: 'Utente esistente',
                            subTitle: 'Email già esistente,  inserire una nuova email ',
                            buttons: ['OK']
                        });
                        if (_this.memorizzato === false) {
                            emailEsistente.present();
                        }
                    }
                });
                console.log(_this.flag);
                if (_this.flag === false) {
                    _this.onSignup(_this.confermaPassword);
                }
            });
        }
    };
    SignupPage.prototype.onSignup = function (repeatpassword) {
        var md5password = __WEBPACK_IMPORTED_MODULE_5__node_modules_md5_typescript_Md5__["a" /* Md5 */].init(this.candidato.password);
        var md5repeatpassword = __WEBPACK_IMPORTED_MODULE_5__node_modules_md5_typescript_Md5__["a" /* Md5 */].init(repeatpassword);
        if (md5password !== md5repeatpassword) {
            var passDiverse = this.alertCtrl.create({
                title: 'Password Diverse',
                subTitle: 'Le due password inserite non corrispondono ',
                buttons: ['OK']
            });
            passDiverse.present();
        }
        else {
            var saveData = {
                fullname: this.candidato.fullname,
                email: this.candidato.email, telefono: this.candidato.telefono, password: md5password
            };
            console.log(saveData);
            this.database.push(saveData);
            console.log('Utente salvato');
            this.memorizzato = true;
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
    };
    SignupPage.prototype.onAnnulla = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Registrazione</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="login-page">\n\n\n\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" name="fullname" [(ngModel)]="candidato.fullname" placeholder="Fullname" required></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="candidato.email" placeholder="Email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="candidato.telefono" placeholder="Telefono"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-input type="password" [(ngModel)]="candidato.password" placeholder="Password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" [(ngModel)]="confermaPassword" placeholder="Conferma password"></ion-input>\n      </ion-item>\n\n\n    </ion-list>\n\n    <div padding>\n      <ion-row responsive-sm>\n        <ion-col>\n          <button ion-button (click)="onAnnulla()" color="danger" block>Annulla</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button (click)="onControlData()" color="secondary"  block>Conferma</button>\n        </ion-col>\n\n      </ion-row>\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__app_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 312:
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/pages/visualizzacandidature/visualizzacandidature.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Candidature</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <candidaturadaanalizzare></candidaturadaanalizzare>\n  <candidaturaidonea> </candidaturaidonea>\n  <candidaturanonidonea> </candidaturanonidonea>\n  <candidaturadaverificare> </candidaturadaverificare>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/pages/visualizzacandidature/visualizzacandidature.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], VisualizzacandidaturePage);
    return VisualizzacandidaturePage;
}());

//# sourceMappingURL=visualizzacandidature.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(66);
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/pages/tutorial/tutorial.html"*/'\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/imgs/logoApp.png" class="slide-image"/>\n      <h2 class="slide-title">\n        Benvenuti in <b>Fast Recruiting</b>\n      </h2>\n      <p>\n        L\'app per essere continuamente aggiornati sulle offerte di lavoro della <b>NexSoft S.p.a.</b>\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/imgs/nexsoft1.png" class="slide-image"/>\n      <p>La storia della <b>Nexsoft S.p.A.</b> inizia nel Luglio 2004. Fin dalla nascita, l\'obiettivo della creazione dell\'azienda è stato quello di perseguire una logica particolarmente mirata ad alcuni settori di mercato e finalizzata alla capitalizzazione di attività d\'investimento nella ricerca applicata. Attualmente il core business della società è costituito dai servizi informatici ad ampio raggio e, in particolare, dalla consulenza a clienti nel settore dell’ITC. L’elevato e vasto know-how acquisito dalla NEXSOFT in tale settore nei campi della consulenza, dell’outsourcing, del “solution management” e della fornitura di applicazioni, infrastrutture e servizi, permette di offrire le soluzioni più innovative, rispondendo sempre in maniera immediata alle esigenze dei propri Clienti, sia nel settore pubblico che in quello privato.</p>\n    </ion-slide>\n\n\n\n    <ion-slide>\n      <img src="assets/imgs/corporate.png" class="slide-image"/>\n      <h2 class="slide-title">Sei pronto ad iniziare?</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        Continua\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 314:
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/pages/candidaturaofferta/candidaturaofferta.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Candidatura offerta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<inviocandidatura> </inviocandidatura>\n</ion-content>\n\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/pages/candidaturaofferta/candidaturaofferta.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CandidaturaoffertaPage);
    return CandidaturaoffertaPage;
}());

//# sourceMappingURL=candidaturaofferta.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizzacandidatoPage; });
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


var VisualizzacandidatoPage = (function () {
    function VisualizzacandidatoPage(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.candidaturaselezionata = navParams.get("candidaturaselezionata");
        console.log('siamo nella pagina', this.candidaturaselezionata);
    }
    VisualizzacandidatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/pages/visualizzacandidato/visualizzacandidato.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Candidato</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="speaker-detail">\n\n\n    <dettagliocandidato [candidaturaselezionata]=candidaturaselezionata> </dettagliocandidato>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/pages/visualizzacandidato/visualizzacandidato.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], VisualizzacandidatoPage);
    return VisualizzacandidatoPage;
}());

//# sourceMappingURL=visualizzacandidato.js.map

/***/ }),

/***/ 316:
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
            selector: 'page-map',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/pages/mappa/mappa.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mappa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="map-page">\n  <div id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/pages/mappa/mappa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MappaPage);
    return MappaPage;
}());

//# sourceMappingURL=mappa.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizzaoffertatecnicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_skill__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_offerta__ = __webpack_require__(69);
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





var VisualizzaoffertatecnicoPage = (function () {
    function VisualizzaoffertatecnicoPage(db, navCtrl, navParams) {
        var _this = this;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.i = 0;
        this.skill = { nome: '' };
        this.listSkill = [];
        this.listofferta = [];
        this.chiave = this.navParams.get('idOfferta');
        this.offertaselezionata = new __WEBPACK_IMPORTED_MODULE_4__app_offerta__["a" /* Offerta */]('', '', '', '', '', '');
        this.database = this.db.list('offertedilavoro/' + this.chiave + '/skill/');
        this.database.valueChanges().forEach(function (el) {
            el.forEach(function (element) {
                _this.skill = new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */](element);
                _this.listSkill.push(_this.skill);
                console.log(_this.listSkill);
            });
        });
        this.db.list('/offertedilavoro/').snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                if (it.key === _this.chiave) {
                    _this.offertaselezionata = new __WEBPACK_IMPORTED_MODULE_4__app_offerta__["a" /* Offerta */](it.titolo, it.luogodilavoro, it.skill, it.annuncio, it.titolodistudio, it.key);
                    console.log('ciaooooo ', _this.offertaselezionata);
                }
            });
        });
    }
    VisualizzaoffertatecnicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/pages/visualizzaoffertatecnico/visualizzaoffertatecnico.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Offerta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="offertaselezionata">\n    <div >\n      <h1>{{offertaselezionata.titolo}}</h1>\n      <br>\n      <p>\n        {{offertaselezionata.annuncio}}\n      </p>\n      <h6>\n        Competenze richieste:\n      </h6>\n      <p *ngFor=" let skill of listSkill">\n        {{skill.nome}}\n      </p>\n      <h6>\n        Titolo di studio:\n      </h6>\n      <p>\n        {{offertaselezionata.titolodistudio}}\n      </p>\n      <h6>\n        Luogo di lavoro:\n      </h6>\n      <p>\n        {{offertaselezionata.luogodilavoro}}\n      </p>\n\n\n\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/pages/visualizzaoffertatecnico/visualizzaoffertatecnico.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], VisualizzaoffertatecnicoPage);
    return VisualizzaoffertatecnicoPage;
}());

//# sourceMappingURL=visualizzaoffertatecnico.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(348);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_homecandidato_homecandidato__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_visualizzaofferta_visualizzaofferta__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_candidaturaofferta_candidaturaofferta__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_visualizzacolloquio_visualizzacolloquio__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_hometecnico_hometecnico__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profilo_profilo__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modificaprofilo_modificaprofilo__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_visualizzacandidature_visualizzacandidature__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_tutorial__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_visualizzacandidato_visualizzacandidato__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mappa_mappa__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_visualizzaoffertatecnico_visualizzaoffertatecnico__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_inviocandidatura_inviocandidatura__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__auth_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_candidaturaidonea_candidaturaidonea__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_offerta_offerta__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_candidato_candidato__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_dettagliofferta_dettagliofferta__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_dettagliocandidato_dettagliocandidato__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_colloquio_colloquio__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_candidaturanonidonea_candidaturanonidonea__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_candidaturadaverificare_candidaturadaverificare__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_data_data__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_camera__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_candidaturadaanalizzare_candidaturadaanalizzare__ = __webpack_require__(527);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var firebaseConfig = {
    /*

           apiKey: "AIzaSyDr-dQ8Rp8dAtxhSJc7GDdGU1Joo_MKTZ4",
           authDomain: "fastrecruiting-c6284.firebaseapp.com",
           databaseURL: "https://fastrecruiting-c6284.firebaseio.com",
           projectId: "fastrecruiting-c6284",
           storageBucket: "fastrecruiting-c6284.appspot.com",
           messagSende: "576205137004"
     /*   /*




       Vincenzo
           */ /**/
    apiKey: "AIzaSyChpAAH_WYI7V0MtKp3ftq73hSOHRu3qvA",
    authDomain: "esempio-51c44.firebaseapp.com",
    databaseURL: "https://esempio-51c44.firebaseio.com",
    projectId: "esempio-51c44",
    storageBucket: "esempio-51c44.appspot.com",
    messagingSenderId: "607459468007"
    /*
    Antonio

    apiKey: 'AIzaSyBgcJbiUdjWzlyZPKwNbyT6cbBTDCiV1b0',
    authDomain: 'fastrecruiter-69397.firebaseapp.com',
    databaseURL: 'https://fastrecruiter-69397.firebaseio.com',
    projectId: 'fastrecruiter-69397',
    storageBucket: 'fastrecruiter-69397.appspot.com',
    messagingSenderId: '833801141202'
    */
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
                __WEBPACK_IMPORTED_MODULE_31__components_colloquio_colloquio__["a" /* ColloquioComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_candidaturadaanalizzare_candidaturadaanalizzare__["a" /* CandidaturadaanalizzareComponent */]
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
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_34__providers_data_data__["a" /* DataProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Candidatura; });
var Candidatura = (function () {
    function Candidatura(fullnameCandidato, cv, data_colloquio, google_maps, id_candidato, id_offerta, id_tecnico, lett_presentazione, luogo_colloquio, note, note_recruiter, note_tecnico, orario_colloquio, skill, titoloOfferta, titolodistudio, data, giudizio, chiave) {
        this.fullnameCandidato = fullnameCandidato;
        this.cv = cv;
        this.data_colloquio = data_colloquio;
        this.google_maps = google_maps;
        this.id_candidato = id_candidato;
        this.id_offerta = id_offerta;
        this.id_tecnico = id_tecnico;
        this.lett_presentazione = lett_presentazione;
        this.luogo_colloquio = luogo_colloquio;
        this.note = note;
        this.note_recruiter = note_recruiter;
        this.note_tecnico = note_tecnico;
        this.orario_colloquio = orario_colloquio;
        this.skill = skill;
        this.titoloOfferta = titoloOfferta;
        this.titolodistudio = titolodistudio;
        this.data = data;
        this.giudizio = giudizio;
        this.chiave = chiave;
    }
    return Candidatura;
}());

//# sourceMappingURL=candidatura.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_homecandidato_homecandidato__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_hometecnico_hometecnico__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profilo_profilo__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_visualizzacandidature_visualizzacandidature__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__ = __webpack_require__(313);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */];
        this.initializeApp();
        this.fullname = sessionStorage.getItem('SessionFullname');
        this.email = sessionStorage.getItem('SessionEmail');
        this.telefono = sessionStorage.getItem('SessionTelefono');
        // used for an example of ngFor and navigation
        this.pagesCandidato = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_homecandidato_homecandidato__["a" /* HomecandidatoPage */], icon: 'home' },
            { title: 'Profilo', component: __WEBPACK_IMPORTED_MODULE_6__pages_profilo_profilo__["a" /* ProfiloPage */], icon: 'person' },
            { title: 'Candidature', component: __WEBPACK_IMPORTED_MODULE_8__pages_visualizzacandidature_visualizzacandidature__["a" /* VisualizzacandidaturePage */], icon: 'briefcase' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], icon: 'play' }
        ];
        this.pagesTecnico = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_hometecnico_hometecnico__["a" /* HometecnicoPage */], icon: 'home' },
            { title: 'Profilo', component: __WEBPACK_IMPORTED_MODULE_6__pages_profilo_profilo__["a" /* ProfiloPage */], icon: 'person' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], icon: 'play' }
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
        this.fullname = sessionStorage.getItem('SessionFullname');
        this.email = sessionStorage.getItem('SessionEmail');
        this.telefono = sessionStorage.getItem('SessionTelefono');
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/app/app.html"*/'<ion-menu [content]="content" id="candidato">\n\n  <ion-header>\n    <ion-avatar item-start>\n      <div class="logo">\n        <img src="assets/imgs/logoApp.png">\n        <h4>{{fullname}}</h4>\n        <h6>{{email}}</h6>\n\n\n      </div>\n    </ion-avatar>\n\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pagesCandidato" (click)="openPage(p)">\n        <ion-icon item-start [name]="p.icon" ></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu [content]="content" id="tecnico">\n\n  <ion-header>\n    <ion-avatar item-start>\n      <div class="logo">\n        <img src="assets/imgs/logoApp.png">\n        <h4>{{fullname}}</h4>\n        <h6>{{email}}</h6>\n\n\n      </div>\n    </ion-avatar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pagesTecnico" (click)="openPage(p)">\n        <ion-icon item-start [name]="p.icon" ></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviocandidaturaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_visualizzaofferta_visualizzaofferta__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_homecandidato_homecandidato__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_offerta__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_candidatura__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_skill__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
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
    function InviocandidaturaComponent(camera, db, alertCtrl, navCtrl, navParams) {
        var _this = this;
        this.camera = camera;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.skill = { nome: '' };
        this.listSkill = [];
        this.today = Date.now();
        this.count = 1;
        this.candidatura = new __WEBPACK_IMPORTED_MODULE_6__app_candidatura__["a" /* Candidatura */]('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
        this.chiave = sessionStorage.getItem('SessionOffertaKey');
        this.database = this.db.list('offertedilavoro/' + this.chiave + '/skill/');
        this.database.valueChanges().forEach(function (el) {
            el.forEach(function (element) {
                _this.skill = new __WEBPACK_IMPORTED_MODULE_7__app_skill__["a" /* Skill */](element);
                _this.listSkill.push(_this.skill);
            });
        });
    }
    InviocandidaturaComponent.prototype.onTapAnnulla = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_visualizzaofferta_visualizzaofferta__["a" /* VisualizzaoffertaPage */]);
    };
    InviocandidaturaComponent.prototype.onTapCandidati = function () {
        this.candidatura.id_candidato = sessionStorage.getItem('SessionKey');
        this.candidatura.fullnameCandidato = sessionStorage.getItem('SessionFullname');
        this.candidatura.titoloOfferta = sessionStorage.getItem('SessionOffertaTitolo');
        this.candidatura.id_offerta = sessionStorage.getItem('SessionOffertaKey');
        this.dt = new Date();
        this.day = this.dt.getDate();
        this.month = this.dt.getMonth() + 1;
        this.year = this.dt.getFullYear();
        this.data = this.day + '/' + this.month + '/' + this.year;
        this.candidatura.data = this.data;
        console.log(this.image, ' oggetto candidatura: ', this.candidatura);
        var alert = this.alertCtrl.create({
            title: 'Candidatura effettuata',
            subTitle: 'La tua richiesta di candidaturaidonea è stata inviata con successo!',
            buttons: ['OK']
        });
        alert.present();
        this.itemsRef = this.db.list('/candidature/candidature_da_analizzare');
        this.candidatura.chiave = this.itemsRef.push(this.candidatura).key;
        this.database = this.db.list('candidature/candidature_da_analizzare/');
        this.database.update(this.candidatura.chiave, { chiave: this.candidatura.chiave });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_homecandidato_homecandidato__["a" /* HomecandidatoPage */]);
    };
    InviocandidaturaComponent.prototype.getPicture = function (sourceType) {
        var _this = this;
        var cameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: sourceType
        };
        this.camera.getPicture(cameraOptions)
            .then(function (captureDataUrl) {
            _this.captureDataUrl = 'data:image/jpeg;base64,' + captureDataUrl;
            console.log('captureDataUrl cosa è ? ', captureDataUrl);
        }, function (err) {
            console.log(err);
        });
    };
    InviocandidaturaComponent.prototype.calcola = function () {
        var _this = this;
        var storageRef1 = __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.storage().ref().child('/images/' + this.filename + '.jpg');
        storageRef1.getDownloadURL().then(function (url) {
            _this.image = url;
            console.log(_this.image);
            _this.candidatura.cv = _this.image;
            var alert = _this.alertCtrl.create({
                title: 'Caricato!',
                subTitle: 'CV',
                buttons: ['OK']
            });
            alert.present();
        });
        this.caricato = "";
    };
    InviocandidaturaComponent.prototype.upload = function () {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.storage().ref();
        // Create a timestamp as filename
        this.filename = Math.floor(Date.now() / 1000);
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child('images/' + this.filename + '.jpg');
        imageRef.putString(this.captureDataUrl, __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.storage.StringFormat.DATA_URL)
            .then(function (snapshot) {
            // Do something here when the data is succesfully uploaded!
            _this.showSuccesfulUploadAlert();
        });
        this.caricato = "caricato";
    };
    InviocandidaturaComponent.prototype.showSuccesfulUploadAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Uploaded!',
            subTitle: 'Picture is uploaded to Firebase',
            buttons: ['OK']
        });
        alert.present();
        // clear the previous photo data in the variable
        this.captureDataUrl = "";
        this.captureDataUrl1 = "";
    };
    InviocandidaturaComponent.prototype.getPicture1 = function (sourceType) {
        var _this = this;
        var cameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: sourceType
        };
        this.camera.getPicture(cameraOptions)
            .then(function (captureDataUrl1) {
            _this.captureDataUrl1 = 'data:image/jpeg;base64,' + captureDataUrl1;
            console.log('captureDataUrl cosa è ? ', captureDataUrl1);
        }, function (err) {
            console.log(err);
        });
    };
    InviocandidaturaComponent.prototype.calcola1 = function () {
        var _this = this;
        var storageRef2 = __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.storage().ref().child('/images/' + this.filename1 + '.jpg');
        storageRef2.getDownloadURL().then(function (url) {
            _this.image1 = url;
            console.log(_this.image1);
            _this.candidatura.lett_presentazione = _this.image1;
            var alert = _this.alertCtrl.create({
                title: 'Caricata!',
                subTitle: 'Lettera di presentazione',
                buttons: ['OK']
            });
            alert.present();
        });
        this.caricato1 = "";
    };
    InviocandidaturaComponent.prototype.upload1 = function () {
        var _this = this;
        var storageRef2 = __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.storage().ref();
        // Create a timestamp as filename
        this.filename1 = Math.floor(Date.now() / 1000);
        // Create a reference to 'images/todays-date.jpg'
        var imageRef1 = storageRef2.child('images/' + this.filename1 + '.jpg');
        imageRef1.putString(this.captureDataUrl1, __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.storage.StringFormat.DATA_URL)
            .then(function (snapshot) {
            // Do something here when the data is succesfully uploaded!
            _this.showSuccesfulUploadAlert();
        });
        this.caricato1 = "caricato";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__app_offerta__["a" /* Offerta */])
    ], InviocandidaturaComponent.prototype, "offertaselezionata", void 0);
    InviocandidaturaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'inviocandidatura',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/components/inviocandidatura/inviocandidatura.html"*/'<div>\n  <h6>\n    Titolo di studio:\n  </h6>\n  <ion-item>\n    <ion-input type="text" name="titolo" [(ngModel)]="candidatura.titolodistudio" placeholder="Titolo di studio"></ion-input>\n  </ion-item>\n  <h6>\n    Skill possedute:\n  </h6>\n  <ion-list>\n    <ion-item>\n      <ion-label>Skill possedute</ion-label>\n      <ion-select [(ngModel)]="candidatura.skill" multiple="true" okText="Fatto">\n        <ion-option *ngFor="let skill of listSkill" >{{skill.nome}}</ion-option>\n\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <h6>\n    Note:\n  </h6>\n    <ion-card>\n    <ion-textarea type="text" name="note" rows="10" [(ngModel)]="candidatura.note_candidato" placeholder="Inserisci note"></ion-textarea>\n    </ion-card>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button icon-right round block (click)="getPicture(0)">CV<ion-icon name="document"></ion-icon></button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-right round block (click)="getPicture1(0)">Lettera<ion-icon name="mail"></ion-icon></button>\n    </ion-col>\n  </ion-row>\n\n  <ion-card>\n    <img [src]="captureDataUrl" *ngIf="caricato"/>\n    <button ion-button (click)="upload()" *ngIf="captureDataUrl">Conferma</button>\n    <button ion-button (click)="calcola()" *ngIf="caricato">Carica</button>\n  </ion-card>\n\n  <ion-card>\n    <img [src]="captureDataUrl1" *ngIf="caricato1"/>\n    <button ion-button (click)="upload1()" *ngIf="captureDataUrl1">Conferma</button>\n    <button ion-button (click)="calcola1()" *ngIf="caricato1">Carica</button>\n  </ion-card>\n\n  <div padding>\n    <ion-row>\n      <ion-col>\n        <button ion-button (click)="onAnnulla()" color="danger" block>Annulla</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button (click)="onTapCandidati()" color="secondary" block>Candidati</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/components/inviocandidatura/inviocandidatura.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], InviocandidaturaComponent);
    return InviocandidaturaComponent;
}());

//# sourceMappingURL=inviocandidatura.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidaturaidoneaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_visualizzacolloquio_visualizzacolloquio__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_candidatura__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(15);
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
        this.keyUtente = sessionStorage.getItem('SessionKey');
        this.db.list('/candidature/candidature_idonee', function (ref) { return ref.orderByChild('id_candidato').equalTo(_this.keyUtente); }).snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                _this.candidatura = new __WEBPACK_IMPORTED_MODULE_3__app_candidatura__["a" /* Candidatura */](it.fullnameCandidato, it.cv, it.data_colloquio, it.google_maps, it.id_candidato, it.id_offerta, it.id_tecnico, it.lett_presentazione, it.luogo_colloquio, it.note, it.note_recruiter, it.note_tecnico, it.orario_colloquio, it.skill, it.titoloOfferta, it.titolodistudio, it.data, it.giudizio, it.key);
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
            selector: 'candidaturaidonea',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/components/candidaturaidonea/candidaturaidonea.html"*/'\n    <ion-item *ngFor="let candidatura of candidaturalist" (click)="selezione(candidatura,candidatura.$key)">\n      <ion-avatar item-start>\n        <img src="assets/imgs/jobverde.png">\n      </ion-avatar>\n      <h3>{{candidatura.titoloOfferta}}</h3>\n      <h5> Candidatura idonea</h5>\n      <p>Visualizza colloquio</p>\n    </ion-item>\n\n\n\n\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/components/candidaturaidonea/candidaturaidonea.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], CandidaturaidoneaComponent);
    return CandidaturaidoneaComponent;
}());

//# sourceMappingURL=candidaturaidonea.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffertaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_offerta__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_visualizzaofferta_visualizzaofferta__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(15);
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
        this.fullname = sessionStorage.getItem('SessionKey');
        this.db.list('/offertedilavoro/').snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                _this.ob = new __WEBPACK_IMPORTED_MODULE_1__app_offerta__["a" /* Offerta */](it.titolo, it.luogodilavoro, it.skill, it.annuncio, it.titolodistudio, it.key);
                _this.jobsofferlist.push(_this.ob);
            });
        });
    }
    OffertaComponent.prototype.selezione = function (o, chiave, titolo) {
        sessionStorage.setItem('SessionOffertaKey', '' + o.key);
        sessionStorage.setItem('SessionOffertaTitolo', '' + o.titolo);
        this.offertaselezionata = o;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_visualizzaofferta_visualizzaofferta__["a" /* VisualizzaoffertaPage */], { offertaselezionata: this.offertaselezionata });
    };
    OffertaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'offerta',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/components/offerta/offerta.html"*/'\n    <ion-list>\n        <ion-item-sliding *ngFor="let offerta of jobsofferlist" (click)="selezione(offerta, offerta.$key, offerta.titolo)">\n                 <ion-item>\n                     <ion-avatar item-start>\n                         <img src="assets/imgs/job.png">\n                     </ion-avatar>\n                     <h1>{{offerta.$key}}</h1>\n                     <h2> {{ offerta.titolo }}</h2>\n\n                  </ion-item>\n\n        </ion-item-sliding>\n    </ion-list>'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/components/offerta/offerta.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], OffertaComponent);
    return OffertaComponent;
}());

//# sourceMappingURL=offerta.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_visualizzacandidato_visualizzacandidato__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_candidatura__ = __webpack_require__(37);
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
    function CandidatoComponent(db, navCtrl, navParams) {
        var _this = this;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.candidatilist = [];
        this.chiave = sessionStorage.getItem('SessionKey');
        console.log(this.chiave);
        this.db.list('/candidature/candidature_da_verificare/', function (ref) { return ref.orderByChild('id_tecnico').equalTo(_this.chiave); }).snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                if (it.giudizio === '') {
                    _this.candidatura = new __WEBPACK_IMPORTED_MODULE_4__app_candidatura__["a" /* Candidatura */](it.fullnameCandidato, it.cv, it.data_colloquio, it.google_maps, it.id_candidato, it.id_offerta, it.id_tecnico, it.lett_presentazione, it.luogo_colloquio, it.note, it.note_recruiter, it.note_tecnico, it.orario_colloquio, it.skill, it.titoloOfferta, it.titolodistudio, it.data, it.giudizio, it.key);
                    _this.candidatilist.push(_this.candidatura);
                    console.log(_this.candidatura);
                }
            });
        });
    }
    CandidatoComponent.prototype.selezione = function (candidatura) {
        this.candidaturaselezionata = candidatura;
        console.log('chiave: ', candidatura.chiave);
        this.chiaveCandidatura = candidatura.chiave;
        sessionStorage.setItem('SessionCandidaturaKey', this.chiaveCandidatura);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_visualizzacandidato_visualizzacandidato__["a" /* VisualizzacandidatoPage */], { candidaturaselezionata: this.candidaturaselezionata });
    };
    CandidatoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'candidato',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/components/candidato/candidato.html"*/'\n  <ion-list>\n    <ion-item-sliding *ngFor="let candidatura of candidatilist" (click)="selezione(candidatura, candidatura.$key)">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/profilo.png">\n        </ion-avatar>\n        <h2> {{ candidatura.titoloOfferta }}</h2>\n        <h3>{{candidatura.fullnameCandidato}}</h3>\n\n      </ion-item>\n\n\n    </ion-item-sliding>\n  </ion-list>'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/components/candidato/candidato.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CandidatoComponent);
    return CandidatoComponent;
}());

//# sourceMappingURL=candidato.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettaglioffertaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_offerta__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_homecandidato_homecandidato__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_candidaturaofferta_candidaturaofferta__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_skill__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(15);
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
    function DettaglioffertaComponent(db, navCtrl, navParams) {
        var _this = this;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.i = 0;
        this.skill = { nome: '' };
        this.listSkill = [];
        this.chiave = sessionStorage.getItem('SessionOffertaKey');
        this.database = this.db.list('offertedilavoro/' + this.chiave + '/skill/');
        this.database.valueChanges().forEach(function (el) {
            el.forEach(function (element) {
                _this.skill = new __WEBPACK_IMPORTED_MODULE_5__app_skill__["a" /* Skill */](element);
                _this.listSkill.push(_this.skill);
            });
        });
    }
    DettaglioffertaComponent.prototype.onTapAnnulla = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_homecandidato_homecandidato__["a" /* HomecandidatoPage */]);
    };
    DettaglioffertaComponent.prototype.onTapCandidati = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_candidaturaofferta_candidaturaofferta__["a" /* CandidaturaoffertaPage */], { offertaselezionata: this.offertaselezionata });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_offerta__["a" /* Offerta */])
    ], DettaglioffertaComponent.prototype, "offertaselezionata", void 0);
    DettaglioffertaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'dettagliofferta',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/components/dettagliofferta/dettagliofferta.html"*/'<div *ngIf="offertaselezionata" style="margin-top:5%;">\n    <div >\n        <h1>{{offertaselezionata.titolo}}</h1>\n        <p>\n            {{offertaselezionata.annuncio}}\n        </p>\n        <h6>\n            Competenze richieste:\n        </h6>\n        <p *ngFor=" let skill of listSkill">\n            {{skill.nome}}\n        </p>\n        <h6>\n            Titolo di studio:\n        </h6>\n        <p>\n            {{offertaselezionata.titolodistudio}}\n        </p>\n        <h6>\n            Luogo di lavoro:\n        </h6>\n        <p>\n            {{offertaselezionata.luogodilavoro}}\n        </p>\n\n        <div padding>\n            <ion-row responsive-sm>\n                <ion-col>\n                    <button ion-button (click)="onAnnulla()" color="danger" block>Annulla</button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button (click)="onTapCandidati()" color="secondary"  block>Candidati</button>\n                </ion-col>\n\n            </ion-row>\n        </div>\n\n\n\n\n\n    </div>\n</div>'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/components/dettagliofferta/dettagliofferta.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */]])
    ], DettaglioffertaComponent);
    return DettaglioffertaComponent;
}());

//# sourceMappingURL=dettagliofferta.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettagliocandidatoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_candidatura__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_skill__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_visualizzaoffertatecnico_visualizzaoffertatecnico__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_hometecnico_hometecnico__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(44);
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
    function DettagliocandidatoComponent(alertCtrl, db, navCtrl, navParams, f) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.f = f;
        this.id_offerta = '';
        this.skill = { nome: '' };
        this.listSkill = [];
        this.noteTecnico = '';
        this.giudizio = '';
        this.fff = f;
        this.chiaveCandidatura = sessionStorage.getItem('SessionCandidaturaKey');
        console.log('caaaaaaaaaaaaaazzzzzzzzzzzzz', this.chiaveCandidatura);
        console.log(this.c);
        this.database = this.db.list('candidature/candidature_da_verificare/' + this.chiaveCandidatura + '/skill/');
        this.database.valueChanges().forEach(function (el) {
            el.forEach(function (element) {
                _this.skill = new __WEBPACK_IMPORTED_MODULE_4__app_skill__["a" /* Skill */](element);
                _this.listSkill.push(_this.skill);
                console.log(_this.listSkill);
            });
        });
        this.searchOfferta();
    }
    DettagliocandidatoComponent.prototype.onVisualizzaOfferta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_visualizzaoffertatecnico_visualizzaoffertatecnico__["a" /* VisualizzaoffertatecnicoPage */], { idOfferta: this.id_offerta });
    };
    DettagliocandidatoComponent.prototype.searchOfferta = function () {
        var _this = this;
        this.ref = this.fff.database().ref('candidature/candidature_da_verificare/' + this.chiaveCandidatura);
        this.ref.once('value', function (snapshot) {
            snapshot.forEach(function (value) {
                if (value.key === 'id_offerta') {
                    _this.id_offerta = value.val();
                    console.log('ID OFFERTA ' + _this.id_offerta);
                }
            });
        });
    };
    DettagliocandidatoComponent.prototype.onInvia = function () {
        this.itemsRef = this.db.list('/candidature/candidature_da_verificare/');
        console.log('giudizio ' + this.giudizio);
        console.log('nota ' + this.noteTecnico);
        this.itemsRef.update(this.chiaveCandidatura, { giudizio: this.giudizio, note_tecnico: this.noteTecnico });
        var alert = this.alertCtrl.create({
            title: 'Giudizio inviato',
            subTitle: 'Il giudizio è stato inviato al Recruiter con successo!',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_hometecnico_hometecnico__["a" /* HometecnicoPage */]);
    };
    DettagliocandidatoComponent.prototype.onAnnulla = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_hometecnico_hometecnico__["a" /* HometecnicoPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_candidatura__["a" /* Candidatura */])
    ], DettagliocandidatoComponent.prototype, "candidaturaselezionata", void 0);
    DettagliocandidatoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'dettagliocandidato',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/components/dettagliocandidato/dettagliocandidato.html"*/'<!-- Generated template for the DettagliocandidatoComponent component -->\n<div *ngIf="candidaturaselezionata">\n\n\n\n\n        <h4 text-center>{{candidaturaselezionata.fullnameCandidato}}</h4>\n\n        <h6>\n          Skill possedute:\n        </h6>\n        <p *ngFor=" let skill of listSkill">\n          {{skill.nome}}\n        </p>\n\n  <button ion-button (click)="onVisualizzaOfferta()" block>Visualizza offerta</button>\n\n\n        <ion-row>\n\n          <ion-col>   <a target="_blank" href="{{candidaturaselezionata.cv}}"> <button ion-button icon-right round block>CV<ion-icon name="document"></ion-icon></button></a>\n          </ion-col>\n\n          <ion-col>\n              <a target="_blank" href="{{candidaturaselezionata.lett_presentazione}}"><button ion-button icon-right round block>Lettera<ion-icon name="mail"></ion-icon></button> </a>\n          </ion-col>\n\n        </ion-row>\n\n        <br>\n        <h4>\n          Note Recruiter:\n        </h4>\n        <p>\n          {{candidaturaselezionata.note_recruiter}}\n        </p>\n\n  </div>\n\n    <ion-list radio-group  [(ngModel)]="giudizio">\n      <ion-list-header>\n        Giudizio\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Idoneo</ion-label>\n        <ion-radio checked="true" value="idoneo"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Non idoneo</ion-label>\n        <ion-radio value="nonidoneo"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Da verificare</ion-label>\n        <ion-radio value="verificare" ></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <br>\n    <h4>\n      Note:\n    </h4>\n<ion-card>\n    <ion-textarea name="note" rows="10" [(ngModel)]="noteTecnico">\n    </ion-textarea>\n</ion-card>\n    <ion-row>\n\n      <ion-col>\n        <button ion-button (click)="onAnnulla()" color="danger" block>Annulla</button>\n      </ion-col>\n\n      <ion-col>\n        <button ion-button (click)="onInvia()" color="secondary" block>Invia</button>\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/components/dettagliocandidato/dettagliocandidato.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7_angularfire2__["b" /* FirebaseApp */]])
    ], DettagliocandidatoComponent);
    return DettagliocandidatoComponent;
}());

//# sourceMappingURL=dettagliocandidato.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColloquioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_candidatura__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_mappa_mappa__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_offerta__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_skill__ = __webpack_require__(68);
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
 * Generated class for the ColloquioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ColloquioComponent = (function () {
    function ColloquioComponent(navCtrl, navParams, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alert = true;
        this.skill = { nome: '' };
        this.list = [];
        this.alert = true;
        this.chiave = this.navParams.get('chiave');
        this.candidaturaselezionata = this.navParams.get('candidaturaselezionata');
        this.offertadilavoro = new __WEBPACK_IMPORTED_MODULE_5__app_offerta__["a" /* Offerta */]("", "", "", "", "", "");
        if (this.candidaturaselezionata.data_colloquio === '') {
            this.alert = false;
        }
        this.db.list('/offertedilavoro').snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                if (_this.candidaturaselezionata.id_offerta === it.key) {
                    console.log('stampo it - nel if: ', it);
                    _this.offertadilavoro.titolo = it.titolo;
                    _this.offertadilavoro.annuncio = it.annuncio;
                    _this.skill = new __WEBPACK_IMPORTED_MODULE_6__app_skill__["a" /* Skill */](it.skill);
                    _this.list.push(_this.skill);
                    _this.offertadilavoro.titolodistudio = it.titolodistudio;
                    _this.offertadilavoro.luogodilavoro = it.luogodilavoro;
                }
            });
        });
        console.log('alert: ', this.alert);
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
            selector: 'colloquio',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/components/colloquio/colloquio.html"*/'<!-- Generated template for the ColloquioComponent component -->\n<div *ngIf="candidaturaselezionata">\n  {{chiave}}\n\n    <ion-grid align="center">\n        <ion-row>\n            <ion-col>\n                <h6>{{offertadilavoro.titolo}} </h6>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <h6 *ngFor="let skill of list" >{{skill.nome}} </h6>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n            <ion-col>\n                <h6>{{offertadilavoro.annuncio}}</h6>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <h6>{{offertadilavoro.titolodistudio}}</h6>\n            </ion-col>\n        </ion-row>\n\n\n\n        <ion-row>\n            <ion-col>\n                <h6>{{offertadilavoro.luogodilavoro}}</h6>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-grid align="center" *ngIf="alert">\n\n        <ion-row>\n            <ion-col>\n                <h4>Informazioni sul colloquio</h4>\n            </ion-col>\n        </ion-row>\n\n\n\n        <ion-row>\n            <ion-col>\n                <h4>Data:</h4>\n                {{candidaturaselezionata.data_colloquio}}\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <h4>Orario:</h4>\n                {{candidaturaselezionata.orario_colloquio}}\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n            <ion-col>\n                <h4>Luogo colloquio:</h4>\n                <a target="_blank" href="{{candidaturaselezionata.google_maps}}"> {{candidaturaselezionata.luogo_colloquio}}</a>\n            </ion-col>\n        </ion-row>\n\n\n    </ion-grid>\n</div>\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/components/colloquio/colloquio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ColloquioComponent);
    return ColloquioComponent;
}());

//# sourceMappingURL=colloquio.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidaturanonidoneaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_candidatura__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_visualizzacolloquio_visualizzacolloquio__ = __webpack_require__(67);
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
        this.keyUtente = sessionStorage.getItem('SessionKey');
        this.db.list('/candidature/candidature_non_idonee', function (ref) { return ref.orderByChild('id_candidato').equalTo(_this.keyUtente); }).snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                _this.candidatura = new __WEBPACK_IMPORTED_MODULE_1__app_candidatura__["a" /* Candidatura */](it.fullnameCandidato, it.cv, it.data_colloquio, it.google_maps, it.id_candidato, it.id_offerta, it.id_tecnico, it.lett_presentazione, it.luogo_colloquio, it.note, it.note_recruiter, it.note_tecnico, it.orario_colloquio, it.skill, it.titoloOfferta, it.titolodistudio, it.data, it.giudizio, it.key);
                _this.candidaturalist.push(_this.candidatura);
            });
        });
    }
    CandidaturanonidoneaComponent.prototype.selezione = function (c, chiave) {
        this.candidaturaselezionata = c;
        this.chiave = chiave;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_visualizzacolloquio_visualizzacolloquio__["a" /* VisualizzacolloquioPage */], { candidaturaselezionata: this.candidaturaselezionata, chiave: this.chiave });
    };
    CandidaturanonidoneaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'candidaturanonidonea',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/components/candidaturanonidonea/candidaturanonidonea.html"*/'    <ion-item *ngFor="let candidatura of candidaturalist" (click)="selezione(candidatura,candidatura.$key)">\n      <ion-avatar item-start>\n        <img src="assets/imgs/jobrosso.png">\n      </ion-avatar>\n      <h3> {{ candidatura.titoloOfferta }}</h3>\n      <h5> Candidatura non idonea</h5>\n\n      <p></p>\n\n    </ion-item>\n\n\n\n\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/components/candidaturanonidonea/candidaturanonidonea.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], CandidaturanonidoneaComponent);
    return CandidaturanonidoneaComponent;
}());

//# sourceMappingURL=candidaturanonidonea.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidaturadaverificareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_candidatura__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_visualizzacolloquio_visualizzacolloquio__ = __webpack_require__(67);
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
        this.keyUtente = sessionStorage.getItem('SessionKey');
        this.db.list('/candidature/candidature_da_verificare', function (ref) { return ref.orderByChild('id_candidato').equalTo(_this.keyUtente); }).snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                _this.candidatura = new __WEBPACK_IMPORTED_MODULE_3__app_candidatura__["a" /* Candidatura */](it.fullnameCandidato, it.cv, it.data_colloquio, it.google_maps, it.id_candidato, it.id_offerta, it.id_tecnico, it.lett_presentazione, it.luogo_colloquio, it.note, it.note_recruiter, it.note_tecnico, it.orario_colloquio, it.skill, it.titoloOfferta, it.titolodistudio, it.data, it.giudizio, it.key);
                _this.candidaturalist.push(_this.candidatura);
            });
        });
    }
    CandidaturadaverificareComponent.prototype.selezione = function (c, chiave) {
        this.candidaturaselezionata = c;
        this.chiave = chiave;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_visualizzacolloquio_visualizzacolloquio__["a" /* VisualizzacolloquioPage */], { candidaturaselezionata: this.candidaturaselezionata, chiave: this.chiave });
    };
    CandidaturadaverificareComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'candidaturadaverificare',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/components/candidaturadaverificare/candidaturadaverificare.html"*/'    <ion-item *ngFor="let candidatura of candidaturalist" (click)="selezione(candidatura,candidatura.$key)">\n      <ion-avatar item-start>\n        <img src="assets/imgs/jobgiallo.png">\n      </ion-avatar>\n      <h3>{{candidatura.titoloOfferta}}</h3>\n      <h5>Candidatura in corso di valutazione</h5>\n      <p></p>\n\n    </ion-item>\n\n\n\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/components/candidaturadaverificare/candidaturadaverificare.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CandidaturadaverificareComponent);
    return CandidaturadaverificareComponent;
}());

//# sourceMappingURL=candidaturadaverificare.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(524);
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

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidaturadaanalizzareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_candidatura__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_visualizzacolloquio_visualizzacolloquio__ = __webpack_require__(67);
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
 * Generated class for the CandidaturadaanalizzareComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CandidaturadaanalizzareComponent = (function () {
    function CandidaturadaanalizzareComponent(db, navCtrl, navParams) {
        var _this = this;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.candidaturalist = [];
        this.keyUtente = sessionStorage.getItem('SessionKey');
        this.db.list('/candidature/candidature_da_analizzare', function (ref) { return ref.orderByChild('id_candidato').equalTo(_this.keyUtente); }).snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                _this.candidatura = new __WEBPACK_IMPORTED_MODULE_3__app_candidatura__["a" /* Candidatura */](it.fullnameCandidato, it.cv, it.data_colloquio, it.google_maps, it.id_candidato, it.id_offerta, it.id_tecnico, it.lett_presentazione, it.luogo_colloquio, it.note, it.note_recruiter, it.note_tecnico, it.orario_colloquio, it.skill, it.titoloOfferta, it.titolodistudio, it.data, it.giudizio, it.key);
                _this.candidaturalist.push(_this.candidatura);
            });
        });
    }
    CandidaturadaanalizzareComponent.prototype.selezione = function (c, chiave) {
        this.candidaturaselezionata = c;
        this.chiave = chiave;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_visualizzacolloquio_visualizzacolloquio__["a" /* VisualizzacolloquioPage */], { candidaturaselezionata: this.candidaturaselezionata, chiave: this.chiave });
    };
    CandidaturadaanalizzareComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'candidaturadaanalizzare',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/components/candidaturadaanalizzare/candidaturadaanalizzare.html"*/'<ion-item *ngFor="let candidatura of candidaturalist" (click)="selezione(candidatura,candidatura.$key)">\n  <ion-avatar item-start>\n    <img src="assets/imgs/job.png">\n  </ion-avatar>\n  <h3>{{candidatura.titoloOfferta}}</h3>\n  <h5>Candidatura in corso di valutazione</h5>\n  <p></p>\n\n</ion-item>\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/components/candidaturadaanalizzare/candidaturadaanalizzare.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CandidaturadaanalizzareComponent);
    return CandidaturadaanalizzareComponent;
}());

//# sourceMappingURL=candidaturadaanalizzare.js.map

/***/ }),

/***/ 61:
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
    function HomecandidatoPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        console.log(sessionStorage.getItem('SessionKey'));
        this.enabledAuthenticatedMenu();
    }
    HomecandidatoPage.prototype.ngOnInit = function () {
    };
    HomecandidatoPage.prototype.enabledAuthenticatedMenu = function () {
        this.menuCtrl.enable(true, 'candidato');
        this.menuCtrl.enable(false, 'tecnico');
    };
    HomecandidatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/pages/homecandidato/homecandidato.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n<offerta> </offerta>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/pages/homecandidato/homecandidato.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], HomecandidatoPage);
    return HomecandidatoPage;
}());

//# sourceMappingURL=homecandidato.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homecandidato_homecandidato__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_auth_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hometecnico_hometecnico__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_md5_typescript_Md5__ = __webpack_require__(155);
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








var LoginPage = (function () {
    function LoginPage(db, authService, navCtrl, alertCtrl) {
        this.db = db;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.candidato = { email: '', password: '' };
        sessionStorage.clear();
    }
    LoginPage.prototype.onLogin = function () {
        var _this = this;
        this.email = this.candidato.email;
        this.password = this.candidato.password;
        /*
        Qui il codice di antonio
         */
        this.flag = 0;
        console.log('Ora controllo i tecnici...');
        this.database = this.db.list('/account/tecnico/');
        var criptPassword = __WEBPACK_IMPORTED_MODULE_7__node_modules_md5_typescript_Md5__["a" /* Md5 */].init(this.password);
        console.log('Voglio effettuare l accesso con, email:', this.email, ' & password: ', criptPassword);
        this.db.list('/account/tecnico/').snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                if (it.email === _this.email && it.password === criptPassword) {
                    sessionStorage.clear();
                    _this.key = it.key;
                    _this.fullname = it.fullname;
                    _this.email = it.email;
                    _this.telefono = it.telefono;
                    localStorage.setItem('isLoggedin', 'true');
                    sessionStorage.setItem('SessionKey', '' + it.key);
                    sessionStorage.setItem('SessionEmail', '' + it.email);
                    sessionStorage.setItem('SessionFullname', '' + it.fullname);
                    sessionStorage.setItem('SessionTelefono', '' + it.telefono);
                    sessionStorage.setItem('SessionType', 'Tecnico');
                    console.log('la chiave è ', sessionStorage.getItem('SessionKey'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionEmail'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionFullname'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionTelefono'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionType'));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__hometecnico_hometecnico__["a" /* HometecnicoPage */]);
                }
            });
        });
        /*
        Controllo il candidato
         */
        console.log('Ora controllo i tecnici...');
        this.database = this.db.list('/account/cancidati/');
        console.log('Voglio effettuare l accesso con, email:', this.email, ' & password: ', criptPassword);
        this.db.list('/account/candidati/').snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (it) {
                if (it.email === _this.email && it.password === criptPassword) {
                    sessionStorage.clear();
                    _this.key = it.key;
                    _this.fullname = it.fullname;
                    _this.email = it.email;
                    _this.telefono = it.telefono;
                    localStorage.setItem('isLoggedin', 'true');
                    sessionStorage.setItem('SessionKey', '' + it.key);
                    sessionStorage.setItem('SessionEmail', '' + it.email);
                    sessionStorage.setItem('SessionFullname', '' + it.fullname);
                    sessionStorage.setItem('SessionTelefono', '' + it.telefono);
                    sessionStorage.setItem('SessionType', 'Candidati');
                    console.log('la chiave è ', sessionStorage.getItem('SessionKey'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionEmail'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionFullname'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionTelefono'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionType'));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__homecandidato_homecandidato__["a" /* HomecandidatoPage */]);
                }
            });
        });
        console.log('utente non trovato...');
        /*
        Codice di Fabio




        this.db.list('/account/tecnico/').snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            console.log('Stampo tutto l oggetto items: ', items);
            items.forEach( it => {
                if (it.email === this.prova ) {
                    console.log('sono nel if');
                    this.key = it.key ;
                    localStorage.setItem('isLoggedin', 'true');
                    sessionStorage.setItem('SessionKey' , '' + it.key);
                    sessionStorage.setItem('SessionEmail' , '' + it.email);
                    sessionStorage.setItem('SessionFullname' , '' + it.fullname);
                    sessionStorage.setItem('SessionTelefono' , '' + it.telefono);

                    console.log('la chiave è ', sessionStorage.getItem('SessionKey'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionEmail'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionFullname'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionTelefono'));
                }
            });
        });

        let alert = this.alertCtrl.create({
                title: 'Login',
                subTitle: 'Login riuscito!',
                buttons: ['OK']
            });
            alert.present();
            this.candidato.email = this.candidato.password = '';

            this.navCtrl.setRoot(HomecandidatoPage);
            */
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.onTapInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content scroll="false">\n  <div class="splash-bg"></div>\n  <div class="splash-info">\n    <div class="splash-logo"></div>\n    <div class="splash-intro">\n      Fast Recruiting NexSoft S.p.a.\n\n    </div>\n  </div>\n  <div padding>\n      <ion-list>\n        <ion-item>\n          <ion-input type="text" [(ngModel)]="candidato.email" placeholder="Email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="password" [(ngModel)]="candidato.password" placeholder="Password"></ion-input>\n        </ion-item>\n\n      </ion-list>\n    <button ion-button block (click)="onLogin()"  color="secondary">Login</button>\n    <button ion-button block (click)="onSignup()">Registrati</button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__app_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 67:
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/pages/visualizzacolloquio/visualizzacolloquio.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Colloquio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="about-header">\n    <img src="assets/imgs/recruiment.png" alt="ionic logo">\n  </div>\n\n  <colloquio [candidaturaselezionata]=candidaturaselezionata> </colloquio>\n\n</ion-content>\n'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/pages/visualizzacolloquio/visualizzacolloquio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], VisualizzacolloquioPage);
    return VisualizzacolloquioPage;
}());

//# sourceMappingURL=visualizzacolloquio.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skill; });
var Skill = (function () {
    function Skill(nome) {
        this.nome = nome;
    }
    return Skill;
}());

//# sourceMappingURL=skill.js.map

/***/ }),

/***/ 69:
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

/***/ 82:
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
    function HometecnicoPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.enabledAuthenticatedMenu();
    }
    HometecnicoPage.prototype.ngOnInit = function () {
    };
    HometecnicoPage.prototype.enabledAuthenticatedMenu = function () {
        this.menuCtrl.enable(false, 'candidato');
        this.menuCtrl.enable(true, 'tecnico');
    };
    HometecnicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/depiano/Desktop/FastRecruiting/src/pages/hometecnico/hometecnico.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n   <candidato> </candidato>\n\n\n</ion-content>'/*ion-inline-end:"/Users/depiano/Desktop/FastRecruiting/src/pages/hometecnico/hometecnico.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], HometecnicoPage);
    return HometecnicoPage;
}());

//# sourceMappingURL=hometecnico.js.map

/***/ })

},[328]);
//# sourceMappingURL=main.js.map