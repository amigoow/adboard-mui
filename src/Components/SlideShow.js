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
       
            <Box  style={{ 'backgroundColor': `#ccc` }} >
                <div>
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
                            Welcome to PNRA Notice Board
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