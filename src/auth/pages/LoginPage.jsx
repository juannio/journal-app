import { useDispatch, useSelector } from 'react-redux';

import { Link as RouterLink } from 'react-router-dom';

import { startEmailAndPasswordSignIn, startGoogleSingIn } from '../../store/auth/thunks';

import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

export const LoginPage = () => {

  const dispatch = useDispatch();

  //Verify the authentication status
  const { status } = useSelector(state => state.authentication);

  const { onInputChange, email, password, formState } = useForm({
    email: '',
    password: '',
  });

  //User and Password authentication
  const onSubmit = e => {
    e.preventDefault();
    dispatch(startEmailAndPasswordSignIn({ email, password }));
  }

  //Google authentication
  const onGoogleSignIn = e => {
    dispatch(startGoogleSingIn());
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gamil.com"
              fullWidth
              name='email'
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contrasena"
              type="password"
              placeholder="password"
              fullWidth
              name='password'
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type='submit' variant='contained' fullWidth disabled={status == 'checking' && true}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignIn} variant='container' fullWidth disabled={status == 'checking' && true}>
                <Google />
                <Typography sx={{ ml: 1 }}>
                  Sign in with Google
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to={status != 'checking' && "/auth/register"}>
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
