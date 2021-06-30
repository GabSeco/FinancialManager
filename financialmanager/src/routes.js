import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Emprestimos } from './screens/Emprestimos.jsx'
import { Relatorios } from './screens/Relatorios.jsx'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/relatorios" exact component={Relatorios}/>
                <Route path="/emprestimos" exact component={Emprestimos}/>
            </Switch>
        </BrowserRouter>
    )
}