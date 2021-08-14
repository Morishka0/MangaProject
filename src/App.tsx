import { useState } from 'react'
import './App.scss'
import Header from './Header/Header'
import { darkTheme } from './Themes'

const App: React.FC = () => {
    const [theme, setTheme] = useState(darkTheme)
    return (
        <div
            className='wrapper'
            style={{
                backgroundColor: theme.mainColor,
                color: theme.textColor,
            }}
        >
            <Header setTheme={setTheme} theme={theme} />
            <div className='container'></div>
        </div>
    )
}

export default App
