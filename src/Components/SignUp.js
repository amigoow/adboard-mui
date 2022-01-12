import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';


// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



export default function SignUp() {

    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];
    const [currency, setCurrency] = useState('USD');

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobileno, setMobile] = useState("");
    const [message, setMessage] = useState("");
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (e) => {
        // console.log(e.target.files[])
        if (e.target.files) {
          const filesArray = Array.from(e.target.files).map((file) =>
            URL.createObjectURL(file)
          );
        }
    }
    const theme = createTheme();

    const submitForm = (e) => {
        e.preventDefault();
        let res = fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                mobileno: mobileno,
                currency: currency

            }),

        });
        const myForm = {
            name: name,
            email: email,
            password: password,
            mobileno: mobileno,
            currency: currency,
        }
        console.log(myForm);
        setName("");
        setEmail("");
        setMobile("");
        setPassword("");
        setMessage("Successfully Form Submitted");

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
                    <Typography variant="h5" align="center" fontWeight="bold">Sign Up</Typography>

                    <Grid container spacing={3}>
                        <Grid item sm={12}>

                            <form onSubmit={submitForm}>

                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    label="First Name"
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
                                    id="currency"
                                    fullWidth
                                    select
                                    label="Select"
                                    value={currency}
                                    helperText="Please select your currency"
                                    onChange={(e) => setCurrency(e.target.value)}
                                    style={{ marginTop: '20px' }}

                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    required
                                    fullWidth
                                    id="mobileno"
                                    type="number"
                                    label="Mobile Number"
                                    name="mobileno"
                                    value={mobileno}
                                    onChange={(e) => setMobile(e.target.value)}
                                    autoComplete="mobileno"
                                    autoFocus
                                    style={{ marginTop: '20px' }}


                                />

                                <TextField
                                    fullWidth
                                    id="file"
                                    type="file"
                                    name="file"
                                    style={{ marginTop: '20px' }}
                                    onChange={handleImageChange}
                                    multiple
                                />


                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}

                                >
                                    Sign Up
                                </Button>
                                <div className="message">{message ? <p style={{ color: "green" }}>{message}</p> : null}</div>

                                {/* <input type="submit" value="Submit" variant="contained" */}

                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
