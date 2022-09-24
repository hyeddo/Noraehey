import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import AdminPage from './routes/Admin/AdminPage';
import MagazineCreatePage from './routes/Admin/MagazineCreatePage';
import MagazineUpdatePage from './routes/Admin/MagazineUpdatePage';
import LandingPage from './routes/Landing/LandingPage';
import TagPage from './routes/Tag/TagPage';
import VoicePage from './routes/HighNote/HighNotePage';
import HomePage from './routes/Home/HomePage';
import ProfilePage from './routes/Profile/ProfilePage';
import MagazineDetailPage from './routes/Magazine/MagazineDetailPage';
import ShortsDetailPage from './routes/Shorts/ShortsDetailPage';
import SongsDetailPage from './routes/Songs/SongsDetailPage';
import SearchPage from './routes/Search/SearchPage';
import SettingPage from './routes/Profile/SettingPage';
import LikePage from './routes/Like/LikePage';
import LikeShortsPage from './routes/Like/LikeShortsPage';
import LikeSongPage from './routes/Like/LikeSongPage';
import NavBar from './routes/Common/NavBar';
import Header from './routes/Common/Header';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SearchSongPage from './routes/Search/SearchSongPage';
import SearchSingerPage from './routes/Search/SearchSingerPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<LandingPage />} />
        <Route path="/tag" element={<TagPage />} />
        <Route path="/voice" element={<VoicePage />} />
        <Route path="/shorts/:shortsId" element={<ShortsDetailPage />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/profile/:userId" element={<ProfilePage />}>
          <Route path="setting" element={<SettingPage />} />
        </Route>
        <Route path="/songs/:songId" element={<SongsDetailPage />} />
        <Route path="/like/*" element={<LikePage />}>
          <Route path="songlist" element={<LikeSongPage />} />
          <Route path="shortslist" element={<LikeShortsPage />} />
        </Route>
        <Route path="/magazine/:magazineId" element={<MagazineDetailPage />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route path="magazine/create" element={<MagazineCreatePage />} />
          <Route path="magazine/:magazineId" element={<MagazineDetailPage />} />
          <Route
            path="magazine/:magazineId/update"
            element={<MagazineUpdatePage />}
          />
        </Route>
      </Routes>
      <Footer />
      <NavBar />
    </BrowserRouter>
  );
};

const Footer = styled.div`
  width: 100%;
  height: 100px;
`;
export default Router;
