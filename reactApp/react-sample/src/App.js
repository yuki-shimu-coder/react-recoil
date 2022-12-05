import logo from './logo.svg';
import './App.css';
import React from 'react';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { TopScreen } from './screen/TopScreen';

function App() {
  return (
    <RecoilRoot>
      <TopScreen />
    </RecoilRoot>
  );
}

export default App;
