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
        let res = fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,

            }),

        });
        const login = {
            email: email,
            password: password
        }
        console.log(login);
        setEmail("");
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
                    <Typography variant="h5" align="center" fontWeight="bold">Login</Typography>

                    <Grid container spacing={3}>
                        <Grid item sm={12}>

                            <form onSubmit={submitForm}>
                                <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
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
