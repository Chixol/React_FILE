import React from 'react';
import './App.css';
import ZustandLibrary from 'src/zustand/ZustandLibrary';
import { Route, Routes } from 'react-router';
import ReactRouterLibrary, { ReactRouterPage1, ReactRouterPage2 } from './react-router/ReactRouterLibrary';
import Layout from './react-router/Layout';
import AxiosLibrary from './axios/AxiosLibrary';
import ReactCookieLibrary from './react-cookie/ReactCookieLibrary';

function App() {
  return (
      <Routes>
        {/* <Route index element={<ReactRouterLibrary />} />
        <Route path='/page1' element={<ReactRouterPage1 />} />
        <Route path='/page2' element={<ReactRouterPage2 />} />
        <Route path='/zustand' element={<ZustandLibrary />} /> */}

        {/* router 기본 값으로 주소를 묶기 (localhost:3000/router) */}
        <Route path='/router'element={<Layout />} >
          <Route index element={<ReactRouterLibrary />} />
          <Route path='page1/:value' element={<ReactRouterPage1 />} />
          <Route path='page2' element={<ReactRouterPage2 />} />
        </ Route>
        <Route path='/zustand' element={<ZustandLibrary />} />
        <Route path='/axios' element={<AxiosLibrary />} />
        <Route path='/cookie/cookie' element={<ReactCookieLibrary/>} />
        <Route path='*' element={<h3>404 Error</h3>} />
      </Routes>
  );
}

export default App;
