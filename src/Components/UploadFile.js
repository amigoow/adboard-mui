import axios from 'axios';
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
import { getSuggestedQuery } from '@testing-library/react';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);

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

  const [pnumber, setPnumber] = useState("");
  const [pname, setPname] = useState("");
  const [detail, setDetail] = useState("");
  const [EmergencyStatus, setEmergencyStatus] = useState("T");
  const [PublishedStatus, setPublishedStatus] = useState("T");
  const [OfficialStatus, setOfficialStatus] = useState("T");
  const [createdBy, setCreatedBy] = useState("");
  const [remarks, setRemarks] = useState("");
  const [itemValue, setItemValue] = useState("");
  const [mobileno, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [file, setSelectedFiles] = useState("");
  const theme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    try {
      const response = axios({
        method: "post",
        url: " http://10.1.4.205:8085//Noticeboard/CreatAdvertisment",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        body: JSON.stringify({
          pname: pname,
          Detail: detail,
          EmergencyStatus: EmergencyStatus,
          PublishedStatus: PublishedStatus,
          OfficialStatus: OfficialStatus,
          CreatedBy: createdBy,
          Remarks: remarks,
          ItemValue: itemValue,
          mobileno: mobileno,
          email: email,
        }),
      });
      const signup = {
        pnumber: pnumber,
        EmergencyStatus: EmergencyStatus,
        PublishedStatus: PublishedStatus,
        OfficialStatus: OfficialStatus,
        CreatedBy: createdBy,
        Remarks: remarks,
        ItemValue: itemValue,
        mobileno: mobileno,
        email: email,
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

    } catch (error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
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

              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  fullWidth
                  id="pnumber"
                  label="P Number"
                  name="pname"
                  value={pname}
                  onChange={(e) => setPnumber(e.target.value)}
                  autoFocus
                  style={{ marginTop: '20px' }}

                />

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


                <input type="file" onChange={handleFileSelect} multiple />
                {/* <input type="submit" value="Upload File" /> */}


                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}

                >
                  Sign Up
                </Button>


              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  )

}

export default UploadFile
