import { NavLink } from 'react-router-dom'
import { darkTheme, lightTheme } from '../../Themes'
import classes from './Header.module.scss'

type TypeTheme = {
    theme: string
    mainColor: string
    iconColor: string
    textColor: string
    openHeader: string
}

type PropsType = {
    menu: boolean
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
    theme: TypeTheme
    setTheme: React.Dispatch<React.SetStateAction<TypeTheme>>
}

const Header: React.FC<PropsType> = ({ setMenu, menu, theme, setTheme }) => {
    const switchTheme = () => {
        if (theme.theme === 'dark') {
            setTheme(lightTheme)
        } else {
            setTheme(darkTheme)
        }
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__switchTheme} onClick={switchTheme}>
                <svg
                    width='30'
                    height='30'
                    viewBox='0 0 30 30'
                    className={classes.header__switchThemeSvg}
                    fill={theme.iconColor}
                >
                    <path d='M25.5924 4.40764C19.7166 -1.46822 10.2854 -1.47021 4.40764 4.40764C-1.46822 10.2834 -1.47021 19.7146 4.40764 25.5924C10.2834 31.4682 19.7146 31.4702 25.5924 25.5924C31.4682 19.7166 31.4702 10.2854 25.5924 4.40764ZM15 28.2396C7.69966 28.2396 1.76042 22.3003 1.76042 15C1.76042 7.69966 7.69966 1.76042 15 1.76042C22.3003 1.76042 28.2396 7.69966 28.2396 15C28.2396 22.3003 22.3003 28.2396 15 28.2396Z' />
                    <path d='M19.3148 10.1351C18.9518 9.81294 18.3964 9.84604 18.0743 10.2091C17.7521 10.572 17.7852 11.1275 18.1482 11.4496C19.1631 12.3503 19.7452 13.6444 19.7452 15.0001C19.7452 17.6166 17.6166 19.7453 15 19.7453C12.3835 19.7453 10.2549 17.6166 10.2549 15.0001C10.2549 13.631 10.8466 12.3284 11.8783 11.4263C12.2436 11.1068 12.2809 10.5517 11.9614 10.1863C11.6419 9.82097 11.0868 9.78383 10.7214 10.1033C9.30802 11.3391 8.49736 13.1239 8.49736 15.0001C8.49736 18.5857 11.4144 21.5027 15 21.5027C18.5856 21.5027 21.5026 18.5857 21.5026 15.0001C21.5027 13.1422 20.7052 11.3691 19.3148 10.1351Z' />
                    <path d='M15 13.5355C15.4853 13.5355 15.8788 13.142 15.8788 12.6568V7.97018C15.8788 7.48488 15.4853 7.09145 15 7.09145C14.5147 7.09145 14.1213 7.48488 14.1213 7.97018V12.6568C14.1213 13.1421 14.5147 13.5355 15 13.5355Z' />
                </svg>
            </div>
            <NavLink to={'/'} className={classes.header__icon}>
                <svg
                    width='80'
                    height='50'
                    viewBox='0 0 677.000000 369.000000'
                    className={classes.header__iconSvg}
                    fill={theme.iconColor}
                >
                    <g transform='translate(0.000000,369.000000) scale(0.100000,-0.100000)'>
                        <path
                            d='M990 3324 c-1 -36 210 -398 256 -439 6 -5 30 -36 54 -68 40 -57 66
                            -86 195 -225 94 -101 325 -323 405 -388 19 -16 44 -37 55 -48 38 -35 370 -302
                            455 -366 96 -72 199 -156 218 -179 17 -20 15 -113 -4 -208 -44 -223 -55 -320
                            -43 -366 17 -63 144 -182 477 -450 104 -83 202 -161 217 -172 16 -11 44 -32
                            63 -48 19 -15 40 -27 46 -27 6 0 30 15 52 33 23 17 52 39 64 47 25 17 328 258
                            376 299 16 14 56 49 88 76 123 105 213 200 225 238 14 40 3 128 -40 349 -22
                            111 -25 207 -6 229 18 23 121 107 217 179 84 63 416 330 455 366 11 11 46 41
                            78 67 106 90 323 302 437 428 157 172 281 342 377 514 42 77 82 173 59 142
                            -79 -104 -353 -360 -489 -459 -189 -136 -473 -322 -527 -345 -8 -3 -22 -11
                            -30 -18 -25 -20 -254 -142 -600 -318 -241 -123 -355 -186 -388 -217 -27 -26
                            -27 -47 -2 -186 31 -163 60 -354 60 -395 0 -48 -25 -117 -53 -147 -40 -44
                            -147 -114 -249 -164 l-101 -50 -61 29 c-163 77 -280 156 -316 216 -11 17 -23
                            52 -26 77 -8 49 15 238 46 380 32 146 36 207 14 231 -31 34 -147 100 -424 241
                            -146 75 -294 151 -330 170 -36 20 -101 54 -145 78 -44 23 -87 48 -95 54 -14
                            11 -42 27 -85 50 -11 6 -33 20 -50 30 -16 11 -55 35 -85 54 -229 146 -373 252
                            -533 392 -103 90 -272 264 -294 304 -7 11 -12 16 -13 10z'
                        />
                    </g>
                </svg>
            </NavLink>
            <div
                className={classes.header__menu}
                onClick={() => setMenu(!menu)}
            >
                <div
                    className={classes.header__line}
                    style={{ backgroundColor: theme.iconColor }}
                ></div>
            </div>
            <div
                className={
                    menu
                        ? classes.header__menuOpen + ' ' + classes.active
                        : classes.header__menuOpen
                }
                style={{ backgroundColor: theme.openHeader }}
            ></div>
        </header>
    )
}

export default Header
