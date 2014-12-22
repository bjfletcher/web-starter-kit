'use strict';

var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../Dispatcher');
var Constants = require('../Constants');

var ArticleStore = class extends EventEmitter {

    constructor() {
        this.articles = [];
        Dispatcher.register(this.handleAction);
    }

    handleAction(action) {
        if (action.type === Constants.CREATE_ARTICLE) {
            this.add(action.data);
            this.emitChange();
        }
        return true;
    }

    emitChange() {
        this.emit('change');
    }

    add(article) {
        this.articles.push(article);
    }

};

module.exports = new ArticleStore();
