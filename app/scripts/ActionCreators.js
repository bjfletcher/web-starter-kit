var Dispatcher = require('./Dispatcher');
var Backend = require('./Backend');
var ArticleStore = require('./stores/ArticleStore');
var ActionTypes = require('./Constants').ActionTypes;

module.exports = {

    createArticle(text) {
        Dispatcher.handleViewAction({
            type: ActionTypes.CREATE_ARTICLE,
            text: text
        });
        var Article = ArticleStorage.getCreatedArticleData(text);
        Backend.createArticle(Article);
  }

};