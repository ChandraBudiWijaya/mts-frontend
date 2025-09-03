import { useState } from 'react'
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material'
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Assignment as AssignmentIcon,
  LocationOn as LocationIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const drawerWidth = 280

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  // Master Data Section
  { text: 'Lokasi', icon: <LocationIcon />, path: '/lokasi', section: 'Master Data' },
  { text: 'User', icon: <PeopleIcon />, path: '/user', section: 'Master Data' },
  { text: 'RBAC', icon: <SettingsIcon />, path: '/rbac', section: 'Master Data' },
  { text: 'Setting Parameter', icon: <SettingsIcon />, path: '/setting-parameter', section: 'Master Data' },
  // Rencana Kerja Section
  { text: 'Rencana Kerja', icon: <AssignmentIcon />, path: '/rencana-kerja', section: 'Rencana Kerja' },
  // Live Tracking Section
  { text: 'Live Tracking', icon: <LocationIcon />, path: '/live-tracking', section: 'Live Tracking' },
  // Report Section
  { text: 'Report', icon: <AssignmentIcon />, path: '/report', section: 'Report' },
]

function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleProfileMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login')
    handleProfileMenuClose()
  }

  const drawer = (
    <div className="h-full bg-white">
      <Toolbar className="bg-green-600">
        <Typography variant="h6" noWrap component="div" className="text-white font-bold">
          MTS
        </Typography>
      </Toolbar>
      <List className="p-0">
        {/* Dashboard */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate('/dashboard')}
            className="hover:bg-orange-50 bg-orange-400 text-white transition-colors duration-200"
          >
            <ListItemIcon className="text-white">
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Dashboard" 
              className="text-white"
            />
          </ListItemButton>
        </ListItem>

        {/* Master Data Section */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="caption" className="px-4 text-gray-600 font-medium">
            Master Data
          </Typography>
          {menuItems.filter(item => item.section === 'Master Data').map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => navigate(item.path)}
                className="hover:bg-green-50 transition-colors duration-200"
              >
                <ListItemIcon className="text-green-600">
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  className="text-gray-700"
                />
                <Typography className="text-gray-400">
                  &gt;
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </Box>

        {/* Rencana Kerja Section */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="caption" className="px-4 text-gray-600 font-medium">
            Rencana Kerja
          </Typography>
          {menuItems.filter(item => item.section === 'Rencana Kerja').map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => navigate(item.path)}
                className="hover:bg-green-50 transition-colors duration-200"
              >
                <ListItemIcon className="text-green-600">
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  className="text-gray-700"
                />
                <Typography className="text-gray-400">
                  &gt;
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </Box>

        {/* Live Tracking Section */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="caption" className="px-4 text-gray-600 font-medium">
            Live Tracking
          </Typography>
          {menuItems.filter(item => item.section === 'Live Tracking').map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => navigate(item.path)}
                className="hover:bg-green-50 transition-colors duration-200"
              >
                <ListItemIcon className="text-green-600">
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  className="text-gray-700"
                />
                <Typography className="text-gray-400">
                  &gt;
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </Box>

        {/* Report Section */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="caption" className="px-4 text-gray-600 font-medium">
            Report
          </Typography>
          {menuItems.filter(item => item.section === 'Report').map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => navigate(item.path)}
                className="hover:bg-green-50 transition-colors duration-200"
              >
                <ListItemIcon className="text-green-600">
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  className="text-gray-700"
                />
                <Typography className="text-gray-400">
                  &gt;
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </Box>

        {/* Management Account Section */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="caption" className="px-4 text-gray-600 font-medium">
            Management Account
          </Typography>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleLogout}
              className="hover:bg-green-50 transition-colors duration-200"
            >
              <ListItemIcon className="text-green-600">
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Sign Out" 
                className="text-gray-700"
              />
              <Typography className="text-gray-400">
                &gt;
              </Typography>
            </ListItemButton>
          </ListItem>
        </Box>
      </List>
    </div>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'white',
          color: 'text.primary',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Mandor Tracking System
          </Typography>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            id="primary-search-account-menu"
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          bgcolor: 'background.default',
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

export default Layout
