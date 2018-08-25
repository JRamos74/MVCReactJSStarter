webpackJsonp([3],{

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(26);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _reactRouterDom = __webpack_require__(12);

var _app = __webpack_require__(79);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

ReactDOM.render(React.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    React.createElement(_app2.default, null)
), document.getElementById("root"));

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _appRouter = __webpack_require__(80);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {

            return React.createElement(_appRouter.AppRouter, null);
        }
    }]);

    return App;
}(React.Component);

exports.default = App;

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppRouter = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactRouterDom = __webpack_require__(12);

var _appLayout = __webpack_require__(81);

var _appLayout2 = _interopRequireDefault(_appLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var NoMatch = function NoMatch(_ref) {
    var location = _ref.location;
    return React.createElement(
        "div",
        null,
        "No URL matching ",
        location.pathname
    );
};

var HelloWorld = function HelloWorld(props) {
    return React.createElement(
        "div",
        null,
        "Hello World from App Router"
    );
};

var AboutPage = function AboutPage(props) {
    return React.createElement(
        "div",
        null,
        "This is all about you!"
    );
};

var AppRouter = exports.AppRouter = function AppRouter(props) {
    return React.createElement(
        _appLayout2.default,
        null,
        React.createElement(
            "main",
            null,
            React.createElement(
                _reactRouterDom.Switch,
                null,
                React.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: HelloWorld }),
                React.createElement(_reactRouterDom.Route, { path: "/about", component: AboutPage }),
                React.createElement(_reactRouterDom.Route, { component: NoMatch })
            )
        )
    );
};

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppLayout = function (_Component) {
    _inherits(AppLayout, _Component);

    function AppLayout() {
        _classCallCheck(this, AppLayout);

        return _possibleConstructorReturn(this, (AppLayout.__proto__ || Object.getPrototypeOf(AppLayout)).apply(this, arguments));
    }

    _createClass(AppLayout, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "header",
                    { className: "App App-header" },
                    _react2.default.createElement(
                        "h1",
                        { className: "App-title" },
                        "MVC ReactJS Starter"
                    )
                ),
                _react2.default.createElement(
                    "nav",
                    { className: "navbar navbar-expand-lg navbar-light bg-light" },
                    _react2.default.createElement(
                        "a",
                        { className: "navbar-brand", href: "/" },
                        "Demo"
                    ),
                    _react2.default.createElement(
                        "button",
                        {
                            className: "navbar-toggler",
                            type: "button",
                            "data-toggle": "collapse",
                            "data-target": "#navbarNavAltMarkup",
                            "aria-controls": "navbarNavAltMarkup",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation"
                        },
                        _react2.default.createElement("span", { className: "navbar-toggler-icon" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "collapse navbar-collapse", id: "navbarNavAltMarkup" },
                        _react2.default.createElement(
                            "div",
                            { className: "navbar-nav" },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "/", className: "nav-item nav-link" },
                                "Home"
                            ),
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "/about", className: "nav-item nav-link" },
                                "About"
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "App-intro" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return AppLayout;
}(_react.Component);

;

exports.default = AppLayout;

/***/ })

},[42]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcHBSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBcHAiLCJDb21wb25lbnQiLCJOb01hdGNoIiwibG9jYXRpb24iLCJwYXRobmFtZSIsIkhlbGxvV29ybGQiLCJwcm9wcyIsIkFib3V0UGFnZSIsIkFwcFJvdXRlciIsIkFwcExheW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztJQUFZQSxLOztBQUNaOztJQUFZQyxROztBQUNaOztBQUNBOzs7Ozs7OztBQUVBQSxTQUFTQyxNQUFULENBQ0k7QUFBQyxpQ0FBRDtBQUFBO0FBQ0ksd0JBQUMsYUFBRDtBQURKLENBREosRUFJSUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUpKLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7SUFBWUosSzs7QUFDWjs7Ozs7Ozs7OztJQUVNSyxHOzs7Ozs7Ozs7OztpQ0FDTzs7QUFFTCxtQkFDSSxvQkFBQyxvQkFBRCxPQURKO0FBSUg7Ozs7RUFQYUwsTUFBTU0sUzs7a0JBVVRELEc7Ozs7Ozs7Ozs7Ozs7OztBQ2JmOztJQUFZTCxLOztBQUNaOztBQUNBOzs7Ozs7OztBQUVBLElBQU1PLFVBQVUsU0FBVkEsT0FBVTtBQUFBLFFBQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFdBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBc0JBLGlCQUFTQztBQUEvQixLQURZO0FBQUEsQ0FBaEI7O0FBSUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEtBQUQ7QUFBQSxXQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FEZTtBQUFBLENBQW5COztBQUlBLElBQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDRCxLQUFEO0FBQUEsV0FDZDtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRGM7QUFBQSxDQUFsQjs7QUFJTyxJQUFNRSxnQ0FBWSxTQUFaQSxTQUFZLENBQUNGLEtBQUQ7QUFBQSxXQUNyQjtBQUFDLDJCQUFEO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFDLHNDQUFEO0FBQUE7QUFDSSxvQ0FBQyxxQkFBRCxJQUFPLFdBQVAsRUFBYSxNQUFLLEdBQWxCLEVBQXNCLFdBQVdELFVBQWpDLEdBREo7QUFFSSxvQ0FBQyxxQkFBRCxJQUFPLE1BQUssUUFBWixFQUFxQixXQUFXRSxTQUFoQyxHQUZKO0FBR0ksb0NBQUMscUJBQUQsSUFBTyxXQUFXTCxPQUFsQjtBQUhKO0FBREo7QUFESixLQURxQjtBQUFBLENBQWxCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQlA7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNTyxTOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBUSxXQUFVLGdCQUFsQjtBQUNJO0FBQUE7QUFBQSwwQkFBSSxXQUFVLFdBQWQ7QUFBQTtBQUFBO0FBREosaUJBREo7QUFJSTtBQUFBO0FBQUEsc0JBQUssV0FBVSwrQ0FBZjtBQUNJO0FBQUE7QUFBQSwwQkFBRyxXQUFVLGNBQWIsRUFBNEIsTUFBSyxHQUFqQztBQUFBO0FBQUEscUJBREo7QUFJSTtBQUFBO0FBQUE7QUFDSSx1Q0FBVSxnQkFEZDtBQUVJLGtDQUFLLFFBRlQ7QUFHSSwyQ0FBWSxVQUhoQjtBQUlJLDJDQUFZLHFCQUpoQjtBQUtJLDZDQUFjLG9CQUxsQjtBQU1JLDZDQUFjLE9BTmxCO0FBT0ksMENBQVc7QUFQZjtBQVNJLGdFQUFNLFdBQVUscUJBQWhCO0FBVEoscUJBSko7QUFlSTtBQUFBO0FBQUEsMEJBQUssV0FBVSwwQkFBZixFQUEwQyxJQUFHLG9CQUE3QztBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFDLG9EQUFEO0FBQUEsa0NBQU0sSUFBRyxHQUFULEVBQWEsV0FBVSxtQkFBdkI7QUFBQTtBQUFBLDZCQURKO0FBSUk7QUFBQyxvREFBRDtBQUFBLGtDQUFNLElBQUcsUUFBVCxFQUFrQixXQUFVLG1CQUE1QjtBQUFBO0FBQUE7QUFKSjtBQURKO0FBZkosaUJBSko7QUFnQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFdBQWY7QUFDSyw2QkFBS0gsS0FBTCxDQUFXSTtBQURoQjtBQURKO0FBaENKLGFBREo7QUF3Q0g7Ozs7RUExQ21CVCxnQjs7QUEyQ3ZCOztrQkFFY1EsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICA8QXBwIC8+XHJcbiAgICA8L0Jyb3dzZXJSb3V0ZXI+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBSb3V0ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwUm91dGVyJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBcHBSb3V0ZXIgLz5cclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4vYXBwTGF5b3V0XCI7XHJcblxyXG5jb25zdCBOb01hdGNoID0gKHsgbG9jYXRpb24gfSkgPT4gKFxyXG4gICAgPGRpdj5ObyBVUkwgbWF0Y2hpbmcge2xvY2F0aW9uLnBhdGhuYW1lfTwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgSGVsbG9Xb3JsZCA9IChwcm9wcykgPT4gKFxyXG4gICAgPGRpdj5IZWxsbyBXb3JsZCBmcm9tIEFwcCBSb3V0ZXI8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IEFib3V0UGFnZSA9IChwcm9wcykgPT4gKFxyXG4gICAgPGRpdj5UaGlzIGlzIGFsbCBhYm91dCB5b3UhPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwUm91dGVyID0gKHByb3BzKSA9PiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIZWxsb1dvcmxkfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWJvdXRcIiBjb21wb25lbnQ9e0Fib3V0UGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vTWF0Y2h9IC8+XHJcbiAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYXBwUm91dGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNsYXNzIEFwcExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiQXBwIEFwcC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiQXBwLXRpdGxlXCI+TVZDIFJlYWN0SlMgU3RhcnRlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGVtb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZBbHRNYXJrdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2QWx0TWFya3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAtaW50cm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYXBwTGF5b3V0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==