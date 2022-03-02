import axios from 'axios';
import { withRouter, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

function CardDetails() {

    const useStyles = makeStyles((theme) => ({
        myImg: {
             height: '500px',
             width:'800px',
            marginRight: theme.spacing(2),
            marginTop: theme.spacing(5),

        },
        contentCenter:{
            marginTop: theme.spacing(15),
            paddingTop: theme.spacing(8)

        }
    }));
    const classes = useStyles();

    const { id }    = useParams();
    const endpoint  = 'http://10.1.4.205:8085/';
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
                        <img src={ endpoint + get_image(product.Images) } alt="..." className={classes.myImg} />
                    </Grid>
                    <Grid className={classes.contentCenter} item xs={4}>
                        
                        {/* <h2>Email:</h2><p>{product.email}</p> */}
                        <h2>Name:</h2><p>{product.CreatedBy}</p>
                        {/* <h2>Phone#:</h2><p>{product.phone}</p> */}
                        {/* <h2>PNumber:</h2><p>{product.PNumber}</p> */}
                        <h2>Detail:</h2><p>{product.Detail}</p>
                        <h2>Remarks:</h2><p>{product.Remarks}</p>
                        <h2>CreatedDate:</h2><p>{product.CreatedDate}</p>
                        
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

function get_image ( el ) {
    for ( var e in el ) {
        if ( el[e].IsMainImage == "Y" ) {
            return el[e].Path;
        }
    }
}