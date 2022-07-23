import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1}}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='ligth'>
                28 agosto
            </Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2}}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1}}/>
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese titulo"
                label="Titulo"
                sx={{ border: 'none', mb: 1}}
            />
        </Grid>
    </Grid>
  )
}
