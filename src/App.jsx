import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Lokasi from './pages/Lokasi'
import LokasiDetail from './pages/LokasiDetail'
import User from './pages/User'
import UserForm from './pages/UserForm'

// Material-UI theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: '#0ea5e9',
      dark: '#0284c7',
      light: '#38bdf8',
    },
    secondary: {
      main: '#78716c',
      dark: '#57534e',
      light: '#a8a29e',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/lokasi" element={<Lokasi />} />
            <Route path="/lokasi/:id" element={<LokasiDetail />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/new" element={<UserForm />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
