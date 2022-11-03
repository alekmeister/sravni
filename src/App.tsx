import React from 'react';

import { MainPage } from 'components/MainPage';
import { OutletPage } from 'components/OutletPage';
import { Route, Routes } from 'react-router-dom';
import { Auth } from 'components/Auth';
import { NewArticle } from 'components/NewArticle';
import { ErrorPage } from 'components/ErrorPage';
import { AuthHOC } from 'hocs';
import { ArticlePreview } from 'components/ArticlePreview';

const App = () => {
  return (
    <Routes>
      <Route path="/sravni" element={<OutletPage />}>
        <Route index element={<MainPage />} />
        <Route path="article">
          <Route path=":qrySlug" element={<ArticlePreview />} />
        </Route>
        <Route
          path="editor"
          element={
            <AuthHOC>
              <NewArticle />
            </AuthHOC>
          }
        />
        <Route path="login" element={<Auth typeAuthProps="login" />} />
        <Route path="registration" element={<Auth typeAuthProps="registration" />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
