webpackHotUpdate(4,{

/***/ "./pages/dashboard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert__ = __webpack_require__("./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/Alert-system/front-end/pages/dashboard.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var DashBoard = function (_React$Component) {
    _inherits(DashBoard, _React$Component);

    function DashBoard(props) {
        _classCallCheck(this, DashBoard);

        var _this = _possibleConstructorReturn(this, (DashBoard.__proto__ || Object.getPrototypeOf(DashBoard)).call(this, props));

        _this.state = { users: [] };
        return _this;
    }

    _createClass(DashBoard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var config = {
                apiKey: "AIzaSyBIH4uOJOrlYI5KwEDzQlITD0JoRxHlqxs",
                authDomain: "compro-1cb91.firebaseapp.com",
                databaseURL: "https://compro-1cb91.firebaseio.com",
                projectId: "compro-1cb91",
                storageBucket: "compro-1cb91.appspot.com",
                messagingSenderId: "401428640836"
            };
            __WEBPACK_IMPORTED_MODULE_5_firebase__["initializeApp"](config);
            __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("users/").on("value", function (snapshot) {
                var users = snapshot.val();
                if (users != null) {
                    _this2.setState({
                        users: users
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var logOut = function logOut() {
                __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().signOut().then(function () {
                    // Sign-out successful.
                    location.reload();
                    location.href = '/';
                }).catch(function (error) {
                    // An error happened.
                });
            };
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'title',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 51
                            }
                        },
                        'ALERT SYSTEM || DashBoard'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: 'https://www.gstatic.com/firebasejs/4.12.1/firebase.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'static/css/bootstrap/dist/css/bootstrap.min.css', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: 'static/js/jquery/dist/jquery.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.4.1/antd.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.4.1/antd.min.css', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'col-md-2 card-ui', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'static/image/logo/alertsystem.jpg', 'class': 'profileImage', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        }
                    }),
                    Object.keys(this.state.users).map(function (key) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            { key: key, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 66
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'a',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 66
                                    }
                                },
                                _this3.state.users[key].username
                            )
                        );
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { onClick: logOut, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 70
                                }
                            },
                            'log out'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'col-md-8 header-dashboard', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'static/image/arduino-uno.png', height: '120px', style: { marginRight: 50, float: 'left' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 73
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h4',
                        { className: 'page-header', style: { marginTop: 50, textTransform: 'uppercase', fontWeight: 'bold' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            }
                        },
                        'my arudino info'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'mainDashBoard col-md-8', style: { marginTop: 50, marginBottom: 50 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_4_reactstrap__["f" /* Table */],
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 80
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'thead',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 81
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'tr',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 82
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'th',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 83
                                            }
                                        },
                                        '#'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'th',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 84
                                            }
                                        },
                                        'First Name'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'th',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 85
                                            }
                                        },
                                        'Last Name'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'th',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 86
                                            }
                                        },
                                        'Username'
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'tbody',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 89
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'tr',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 90
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'th',
                                        { scope: 'row', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 91
                                            }
                                        },
                                        '1'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'td',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 92
                                            }
                                        },
                                        'Mark'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'td',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 93
                                            }
                                        },
                                        'Otto'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'td',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 94
                                            }
                                        },
                                        '@mdo'
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'tr',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 96
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'th',
                                        { scope: 'row', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 97
                                            }
                                        },
                                        '2'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'td',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 98
                                            }
                                        },
                                        'Jacob'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'td',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 99
                                            }
                                        },
                                        'Thornton'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'td',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 100
                                            }
                                        },
                                        '@fat'
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'tr',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 102
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'th',
                                        { scope: 'row', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 103
                                            }
                                        },
                                        '3'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'td',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 104
                                            }
                                        },
                                        'Larry'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'td',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 105
                                            }
                                        },
                                        'the Bird'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'td',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 106
                                            }
                                        },
                                        '@twitter'
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
                            lineNumber: 113
                        }
                    },
                    '\n                body {\n                    background-color:#f2f5f7;\n                }\n                .profileImage {\n                    width: 100px;\n                    height: 100px;\n                    margin: 50px auto;\n                    display: block;\n                    border-radius: 100%;\n                    background-color: transparent;\n                    overflow: hidden;\n                    object-fit: cover;\n                    object-position: center top;\n                }\n                .mainDashBoard {\n                    height: auto;\n                    background-color: #fff;\n                    padding: 60px;\n                    box-shadow: 0px 0px 6px #ced4da;\n                    border-radius: 10px;\n                    float: left;\n                }\n                .header-dashboard{\n                    margin-top: 50px;\n                    float: left;\n                    height: 160px;\n                    background-color: #fff;\n                    box-shadow: 0px 0px 6px #ced4da;\n                    border-radius: 10px;\n                    padding:15px;\n                }\n                .card-ui{\n                    float: left;\n                    height: 330px;\n                    background-color: #fff;\n                    margin-top: 50px;\n                    margin-left: 30px;\n                    margin-right: 30px;\n                    box-shadow: 0px 0px 6px #ced4da;\n                    border-radius: 10px;\n                }\n                li {\n                    list-style: none;\n                    text-align: center;\n                    text-transform: capitalize;\n                    line-height: 32px;\n                    position: relative;\n                    top: -20px;\n                }\n                a, a:hover {\n                    text-decoration: none !important;\n                    color: #000;\n                }\n            '
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return DashBoard;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = DashBoard;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(DashBoard, 'DashBoard', '/Users/panjamaponkarnasuta/Desktop/Alert-system/front-end/pages/dashboard.js');
    reactHotLoader.register(_default, 'default', '/Users/panjamaponkarnasuta/Desktop/Alert-system/front-end/pages/dashboard.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/dashboard")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.86ddbb3671b090188cb6.hot-update.js.map