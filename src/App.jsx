import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import RestrictedRoute from './components/RestrictedRoute.jsx'

import { refreshThunk } from './redux/auth/operations.js'
import { selectIsRefresh } from './redux/auth/selectors.js'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" Component={<RegistrationPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" Component={<LoginPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
