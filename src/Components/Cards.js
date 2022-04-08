import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import Box from '@mui/material/Box';
import CardDetails from '../Components/CardDetails';
import notfound from '../notfound.png'; 

import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import { circularProgressClasses } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    paginationCenter: {
        paddingTop: theme.spacing(8),

    }

}));


function Cards() {
    const [mydata, setmydata] = useState([]);
     
    const endpoint  = window.api_ip;
    
    const api = async () => {
        const response = await fetch( endpoint + '/api/Noticeboard/Advertisments');
        setmydata(await response.json());
    }
    console.log(api);

    useEffect(() => {
        api();
    }, []);
    const classes = useStyles();
    // const api=[{"feedBackList":null,"Id":4,"PNumber":"","AdvertismentDate":"2021-12-16T00:00:00","ExpiryDate":"2021-12-16T00:00:00","ExtendedDate":"2021-12-16T00:00:00","Detail":"Testing Detail 5","EmergencyStatus":"T","PublishedStatus":"T","OfficialStatus":"T","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":"","UpdatedDate":"0001-01-01T00:00:00","Remarks":"good 5","MainImage":null,"ItemValue":1,"Images":[{"Id":13,"Path":"/images/4/001.jpg","BinaryImage":null,"IsMainImage":"Y","OfficialStatus":"Y","CreatedBy":"Inayat","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":14,"Path":"/images/4/IMG_7827.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":15,"Path":"/images/4/IMG_7847.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":16,"Path":"/images/4/IMG_7860.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""}],"FeedBackList":[]},{"feedBackList":null,"Id":2,"PNumber":"","AdvertismentDate":"2021-12-16T00:00:00","ExpiryDate":"2021-12-16T00:00:00","ExtendedDate":"2021-12-16T00:00:00","Detail":"Testing Detail 3","EmergencyStatus":"T","PublishedStatus":"T","OfficialStatus":"T","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":"","UpdatedDate":"0001-01-01T00:00:00","Remarks":"good 2","MainImage":null,"ItemValue":1,"Images":[{"Id":5,"Path":"/images/2/001.jpg","BinaryImage":null,"IsMainImage":"Y","OfficialStatus":"Y","CreatedBy":"Inayat","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":6,"Path":"/images/2/IMG_7827.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":7,"Path":"/images/2/IMG_7847.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":8,"Path":"/images/2/IMG_7860.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""}],"FeedBackList":[]},{"feedBackList":null,"Id":3,"PNumber":"","AdvertismentDate":"2021-12-16T00:00:00","ExpiryDate":"2021-12-16T00:00:00","ExtendedDate":"2021-12-16T00:00:00","Detail":"Testing Detail 4","EmergencyStatus":"T","PublishedStatus":"T","OfficialStatus":"T","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":"","UpdatedDate":"0001-01-01T00:00:00","Remarks":"good 4","MainImage":null,"ItemValue":1,"Images":[{"Id":9,"Path":"/images/3/001.jpg","BinaryImage":null,"IsMainImage":"Y","OfficialStatus":"Y","CreatedBy":"Inayat","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":10,"Path":"/images/3/IMG_7827.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":11,"Path":"/images/3/IMG_7847.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":12,"Path":"/images/3/IMG_7860.jpg","BinaryImage":null,"IsMainImage":"N","OfficialStatus":"Y","CreatedBy":"Inayatullah","CreatedDate":"2021-12-16T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""}],"FeedBackList":[]},{"feedBackList":null,"Id":5,"PNumber":"","AdvertismentDate":"2022-03-02T00:00:00","ExpiryDate":"2022-03-02T00:00:00","ExtendedDate":"2022-03-02T00:00:00","Detail":"3211321","EmergencyStatus":"\u0000","PublishedStatus":"T","OfficialStatus":"T","CreatedBy":"3211321","CreatedDate":"2022-03-02T00:00:00","UpdateBy":"","UpdatedDate":"0001-01-01T00:00:00","Remarks":"3211321","MainImage":null,"ItemValue":1,"Images":[],"FeedBackList":[]},{"feedBackList":null,"Id":1,"PNumber":"","AdvertismentDate":"2021-12-14T00:00:00","ExpiryDate":"2021-12-14T00:00:00","ExtendedDate":"2021-12-14T00:00:00","Detail":"Testing Detail","EmergencyStatus":"T","PublishedStatus":"T","OfficialStatus":"T","CreatedBy":"Inayatullah","CreatedDate":"2021-12-14T00:00:00","UpdateBy":"","UpdatedDate":"0001-01-01T00:00:00","Remarks":"good","MainImage":null,"ItemValue":1,"Images":[{"Id":1,"Path":"/images/1/001.jpg","BinaryImage":null,"IsMainImage":"Y","OfficialStatus":"Y","CreatedBy":"Inayat","CreatedDate":"2021-12-14T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":2,"Path":"/images/1/IMG_7827.jpg","BinaryImage":null,"IsMainImage":"Y","OfficialStatus":"Y","CreatedBy":"Inayat","CreatedDate":"2021-12-14T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":3,"Path":"/images/1/IMG_7847.jpg","BinaryImage":null,"IsMainImage":"Y","OfficialStatus":"Y","CreatedBy":"Inayat","CreatedDate":"2021-12-14T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""},{"Id":4,"Path":"/images/1/IMG_7860.jpg","BinaryImage":null,"IsMainImage":"Y","OfficialStatus":"Y","CreatedBy":"Inayat","CreatedDate":"2021-12-14T00:00:00","UpdateBy":null,"UpdatedDate":"0001-01-01T00:00:00","Remarks":""}],"FeedBackList":[]}]
    
    return (
        <>
            <CssBaseline />
            <Container className={classes.cardGrid} maxWidth="md" id="cards">
                <Typography
                    component="h5"
                    variant="h4"
                    spacing={4}
                    align="center"
                    padding={5}

                >
                    Ads Listings
                </Typography>

                <Grid container spacing={4}>
                    <Router>
                        {
                            mydata.map((curEle) => {
                                
                                return (
                                    
                                    <Grid item xs={12} sm={6} md={4} key={curEle.Id}>
                                        <Link target="_blank" to={'/card-details/' + curEle.Id} style={{ textDecoration: 'none' }} >
                                            <Card className={classes.card}>
                                                {/* <CardMedia
                                                    
                                                    className={classes.cardMedia}
                                                    // image= {  get_image(curEle.Images) }

                                                    image= { endpoint +  curEle.MainImage }
                                                    
                                                    title="Image title"
                                                /> */}
                                                
                                                <Box
                                                    component="img"
                                                   
                                                    alt="The house from the offer."
                                                    src={`data:image/jpeg;base64,${getImage(curEle.ImageBinary)}`}
                                                />

                                                {/* Without using Binary Image */}
                                                {/* <Box
                                                    component="img"
                                                    sx={{
                                                    height: 233,
                                                    width: 350,
                                                    maxHeight: { xs: 233, md: 167 },
                                                    maxWidth: { xs: 350, md: 250 },
                                                    }}
                                                    alt="The house from the offer."
                                                    src="http://10.1.4.59/Images/Advertisments/7fbb1edf-f23a-4dce-aa7c-f061a2895943.png"
                                                /> */}
                                                
                                                <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {curEle.Detail}
                                                    </Typography>
                                                    <Typography>
                                                        <strong>Posted By: </strong>
                                                        {curEle.CreatedBy}
                                                    </Typography>
                                                    <Typography>
                                                        <strong>Remarks: </strong>
                                                        {curEle.Remarks}
                                                    </Typography>
                                                    <Typography>
                                                        <strong>Item Value: </strong> 
                                                         {curEle.ItemValue}
                                                    </Typography>
                                                    <Typography>
                                                        <strong>Date:</strong>
                                                        <Moment format="DD/MM/YYYY">{curEle.CreatedDate}</Moment>
                                                    </Typography>
                                                    <Avatar alt="curEle.CreatedBy" src="/broken" >
                                                        {curEle.CreatedBy.charAt(0)}
                                                    </Avatar>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small" color="primary" variant="contained" >
                                                        View
                                                    </Button>
                                                </CardActions>

                                            </Card>
                                        </Link>
                                    </Grid>
                                )

                            })

                        }
                        <Route path="/card-details/:id" ><CardDetails /></Route>
                    </Router>
                </Grid>
            </Container>
        </>
    )
}
export default Cards

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function getImage ( el ) {
    
    // for ( var e in el ) {
    //     const endpoint = window.api_ip ;
    //     if ( el[e].IsMainImage == "Y" ) {
    //         return endpoint + '/' + el[e].Path;
    //     }
    // }

    return el;
}

