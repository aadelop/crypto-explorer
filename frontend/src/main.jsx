import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './components/Home'
import { Balance } from './components/Balance'
import { Transaction } from './components/Transaction'
import { Block } from './components/Block'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home/>}></Route>
      <Route path="/" element={<Home/>}>
        <Route path="/block" element={<Block/>}> </Route>
        <Route path="/tx" element={<Transaction />}></Route>
        <Route path="/balance" element={<Balance/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
