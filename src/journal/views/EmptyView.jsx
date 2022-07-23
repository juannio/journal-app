import { NoteAltOutlined } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const EmptyView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: 'calc(100vh - 110px)',
                backgroundColor: 'primary.main',
                borderRadius: 5
            }}
        >
            <Grid item xs={12}>
                <NoteAltOutlined  sx={{ fontSize: 100, color: 'white' }} />
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{ fontSize: 30, color: 'gray' }} >Create a note!</Typography>
            </Grid>
        </Grid>
    )
}
