# CryptoDash - Real-Time Cryptocurrency Tracker

A modern, responsive cryptocurrency tracking dashboard built with vanilla JavaScript and CoinGecko API.

## Features

- 🔍 Search for any cryptocurrency
- 📊 7-day price history charts
- ⭐ Favorites management
- 💱 USD to INR currency converter
- 📈 Top gainers and losers widget
- 🌙 Dark mode support
- 📱 Fully responsive design

## Project Structure

```
crypto-dashboard/
│── components/
│    ├── header.html
│    └── footer.html
│── pages/
│    ├── index.html
│    └── about.html
│── css/
│    ├── base.css
│    ├── layout.css
│    ├── components.css
│    └── dashboard.css
│── js/
│    ├── loader.js
│    ├── api.js
│    ├── utils.js
│    └── dashboard.js
│── images/
│    └── logo.png
│── README.md
```

## Setup Instructions

1. Clone the repository
2. Open `pages/index.html` in a web browser
3. No build process required - pure vanilla JavaScript!

## Technologies Used

- HTML5
- CSS3 (CSS Variables for theming)
- JavaScript (ES6 Modules)
- Chart.js for visualizations
- CoinGecko API for market data

## API Usage

This project uses the free CoinGecko API. No API key required.

## Features Implementation

### Core Features (70%)
- ✅ Search bar for cryptocurrencies
- ✅ Live data fetch from API
- ✅ Current price, 24h change, market cap display
- ✅ 7-day price history chart
- ✅ Favorites saved in LocalStorage

### Additional Features (30%)
- ✅ USD to INR currency converter
- ✅ Top Gainers/Losers widget
- ✅ Dark mode toggle
- ✅ Loading spinner

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT License - feel free to use for learning purposes

## Credits

Developed by JASIQ Labs Training
```

---

## Deployment Notes

To deploy on Render.com:

1. Create a new Static Site
2. Connect your GitHub repository
3. Set build command: (leave empty for static sites)
4. Set publish directory: `pages`
5. Deploy!

Your dashboard will be live at: `https://cryptodash.onrender.com`
```