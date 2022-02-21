import React from 'react';
import { Slide } from 'react-slideshow-image';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';


const slideImages = [
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random'
];

const Slideshow = () => {
    const useStyles = makeStyles((theme) => ({

        featureImage: {
            opacity: '1',
            color: 'white',
            fontWeight: '800',
        },

    }));
    const classes = useStyles();

    return (

        <div>
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }} className={classes.featureImage}
                    >

                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Welcome
                            </Typography>
                            <Typography variant="h3" align="center" fontWeight="bold"

                            >
                                Learning React with Material UI
                            </Typography>


                        </Container>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                        {/* <span>Slide 3</span> */}
                    </div>
                </div>
            </Slide>

        </div>
    )
};

export default Slideshow;