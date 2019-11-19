export default function homePage() {
  const doc = window.document;
  content.innerHTML = '';
  const div = doc.createElement('div');
  div.id = 'profile-pic';
  const img = doc.createElement('IMG');
  img.src = '/images/profile-pic.jpg';
  const title = doc.createElement('h3');
  title.textContent = `Abdul Rauf`;
  const homePageText = doc.createElement('p');
  homePageText.className = 'text';
  homePageText.textContent = `Skilled Full Stack Developer who excels at 
  multiple juggling tasks while working under pressure and want to gain experience 
  in Technologies and Product development environments whereI can utilize 
  my potential to its peak and quench my thirst for knowledge and Experience.`;
  div.appendChild(img);
  div.appendChild(title);
  div.appendChild(homePageText);
  content.appendChild(div);
}
