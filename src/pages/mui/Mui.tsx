import React from 'react'

/**
 * Material UI uses the Roboto font by default.
 */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DrawerAppBar from '../../features/drawerAppBar/drawerAppBar';

const Mui: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <DrawerAppBar />
            <Box component="main" sx={{ p: 3 }}>
              <Toolbar />
              <h1 style={{ fontSize: '4em' }}>Try MUI</h1>
            </Box>
        </div>
    )
}

export default Mui
