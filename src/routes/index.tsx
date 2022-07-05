import Layout from 'components/Layout'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import Community from './Community'
import Discovery from './Discovery'
import Home from './Home'
import Search from './Search'

const App = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/discovery' element={<Discovery />} />
          <Route path='/community' element={<Community />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
