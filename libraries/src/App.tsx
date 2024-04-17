import React from 'react';
import './App.css';
import ZustandLibrary from 'src/zustand/ZustandLibrary';
import { Route, Routes } from 'react-router';
import ReactRouterLibrary, { ReactRouterPage1, ReactRouterPage2 } from './react-router/ReactRouterLibrary';

function App() {
  return (
      <Routes>
        {/* <Route index element={<ReactRouterLibrary />} />
        <Route path='/page1' element={<ReactRouterPage1 />} />
        <Route path='/page2' element={<ReactRouterPage2 />} />
        <Route path='/zustand' element={<ZustandLibrary />} /> */}

        {/* router 기본 값으로 주소를 묶기 (localhost:3000/router) */}
        <Route path='/router' >
          <Route index element={<ReactRouterLibrary />} />
          <Route path='page1' element={<ReactRouterPage1 />} />
          <Route path='page2' element={<ReactRouterPage2 />} />
        </ Route>
        <Route path='/zustand' element={<ZustandLibrary />} />
      </Routes>
  );
}

export default App;
