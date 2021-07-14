import Home from './components/Home';
import About from './components/About';
import Article from './components/Article';

import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom';

import Poligono from 'Poligono'

import logo from './logo.svg'
import './App.css'
import './index.css'

import myLayer from './demo.js'

const options = {
    origins: [],
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                    <div id="mapid">{myLayer}</div>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

            <div className={style.app}>
                <Poligono />
                <main className={style.wrapper}>
                    <Suspense fallback={<div>Loading…</div>}>
                        <Route path="/" exact component={Home} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/blog/:title" component={Article} />
                        <Route path="/about" exact component={About} />
                        <Route
                            path="/"
                            exact
                            component={withQuicklink(Home, options)}
                        />
                        <Route
                            path="/blog"
                            exact
                            component={withQuicklink(Blog, options)}
                        />
                        <Route
                            path="/blog/:title"
                            component={withQuicklink(Article, options)}
                        />
                        <Route
                            path="/about"
                            exact
                            component={withQuicklink(About, options)}
                        />
                    </Suspense>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default App
