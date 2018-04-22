webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/Alert-system/front-end/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            activeTab: '1'
        };
        return _this;
    }

    _createClass(Index, [{
        key: 'toggle',
        value: function toggle(tab) {
            if (this.state.activeTab !== tab) {
                this.setState({
                    activeTab: tab
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var createAccount = function createAccount() {
                var email = document.getElementById('email');
                var username = document.getElementById('username');
                var password = document.getElementById('password');
                saveUser(email.value, username.value, password.value);
            };
            var saveUser = function saveUser(email, username, password) {
                if (email.length && username.length && password.length < 6) {
                    var args = {
                        message: 'Create Account failed',
                        description: 'because your password is less than 6 character ! , please try again.',
                        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__["a" /* Icon */], { type: 'exclamation-circle', style: { color: '#e81908' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43
                            }
                        })
                    };
                    __WEBPACK_IMPORTED_MODULE_4_antd__["b" /* notification */].open(args);
                } else {
                    var firebaseRef = firebase.database().ref().child('users/');
                    firebaseRef.push({
                        email: email,
                        username: username,
                        password: password
                    });
                    var _args = {
                        message: 'You Create Account Succesful',
                        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__["a" /* Icon */], { type: 'check-circle', style: { color: '#10da10' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 56
                            }
                        })
                    };
                    __WEBPACK_IMPORTED_MODULE_4_antd__["b" /* notification */].open(_args);
                }
                signUp();
            };
            var signUp = function signUp() {
                var email = document.getElementById('email').value;
                var username = document.getElementById('username').value;
                var password = document.getElementById('password').value;
                //document.getElementById('SignUpform').reset();
                firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                });
            };
            var logIn = function logIn() {
                var email = document.getElementById('email').value;
                var password = document.getElementById('password').value;
                document.getElementById('LogInform').reset();
                firebase.auth().signInWithEmailAndPassword(email, password).catch(function (users) {
                    if (users) {
                        location.href = '/dashboard';
                    }
                });
            };
            var resetPassword = function resetPassword() {
                var sendEmail = document.getElementById('sendEmail').value;
                document.getElementById('resetPasswordform').reset();
                firebase.auth().sendPasswordResetEmail(sendEmail).then(function () {
                    // Email sent.
                    var args = {
                        message: 'Reset Password Succesful',
                        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__["a" /* Icon */], { type: 'check-circle', style: { color: '#10da10' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 91
                            }
                        })
                    };
                    __WEBPACK_IMPORTED_MODULE_4_antd__["b" /* notification */].open(args);
                }).catch(function (error) {
                    // An error happened.
                    var args = {
                        message: 'Reset Password failed',
                        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__["a" /* Icon */], { type: 'exclamation-circle', style: { color: '#e81908' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 98
                            }
                        })
                    };
                    __WEBPACK_IMPORTED_MODULE_4_antd__["b" /* notification */].open(args);
                });
            };
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 104
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 105
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'title',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 106
                            }
                        },
                        'ALERT SYSTEM'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'static/css/bootstrap/dist/css/bootstrap.min.css', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 107
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: 'static/js/jquery/dist/jquery.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 108
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.4.1/antd.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 109
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.4.1/antd.min.css', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 110
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 111
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 112
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://www.gstatic.com/firebasejs/4.13.0/firebase.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 113
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: 'static/js/firebase.connect.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 114
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'container clearfix', style: { marginTop: 50, marginBottom: 50 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 116
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 117
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'static/image/logo/alertsystem.jpg', className: 'logo', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 118
                            }
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'mainTabs', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 120
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_3_reactstrap__["c" /* Nav */],
                            { tabs: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 121
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_3_reactstrap__["c" /* Nav */],
                                {
                                    className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()({ active: this.state.activeTab === '1' }),
                                    onClick: function onClick() {
                                        _this2.toggle('1');
                                    }, style: { marginRight: 20, fontSize: 14 }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 122
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__["a" /* Icon */], { type: 'user', style: { marginLeft: 0, marginRight: 16, fontSize: 26 }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 125
                                    }
                                }),
                                'Create Account'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_3_reactstrap__["c" /* Nav */],
                                {
                                    className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()({ active: this.state.activeTab === '2' }),
                                    onClick: function onClick() {
                                        _this2.toggle('2');
                                    }, style: { marginRight: 20, fontSize: 14 }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 127
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__["a" /* Icon */], { type: 'unlock', style: { marginLeft: 10, marginRight: 20, fontSize: 26 }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 130
                                    }
                                }),
                                'Login With Account'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_3_reactstrap__["c" /* Nav */],
                                {
                                    className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()({ active: this.state.activeTab === '3' }),
                                    onClick: function onClick() {
                                        _this2.toggle('3');
                                    }, style: { fontSize: 14 }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 132
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__["a" /* Icon */], { type: 'key', style: { marginLeft: 10, marginRight: 20, fontSize: 26 }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 135
                                    }
                                }),
                                'Forgot Password'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["e" /* TabContent */],
                        { activeTab: this.state.activeTab, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 139
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_3_reactstrap__["f" /* TabPane */],
                            { tabId: '1', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 140
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_3_reactstrap__["d" /* Row */],
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 141
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["a" /* Col */],
                                    { sm: '12', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 142
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'form',
                                        { className: 'mainform', id: 'SignUpform', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 143
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', id: 'email', className: 'form-control inputEmail', placeholder: 'Email', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 144
                                            }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 145
                                            }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', id: 'username', className: 'form-control inputUsername', placeholder: 'Username', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 146
                                            }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 147
                                            }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', id: 'password', className: 'form-control inputPassword', placeholder: 'Password', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 148
                                            }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 149
                                            }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'button',
                                            { type: 'button', onClick: createAccount, className: 'createBTN', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 150
                                                }
                                            },
                                            'CREATE ACCOUNT'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 151
                                            }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h6',
                                            { className: 'text-center', style: { textTransform: 'capitalize', fontSize: 13, color: '#d9291b', fontWeight: 'bold' }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 152
                                                }
                                            },
                                            '* username of password should be atleast 6 characters *'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 153
                                            }
                                        })
                                    )
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_3_reactstrap__["f" /* TabPane */],
                            { tabId: '2', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 158
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_3_reactstrap__["d" /* Row */],
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 159
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["a" /* Col */],
                                    { sm: '12', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 160
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'form',
                                        { className: 'mainform', id: 'LogInform', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 161
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', id: 'email', className: 'form-control inputEmail', placeholder: 'Email', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 162
                                            }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 163
                                            }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', id: 'password', className: 'form-control inputPassword', placeholder: 'Password', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 164
                                            }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 165
                                            }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'button',
                                            { onClick: logIn, type: 'button', style: { backgroundColor: '#d9291b' }, className: 'logInbtn', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 166
                                                }
                                            },
                                            'LOGIN WITH ACCOUNT'
                                        )
                                    )
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_3_reactstrap__["f" /* TabPane */],
                            { tabId: '3', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 171
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_3_reactstrap__["d" /* Row */],
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 172
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["a" /* Col */],
                                    { sm: '12', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 173
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'form',
                                        { className: 'mainform', id: 'resetPasswordform', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 174
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', id: 'sendEmail', className: 'form-control inputResetPassword', placeholder: 'Send your Email for Reset Password', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 175
                                            }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 176
                                            }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'button',
                                            { onClick: resetPassword, type: 'button', className: 'resetbtn', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 177
                                                }
                                            },
                                            'RESET PASSWORD'
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'style',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 184
                        }
                    },
                    '\n                    .clearfix {\n                        clear:both;\n                    }\n                    .nav-tabs {\n                        border:0;\n                    }\n                    body {\n                        background-color:#eee;\n                    }\n                    .logo {\n                        margin:30px auto;\n                        display: block;\n                        width:300px;\n                        height:340px;\n                    }\n                    .mainTabs {\n                        width:50%;\n                        margin:auto;\n                        display:block;\n                        margin-bottom: 26px;\n                        cursor: pointer;\n                    }\n                    .mainform {\n                        margin:auto;\n                        display:block;\n                    }\n                    .inputEmail, .inputUsername , .inputPassword , .createBTN, .logInbtn, .inputResetPassword, .resetbtn{\n                        width:50%;\n                        margin:auto;\n                        display:block;\n                    }\n                    .createBTN , .logInbtn, .resetbtn{\n                        height: 42px;\n                        color: #fff;\n                        background-color: #000;\n                        cursor: pointer;\n                        font-size: 13px;\n                        border-radius:4px;\n                        border:0;\n                    }\n                    .ant-notification-notice-with-icon .ant-notification-notice-message {\n                        position:relative;\n                        top:-4px;\n                        font-weight: bold;\n                    }\n                '
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Index, 'Index', '/Users/panjamaponkarnasuta/Desktop/Alert-system/front-end/pages/index.js');
    reactHotLoader.register(_default, 'default', '/Users/panjamaponkarnasuta/Desktop/Alert-system/front-end/pages/index.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.c1ca6c1b09a5aebd8b4d.hot-update.js.map