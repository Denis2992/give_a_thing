import React from "react";
import {Box, Typography, Container} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Background from "../../assets/3-Columns-Background.png";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        width: "100%",
        backgroundImage: `url(${Background})`,
        display: "flex",
        justifyContent: "space-around"
    },
    singleBox: {
        maxWidth: theme.spacing(50),
        textAlign: "center"
    },
    number: {
        color: theme.palette.primary.dark,
        fontWeight: 300,
        margin: theme.spacing(4, 0, 2, 0)
    },
    head: {
        color: theme.palette.text.primary
    },
    description: {
        color: theme.palette.text.primary,
        fontWeight: 300,
        margin: theme.spacing(3, 0, 8, 0)
    }
}));

export default function ThreeColumnsInfo () {
    const classes = useStyles();

    return (
        <Box className={classes.mainBox}>
            <Box className={classes.singleBox}>
                <Typography className={classes.number} variant="h2">10</Typography>
                <Typography className={classes.head}>ODDANYCH WORKÓW</Typography>
                <Typography variant="body2" className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </Typography>
            </Box>
            <Box className={classes.singleBox}>
                <Typography className={classes.number} variant="h2">5</Typography>
                <Typography className={classes.head}>WSPARTYCH ORGANIZACJI</Typography>
                <Typography variant="body2" className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </Typography>
            </Box>
            <Box className={classes.singleBox}>
                <Typography
                    className={classes.number}
                    variant="h2"
                >7</Typography>
                <Typography className={classes.head}>ZORGANIZOWANY ZBIÓREK</Typography>
                <Typography variant="body2" className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </Typography>
            </Box>
        </Box>
    )
}