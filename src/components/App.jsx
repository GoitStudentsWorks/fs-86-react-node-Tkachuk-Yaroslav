import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import SignInPage from 'pages/SignInPage/SignInPage';
import DiaryPage from 'pages/DiaryPage/DiaryPage';
import ProductsPage from 'pages/ProductsPage/ProductsPage';
import ExercisesPage from 'pages/ExercisesPage/ExercisesPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="diary" element={<DiaryPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="exercises" element={<ExercisesPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
