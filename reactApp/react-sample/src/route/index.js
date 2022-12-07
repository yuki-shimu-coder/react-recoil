import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** トップページ */
import { TopScreen } from '../screen/TopScreen';
/** FirstScreen */
import { FirstScreen } from '../screen/FirstScreen';

/** ルーター */
export const RouterComponent = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopScreen />} />
        <Route path="/first" element={<FirstScreen />} />
      </Routes>
    </BrowserRouter>
  );

}