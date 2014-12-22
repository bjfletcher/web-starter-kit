var React = require('react/addons');
var Router = require('react-router');
var { DefaultRoute, Link, NotFoundRoute, Redirect, Route, RouteHandler } = Router;

var App = require('./components/App.jsx');
var Main = require('./components/Main.jsx');
var Articles = require('./components/Articles.jsx');
var ArticleStore = require('./stores/ArticleStore');

ArticleStore.add('ReactJS');
ArticleStore.add('Browserify');

// TODO: understand what path is if not defined - e.g., remove path=articles for name=articles
var routes = (
    <Route handler={App} path='/'>
        <DefaultRoute handler={Main} />
        <Route name='articles' handler={Articles} />
    </Route>
);

//Router.run(routes, function (Handler) {
//  React.render(<Handler />, document.body);
//});

// Or, if you'd like to use the HTML5 history API for cleaner URLs:

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.body);
});

//React.render(<App />, document.body);

/*
server-side rendering:

Router.run(routes, '/about', (Handler, state) => {
    var html = React.renderToString(<Handler />);
    console.debug(html);
});
*/
