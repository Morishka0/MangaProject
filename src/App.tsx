<<<<<<< HEAD
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React, { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Preview from './components/Preview/Preview'
import { BrowserRouter, Route } from 'react-router-dom'
import { darkTheme } from './Themes'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
})

const App: React.FC = () => {
    const [menu, setMenu] = useState(false)
    const [theme, setTheme] = useState(darkTheme)

    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <div className='wrapper' style={{
                backgroundColor: theme.mainColor,
                color: theme.textColor,
            }}>
                    <Header setMenu={setMenu} menu={menu} setTheme={setTheme} theme={theme} />
                    <div className='container'>
                        <Route
                            path={'/'}
                            render={() => <Preview menu={menu} />}
                            exact
                        />
                    </div>
                </div>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
