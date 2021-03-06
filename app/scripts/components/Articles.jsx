var React = require('react/addons');
var Store = require('../stores/ArticleStore');
var Actors = require('../Actors');
var Router = require('react-router');
var {Link, RouteHandler } = Router;

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
        this.state.articles.map(article => {
            articles.push(
                <article>
                    <h2>{article.title}</h2>
                    <p>{article.body}</p>
                    <Link to='article' params={{articleId: article.id}} className='cta--primary'>Read More</Link>
                </article>
            );
        });
        return (
            <main onClick={this.props.onClick}>
                <h1>
                    Articles
                </h1>
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