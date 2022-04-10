import axios from 'axios';
import { withRouter, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import notfound from '../notfound.png';
import Box from '@mui/material/Box';

function CardDetails() {

    const useStyles = makeStyles((theme) => ({
        myImg: {
             height: '500px',
             width:'800px',
            marginRight: theme.spacing(2),
            marginTop: theme.spacing(5),

        },
        contentCenter:{
            marginTop: theme.spacing(5),
            paddingTop: theme.spacing(8)

        }
    }));
    const classes = useStyles();

    const { id }    = useParams();
    const endpoint  = window.api_ip;
    
    
    const url       = endpoint + `/api/Noticeboard/Advertisment?id=${id}`;

    const [product, setproduct] = useState(null);


    useEffect(() => {
        axios.get(url).then(response => {
            setproduct(response.data)
        })
    }, [url]);

    let content = null;
    if (product) {
        return (
            content =
            <Container id="details">
                <Grid container spacing={2}>
                    <Grid item xs={8}>    
                        <Box
                            component="img"
                            sx={{ width: 700 }}
                            alt="The house from the offer."
                            src={`data:image/jpeg;base64,${product.ImageBinary}`}
                        />
                        {/* <img src={ endpoint + product.MainImage } alt="..a." className={classes.myImg} /> */}
                    </Grid>
                    <Grid className={classes.contentCenter} item xs={4}>
                        
                        {/* <h2>Email:</h2><p>{product.email}</p> */}
                        <h4>Posted By:</h4><p>{product.CreatedBy}</p>
                        {/* <h2>Phone#:</h2><p>{product.phone}</p> */}
                        {/* <h2>PNumber:</h2><p>{product.PNumber}</p> */}
                        <h4>Detail:</h4><p>{product.Detail}</p>
                        <h4>Remarks:</h4><p>{product.Remarks}</p>
                        <h4>Created Date:</h4><p>{product.CreatedDate}</p>
                        <h4>Item Value:</h4><p>{product.ItemValue}</p>
                        <h4>CreatedDate:</h4><p>{product.CreatedDate}</p>
                        
                        {/* <p>{url}</p> */}
                    </Grid>

                </Grid>

            </Container>
        );
    }
    return (
        <div>
            {content}
        </div>
    );

}

export default withRouter(CardDetails);

// function get_image ( el ) {
//     const endpoint  = window.api_ip;
//     for ( var e in el ) {
//         if ( el[e].IsMainImage == "Y" ) {
//             return  endpoint + '/' + el[e].Path;
//         }
//     }

//     return notfound;
// }

function get_image ( el ) {
    const endpoint  = window.api_ip;
    for ( var e in el ) {
        if ( el[e].IsMainImage == "Y" ) {
            return  endpoint + '/' + el[e].Path;
        }
    }

    return notfound;
}