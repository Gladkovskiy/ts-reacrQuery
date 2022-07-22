import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {BrowserRouter} from 'react-router-dom'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 5 * 1000,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={client}>
    <ReactQueryDevtools initialIsOpen={false} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
)
