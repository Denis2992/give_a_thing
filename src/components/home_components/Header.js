import React from "react";
import Menu from "./Menu";
import {CardMedia, Box, Typography, Button} from "@mui/material";
import {makeStyles} from "@mui/styles";
import HomeImage from "../../assets/Home-Hero-Image.jpg"
import Decoration from "../../assets/Decoration.svg"


const useStyles = makeStyles((theme) => ({
    boxComponent: {
        display: "flex",
        justifyContent: "space-between",
    },
    img: {
        maxWidth: 1000,

        backgroundSize: "contain",
        marginLeft: "-350px"
    },
    headerBox: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    startHelp: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    startHelpText: {
        textAlign: "center"
    },
    decoration: {
        width: 250,
        height: 30,
        alignSelf: "center",
        margin: theme.spacing(3, 0)
    },
    btnBox: {
        display: "flex",
        justifyContent: "space-around",
    },
    btn: {
        maxWidth: 250,
        width: "100%",
    }
}));

export default function Header () {
    const classes = useStyles();

    return (
        <Box className={classes.boxComponent}>
            <CardMedia
                className={classes.img}
                component="img"
                image={HomeImage}
            />
            <Box className={classes.headerBox}>
                <Menu />
                <Box className={classes.startHelp}>
                    <Typography variant="h4" className={classes.startHelpText}>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</Typography>
                    <CardMedia
                        component="img"
                        image={Decoration}
                        className={classes.decoration}
                    />
                    <Box className={classes.btnBox}>
                        <Button
                            className={classes.btn}
                            color="secondary"
                            variant="outlined"
                        >
                            Oddaj<br/> rzeczy
                        </Button>
                        <Button
                            className={classes.btn}
                            color="secondary"
                            variant="outlined"
                        >
                            Zorganizuj zbiórkę
                        </Button>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}