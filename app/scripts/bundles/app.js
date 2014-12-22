(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/scripts/index.jsx":[function(require,module,exports){
var React = require('react/addons');
var Router = require('react-router');
var $__0=         Router,DefaultRoute=$__0.DefaultRoute,Link=$__0.Link,NotFoundRoute=$__0.NotFoundRoute,Redirect=$__0.Redirect,Route=$__0.Route,RouteHandler=$__0.RouteHandler;

var App = require('./components/App.jsx');
var Main = require('./components/Main.jsx');
var Articles = require('./components/Articles.jsx');
var ArticleStore = require('./stores/ArticleStore');

ArticleStore.add('ReactJS');
ArticleStore.add('Browserify');

// TODO: understand what path is if not defined - e.g., remove path=articles for name=articles
var routes = (
    React.createElement(Route, {handler: App, path: "/"}, 
        React.createElement(DefaultRoute, {handler: Main}), 
        React.createElement(Route, {name: "articles", handler: Articles})
    )
);

//Router.run(routes, function (Handler) {
//  React.render(<Handler />, document.body);
//});

// Or, if you'd like to use the HTML5 history API for cleaner URLs:

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(React.createElement(Handler, null), document.body);
});

//React.render(<App />, document.body);

/*
server-side rendering:

Router.run(routes, '/about', (Handler, state) => {
    var html = React.renderToString(<Handler />);
    console.debug(html);
});
*/

},{"./components/App.jsx":"/Users/ben/projects/wsk/web-starter-kit/app/scripts/components/App.jsx","./components/Articles.jsx":"/Users/ben/projects/wsk/web-starter-kit/app/scripts/components/Articles.jsx","./components/Main.jsx":"/Users/ben/projects/wsk/web-starter-kit/app/scripts/components/Main.jsx","./stores/ArticleStore":"/Users/ben/projects/wsk/web-starter-kit/app/scripts/stores/ArticleStore.js","react-router":"react-router","react/addons":"react/addons"}],"/Users/ben/projects/wsk/web-starter-kit/app/scripts/Actors.js":[function(require,module,exports){
'use strict';

var Dispatcher = require('./Dispatcher');
var ActionTypes = require('./Constants').ActionTypes;

module.exports = {

    createArticle:function(text) {
        Dispatcher.dispatch({
            type: ActionTypes.CREATE_ARTICLE,
            data: text
        });
    }

};
},{"./Constants":"/Users/ben/projects/wsk/web-starter-kit/app/scripts/Constants.js","./Dispatcher":"/Users/ben/projects/wsk/web-starter-kit/app/scripts/Dispatcher.js"}],"/Users/ben/projects/wsk/web-starter-kit/app/scripts/Constants.js":[function(require,module,exports){
'use strict';

module.exports = {
    ActionTypes: [
        'CREATE_ARTICLE',
        'RECEIVE_CREATED_ARTICLE'
    ].reduce(function(o, v)  { o[v] = v; return o; }, {})
};
},{}],"/Users/ben/projects/wsk/web-starter-kit/app/scripts/Dispatcher.js":[function(require,module,exports){
var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();
},{"flux":"flux"}],"/Users/ben/projects/wsk/web-starter-kit/app/scripts/components/App.jsx":[function(require,module,exports){
var React = require('react/addons');
var cx = React.addons.classSet;
var Router = require('react-router');
var $__0=    Router,Link=$__0.Link,RouteHandler=$__0.RouteHandler;
var Header = require('./Header.jsx');
var Nav = require('./Nav.jsx');
var Main = require('./Main.jsx');

module.exports = React.createClass({displayName: "exports",

    getInitialState:function() {
        return {
            isShowingMenu: false
        }
    },

    onToggleMenu:function() {
        this.setState({ isShowingMenu: !this.state.isShowingMenu }); 
    },

    onCloseMenu:function() {
        console.log('closing!');
        this.setState({ isShowingMenu: false });
        event.preventDefault();
    },

    render:function() {
        return ( 
            React.createElement("div", {className: "app"}, 
                React.createElement(Header, {isShowingMenu: this.state.isShowingMenu, onToggleMenu: this.onToggleMenu}), 
                React.createElement(Nav, {isShowingMenu: this.state.isShowingMenu, onLink: this.onCloseMenu}), 
                React.createElement(RouteHandler, {onClick: this.onCloseMenu})
            )
        );
    }
});

},{"./Header.jsx":"/Users/ben/projects/wsk/web-starter-kit/app/scripts/components/Header.jsx","./Main.jsx":"/Users/ben/projects/wsk/web-starter-kit/app/scripts/components/Main.jsx","./Nav.jsx":"/Users/ben/projects/wsk/web-starter-kit/app/scripts/components/Nav.jsx","react-router":"react-router","react/addons":"react/addons"}],"/Users/ben/projects/wsk/web-starter-kit/app/scripts/components/Articles.jsx":[function(require,module,exports){
var React = require('react/addons');
var Store = require('../stores/ArticleStore');
var Actors = require('../Actors');

module.exports = React.createClass({displayName: "exports",

    getInitialState:function() {
        return {
            articles: Store.getAll()
        }
    },

    componentDidMount:function() {
        Store.addChangeListener(this._onStoreChange);
    },

    componentWillUnmount:function() {
        Store.removeChangeListener(this._onStoreChange);
    },

    _onStoreChange:function() {
        this.setState({
            articles: Store.getAll()
        });
    },

    render:function() {
        var articles = [];
        this.state.articles.map(function(v)  {
            articles.push(React.createElement("p", null, v));
        });
        return (
            React.createElement("main", {onClick: this.props.onClick}, 
                React.createElement("h2", null, 
                    "Articles"
                ), 
                articles, 
                React.createElement("a", {href: true, className: "button--primary", onClick: this.onCreateArticle}, "Create Article")
            )
        );
    },

    onCreateArticle:function() {
        Actors.createArticle('Some Fruit');
        event.preventDefault();
    }

});
},{"../Actors":"/Users/ben/projects/wsk/web-starter-kit/app/scripts/Actors.js","../stores/ArticleStore":"/Users/ben/projects/wsk/web-starter-kit/app/scripts/stores/ArticleStore.js","react/addons":"react/addons"}],"/Users/ben/projects/wsk/web-starter-kit/app/scripts/components/Header.jsx":[function(require,module,exports){
var React = require('react/addons');
var cx = React.addons.classSet;

module.exports = React.createClass({displayName: "exports",

    render:function() {
        return (
            React.createElement("header", {className: cx({ 'app-bar': true, 'promote-layer': true, open: this.props.isShowingMenu })}, 
                React.createElement("div", {className: "app-bar-container"}, 
                    React.createElement("button", {className: "menu", onClick: this.props.onToggleMenu}, React.createElement("img", {src: "images/hamburger.svg", alt: "Menu"})), 
                    React.createElement("h1", {className: "logo"}, "Web ", React.createElement("strong", null, "Starter Kit")), 
                    React.createElement("section", {className: "app-bar-actions"}
                    /* Put App Bar Buttons Here */
                    /* e.g <button><i className="icon icon-star"></i></button> */
                    )
                )
            )
        )
    }
});

},{"react/addons":"react/addons"}],"/Users/ben/projects/wsk/web-starter-kit/app/scripts/components/Main.jsx":[function(require,module,exports){
var React = require('react/addons');
var Router = require('react-router');
var $__0=    Router,Link=$__0.Link,RouteHandler=$__0.RouteHandler;

module.exports = React.createClass({displayName: "exports",
    render:function() {
        return (
            React.createElement("main", {onClick: this.props.onClick}, 
                React.createElement("h1", {id: "hello"}, "Hello!"), 
                React.createElement("p", null, "Welcome to Web Starter Kit."), 

                React.createElement("h2", {id: "get-started"}, "Get Started."), 
                React.createElement("p", null, "Read how to ", React.createElement("a", {href: "https://developers.google.com/web/starter-kit"}, "Get Started"), " or check out the ", React.createElement("a", {href: "styleguide.html"}, "Style Guide"), "."), 

                React.createElement("h2", null, "Articles"), 
                React.createElement("p", null, "Read some of my ", React.createElement(Link, {to: "articles"}, "articles"), ".")
            )
        )
    }
});

},{"react-router":"react-router","react/addons":"react/addons"}],"/Users/ben/projects/wsk/web-starter-kit/app/scripts/components/Nav.jsx":[function(require,module,exports){
var React = require('react/addons');
var cx = React.addons.classSet;

module.exports = React.createClass({displayName: "exports",

    render:function() {
        return (
            React.createElement("nav", {className: cx({ 'navdrawer-container': true, 'promote-layer': true, open: this.props.isShowingMenu, opened: true })}, 
                React.createElement("h4", null, "Navigation"), 
                React.createElement("ul", null, 
                    React.createElement("li", null, React.createElement("a", {href: "#hello", onClick: this.props.onLink}, "Hello")), 
                    React.createElement("li", null, React.createElement("a", {href: "#get-started", onClick: this.props.onLink}, "Get Started")), 
                    React.createElement("li", null, React.createElement("a", {href: "styleguide.html", onClick: this.props.onLink}, "Style Guide"))
                )
            )
        )
    }
});

},{"react/addons":"react/addons"}],"/Users/ben/projects/wsk/web-starter-kit/app/scripts/stores/ArticleStore.js":[function(require,module,exports){
'use strict';

var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../Dispatcher');
var ActionTypes = require('../Constants').ActionTypes;

var ArticleStore = (function(){for(var EventEmitter____Key in EventEmitter){if(EventEmitter.hasOwnProperty(EventEmitter____Key)){____Class0[EventEmitter____Key]=EventEmitter[EventEmitter____Key];}}var ____SuperProtoOfEventEmitter=EventEmitter===null?null:EventEmitter.prototype;____Class0.prototype=Object.create(____SuperProtoOfEventEmitter);____Class0.prototype.constructor=____Class0;____Class0.__superConstructor__=EventEmitter;

    function ____Class0() {
        this.articles = [];
        var that = this;
        Dispatcher.register(function(action)  {
            that.handleAction(action);
        });
    }

    ____Class0.prototype.handleAction=function(action) {
        if (action.type === ActionTypes.CREATE_ARTICLE) {
            this.add(action.data);
            this.emitChange();
        }
        return true;
    };

    ____Class0.prototype.addChangeListener=function(callback) {
        this.addListener('change', callback);
    };

    ____Class0.prototype.removeChangeListener=function(callback) {
        this.removeListener('change', callback);
    };

    ____Class0.prototype.emitChange=function() {
        this.emit('change');
    };

    ____Class0.prototype.getAll=function() {
        return this.articles;
    };

    ____Class0.prototype.add=function(article) {
        this.articles.push(article);
    };

return ____Class0;})();

module.exports = new ArticleStore();

},{"../Constants":"/Users/ben/projects/wsk/web-starter-kit/app/scripts/Constants.js","../Dispatcher":"/Users/ben/projects/wsk/web-starter-kit/app/scripts/Dispatcher.js","events":"events"}]},{},["./app/scripts/index.jsx"]);
