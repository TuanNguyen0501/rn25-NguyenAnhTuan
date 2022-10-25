import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import DetailPage from './DetailPage';
import Form from './Form';
import ListPage from './ListPage';
import "./style.css"

function ReactRouter() {
  return (
    <BrowserRouter>
    <div className='Nav_bar'>
    <div className='app_list'>
        <Link to="/ListPage">ListPage</Link>
    </div>
    
    <div className='app_list'>
        <Link to="/Form">FormPage</Link>
    </div>
    
    <div className='app_list'>
        <Link to="/DetailPage">DetailPage</Link>
    </div>
    
    </div>
    <Routes>
        <Route path='/ListPage' element={<ListPage/>}/>
        <Route path='/Form' element={<Form/>}/>
        <Route path='/DetailPage' element={<DetailPage/>}/>
        <Route path="/DetailPage/:id" element={<DetailPage />} />
        <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
    </Routes>
    </BrowserRouter>
  )
}

export default ReactRouter