import databaseConfig from './database/db.js';
import aboutPage from './pages/about.js';
import contactMe from './pages/contact.js';
import myWork from './pages/work.js';
import homePage from './pages/home.js';
import createNavList from './createNavList.js';
import navItems from './routes.js';

databaseConfig();

createNavList(navItems, changePage);

function changePage() {
  switch (location.pathname) {
    case '/':
      homePage();
      break;
    case '/about':
      aboutPage();
      break;
    case '/work':
      myWork();
      break;
    case '/contact':
      contactMe();
      break;
    default:
      break;
  }
}

window.onload = () => changePage();
window.onpopstate = () => changePage();
