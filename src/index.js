import React from "react";
import ReactDOM from "react-dom";
import "./global.scss";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="form-fild">
            <label htmlFor="github_username">Usuário do GitHub:</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="form-fild">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="form-group">
            <div className="form-fild">
              <label htmlFor="lat">Latitude</label>
              <input name="lat" id="lat" required></input>
            </div>
            <div className="form-fild">
              <label htmlFor="lon">Longitude</label>
              <input name="lon" id="lon" required></input>
            </div>
          </div>

          <button type="submit">CRIAR</button>
        </form>
      </aside>
      <main>main</main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
