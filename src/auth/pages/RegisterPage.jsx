import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { startCreatingAccount } from '../../store/auth/thunks'
import { logout } from '../../store'

const initialForm = {
  displayName: '',
  email: '',
  password: '',
  confirmedPassword: ''
}

// All form inputs validations, only validations to confirm a second password takes two arguments
const formValidations = {
  displayName: [(value) => value.length >= 1, 'User needs at least 1 character'],
  email: [(value) => value.includes('@') && value.slice(value.indexOf('@')).includes('.'), 'Invalid email format'],
  password: [(value) => value.length >= 6, 'Password needs at least 6 characters'],
  confirmedPassword: [(value, value2) => value === value2, 'Passwords does not match'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.authentication);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {

    dispatch(logout());
  }, [])

  const { displayName, email, password, displayNameValidated, emailValidated, passwordValidated, confirmedPasswordValidated, formState, onInputChange, allFormsValidated } = useForm(initialForm, formValidations);

  const submit = (e) => {

    e.preventDefault();
    setIsFormValid(true);
    // If all form properties are validated, dispatch te creating account function
    if (!allFormsValidated) return;
    dispatch(startCreatingAccount(formState))
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={submit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              label="Usuario"
              type="user"
              placeholder="Usuario"
              fullWidth
              error={!!displayNameValidated && isFormValid}
              helperText={isFormValid && displayNameValidated}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name='email'
              value={email}
              onChange={onInputChange}
              label="Correo"
              placeholder="correo@gamil.com"
              fullWidth
              error={!!emailValidated && isFormValid}
              helperText={isFormValid && emailValidated}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name='password'
              value={password}
              onChange={onInputChange}
              label="Contrasena"
              type="password"
              placeholder="password"
              fullWidth
              error={!!passwordValidated && isFormValid}
              helperText={isFormValid && passwordValidated}
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
              error={!!confirmedPasswordValidated && isFormValid}
              helperText={isFormValid && confirmedPasswordValidated}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button type='submit' variant='contained' fullWidth disabled={status == 'checking'}>
                Create
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="space-between">
            <Typography sx={{ color: "red" }}>
              {
                errorMessage
              }
            </Typography>
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
