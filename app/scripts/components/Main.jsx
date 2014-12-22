var React = require('react/addons');
var Router = require('react-router');
var {Link, RouteHandler } = Router;

module.exports = React.createClass({
    render() {
        return (
            <main onClick={this.props.onClick}>
                <h1 id="hello">Hello!</h1>
                <p>Welcome to Web Starter Kit.</p>

                <h2 id="get-started">Get Started.</h2>
                <p>Read how to <a href="https://developers.google.com/web/starter-kit">Get Started</a> or check out the <a href="styleguide.html">Style Guide</a>.</p>

                <h2>Articles</h2>
                <p>Read some of my <Link to='articles'>articles</Link>.</p>
            </main>
        )
    }
});
