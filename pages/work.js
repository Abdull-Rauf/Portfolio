export default async function myWork() {
  const doc = window.document;
  content.innerHTML = ' ';
  let endpoint = 'https://api.github.com/users/abdulrauf84/repos';
  const episodesList = await fetch(endpoint)
    .then(response => response.json())
    .catch(err => console.log('err', err));
  const title = doc.createElement('h3');
  title.textContent = 'My Work';
  content.appendChild(title);
  const list = doc.createElement('ul');
  content.appendChild(list);
  episodesList.map(repo => {
    const listItem = doc.createElement('li');
    listItem.textContent = repo.name;
    list.appendChild(listItem);
  });
}
