import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

//import Link from '@material-ui/core/Link';
import CardDetails from '../Components/CardDetails';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

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
    paginationCenter:{
        paddingTop: theme.spacing(8),

    }

}));


function Cards() {
    const [mydata, setmydata] = useState([]);
    const getdata = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        setmydata(await response.json());
    }

    useEffect(() => {
        getdata();
    }, []);
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Container className={classes.cardGrid} maxWidth="md" id="cards">
                <Grid container spacing={4}>
                    <Router>
                        {
                            mydata.map((curEle) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} key={curEle.id}>
                                        <Link target="_blank" to={'/card-details/' + curEle.id} style={{ textDecoration: 'none' }} >
                                            <Card className={classes.card}>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image="https://source.unsplash.com/random"
                                                    title="Image title"
                                                />
                                                <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {curEle.name}
                                                    </Typography>
                                                    <Typography>
                                                        {curEle.email}
                                                    </Typography>
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

/* {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        View
                                    </Button>
                                    <Button size="small" color="primary">
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))} */

