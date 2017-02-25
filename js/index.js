import "../css/bootstrap.css";
import "../css/app.scss";
import "../font-awesome/css/font-awesome.css";
console.log('contact');
let angular = require('angular');
let app = angular.module('app', []);
let generateImage = function (src, id, styles) {
    let img = document.createElement('img');
    img.style.width = styles;
    img.style.height = styles;
    img.src = require('../img/' + src);
    document.getElementById(id).appendChild(img);
};
generateImage('banner-inner.png', 'img_container', '100%');
generateImage('article-first.png', 'article-first', '40%');
generateImage('article-second.png', 'article-second', '100%');
generateImage('article-third.png', 'article-third', '100%');
generateImage('smoothie.png', 'header-logo', '40%');
// require('../css/bootstrap.css');
// require('../css/app.scss');
require('./bands/band-info')(app);
require('./bands/bandList')(app);