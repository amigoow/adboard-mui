import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Cards from '../Components/Cards.js';
import Home from '../Components/Home.js';
import CardDetails from '../Components/CardDetails';
import Login from '../Components/Login.js';
import Logout from '../Components/Logout.js';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

function Appbar() {
    const useStyles = makeStyles((theme) => ({
        navlinks: {
            marginLeft: theme.spacing(90),
            display: "flex",
          },
         logo: {
            flexGrow: "1",
            cursor: "pointer",
          },
          link: {
            textDecoration: "none",
            color: "white",
            fontSize: "20px",
            marginLeft: theme.spacing(10),
            "&:hover": {
              color: "blue",
              textDecoration: "none",
              borderBottom: "1px solid white"
            },
          },
        
      }));
      const classes = useStyles();
      const getApi=[{"feedBackList":null,"Id":4,"PNumber":"","AdvertismentDate":"2021-12-16T00:00:00","ExpiryDate":"2021-12-16T00:00:00","ExtendedDate":"2021-12-16T00:00:00","Detail":"Testing Detail 5","EmergencyStatus":"T","PublishedStatus":"T","OfficialStatus":"T","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":"","UpdatedDate":"0001-01-01T00:00:00","Remarks":"good 5","MainImage":null,"ItemValue":1,"Images":[{"Id":13,"Path":"/images/4/001.jpg","BinaryImage":null,"IsMainImage":"Y","OfficialStatus":"Y","CreatedBy":"Inayat","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":14,"Path":"/images/4/IMG_7827.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":15,"Path":"/images/4/IMG_7847.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":16,"Path":"/images/4/IMG_7860.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""}],"FeedBackList":[]},{"feedBackList":null,"Id":2,"PNumber":"","AdvertismentDate":"2021-12-16T00:00:00","ExpiryDate":"2021-12-16T00:00:00","ExtendedDate":"2021-12-16T00:00:00","Detail":"Testing Detail 3","EmergencyStatus":"T","PublishedStatus":"T","OfficialStatus":"T","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":"","UpdatedDate":"0001-01-01T00:00:00","Remarks":"good 2","MainImage":null,"ItemValue":1,"Images":[{"Id":5,"Path":"/images/2/001.jpg","BinaryImage":null,"IsMainImage":"Y","OfficialStatus":"Y","CreatedBy":"Inayat","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":6,"Path":"/images/2/IMG_7827.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":7,"Path":"/images/2/IMG_7847.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":8,"Path":"/images/2/IMG_7860.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""}],"FeedBackList":[]},{"feedBackList":null,"Id":3,"PNumber":"","AdvertismentDate":"2021-12-16T00:00:00","ExpiryDate":"2021-12-16T00:00:00","ExtendedDate":"2021-12-16T00:00:00","Detail":"Testing Detail 4","EmergencyStatus":"T","PublishedStatus":"T","OfficialStatus":"T","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":"","UpdatedDate":"0001-01-01T00:00:00","Remarks":"good 4","MainImage":null,"ItemValue":1,"Images":[{"Id":9,"Path":"/images/3/001.jpg","BinaryImage":null,"IsMainImage":"Y","OfficialStatus":"Y","CreatedBy":"Inayat","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":10,"Path":"/images/3/IMG_7827.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":11,"Path":"/images/3/IMG_7847.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":12,"Path":"/images/3/IMG_7860.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""}],"FeedBackList":[]},{"feedBackList":null,"Id":5,"PNumber":"","AdvertismentDate":"2022-03-02T00:00:00","ExpiryDate":"2022-03-02T00:00:00","ExtendedDate":"2022-03-02T00:00:00","Detail":"3211321","EmergencyStatus":"\u0000","PublishedStatus":"T","OfficialStatus":"T","CreatedBy":"3211321","CreatedDate":"2022-03-02T00:00:00","UpdateBy":"","UpdatedDate":"0001-01-01T00:00:00","Remarks":"3211321","MainImage":null,"ItemValue":1,"Images":[],"FeedBackList":[]},{"feedBackList":null,"Id":1,"PNumber":"","AdvertismentDate":"2021-12-14T00:00:00","ExpiryDate":"2021-12-14T00:00:00","ExtendedDate":"2021-12-14T00:00:00","Detail":"Testing Detail","EmergencyStatus":"T","PublishedStatus":"T","OfficialStatus":"T","CreatedBy":"Inayatullah","CreatedDate":"2021-12-14T00:00:00","UpdateBy":"","UpdatedDate":"0001-01-01T00:00:00","Remarks":"good","MainImage":null,"ItemValue":1,"Images":[{"Id":1,"Path":"/images/1/001.jpg","BinaryImage":null,"IsMainImage":"Y","OfficialStatus":"Y","CreatedBy":"Inayat","CreatedDate":"2021-12-14T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":2,"Path":"/images/1/IMG_7827.jpg","BinaryImage":null,"IsMainImage":"Y","OfficialStatus":"Y","CreatedBy":"Inayat","CreatedDate":"2021-12-14T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":3,"Path":"/images/1/IMG_7847.jpg","BinaryImage":null,"IsMainImage":"Y","OfficialStatus":"Y","CreatedBy":"Inayat","CreatedDate":"2021-12-14T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":4,"Path":"/images/1/IMG_7860.jpg","BinaryImage":null,"IsMainImage":"Y","OfficialStatus":"Y","CreatedBy":"Inayat","CreatedDate":"2021-12-14T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""}],"FeedBackList":[]}]
    return (
        <Router>
        <AppBar position="relative">
        <Toolbar>
          {/* <AcUnitIcon/> */}
          <Typography variant="h6" color="inherit" noWrap>
            PNRA Ads
          </Typography>
          <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>Home</Link>
          <Link to="/cards" className={classes.link}>Ads</Link>

            
            <Link to="/signup" className={classes.link}>Post Ad</Link>

            
            <Link to={ ! getToken() ? '/login' : '/logout'  }  className={classes.link}>
              
              { ! getToken() ? 'Login' : 'Logout'  }
              
            </Link>


          </div>
        </Toolbar>
      </AppBar>
            <Route path="/">
                <Home />
            </Route>
            <Route  path="/cards/">
                <Cards api={getApi} />
            </Route>
            <Route  path="/card-details/:id">
                <CardDetails/>
            </Route>
            <Route  path="/login/">
                <Login/>
            </Route>
            <Route  path="/logout/">
                <Logout/>
            </Route>
           

      </Router>
      
    )
}

export default Appbar
function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
}