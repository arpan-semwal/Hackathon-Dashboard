 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// Import your custom icon
import CustomLogoIcon from '../../assets/assets/icons/Vector.svg'; // Adjust the path accordingly

function Navbar() {
  return (
    <AppBar position="static"  sx={{ 
		backgroundColor: '#FFFFFF' ,  
		height: '64px',   
	}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box component="img" src={CustomLogoIcon} alt="DPHI Logo" sx={{ height: 40, mr: 2 }} />

          {/* Name */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            DPhi
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
