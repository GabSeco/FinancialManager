import { useEffect } from 'react';
import api from './services/api'

function App() {
  
  useEffect(() => {
    api.get('/saidas').then((resp) => {
      console.log(resp)
    })
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
