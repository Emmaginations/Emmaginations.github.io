function Navigation() {
    return (
    <div className="navdiv">
    {/* Navigation Bar */}
    <nav className="navbar">
          <div className="navbar-title">Emma Zajonc</div>
          <div className="navbar-links">
            <a href="./index.html">Home</a>
            <a href="./software.html">Software</a>
            <a href="./design.html">Design</a>
            <a href="./dance.html">Dance</a>
            <a href="./contact.html">Contact</a>
          </div>
    </nav>
    </div>
    )
}

const nav = ReactDOM.createRoot(document.getElementById("nav"));
nav.render(<Navigation />);