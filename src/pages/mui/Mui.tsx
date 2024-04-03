import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';// Grid version 2
import Toolbar from '@mui/material/Toolbar';

import DrawerAppBar from '../../features/drawerAppBar/drawerAppBar';

import { Button, IconButton  } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

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
            <Container maxWidth="xl">
              <Grid container rowSpacing={5} columnSpacing={{ xs: 1, md: 5 }}>
                <Grid xs={6} md={8}>
                  <Item>
                    <Button sx={{margin:2}} variant='outlined' color='primary' onClick={() => {alert('clicked btn1');}}>btn1</Button>
                    <Button sx={{margin:3}} variant='contained' color='secondary' size='small' startIcon={<DeleteIcon />}>btn2</Button>
                    <Button sx={{margin:4}} variant='contained' color='warning' endIcon={<SendIcon />}>btn3</Button>
                    <IconButton sx={{margin:3}} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Item>
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
            </Container>
        </div>
    )
}

export default Mui
