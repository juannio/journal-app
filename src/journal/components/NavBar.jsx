import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const NavBar = ({ drawerWidth }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log(navigate)
        navigate('/auth')
    }
    return (
        <AppBar position='fixed' sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth} px` }
        }}>
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h5'>
                        Journal App
                    </Typography>
                    <IconButton color='error' onClick={handleLogout}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
