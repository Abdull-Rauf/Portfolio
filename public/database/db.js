export default function databaseConfig() {
  var firebaseConfig = {
    apiKey: 'AIzaSyBytynh8RQ8_36APA_qwqvy-ZjGKshCMhE',
    authDomain: 'portfolio-contact-aa89e.firebaseapp.com',
    databaseURL: 'https://portfolio-contact-aa89e.firebaseio.com',
    projectId: 'portfolio-contact-aa89e',
    storageBucket: 'portfolio-contact-aa89e.appspot.com',
    messagingSenderId: '977290285400',
    appId: '1:977290285400:web:ffa89f3a3c78bcce6a552d',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
