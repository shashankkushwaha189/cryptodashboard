import { fetchCoin, fetchHistory, fetchTopMovers } from "./api.js";
import {
  saveFavorite,
  loadFavorites,
  usdToInr,
  initTheme,
  toggleTheme
} from "./utils.js";

// Apply saved theme
initTheme();

// 🔹 EVENT DELEGATION (works even after header loads)
document.addEventListener("click", (e) => {
  if (e.target.id === "themeToggle") {
    toggleTheme();
  }
});

let chart;
const chartCanvas = document.getElementById("priceChart");

const search = document.getElementById("search");
const results = document.getElementById("results");
const favList = document.getElementById("favList");
const gainers = document.getElementById("gainers");
const losers = document.getElementById("losers");

search.onkeypress = async (e) => {
  if (e.key === "Enter" && search.value.trim()) {
    try {
      const d = await fetchCoin(search.value.toLowerCase());

      results.innerHTML = `
        <div class="card">
          <h2>${d.name} (${d.symbol.toUpperCase()})</h2>
          <p class="price">$${d.market_data.current_price.usd.toLocaleString()}</p>
          <p class="price-inr">₹${usdToInr(d.market_data.current_price.usd)}</p>
          <p class="change ${
            d.market_data.price_change_percentage_24h > 0 ? "up" : "down"
          }">
            ${d.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
          <button id="f">⭐ Add to Favorites</button>
        </div>
      `;

      document.getElementById("f").onclick = () => {
        saveFavorite(d.id);
        renderFav();
      };

      renderChart(d.id);
    } catch {
      results.innerHTML = `<p class="error">Coin not found</p>`;
    }
  }
};

const renderFav = () =>
  (favList.innerHTML = loadFavorites()
    .map((f) => `<li>${f}</li>`)
    .join(""));

const renderMovers = async () => {
  const d = await fetchTopMovers();
  const s = [...d].sort(
    (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
  );

  gainers.innerHTML = s
    .slice(0, 5)
    .map((c) => `<li class="up">${c.symbol.toUpperCase()} +${c.price_change_percentage_24h.toFixed(2)}%</li>`)
    .join("");

  losers.innerHTML = s
    .slice(-5)
    .reverse()
    .map((c) => `<li class="down">${c.symbol.toUpperCase()} ${c.price_change_percentage_24h.toFixed(2)}%</li>`)
    .join("");
};

renderFav();
renderMovers();

async function renderChart(coin) {
  const h = await fetchHistory(coin);
  const ctx = chartCanvas.getContext("2d");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: h.prices.map((p) => new Date(p[0]).toLocaleDateString()),
      datasets: [
        {
          data: h.prices.map((p) => p[1]),
          borderColor: "#2563eb",
          backgroundColor: "rgba(37,99,235,0.1)",
          tension: 0.4,
          fill: true,
          pointRadius: 0,
        },
      ],
    },
    options: { plugins: { legend: { display: false } } },
  });
}
