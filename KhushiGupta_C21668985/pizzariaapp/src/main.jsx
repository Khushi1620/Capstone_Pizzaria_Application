import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// imports for redux store
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* We can use redux in each component in app that's why app is running inside the provider  */}
    <Provider store={store}>
       {/* calling a function */}
      <App />
    </Provider>
  </StrictMode>,
)
