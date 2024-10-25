import { useContext } from 'react'
import { ThemeContext } from './providers/ThemePageProvider'
import { Box } from '@chakra-ui/react';
import Home from './Home';

function App() {
  const {light}=useContext(ThemeContext);

  return (
    <Box
    minH='100svh' 
    bg={`var(--${light ? "light" : "dark"}-mode-bg)`} 
    color={`var(--${light ? "light" : "dark"}-mode-text)`}
    transition="all 0.5s">
      <>
      <Home/>
      </>
  </Box>
  )
}

export default App