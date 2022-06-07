exports.id = 760;
exports.ids = [760];
exports.modules = {

/***/ 2895:
/***/ ((module) => {

// Exports
module.exports = {
	"LoginHeader-wrapper": "loginHeader_LoginHeader-wrapper__5OAxs",
	"loginHeader-settings-btn": "loginHeader_loginHeader-settings-btn__GFp_Y"
};


/***/ }),

/***/ 9162:
/***/ ((module) => {

// Exports
module.exports = {
	"settingsSidebar-wrapper": "settingsSidebar_settingsSidebar-wrapper__wBWCk",
	"settingsSidebar-header": "settingsSidebar_settingsSidebar-header__3ODu6",
	"settingsSidebar-close-btn": "settingsSidebar_settingsSidebar-close-btn__LTVVH",
	"settingsSidebar-translation-btn-group": "settingsSidebar_settingsSidebar-translation-btn-group__3t2dt"
};


/***/ }),

/***/ 7760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ welcomeComponents_LoginHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/gr"
var gr_ = __webpack_require__(8547);
// EXTERNAL MODULE: ./components/welcomeComponents/SettingsSidebar/settingsSidebar.module.css
var settingsSidebar_module = __webpack_require__(9162);
var settingsSidebar_module_default = /*#__PURE__*/__webpack_require__.n(settingsSidebar_module);
// EXTERNAL MODULE: ./public/locals/index.js
var locals = __webpack_require__(6667);
;// CONCATENATED MODULE: ./components/welcomeComponents/SettingsSidebar/index.jsx








function SettingsSidebar(props) {
    const { locale , asPath  } = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (settingsSidebar_module_default())["settingsSidebar-wrapper"],
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (settingsSidebar_module_default())["settingsSidebar-header"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: locals/* default */.Z[locale].settingsTab.settingsTabTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(gr_.GrClose, {
                            className: (settingsSidebar_module_default())["settingsSidebar-close-btn"],
                            onClick: props.onClose
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        style: {
                            textAlign: "center"
                        },
                        children: locals/* default */.Z[locale].settingsTab.settingsTabLanguagePreferenceTitle
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ButtonGroup, {
                        size: "medium",
                        "aria-label": "medium button group",
                        className: (settingsSidebar_module_default())["settingsSidebar-translation-btn-group"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                activeClassName: locale === "en",
                                href: asPath,
                                locale: "en",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    variant: locale === "en" ? "contained" : "outlined",
                                    size: "small",
                                    children: locals/* default */.Z[locale].settingsTab.settingsTabLanguagePreferenceEnglish
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                activeClassName: locale === "jp",
                                href: asPath,
                                locale: "jp",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    variant: locale === "jp" ? "contained" : "outlined",
                                    children: locals/* default */.Z[locale].settingsTab.settingsTabLanguagePreferenceJapan
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const welcomeComponents_SettingsSidebar = (SettingsSidebar);

// EXTERNAL MODULE: ./components/welcomeComponents/LoginHeader/loginHeader.module.css
var loginHeader_module = __webpack_require__(2895);
var loginHeader_module_default = /*#__PURE__*/__webpack_require__.n(loginHeader_module);
;// CONCATENATED MODULE: ./components/welcomeComponents/LoginHeader/index.jsx








function LoginHeader() {
    const { locale  } = (0,router_.useRouter)();
    const { 0: state , 1: setState  } = (0,external_react_.useState)({
        top: false,
        left: false,
        bottom: false,
        right: false
    });
    const toggleDrawer = (anchor, open)=>(event)=>{
            setState({
                ...state,
                [anchor]: open
            });
        }
    ;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (loginHeader_module_default())["LoginHeader-wrapper"],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: locals/* default */.Z[locale].welcomePage.headerTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                title: locals/* default */.Z[locale].settingsTab.settingsButtonTooltip,
                placement: "bottom",
                arrow: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                    onClick: toggleDrawer("right", true),
                    className: (loginHeader_module_default())["loginHeader-settings-btn"],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiSettings, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
                anchor: "right",
                open: state["right"],
                onClose: toggleDrawer("right", false),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(welcomeComponents_SettingsSidebar, {
                        onClose: toggleDrawer("right", false)
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const welcomeComponents_LoginHeader = (LoginHeader);


/***/ }),

/***/ 6667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ETTMSText = {
    "en": {
        welcomePage: {
            headerTitle: "ETTMS V-02",
            login: {
                loginTitle: "LOGIN",
                loginHeader: "Login",
                loginUserName: "User Name",
                loginPassword: "Password",
                loginForgetPassword: "Forget Password?",
                loginSignInButton: "Sign In"
            },
            registration: {
                registrationTitle: "REGISTRATION",
                registrationHeader: "Registration",
                registrationFirstName: "First Name",
                registrationLastName: "Last Name",
                registrationUserName: "User Name",
                registrationUserLevel: "User Level",
                registrationUserEmail: "User Email",
                registrationPassword: "Password",
                registrationConfirmPassword: "Confirm Password",
                registrationSignUpButton: "Sign Up"
            }
        },
        settingsTab: {
            settingsButtonTooltip: "Settings",
            settingsTabTitle: "Settings",
            settingsTabLanguagePreferenceTitle: "Language Preference",
            settingsTabLanguagePreferenceEnglish: "English",
            settingsTabLanguagePreferenceJapan: "\u65E5\u672C"
        },
        homePage: {
            homePageTitle: "Home"
        },
        footer: {
            footerTitle: "Ultra-x asia pacific Inc."
        }
    },
    "jp": {
        welcomePage: {
            headerTitle: "ETTMS V-02",
            login: {
                loginTitle: "\u30ED\u30B0\u30A4\u30F3",
                loginHeader: "\u30ED\u30B0\u30A4\u30F3",
                loginUserName: "\u30E6\u30FC\u30B6\u30FC\u540D",
                loginPassword: "\u30D1\u30B9\u30EF\u30FC\u30C9",
                loginForgetPassword: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5FD8\u308C\u307E\u3057\u305F\u304B\uFF1F",
                loginSignInButton: "\u30B5\u30A4\u30F3\u30A4\u30F3"
            },
            registration: {
                registrationTitle: "\u767B\u9332",
                registrationHeader: "\u767B\u9332",
                registrationFirstName: "\u30D5\u30A1\u30FC\u30B9\u30C8\u30CD\u30FC\u30E0",
                registrationLastName: "\u82D7\u5B57",
                registrationUserName: "\u30E6\u30FC\u30B6\u30FC\u540D",
                registrationUserLevel: "\u30E6\u30FC\u30B6\u30FC\u30EC\u30D9\u30EB",
                registrationUserEmail: "\u30E6\u30FC\u30B6\u30FC\u306E\u96FB\u5B50\u30E1\u30FC\u30EB",
                registrationPassword: "\u30D1\u30B9\u30EF\u30FC\u30C9",
                registrationConfirmPassword: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8A8D\u8A3C\u3059\u308B",
                registrationSignUpButton: "\u30B5\u30A4\u30F3\u30A2\u30C3\u30D7"
            }
        },
        settingsTab: {
            settingsButtonTooltip: "\u8A2D\u5B9A",
            settingsTabTitle: "\u8A2D\u5B9A",
            settingsTabLanguagePreferenceTitle: "\u8A00\u8A9E\u9078\u629E",
            settingsTabLanguagePreferenceEnglish: "English",
            settingsTabLanguagePreferenceJapan: "\u65E5\u672C"
        },
        homePage: {
            homePageTitle: "\u82F1\u8A9E"
        },
        footer: {
            footerTitle: "\u682A\u5F0F\u4F1A\u793E\u30A6\u30EB\u30C8\u30E9\u30A8\u30C3\u30AF\u30B9"
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ETTMSText);


/***/ })

};
;