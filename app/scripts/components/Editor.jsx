var React = require('react/addons');
var cx = React.addons.classSet;
var Router = require('react-router');
var {Link, RouteHandler } = Router;

module.exports = React.createClass({

    render() {
        return ( 
            <div>
                <h1>Editor</h1>
                <RouteHandler />
            </div>
        );
    }
});
