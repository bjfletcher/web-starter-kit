require('./default');
var Articles = require('./components/Articles.jsx');
var React = require('react');
var Store = require('./stores/ArticleStore.js');
Store.add('ReactJS');
Store.add('Browserify');
React.render(<Articles />, document.getElementById('articles'));
