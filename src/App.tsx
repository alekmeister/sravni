import React from 'react';
import { ArticlePreview } from 'Components/ArticlePreview';

import { MainPage } from 'Components/MainPage';
import { OutletPage } from 'Components/OutletPage';
import { Route, Routes } from 'react-router-dom';
import { Auth } from 'Components/Auth';
import { NewArticle } from 'Components/NewArticle';
import { ErrorPage } from 'Components/ErrorPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<OutletPage />}>
        <Route index element={<MainPage />} />
        <Route path="article">
          <Route path=":qrySlug" element={<ArticlePreview />} />
        </Route>
        <Route path="editor" element={<NewArticle />} />
        <Route path="login" element={<Auth typeAuthProps="login" />} />
        <Route path="registration" element={<Auth typeAuthProps="registration" />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
