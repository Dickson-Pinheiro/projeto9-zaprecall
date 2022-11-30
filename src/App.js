import logo from "./img/logo.png"

function App() {
  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={logo} />
        <h1>ZapRecall</h1>
      </div>
      <div className="pergunta-fechada">
        <p>pergunta 1</p>
        <ion-icon name="play-outline"></ion-icon>
      </div>
      <div className="pergunta-fechada">
        <p>pergunta 2</p>
        <ion-icon name="play-outline"></ion-icon>
      </div>
      <div className="pergunta-fechada">
        <p>pergunta 3</p>
        <ion-icon name="play-outline"></ion-icon>
      </div>
      <div className="pergunta-fechada">
        <p>pergunta 4</p>
        <ion-icon name="play-outline"></ion-icon>
      </div>
      <div className="footer-concluidos">
        0/4 CONCLUÍDOS
      </div>
    </div>
  );
}

export default App;
