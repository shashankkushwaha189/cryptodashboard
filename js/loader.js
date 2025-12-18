async function load(id, file) {
  const r = await fetch(file);
  document.getElementById(id).innerHTML = await r.text();
}

load("header", "../components/header.html");
load("footer", "../components/footer.html");
