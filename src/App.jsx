import { useContext } from 'react'
import { ThemeContext } from './providers/ThemePageProvider'
import { Box } from '@chakra-ui/react';

//Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Error from './components/AlertError/Error';
import { Route, Routes } from 'react-router-dom';

function App() {
  const {light}=useContext(ThemeContext);

  return (
    <Box
    minH='100svh' 
    bg={`var(--${light ? "light" : "dark"}-mode-bg)`} 
    color={`var(--${light ? "light" : "dark"}-mode-text)`}
    transition="all 0.5s">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movie/:id" element={<Movie/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
  </Box>
  )
}

export default App