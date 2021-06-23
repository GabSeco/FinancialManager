import { useEffect } from 'react';
import api from './services/api'
import Primeiro from './screens/Primeiro.jsx'

function App() {

  /*useEffect(() => {
    api.post('/devedores', {nome: 'Gustavo Pedro Bessa', cpf: '0000000000', contato: '(34)99999999'}).then((resp) => {
      console.log(resp)
    })
  }, [])*/

  useEffect(() => {
    api.get('/devedores').then((resp) => {
      console.log(resp)
    })
  }, [])

  function criarDevedor() {
    api.post('/devedores', {nome: 'Gustavo Pedro Bessa', cpf: '0000000000', contato: '(34)99999999'}).then((resp) => {
      console.log(resp)
    })
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
