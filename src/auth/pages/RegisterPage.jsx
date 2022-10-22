import { useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

import { useForm } from '../../hooks/useForm'
import { startCreatingAccount } from '../../store/auth/thunks'

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { user, email, password, confirmedPassword, formState, onInputChange } = useForm({
    user: ' ',
    email: '',
    password: ' ',
  });

  const formValidations = {
    validUsr: !!user && true,
    validFirstPsw: password.length >= 6 && true,
    validSecPsw: confirmedPassword === password && true
  }

  const submit = (e) => {
    e.preventDefault();

    dispatch(startCreatingAccount(formState));

  }


  return (
    <AuthLayout title="Register">
      <form onSubmit={submit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name='user'
              onChange={onInputChange}
              label="Usuario"
              type="user"
              placeholder="Usuario"
              fullWidth
              error={!formValidations.validUsr}
              helperText={!formValidations.validUsr && 'Nombre es obligatorio'}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name='email'
              onChange={onInputChange}
              label="Correo"
              type="email"
              placeholder="correo@gamil.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name='password'
              onChange={onInputChange}
              label="Contrasena"
              type="password"
              placeholder="password"
              fullWidth
              error={!formValidations.validFirstPsw}
              helperText={!formValidations.validFirstPsw && 'Contrasenia debe ser minimo 6 caracteres'}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name='confirmedPassword'
              onChange={onInputChange}
              label="Confirmar contrasena"
              type="password"
              placeholder="password"
              fullWidth
              error={!formValidations.validSecPsw}
              helperText={confirmedPassword !== password && 'Contrasenias no coincide'}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button type='submit' variant='contained' fullWidth>
                Create
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Log in
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
