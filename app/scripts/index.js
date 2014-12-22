require('./default');
var articles = require('./components/articles.jsx');
var React = require('react');
React.render(articles(), document.getElementById('articles'));
