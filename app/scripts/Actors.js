'use strict';

var Dispatcher = require('./Dispatcher');
var ActionTypes = require('./Constants').ActionTypes;

module.exports = {

    createArticle(text) {
        Dispatcher.dispatch({
            type: ActionTypes.CREATE_ARTICLE,
            text: text
        });
    }

};