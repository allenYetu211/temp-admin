/*
 * @Date: 2022-09-26 23:15:20
 * @LastEditTime: 2022-09-27 00:44:56
 */

import type {
  FC,
  PropsWithChildren,
  MouseEventHandler,
  CSSProperties,
} from 'react';

import {
  Grid,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Paper
} from '@mui/material'

import { useSingIn } from './use-sign-in'

export const LoginLayout: FC<PropsWithChildren> = ({
  children,
  ...props
}) => {

  const {
    user,
    pwd,
    submit,
    handlePwd,
    handleUser
  } = useSingIn()

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            U
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
              value={user}
              onChange={(e) => { handleUser(e.target.value) }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={pwd}
              onChange={(e) => { handlePwd(e.target.value) }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submit}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
