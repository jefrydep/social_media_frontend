
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import HomePage from 'views/homePage/HomePage'
import { themeSettings } from './theme/theme'
// import { themeSettings } from 'theme/theme'
import HomePage from './views/homePage/HomePage'
import LoginPage from './views/loginPage/LoginPage'
import ProfilePage from './views/profilePage/ProfilePage'


const App = () => {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  // const isAuth = true

  return (
    <div className='app'>

      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Routes>
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route path='/' element={<LoginPage />} />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
          </Routes>

        </ThemeProvider>
      </BrowserRouter>

    </div>
  )
}

export default App