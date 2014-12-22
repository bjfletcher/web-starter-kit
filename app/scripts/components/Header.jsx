var React = require('react/addons');
var cx = React.addons.classSet;

module.exports = React.createClass({

    render() {
        return (
            <header className={cx({ 'app-bar': true, 'promote-layer': true, open: this.props.isShowingMenu })}>
                <div className="app-bar-container">
                    <button className="menu" onClick={this.props.onToggleMenu}><img src="images/hamburger.svg" alt="Menu" /></button>
                    <h1 className="logo">Web <strong>Starter Kit</strong></h1>
                    <section className="app-bar-actions">
                    {/* Put App Bar Buttons Here */}
                    {/* e.g <button><i className="icon icon-star"></i></button> */}
                    </section>
                </div>
            </header>
        )
    }
});
