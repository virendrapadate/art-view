import React from 'react';
import { render } from 'react-dom'

import { Header } from "./components/Header/Header.jsx";
import { Home} from "./pages/Home/Home.jsx"

class App extends React.Component {
    render () {
        return (
            <div>
                <header className="row-fluid"><Header/></header>
                <div className="container page-container">                    
                    <Home/>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));