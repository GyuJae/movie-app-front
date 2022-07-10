import Layout from 'components/Layout'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import Community from './Community'
import CommunityDetail from './CommunityDetail'
import CreateAccount from './CreateAccount'
import DetailMovie from './DetailMovie'
import DetailTV from './DetailTV'
import Discovery from './Discovery'
import Home from './Home'
import Login from './Login'
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
        <Route path='/login' element={<Login />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/movie/:id' element={<DetailMovie />} />
        <Route path='/tv/:id' element={<DetailTV />} />
        <Route path='/community/:id' element={<CommunityDetail />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
