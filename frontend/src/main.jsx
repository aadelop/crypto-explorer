import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './components/Home'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home/>}></Route>
      <Route path="/" element={<Home/>}>
        <Route path="/block" element={<p>Block</p>}> </Route>
        <Route path="/tx" element={<p>Transsactions</p>}></Route>
        <Route path="/balance" element={<p>Balance</p>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
