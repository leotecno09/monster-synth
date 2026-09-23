// test router

window.addEventListener('hashchange', () => {
  const route = window.location.hash.slice(1);
  render(route);
});

function render(route) {
  const app = document.getElementById("app");

  if (route === '/how-it-works') {
    app.innerHTML = '<h1>How it works</h1>';
  } else if (route === '/creator') {
    app.innerHTML = '<h1>Creator</h1>';
  } else {
    app.innerHTML = '<h1>Base</h1>';
  }
}

render(window.location.hash.slice(1));
