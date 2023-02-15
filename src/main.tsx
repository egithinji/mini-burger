import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar side='right' bgColor='black' hamColorClosed='green'>
        <a style={{color: 'white'}} href='https://github.com/egithinji'>Link 1</a>
        <a style={{color: 'white'}} href='https://github.com/egithinji'>Link 2</a>
        <a style={{color: 'white'}} href='https://github.com/egithinji'>Link 3</a>
    </NavBar>
    <div>
      <h1 className='mt-10'>Hello there.</h1>
    </div>
  </React.StrictMode>,
)