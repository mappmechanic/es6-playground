import './styles/app.css'
import appTemplate from './app.html'
import controller from './controller'
// We can use any ES6 syntax supported by Babel here now!
var body = document.querySelector('body');
body.innerHTML = appTemplate;
