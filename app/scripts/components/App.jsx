var React = require('react/addons');
var cx = React.addons.classSet;
var Router = require('react-router');
var {Link, RouteHandler } = Router;
var Header = require('./Header.jsx');
var Nav = require('./Nav.jsx');
var Main = require('./Main.jsx');

module.exports = React.createClass({

    getInitialState() {
        return {
            isShowingMenu: false
        }
    },

    onToggleMenu() {
        this.setState({ isShowingMenu: !this.state.isShowingMenu }); 
    },

    onCloseMenu() {
        console.log('closing!');
        this.setState({ isShowingMenu: false });
        event.preventDefault();
    },

    render() {
        return ( 
            <div className='app'>
                <Header isShowingMenu={this.state.isShowingMenu} onToggleMenu={this.onToggleMenu} />
                <Nav isShowingMenu={this.state.isShowingMenu} onLink={this.onCloseMenu} />
                <RouteHandler onClick={this.onCloseMenu} />
            </div>
        );
    }
});
