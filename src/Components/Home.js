import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';



export default function Home() {
    const useStyles = makeStyles((theme) => ({
        alignCenter: {
          textAlign:'center',
          paddingTop: theme.spacing(5),
    
        },
        
      }));
      const classes = useStyles();
    return (
        <Typography variant="h3" className={classes.alignCenter}>
      Design with Material UI
    </Typography> 
    )
}
