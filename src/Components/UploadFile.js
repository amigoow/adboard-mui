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
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const UploadFile = () => {

  const selectPublishedStatus = [
    {
      value: 'P',
      label: 'Published',
    },
    {
      value: 'D',
      label: 'Deferred',
    }
  ];

  const selectOfficialStatus = [
    {
      value: 'O',
      label: 'Official',
    },
    {
      value: 'C',
      label: 'Caks',
    }
  ];

  const [pnumber, setNumber] = useState("9875");
  const [detail, setDetail] = useState("");
  const [PublishedStatus, setPublishedStatus] = useState("P");
  const [OfficialStatus, setOfficialStatus] = useState("O");
  const [remarks, setRemarks] = useState("");
  const [itemValue, setItemValue] = useState("");
  const theme = createTheme();
  const [selectedFile, setSelectedFile] = useState(null);
  const [date, setDate] = React.useState(null);


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
          Number:pnumber,
          Detail: detail,
          PublishedStatus: PublishedStatus,
          OfficialStatus: OfficialStatus,
          Remarks: remarks,
          ItemValue: itemValue,
          Date: date
        }),
      });
      const signup = {
        Number:pnumber,
        Detail: detail,
        PublishedStatus: PublishedStatus,
        OfficialStatus: OfficialStatus,
        Remarks: remarks,
        ItemValue: itemValue,
        Date: date


      }
      console.log(signup);
      
      setNumber(pnumber);
      setPublishedStatus("");
      setOfficialStatus("");
      setRemarks("");
      setItemValue("");
      setDate("");

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
                  label="P.No#"
                  name="Number"
                  value={pnumber+1}
                  // onChange={(e) => setNumber(e.target.value)+1}
                  disabled
                  autoFocus
                  style={{ marginTop: '20px' }}
                />

                <TextField
                  required
                  fullWidth
                  id="Detail"
                  label="Detail"
                  name="Detail"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  autoFocus
                  style={{ marginTop: '20px' }}
                />

                <TextField
                  id="PublishedStatus"
                  fullWidth
                  select
                  name="PublishedStatus"
                  label="Select"
                  value={PublishedStatus}
                  helperText="Please select Ad Published Status"
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
                  name="OfficialStatus"
                  label="Select"
                  value={OfficialStatus}
                  helperText="Please select Ad Official Status"
                  onChange={(e) => setOfficialStatus(e.target.value)}
                  style={{ marginTop: '20px' }}

                >
                  {selectOfficialStatus.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  required
                  fullWidth
                  id="Remarks"
                  label="Remarks"
                  name="Remarks"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  autoFocus
                  style={{ marginTop: '20px' }}
                />

                <TextField
                  required
                  fullWidth
                  type="number"
                  id="ItemValue"
                  label="Item Value"
                  name="ItemValue"
                  value={itemValue}
                  onChange={(e) => setItemValue(e.target.value)}
                  autoFocus
                  style={{ marginTop: '20px' }}
                />

                <LocalizationProvider dateAdapter={AdapterDateFns} >
                  <DatePicker
                    label="Expiry Date"
                    value={date}
                    inputFormat="dd/MM/yyyy"
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} required fullWidth style={{ marginTop: '20px' }}  />}
                  />
                </LocalizationProvider>
                <br />

                <input type="file" onChange={handleFileSelect} multiple style={{ marginTop: '20px' }}
                />
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
