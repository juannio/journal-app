import { CircularProgress, Grid, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const AuthLayout = ({ children, title }) => {

    const { status } = useSelector(state => state.authentication)
    return (


        <>
            {
                status === 'checking'
                    ? <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            minHeight: '100vh',
                            backgroundColor: 'primary.main',
                            padding: 4
                        }}
                    >
                        <Grid item
                            flexDirection='row'
                        >
                            <CircularProgress color='warning' />
                        </Grid>
                    </Grid>

                    : <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            minHeight: '100vh',
                            backgroundColor: 'primary.main',
                            padding: 4
                        }}
                    >
                        <Grid item
                            className="box-shadow"
                            xs={3}
                            sx={{
                                width: { sm: 550 },
                                backgroundColor: 'white',
                                padding: 3,
                                borderRadius: 2
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{ mb: 1 }}
                                align="center"
                            >
                                {title}
                            </Typography>
                            {children}
                        </Grid>
                    </Grid>
            }

        </>

    )
}
