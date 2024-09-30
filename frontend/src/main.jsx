import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './components/Home'
import { Balance } from './components/Balance'
import { Transaction } from './components/Transaction'
import { Block } from './components/Block'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client = {queryClient}>
     <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>}></Route>
        <Route path="/" element={<Home/>}>
          <Route path="/block/:block" element={<Block/>}> </Route>
          <Route path="/tx/:tx" element={<Transaction />}></Route>
          <Route path="/balance/:address" element={<Balance/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
   
 
)
