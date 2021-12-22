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

    const { id } = useParams();
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

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
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <img src="https://source.unsplash.com/random" alt="..." className={classes.myImg} />
                    </Grid>
                    <Grid className={classes.contentCenter} item xs={4}>
                        <h2>Email:</h2><p>{product.email}</p>
                        <h2>Name:</h2><p>{product.name}</p>
                        <h2>Phone#:</h2><p>{product.phone}</p>
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