export default async function myWork() {
  const doc = window.document;
  content.innerHTML = ' ';
  let endpoint = 'https://api.github.com/users/abdulrauf84/repos';
  const repoList = await fetch(endpoint)
    .then(response => response.json())
    .catch(err => console.log('err', err));
  const title = doc.createElement('h3');
  title.textContent = 'My Work';
  content.appendChild(title);
  const list = doc.createElement('ul');
  content.appendChild(list);
  repoList.map(repo => {
    const listItem = doc.createElement('li');
    listItem.id = 'repo';
    let repoName = repo.name;
    const repoLink = document.createElement('a');
    repoLink.className = 'repoLink';
    repoLink.href = repo.html_url;
    repoLink.textContent = repoName.toLowerCase();
    listItem.appendChild(repoLink);
    list.appendChild(listItem);
  });
}
