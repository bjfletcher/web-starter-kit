var React = require('react/addons');
var Store = require('../stores/ArticleStore');
var Actors = require('../Actors');
var Router = require('react-router');
var {Link, RouteHandler } = Router;

module.exports = React.createClass({

    mixins: [ Router.State ],

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
        var articleId = this.getParams().articleId;
        var article;
        this.state.articles.forEach(thatArticle => {
            if (thatArticle.id === articleId) {
                article = thatArticle;
            }
        });
        var comments = [];
        article.comments.map(comment => {
            comments.push(
                <article>
                    <h2>Comment</h2>
                    <p>{comment.body}</p>
                </article>
            );
        });
        return (
            <main onClick={this.props.onClick}>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
                <h2>Comments</h2>
                {comments}
                <Link to='articles' className="button--primary">Go Back</Link>
            </main>
        );
    },

    onCreateArticle() {
        Actors.createArticle('Some Fruit');
        event.preventDefault();
    }

});