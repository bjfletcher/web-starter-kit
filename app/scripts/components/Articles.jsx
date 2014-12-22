var React = require('react/addons');
var Store = require('../stores/ArticleStore');
var Actors = require('../Actors');

module.exports = React.createClass({

    getInitialState() {
        return {
            articles: Store.getAll()
        }
    },

    componentDidMount() {
        Store.addChangeListener(this._onStoreChange);
    },

    componentWillUnmount() {
        Store.removeChangeListener(this._onStoreChange);
    },

    _onStoreChange() {
        this.setState({
            articles: Store.getAll()
        });
    },

    render() {
        var articles = [];
        this.state.articles.map(v => {
            articles.push(<p>{v}</p>);
        });
        return (
            <main onClick={this.props.onClick}>
                <h2>
                    Articles
                </h2>
                {articles}
                <a href className="button--primary" onClick={this.onCreateArticle}>Create Article</a>
            </main>
        );
    },

    onCreateArticle() {
        Actors.createArticle('Some Fruit');
        event.preventDefault();
    }

});