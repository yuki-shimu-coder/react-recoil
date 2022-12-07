import './App.css';
import React from 'react';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { RouterComponent } from './route'

function App() {
  return (
    <RecoilRoot>
      <RouterComponent />
    </RecoilRoot>
  );
}

export default App;
