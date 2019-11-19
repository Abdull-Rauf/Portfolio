export default function aboutPage() {
  const doc = window.document;
  content.innerHTML = '';
  const title = doc.createElement('h3');
  const aboutText = doc.createElement('p');
  aboutText.className = 'text';
  aboutText.textContent = `Hi! My name is Abdul Rauf. I am a Web Developer, 
  and I'm very passionate and dedicated to my work. I enjoy every step of the design process, from
  discussion and collaboration to concept and execution, but I find the most satisfaction
  in seeing the finished product do everything for you that it was created to do.`;

  title.textContent = 'About Me';
  content.appendChild(title);
  content.appendChild(aboutText);
}
