import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';// Grid version 2
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
              <h1 style={{ fontSize: '4em' }}>Try MUI Demo</h1>
            </Box>
            <Box component="div" sx={{ flexGrow: 1, width : 0.85 }}>
              <Grid container rowSpacing={5} columnSpacing={{ xs: 1, md: 5 }}>
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
