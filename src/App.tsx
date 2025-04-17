import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  return (
    <div className="App">
      <h1>Translate</h1>
      <button
        onClick={() => {
          dispatch({ type: "SET_FROM_LANGUAGE", payload: "es" });
        }}
      >
        Cambiar a Español
      </button>
    </div>
  );
}

export default App;
