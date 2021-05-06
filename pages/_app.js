import { useState } from "react"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig" 
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light") 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} toggleTheme={toggleTheme} theme={theme} />
    </ThemeProvider>
  ) 
}
export default MyApp