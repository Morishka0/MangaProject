import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React, { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Preview from './components/Preview/Preview'
import { BrowserRouter, Route } from 'react-router-dom'
import { darkTheme } from './Themes'
import Catalog from './components/Catalog/Catalog'
import MangaItem from './components/MangaItem/MangaItem'

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
                <div
                    className='wrapper'
                    style={{
                        backgroundColor: theme.mainColor,
                        color: theme.textColor,
                    }}
                >
                    <Header
                        setMenu={setMenu}
                        menu={menu}
                        setTheme={setTheme}
                        theme={theme}
                    />
                    <div className='container'>
                        <div className='content'>
                            <Route
                                path={'/'}
                                render={() => (
                                    <Preview menu={menu} theme={theme} />
                                )}
                                exact
                            />
                            <Route
                                path={'/catalog'}
                                render={() => <Catalog />}
                                exact
                            />
                            <Route
                                path={'/catalog/item/:title?'}
                                render={() => <MangaItem />}
                                strict
                            />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
