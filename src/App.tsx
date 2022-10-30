import React from 'react';
import { ArticlePreview } from 'Components/ArticlePreview';

import { MainPage } from 'Components/MainPage';
import { OutletPage } from 'Components/OutletPage';
import { Route, Routes } from 'react-router-dom';
import { Auth } from 'Components/Auth';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<OutletPage />}>
        <Route index element={<MainPage />} />
        <Route path="article" element={<ArticlePreview />} />
        <Route path="login" element={<Auth typeAuth="login" />} />
        <Route path="registration" element={<Auth typeAuth="registration" />} />
      </Route>
    </Routes>
  );
};

export default App;
