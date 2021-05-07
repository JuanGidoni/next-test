import { useState } from "react"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig"
import '../styles/globals.css'
import Loader from '../atoms/Loader'
import Error from '../atoms/Error'
import useRouterStatus from '../utils/useRouterStatus'

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState("light")
  
  const { isLoading, isError, error } = useRouterStatus()

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
        isLoading ? <Loader /> : isError ? <Error error={error} /> :
        <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
          <GlobalStyles /> <Component 
            {...pageProps} toggleTheme={toggleTheme} theme={theme}
        />
        </ThemeProvider>
  )
}
export default MyApp