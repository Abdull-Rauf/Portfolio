import databaseConfig from './database/db.js';
import aboutPage from './pages/about.js';
import contactMe from './pages/contact.js';
import myWork from './pages/work.js';

databaseConfig();

const doc = window.document;
const content = doc.getElementById('content');
const menuItems = doc.getElementsByClassName('list-item');
const nav = [...Array(menuItems.length)];

nav.map((item, index) => {
  menuItems[index].addEventListener('click', event => {
    event.preventDefault();
    history.pushState(null, null, event.target.href);
    changePage();
  });
});
const changePage = () => {
  switch (doc.location.pathname) {
    case '/':
      console.log('home');
      aboutPage();
      break;

    case '/work':
      console.log('work');
      myWork();

      break;
    case '/contact':
      contactMe();
      break;
    default:
      console.log('object');
      break;
  }
};
