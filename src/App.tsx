import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Preview from './components/Preview/Preview'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
})

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <div className='wrapper'>
                <Header />
                <div className='container'>
                    <Preview />
                </div>
            </div>
        </ApolloProvider>
    )
}

export default App
