export default function aboutPage() {
  const doc = window.document;
  content.innerHTML = '';
  const title = doc.createElement('h3');
  const p = doc.createElement('p');

  title.textContent = 'About Me';
  content.appendChild(title);
}
