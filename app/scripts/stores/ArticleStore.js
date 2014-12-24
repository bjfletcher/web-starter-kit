'use strict';

var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../Dispatcher');
var ActionTypes = require('../Constants').ActionTypes;

var ArticleStore = class extends EventEmitter {

    constructor() {
        this.articles = require('./articles.json');
        var that = this;
        Dispatcher.register(action => {
            that.handleAction(action);
        });
    }

    handleAction(action) {
        if (action.type === ActionTypes.CREATE_ARTICLE) {
            this.add(action.data);
            this.emitChange();
        }
        return true;
    }

    addChangeListener(callback) {
        this.addListener('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    emitChange() {
        this.emit('change');
    }

    getAll() {
        return this.articles;
    }

    add(article) {
        this.articles.push(article);
    }

};

module.exports = new ArticleStore();
