import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import {RecoilRoot} from "recoil"
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <RecoilRoot> 
    <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </RecoilRoot> 
    </BrowserRouter>
  </React.StrictMode>,
)
