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
import Login from '../Components/Login';

// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
}



export default function SignUp() {
    

    const selectPublishedStatus = [
       
        {
            value: 'T',
            label: 'Published',
        },
        {
            value: 'F',
            label: 'Deferred',
        }
    ];

    // setPnumber("");
    // setPname("");
    // setDetail("");
    // setEmergencyStatus("");
    // setPublishedStatus("");
    // setOfficialStatus("");
    // setCreatedBy("");
    // setRemarks("");
    // setItemValue("");
    // setMobile("");
    // setEmail("");
    // setSelectedFiles("");

    const [pnumber, setPnumber]                 = useState("");
    const [pname, setPname]                     = useState("");
    const [detail, setDetail]                   = useState("");
    const [EmergencyStatus, setEmergencyStatus]     = useState("T");
    const [PublishedStatus, setPublishedStatus]     = useState("T");
    const [OfficialStatus, setOfficialStatus]       = useState("T");
    const [createdBy, setCreatedBy]             = useState("");
    const [remarks, setRemarks]                 = useState("");
    const [itemValue, setItemValue]             = useState("");
    const [mobileno, setMobile]                   = useState("");
    const [email, setEmail]                     = useState("");
    const [file, setSelectedFiles]              = useState("");

    
    
    const theme = createTheme();

    const submitForm = (e) => {
        e.preventDefault();
        let res = fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json',
            // },
            body: JSON.stringify({
                pname:              pname,
                Detail:             detail,
                EmergencyStatus:    EmergencyStatus,
                PublishedStatus:    PublishedStatus,
                OfficialStatus:     OfficialStatus,
                CreatedBy:          createdBy,
                Remarks:            remarks,
                ItemValue:          itemValue,
                mobileno:           mobileno,
                email:              email,
                images:             null,
                MainImage:          file
            }),
        }).then(
            (response) => {
                if ( response ) {
                    alert("Your Ad has been posted!")
                    sessionStorage.setItem('token', JSON.stringify(email));
                    window.location.href = "/signup";
                }
            }
        )
        
        const signup ={
                    pnumber:              pnumber,
                EmergencyStatus:    EmergencyStatus,
                PublishedStatus:    PublishedStatus,
                OfficialStatus:     OfficialStatus,
                CreatedBy:          createdBy,
                Remarks:            remarks,
                ItemValue:          itemValue,
                mobileno:           mobileno,
                email:              email,
        }
        console.log(signup);

        setPnumber("");
        setEmergencyStatus("");
        setPublishedStatus("");
        setOfficialStatus("");
        setCreatedBy("");
        setRemarks("");
        setItemValue("");
        setMobile("");
        setEmail("");
        setSelectedFiles("");
    }

    const token = getToken();
  
    if(!token) {
        alert("You need to login first");
      return <Login />
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
                    <Typography variant="h5" align="center" fontWeight="bold">Post an Ad</Typography>

                    <Grid container spacing={3}>
                        <Grid item sm={12}>

                            <form onSubmit={submitForm}>
                                <TextField
                                    required
                                    fullWidth
                                    id="pnumber"
                                    label="P Number"
                                    name="pname"
                                    value={pnumber}
                                    onChange={(e) => setPnumber(e.target.value)}
                                    autoFocus
                                    style={{ marginTop: '20px' }}

                                />
                                {/* <TextField
                                    required
                                    fullWidth
                                    id="detail"
                                    label="Detail"
                                    name="detail"
                                    value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    autoFocus
                                    style={{ marginTop: '20px' }}

                                /> */}

                                <TextField
                                    id="EmergencyStatus"
                                    fullWidth
                                    select
                                    name="emergencyStat"
                                    label="Select"
                                    value={EmergencyStatus}
                                    helperText="Please select Ad Status"
                                    onChange={(e) => setEmergencyStatus(e.target.value)}
                                    style={{ marginTop: '20px' }}

                                >
                                    {selectPublishedStatus.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                {/* <TextField
                                    id="PublishedStatus"
                                    fullWidth
                                    select
                                    name="publishedStat"
                                    label="Select"
                                    value={PublishedStatus}
                                    helperText="Please select Ad Status"
                                    onChange={(e) => setPublishedStatus(e.target.value)}
                                    style={{ marginTop: '20px' }}

                                >
                                    {selectPublishedStatus.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    id="OfficialStatus"
                                    fullWidth
                                    select
                                    name="officialStat"
                                    label="Select"
                                    value={OfficialStatus}
                                    helperText="Please select Ad Status"
                                    onChange={(e) => setOfficialStatus(e.target.value)}
                                    style={{ marginTop: '20px' }}

                                >
                                    {selectPublishedStatus.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField> */}


                                {/* <TextField
                                    autoComplete="given-name"
                                    name="createdBy"
                                    required
                                    fullWidth
                                    id="createdBy"
                                    value={createdBy}
                                    onChange={(e) => setCreatedBy(e.target.value)}
                                    label="Full Name"
                                    autoFocus
                                    style={{ marginTop: '20px' }}

                                />

                                <TextField
                                    autoComplete="remarks"
                                    name="remarks"
                                    required
                                    fullWidth
                                    id="remarks"
                                    value={remarks}
                                    onChange={(e) => setRemarks(e.target.value)}
                                    label="remarks"
                                    autoFocus
                                    style={{ marginTop: '20px' }}

                                /> */}

                                {/* <TextField
                                    autoComplete="ItemValue"
                                    name="itemValue"
                                    required
                                    fullWidth
                                    id="itemValue"
                                    value={itemValue}
                                    onChange={(e) => setItemValue(e.target.value)}
                                    label="Item Value"
                                    autoFocus
                                    style={{ marginTop: '20px' }}

                                /> */}

                                <TextField
                                    required
                                    fullWidth
                                    id="mobile"
                                    type="number"
                                    label="mobile"
                                    name="mobile"
                                    value={mobileno}
                                    onChange={(e) => setMobile(e.target.value)}
                                    autoComplete="mobile"
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
                                    fullWidth
                                    id="file"
                                    type="file"
                                    name="file"
                                    style={{ marginTop: '20px' }}
                                    value={file}
                                    onChange={(e) => setSelectedFiles(e.target.value)}
                                    multiple
                                />


                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}

                                >
                                    Post Ad
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
