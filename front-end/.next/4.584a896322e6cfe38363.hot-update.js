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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
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

        _this.state = {
            Sensor: []
        };
        return _this;
    }

    _createClass(DashBoard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var config = {
                apiKey: "AIzaSyCo-ZuUXKRdlWtRo0xrJ3gUVN0WbGDzZaY",
                authDomain: "alert-system-82af3.firebaseapp.com",
                databaseURL: "https://alert-system-82af3.firebaseio.com",
                projectId: "alert-system-82af3",
                storageBucket: "alert-system-82af3.appspot.com",
                messagingSenderId: "840558224088"
            };
            __WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](config);
            var firebaseFilter = __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref().child('Sensor');
            firebaseFilter.on("value", function (snapshot) {
                var Sensor = snapshot.val();
                if (Sensor != null) {
                    _this2.setState({
                        Sensor: Sensor
                    });
                }
                for (var i = 0; i < Sensor.status.length; i++) {
                    if (Sensor[i].status === 'Alert' || Sensor[i].status === 'alert' || Sensor[i].status === 'Error' || Sensor[i].status === 'error') {
                        var Sound = document.getElementById("Sound");
                        Sound.autoplay = true;
                        Sound.load();
                        notificationAlert();
                    }
                }
            });
            var notificationAlert = function notificationAlert() {
                var args = {
                    message: 'Warning !!!',
                    description: 'Please becareful yours hardware maybe has error status or overheat!',
                    icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd__["a" /* Icon */], { type: 'warning', style: { color: '#e81908' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53
                        }
                    })
                };
                __WEBPACK_IMPORTED_MODULE_5_antd__["b" /* notification */].open(args);
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var logOut = function logOut() {
                __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().signOut().then(function () {
                    location.href = '/';
                }, function (error) {
                    console.error('Sign Out Error', error);
                });
            };
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'title',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 69
                            }
                        },
                        'ALERT SYSTEM || DashBoard'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: 'https://www.gstatic.com/firebasejs/4.12.1/firebase.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'static/css/bootstrap/dist/css/bootstrap.min.css', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: 'static/js/jquery/dist/jquery.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.4.1/antd.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 73
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.4.1/antd.min.css', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 75
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: '/static/js/p5/p5.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 77
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: '/static/js/p5/addons/p5.dom.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: '/static/js/p5/addons/p5.sound.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'container-fluid', style: { backgroundColor: '#fff' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'nav',
                        { className: 'navbar navbar-default', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 82
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'container', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 83
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'navbar-header', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 84
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'a',
                                    { className: 'navbar-brand', href: '/', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 85
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { height: '60', alt: 'logo', src: '/static/image/logo/navbar_logo.png', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 86
                                        }
                                    })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'ul',
                                { style: { position: 'relative', top: 28, float: 'left', fontWeight: 'bold', right: 66 }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 89
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'li',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 90
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'a',
                                        { onClick: logOut, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 90
                                            }
                                        },
                                        'log Out'
                                    )
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'container', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 95
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-md-2 card-ui', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 97
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'static/image/logo/alertsystem.jpg', 'class': 'profileImage', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 98
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'li',
                                { style: { fontSize: 15, fontWeight: 'bold' }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 99
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'a',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 99
                                        }
                                    },
                                    'admin'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'audio',
                            { id: 'Sound', controls: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 101
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: 'static/sound/SOS-effect.mp3', type: 'audio/mpeg', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 102
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'mainDashBoard col-md-9', style: { marginTop: 50, marginBottom: 50 }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 104
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'h4',
                                { style: { marginLeft: -17, textTransform: 'uppercase', fontSize: 22, marginBottom: 36, fontWeight: 'bold', marginTop: 30 }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 105
                                    }
                                },
                                'my board status info'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'row', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 107
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */],
                                    { style: { marginRight: 50, marginBottom: 30 }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 108
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */],
                                        { left: true, href: '#', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 109
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */], { object: true, src: 'static/image/icon/temp.jpg', style: { height: 70, marginRight: 24, borderRadius: 4 }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 110
                                            }
                                        })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */],
                                        { body: true, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 112
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            __WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */],
                                            { style: { fontSize: 18, textTransform: 'capitalize', marginTop: 19 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 113
                                                }
                                            },
                                            'Temperature'
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */],
                                    { style: { marginRight: 50, marginBottom: 30 }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 118
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */],
                                        { left: true, href: '#', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 119
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */], { object: true, src: 'static/image/icon/gas.jpg', style: { height: 70, marginRight: 24, borderRadius: 4 }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 120
                                            }
                                        })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */],
                                        { body: true, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 122
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            __WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */],
                                            { style: { fontSize: 18, textTransform: 'capitalize', marginTop: 19 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 123
                                                }
                                            },
                                            'GAS'
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */],
                                    { style: { marginRight: 50, marginBottom: 30 }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 128
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */],
                                        { left: true, href: '#', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 129
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */], { object: true, src: 'static/image/icon/PIR.jpg', style: { height: 70, marginRight: 24, borderRadius: 4 }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 130
                                            }
                                        })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */],
                                        { body: true, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 132
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            __WEBPACK_IMPORTED_MODULE_4_reactstrap__["b" /* Media */],
                                            { style: { fontSize: 18, textTransform: 'capitalize', marginTop: 19 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 133
                                                }
                                            },
                                            'PIR'
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 138
                                    }
                                }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 139
                                    }
                                }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_4_reactstrap__["g" /* Table */],
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 140
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'thead',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 141
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'tr',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 142
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'th',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 143
                                                    }
                                                },
                                                'Sensor'
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'th',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 144
                                                    }
                                                },
                                                'Value'
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'th',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 145
                                                    }
                                                },
                                                'Status'
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'tbody',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 148
                                            }
                                        },
                                        Object.keys(this.state.Sensor).map(function (key) {
                                            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'tr',
                                                { key: key, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 151
                                                    }
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'td',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 152
                                                        }
                                                    },
                                                    _this3.state.Sensor[key].type
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'td',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 155
                                                        }
                                                    },
                                                    _this3.state.Sensor[key].value
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'td',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 158
                                                        }
                                                    },
                                                    _this3.state.Sensor[key].status
                                                )
                                            );
                                        })
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
                            lineNumber: 171
                        }
                    },
                    '\n                body {\n                    background-color:#f2f5f7;\n                }\n                .profileImage {\n                    width: 100px;\n                    height: 100px;\n                    margin: 50px auto;\n                    display: block;\n                    border-radius: 100%;\n                    background-color: transparent;\n                    overflow: hidden;\n                    object-fit: cover;\n                    object-position: center top;\n                }\n                .mainDashBoard {\n                    height: auto;\n                    background-color: #fff;\n                    padding: 60px;\n                    padding-top: 30px;\n                    padding-bottom: 30px;\n                    box-shadow: 0px 0px 6px #ced4da;\n                    border-radius: 10px;\n                    float: left;\n                }\n                .header-dashboard{\n                    margin-top: 50px;\n                    float: left;\n                    height: 160px;\n                    background-color: #fff;\n                    box-shadow: 0px 0px 6px #ced4da;\n                    border-radius: 10px;\n                    padding:15px;\n                }\n                .card-ui{\n                    float: left;\n                    height: 260px;\n                    background-color: #fff;\n                    margin-top: 50px;\n                    margin-left: 30px;\n                    margin-right: 50px;\n                    box-shadow: 0px 0px 6px #ced4da;\n                    border-radius: 10px;\n                }\n                li {\n                    list-style: none;\n                    text-align: center;\n                    text-transform: capitalize;\n                    line-height: 32px;\n                    position: relative;\n                    top: -20px;\n                }\n                a, a:hover {\n                    text-decoration: none !important;\n                    color: #000;\n                }\n                .table thead th {\n                    font-size:16px;\n                    border-bottom:0 !important;\n                }\n                .table td, .table th {\n                    border-top:0 !important;\n                }\n\n                #SoundAlert {\n                    display:none;\n                }\n                #Sound {\n                    display:none;\n                }\n            '
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
//# sourceMappingURL=4.584a896322e6cfe38363.hot-update.js.map