import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
} from '@mui/material'
import {
  People as PeopleIcon,
  Assignment as AssignmentIcon,
  LocationOn as LocationIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material'

const statsCards = [
  {
    title: 'Total Mandor',
    value: '24',
    icon: <PeopleIcon fontSize="large" />,
    color: '#0ea5e9',
    bgColor: '#f0f9ff',
  },
  {
    title: 'Proyek Aktif',
    value: '8',
    icon: <AssignmentIcon fontSize="large" />,
    color: '#10b981',
    bgColor: '#f0fdf4',
  },
  {
    title: 'Lokasi Kerja',
    value: '15',
    icon: <LocationIcon fontSize="large" />,
    color: '#f59e0b',
    bgColor: '#fffbeb',
  },
  {
    title: 'Efisiensi',
    value: '92%',
    icon: <TrendingUpIcon fontSize="large" />,
    color: '#8b5cf6',
    bgColor: '#faf5ff',
  },
]

function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom className="font-bold text-gray-800">
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {statsCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography color="textSecondary" gutterBottom variant="body2">
                      {card.title}
                    </Typography>
                    <Typography variant="h4" component="h2" className="font-bold">
                      {card.value}
                    </Typography>
                  </Box>
                  <Avatar 
                    sx={{ 
                      bgcolor: card.bgColor, 
                      color: card.color,
                      width: 56,
                      height: 56,
                    }}
                  >
                    {card.icon}
                  </Avatar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom className="font-semibold">
                Aktivitas Terbaru
              </Typography>
              <Box className="space-y-4">
                {[
                  { mandor: 'Ahmad Susanto', action: 'Check-in di Proyek Perumahan Griya', time: '08:30' },
                  { mandor: 'Budi Raharjo', action: 'Menyelesaikan tugas di Lokasi A', time: '10:15' },
                  { mandor: 'Citra Dewi', action: 'Check-out dari Proyek Mall', time: '17:00' },
                ].map((activity, index) => (
                  <Box key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <Box>
                      <Typography variant="body1" className="font-medium">
                        {activity.mandor}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {activity.action}
                      </Typography>
                    </Box>
                    <Typography variant="body2" className="text-primary-600 font-medium">
                      {activity.time}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom className="font-semibold">
                Status Mandor
              </Typography>
              <Box className="space-y-3">
                {[
                  { status: 'Aktif', count: 18, color: '#10b981' },
                  { status: 'Istirahat', count: 4, color: '#f59e0b' },
                  { status: 'Offline', count: 2, color: '#ef4444' },
                ].map((item, index) => (
                  <Box key={index} className="flex items-center justify-between">
                    <Box className="flex items-center space-x-2">
                      <Box 
                        className="w-3 h-3 rounded-full"
                        sx={{ backgroundColor: item.color }}
                      />
                      <Typography variant="body2">{item.status}</Typography>
                    </Box>
                    <Typography variant="body2" className="font-medium">
                      {item.count}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
