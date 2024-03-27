import React from 'react'

/**
 * Material UI uses the Roboto font by default.
 */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';

import DrawerAppBar from '../../features/drawerAppBar/drawerAppBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Mui: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <DrawerAppBar />
            <Box component="main" sx={{ p: 3 }}>
              <Toolbar />
              <h1 style={{ fontSize: '4em' }}>Try MUI</h1>
            </Box>
            <Box component="div" sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid xs={6} md={8}>
                  <Item>xs=6 md=8</Item>
                </Grid>
                <Grid xs={6} md={4}>
                  <Item>xs=6 md=4</Item>
                </Grid>
                <Grid xs={6} md={4}>
                  <Item>xs=6 md=4</Item>
                </Grid>
                <Grid xs={6} md={8}>
                  <Item>xs=6 md=8</Item>
                </Grid>
              </Grid>
            </Box>
        </div>
    )
}

export default Mui
