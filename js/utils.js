export const loadFavorites = () =>
  JSON.parse(localStorage.getItem("fav")) || [];

export const saveFavorite = (c) => {
  const f = loadFavorites();
  if (!f.includes(c)) {
    f.push(c);
    localStorage.setItem("fav", JSON.stringify(f));
  }
};

export const usdToInr = (u) => (u * 83).toFixed(2);

// Apply saved theme
export const initTheme = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};

// Toggle theme (About page protected)
export const toggleTheme = () => {
  if (document.body.classList.contains("about-page")) return;

  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
};
