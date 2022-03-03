import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");;
    
    const theme = createTheme();
    
    const submitForm = (e) => {
        e.preventDefault();
        let res = fetch("http://10.1.4.205:8085/api/Noticeboard/CheckIsValidUser", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                P_NO: email,
                Password: password,

            }),

        }).then(
            (response) => {
                if ( response ) {
                    sessionStorage.setItem('token', JSON.stringify(email));
                    window.location.href = "/signup";
                }
            }
        )
        const login = {
            email: email,
            password: password
        }
        console.log(login);
        setPassword("");
        // setMessage("Successfully Form Submitted");

        //  console.log(name, email, mobileno);

        // postForm(name,email,mobileno);
    }

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <CssBaseline />
                <Box
                    md={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        color="primary"
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} >
                            <LockOpenIcon />
                        </Avatar>
                    </Stack>
                    <Typography variant="h4" align="center" fontWeight="bold">Login</Typography>
                    <Typography variant="h6" align="center" fontWeight="bold">Please use your MIS login details</Typography>

                    <Grid container spacing={3}>
                        <Grid item sm={12}>

                            <form onSubmit={submitForm}>
                                <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="P Number"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoFocus
                                        style={{ marginTop: '20px' }}

                                    />
                               
                                <TextField
                                    label="Password"
                                    type="password"
                                    id="password"
                                    fullWidth
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoFocus
                                    style={{ marginTop: '20px' }}
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}

                                >
                                    Login
                                </Button>
                                {/* <div className="message">{message ? <p style={{ color: "green" }}>{message}</p> : null}</div> */}

                                {/* <input type="submit" value="Submit" variant="contained" */}

                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}