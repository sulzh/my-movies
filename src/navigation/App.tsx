import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Constants
import { navigation } from './constants';
// Components
import Main from '../pages/Main/Main';
import Movie from '../pages/Movie/Movie';
import Search from '../pages/Search/Search';
import Favorites from '../pages/Favorites/Favorites';
import Layout from '../components/LayoutWrapper/LayoutWrapper';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path={navigation.main} element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={navigation.movie} element={<Movie />} />
            <Route path={navigation.search} element={<Search />} />
            <Route path={navigation.favorites} element={<Favorites />} />
            <Route path="*" element={<Main />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
