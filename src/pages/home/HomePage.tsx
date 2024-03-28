import DrawerAppBar from '../../features/drawerAppBar/drawerAppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const HomePage = (): JSX.Element => {

  return (
    <>
      <DrawerAppBar />
      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <h1 style={{ fontSize: '4em' }}>Home</h1>
        </Box>
      </div>
    </>
  );
};

export default HomePage;
