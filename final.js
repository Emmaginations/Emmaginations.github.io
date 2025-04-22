function Home() {
    function software() {
        window.location.href = "./software.html"
    }

    function design() {
        window.location.href = "./design.html"
    }

    function dance() {
        window.location.href = "./dance.html"
    }

    return (
      <div>
        <div className="card">
          <div className="card-left">
            <h1>Hi, I'm Emma Zajonc!</h1>
            <p>
              I'm a software engineering student passionate about integrating creativity with my technical endeavors.
            </p>
          </div>
          <div className="card-right">
            <img src="profile.jpg" alt="Profile" />
          </div>
        </div>

        <div className="button-group">
          <button onClick={software}>Software</button>
          <button onClick={design}>Design</button>
          <button onClick={dance}>Dance</button>
        </div>
  
        <div className="resume_card">
            <div className="resume-section">
              <p>Interested? Download my resume below:</p>
              <a href="./Resume_Emma_Zajonc.pdf" download>
                <button>Download Resume</button>
              </a>
              <p>Or contact me today!</p>
              <a href="./contact.html">
                <button>Contact Me</button>
              </a>
            </div>
        </div>  
      </div>
    );
  }


const home = ReactDOM.createRoot(document.getElementById("home"));
home.render(<Home />);

