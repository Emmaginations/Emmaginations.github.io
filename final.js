function App() {
    return (
      <div>
        {/* Centered Block */}
        <div className="card">
          <div className="card-left">
            <h2>Hello, I'm Emma Zajonc!</h2>
            <p>
              I'm a software engineering student passionate about integrating creativity with my technical endeavors.
            </p>
          </div>
          <div className="card-right">
            <img src="profile.jpg" alt="Profile" />
          </div>
        </div>
  
        {/* Buttons */}
        <div className="button-group">
          <button>Software</button>
          <button>Design</button>
          <button>Dance</button>
        </div>
  
        {/* Resume Download Section */}
        <div className="resume-section">
          <p>Want to know more? Download my resume below:</p>
          <a href="./resume.docx" download>
            <button>Download Resume</button>
          </a>
        </div>
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);