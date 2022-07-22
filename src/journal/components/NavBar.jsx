import { MenuOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import React from 'react'

export const NavBar = ({ drawerWidth }) => {
    return (
        <AppBar position='fixed' sx={{ width: { sm: `calc(100% - ${drawerWidth})` } }}>
            <Toolbar>
                <IconButton>
                    <MenuOutlined />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
