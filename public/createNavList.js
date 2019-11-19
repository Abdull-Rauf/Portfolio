function createNavList(navItems, changePage) {
  const nav = document.getElementById('nav');
  const ul = document.createElement('ul');
  nav.appendChild(ul);

  return navItems.map(({ id, name, path }) => {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.className = 'list-item';
    anchor.addEventListener('click', event => {
      event.preventDefault();
      history.pushState(id, name, path);
      changePage();
    });
    anchor.appendChild(document.createTextNode(name));
    li.appendChild(anchor);
    return ul.appendChild(li);
  });
}
export default createNavList;
