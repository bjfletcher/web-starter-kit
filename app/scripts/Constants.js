'use strict';

module.exports = {
    ActionTypes: [
        'CREATE_ARTICLE',
        'RECEIVE_CREATED_ARTICLE'
    ].reduce((o, v) => { o[v] = v; return o; }, {})
};