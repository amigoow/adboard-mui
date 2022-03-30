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
    // debugger;
    const api = async () => {
        const response = await fetch( endpoint + '/api/Noticeboard/Advertisments');
        setmydata(await response.json());
    }
    // debugger;

    useEffect(() => {
        api();
    }, []);
    const classes = useStyles();

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
                            api.map((curEle) => {
                                return (

                                    <Grid item xs={12} sm={6} md={4} key={curEle.Id}>
                                        <Link target="_blank" to={'/card-details/' + curEle.Id} style={{ textDecoration: 'none' }} >
                                            <Card className={classes.card}>
                                                <CardMedia
                                                    crossorigin
                                                    className={classes.cardMedia}
                                                    // image= {  get_image(curEle.Images) }

                                                    image= { endpoint +  curEle.MainImage }
                                                    
                                                    title="Image title"
                                                />
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
    
    for ( var e in el ) {
        const endpoint = window.api_ip ;
        if ( el[e].IsMainImage == "Y" ) {
            return endpoint + '/' + el[e].Path;
        }
    }

    return notfound;
}

