var React = require('react/addons');
var cx = React.addons.classSet;

module.exports = React.createClass({

    render() {
        return (
            <nav className={cx({ 'navdrawer-container': true, 'promote-layer': true, open: this.props.isShowingMenu, opened: true })}>
                <h4>Navigation</h4>
                <ul>
                    <li><a href="#hello" onClick={this.props.onLink}>Hello</a></li>
                    <li><a href="#get-started" onClick={this.props.onLink}>Get Started</a></li>
                    <li><a href="styleguide.html" onClick={this.props.onLink}>Style Guide</a></li>
                </ul>
            </nav>
        )
    }
});
