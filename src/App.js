
import './App.css';
import Form from './components/Form/Form'

function App() {

  const submitHandler = (e, name, password) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <header className="App-header">
      <Form onSubmit={submitHandler}/>
      </header>
    </div>
  );
}

export default App;