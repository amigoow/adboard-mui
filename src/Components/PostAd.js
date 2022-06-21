import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
import Login from '../Components/Login';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';


function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken;
}

const PostAd = () => {


  const selectAdCategory = [
    
    {
      value: 'D',
      label: 'Vehicle',
    },
    {
      value: 'D',
      label: 'Electronics',
    },
    {
      value: 'P',
      label: 'Property',
    },
  ];

  const selectOfficialStatus = [
    {
      value: 'O',
      label: 'Official',
    },
    {
      value: 'C',
      label: 'Private',
    }
  ];

  const [pNumber, setPnumber] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [itemValue, setItemValue] = useState("");
  const [AdCategory, setAdCategory] = useState("");
  const [PublishedStatus, setPublishedStatus] = useState("");
  const [OfficialStatus, setOfficialStatus] = useState("");
  // const [createdBy, setName] = useState("");
  // const [remarks, setRemarks] = useState("");
  
  const [mobileno, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [expiryDate, setExpiryDate] = React.useState(null);

  const [file, setSelectedFiles] = useState("");
  const theme = createTheme();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }
  // let images = [];
  // const handleFileSelect = (event) => {
   
  //   for (let i = 0; i < event.target.files.length; i++) {
  //     images.push(URL.createObjectURL(event.target.files[i]))
  //   }
  //   console.log(images);
  // }
  

  
  

  const [currUser, setmydata] = useState([]);
  

  useEffect(() => {
    getdata();
  }, []);
  // const classes = useStyles();

  const token = getToken();
  
  const endpoint  = window.api_ip;
  console.log (endpoint);
  const getdata = async () => {
    
    const response = await fetch( endpoint + '/api/Noticeboard/GetUser/?userId='  + token.p_NO);
    setmydata(await response.json());
  }
  
  if (!token) {
    alert("You need to login first");
    return <Login />
  }

  const handleSubmit = (event) => {

    event.preventDefault()

    const formData = new FormData();

    // formData.append("ImageBinary", selectedFile);
    formData.append("PNumber", currUser.p_NO);
    // formData.append("FeedBackList", null);
    formData.append("Id", currUser.p_NO);
    formData.append("AdvertismentDate", "12-12-2022");
    formData.append("ExpiryDate", expiryDate.toLocaleDateString("en-US"));
    formData.append("ExtendedDate", "12-12-2022");
    formData.append("Detail", detail);
    formData.append("EmergencyStatus", AdCategory);
    formData.append("PublishedStatus", 'C');
    formData.append("OfficialStatus", OfficialStatus);
    formData.append("CreatedBy", currUser.name);
    formData.append("CreatedDate", "12-12-2022");
    formData.append("UpdateBy", currUser.name);
    formData.append("UpdatedDate", "12-12-2022");
    formData.append("MainImage", selectedFile);
    formData.append("ItemValue", itemValue);
    // formData.append("Images", null);
    formData.append("Remarks", detail);

    const endpoint = window.api_ip;

    try {
      const response = axios({
        method: "post",
        url: endpoint + "/api/Noticeboard/CreateAdvertisment",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "application/json, application/xml, text/plain, text/html, *.*"
        },
        // body: JSON.stringify({
        //   pnumber: pnumber,
        //   Detail: detail,
        //   EmergencyStatus: EmergencyStatus,
        //   PublishedStatus: PublishedStatus,
        //   OfficialStatus: OfficialStatus,
        //   CreatedBy: createdBy,
        //   Remarks: remarks,
        //   ItemValue: itemValue,
        //   Date: date,
        //   mobileno: mobileno,
        //   email: email,
        // }),
      });
     
      setPnumber("");
      setAdCategory("");
      setPublishedStatus("");
      setOfficialStatus("");
      // setCreatedBy("");
      // setRemarks("");
      setItemValue("");
      setMobile("");
      setEmail("");
      setSelectedFiles("");
      setExpiryDate("");

    } catch (error) {
      console.log(error)
    }
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
                  onChange={(e) => setPnumber(e.target.value)}
                  name="PNumber"
                  value={currUser.p_NO}
                  disabled
                  InputLabelProps={{
                    shrink: true,
                  }}
                  autoFocus
                  style={{ marginTop: '20px' }}
                />

                <TextField
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  name="Name"
                  disabled
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value = {currUser.name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                  style={{ marginTop: '20px' }}
                />

                <TextField
                  required
                  fullWidth
                  id="Detail"
                  label="Details"
                  name="Detail"
                  multiline
                  rows={4}
                  onChange={(e) => setDetail(e.target.value)}
                  style={{ marginTop: '20px' }}
                />

                <FormControl fullWidth style={{ marginTop: '20px' }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                  <OutlinedInput
                    id="ItemvValue"
                    label="Value"
                    name="ItemValue"
                    startAdornment={<InputAdornment position="start">PKR</InputAdornment>}
                    onChange={(e) => setItemValue(e.target.value)}
                  />
                </FormControl>

                <TextField
                  id="AdCategory"
                  fullWidth
                  select
                  name="AdCategory"
                  label="Select"
                  value={AdCategory}
                  helperText="Please select Ad Category"
                  onChange={(e) => setAdCategory(e.target.value)}
                  style={{ marginTop: '20px' }}
                >
                  {selectAdCategory.map((option) => (
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
                  id="mobileno"
                  type="tel"
                  label="Mobile Num"
                  onChange={(e) => setMobile(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="mobileno"
                  value={currUser.mobile_No}
                  style={{ marginTop: '20px' }}


                />


                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value = {currUser.email}
                  style={{ marginTop: '20px' }}

                />

                <LocalizationProvider dateAdapter={AdapterDateFns} >
                  <DatePicker
                    label="Expiry Date"
                    helperText="Date after which the Ad will be hidden"
                    value={expiryDate}
                    inputFormat="dd/MM/yyyy"
                    onChange={(newValue) => {
                      setExpiryDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} 
                    required 
                    style={{ marginTop: '20px' }} />}
                  />
                </LocalizationProvider>
                <br />

                <input
                 type="file" 
                 onChange={handleFileSelect} 
                 label="Upload image"
                 multiple style={{ marginTop: '20px' }}
                />
                


                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}

                >
                  Post
                </Button>


              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  )

}

export default PostAd