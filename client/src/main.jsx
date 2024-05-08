import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from '../Redux/Storage.js'
import { AuthProvider } from './Components/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='bg-gray-200'>
<AuthProvider>    
<Provider store={store}>
<App />
</Provider>
</AuthProvider>
</div>

)
