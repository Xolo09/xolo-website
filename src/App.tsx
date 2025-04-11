// No import needed
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>$XOLO Meme Coin</h1>
        <p>Decentralized. Deflationary. Perro-powered.</p>

        <div className="buttons">
          <button className="burn-button">🔥 Burn Tokens</button>
          <button className="transfer-button">💸 Transfer with Tax</button>
        </div>

        <div className="links">
          <a href="/whitepaper.pdf" target="_blank" rel="noreferrer">📄 View Whitepaper</a>
          <a href="https://twitter.com/XoloCoin" target="_blank" rel="noreferrer">🐦 Twitter</a>
          <a href="https://github.com/Xolo09/xolo-website" target="_blank" rel="noreferrer">💻 GitHub</a>
          <a href="https://t.me/XoloCoin" target="_blank" rel="noreferrer">💬 Telegram</a>
        </div>
      </header>
    </div>
  );
}

export default App;
