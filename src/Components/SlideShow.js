import React from 'react';
import { Slide } from 'react-slideshow-image';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import '../App.css';


const slideImages = [
    // 'https://source.unsplash.com/random'
];

const Slideshow = () => {
    const useStyles = makeStyles((theme) => ({

        featureImage: {
            opacity: '1',
            color: 'green',
            fontWeight: '800',
        },

    }));
    const classes = useStyles();

    return (
       
            <Box  style={{ 'backgroundColor': `#cbe5ff` }} >
                <div>
                <div className='ripple-background'>
                    <div className='circle xxlarge shade1'></div>
                    <div className='circle xlarge shade2'></div>
                    <div className='circle large shade3'></div>
                    <div className='circle mediun shade4'></div>
                    <div className='circle small shade5'></div>
                    </div>
            <Slide easing="ease">
            
                <div className="each-slide">
                    

                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }} className={classes.featureImage}
                    >

                        <Container maxWidth="sm">
                        

                        <Typography
                            component="h3"
                            variant="h4"
                            spacing={2}
                            align="center"
                            padding={3}
                            
                        > 

                        Welcome to PNRA Ads 
                         <div>{ process.env.REACT_APP_ENV }</div>
                        </Typography>
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                                
                                
                            >
                                <Link href="/cards">
                                   View all Ads here
                                </Link>
                            </Stack>


                        </Container>
                    </div>
                </div>

                <div className="each-slide">
                    

                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }} className={classes.featureImage}
                    >

                        <Container maxWidth="sm">
                        

                        <Typography
                            component="h3"
                            variant="h4"
                            spacing={2}
                            align="center"
                            padding={3}
                            
                        > 
                            Integrated with MIS
                        </Typography>
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                                
                                
                            >
                                <Link href="/cards">
                                   View all Ads here
                                </Link>
                            </Stack>


                        </Container>
                    </div>
                </div>
                
            </Slide>

        </div>
            </Box>
        
    )
};

export default Slideshow;