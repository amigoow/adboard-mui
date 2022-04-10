import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@mui/material/Typography';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { styled } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const token = getToken();
function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken;
}

const PostAd = () => {
  
  const selectAdCategory = [{ value: 'D',label: 'Vehicle'},{value: 'D', label: 'Electronics' },{ value: 'P', label: 'Property' }];
  const selectOfficialStatus = [ { value: 'O', label: 'Official'  },{value: 'C', label: 'Private'}];
  const [pNumber, setPnumber] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [itemValue, setItemValue] = useState("");
  const [AdCategory, setAdCategory] = useState("");
  const [OfficialStatus, setOfficialStatus] = useState("");
  const [expiryDate, setExpiryDate] = React.useState(null);
  const Input = styled('input')({ display: 'none'});

   // Fetching User Data With API
  const [currUser, setmydata] = useState([]);

  const getdata = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    setmydata(await response.json());
  }

  useEffect(() => {
    getdata();
  }, []);

  //Multiple file Selection Method
  let images = [];
  const handleFileSelect = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      images.push(URL.createObjectURL(event.target.files[i]))
    }
    console.log(images);
  }

 //On Submit Method 
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("ImageBinary", images);
    formData.append("PNumber", pNumber);
    formData.append("FeedBackList", null);
    formData.append("Id", pNumber);
    formData.append("AdvertismentDate", null);
    formData.append("ExpiryDate", "");
    formData.append("ExtendedDate", "");
    formData.append("Detail", detail);
    formData.append("EmergencyStatus", AdCategory);
    formData.append("OfficialStatus", OfficialStatus);
    formData.append("CreatedBy", name);
    formData.append("CreatedDate", "");
    formData.append("UpdateBy", name);
    formData.append("UpdatedDate", "null");
    formData.append("MainImage", null);
    formData.append("ItemValue", itemValue);
    formData.append("Images", null);
    formData.append("Remarks", "detail");
    const endpoint = window.api_ip;

    try {
      const response = axios({
        method: "post",
        url: endpoint + "/api/Noticeboard/PostFile",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "application/json, application/xml, text/plain, text/html, *.*"
        }
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <Container maxWidth="md">
          <Stack   sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center" color="primary" >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} >
              <LockOpenIcon />
            </Avatar>
          </Stack>
          <Typography variant="h5" align="center" fontWeight="bold">Post an Ad</Typography>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <form onSubmit={handleSubmit}>
                <TextField required fullWidth id="pnumber" label="P.No#" name="PNumber" value={currUser.id} disabled InputLabelProps={{ shrink: true }} style={{ marginTop: '20px' }}/>
                <TextField required fullWidth id="Name"  label="Name" name="Name" disabled InputLabelProps={{shrink: true }} value={currUser.name} style={{ marginTop: '20px' }} />
                <TextField required fullWidth id="Detail" label="Details" name="Detail" multiline  rows={4} onChange={(e) => setDetail(e.target.value)} style={{ marginTop: '20px' }}/>
                <FormControl fullWidth style={{ marginTop: '20px' }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                  <OutlinedInput id="Item Value" label="Value" name="ItemValue" startAdornment={<InputAdornment position="start">PKR</InputAdornment>} onChange={(e) => setItemValue(e.target.value)} />
                </FormControl>
                 <TextField id="AdCategory" fullWidth select name="AdCategory" label="Select" value={AdCategory} helperText="Please select Ad Category" onChange={(e) => setAdCategory(e.target.value)} style={{ marginTop: '20px' }}  >
                  {selectAdCategory.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                 <TextField id="OfficialStatus" fullWidth select name="OfficialStatus" label="Select" value={OfficialStatus} helperText="Please select Ad Official Status" onChange={(e) => setOfficialStatus(e.target.value)}  style={{ marginTop: '20px' }}>
                  {selectOfficialStatus.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField required fullWidth id="mobileno" type="tel" label="Mobile Number"  InputLabelProps={{ shrink: true }} name="mobileno" value={currUser.phone} style={{ marginTop: '20px' }} disabled/>
                <TextField  required fullWidth id="email" label="Email Address" name="email"  InputLabelProps={{ shrink: true }}  value={currUser.email} style={{ marginTop: '20px' }} // onChange={(e) => setEmail(e.target.value)}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                  <DatePicker label="Expiry Date"  helperText="Date after which the Ad will be hidden" value={expiryDate} inputFormat="dd/MM/yyyy" onChange={(newValue) => { setExpiryDate(newValue); }}
                     renderInput={(params) => <TextField {...params} required fullWidth style={{ marginTop: '20px' }} />} />
                </LocalizationProvider>
                <label htmlFor="contained-button-file">
                  <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleFileSelect} />
                  <Button variant="contained" component="span" style={{marginTop: '20px'}} color="success">Please Upload Images</Button>
                </label>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Post Ad</Button>

              </form>
            </Grid>
          </Grid>
       
      </Container>
  )

}

export default PostAd