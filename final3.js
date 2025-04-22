function Software() {
    return (
      <div>
        <h2 className="page-title">My Software Projects</h2>

        <div className="card">
          <div className="project-left">
            <img src="./fichas.png" alt="Project One" />
          </div>
          <div className="project-right">
            <h2>Economia de Fichas</h2>
            <ul>
              <li>Built in Spanish with team in Quito, Ecuador</li>
              <li>Full stack task management app for neurodivergent users</li>
              <li>Integration with a Firebase database</li>
              <li>Login, Signup, and Password Recovery functionality</li>
            </ul>
           </div>
        </div>
      </div>
    );
  }

const software = ReactDOM.createRoot(document.getElementById("software"));
software.render(<Software />);