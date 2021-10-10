import React from "react";
import {Box, Button, Divider, Typography} from "@mui/material";
import Decoration from "../../assets/Decoration.svg";
import Icon1 from "../../assets/Icon-1.svg";
import Icon2 from "../../assets/Icon-2.svg";
import Icon3 from "../../assets/Icon-3.svg";
import Icon4 from "../../assets/Icon-4.svg";
import {makeStyles} from "@mui/styles";
import {useHistory} from "react-router-dom";
import CustomCardMedia from "../custom_elements/CustomCardMedia";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: theme.spacing(7, 0),
        color: theme.palette.text.primary
    },
    decoration: {
        width: 250,
        height: 30,
        margin: theme.spacing(4, 0)
    },
    boxContainer: {
        backgroundColor: theme.palette.secondary.light,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: theme.spacing(4)
    },
    stepsBox: {
        display: "flex",
        justifyContent: "space-around",
        maxWidth: 1200,
        width: "100%",
        backgroundColor: theme.palette.secondary.light
    },
    singleStep: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.light,
        borderRadius: 0,
        width: 180,
        margin: theme.spacing(8, 0, 4, 0)
    },
    icon: {
        width: 70,
        height: 70,
    },
    stepContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
    },
    divider: {
        width: 70
    },
    btn: {
        maxWidth: 250,
        width: "100%",
        "&:hover": {
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        }
    }
}));

export default function SimpleSteps () {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Box className={classes.mainBox} name="SimpleSteps">
            <Typography variant="h4">Wystarczą 4 proste kroki</Typography>
            <CustomCardMedia component="img" image={Decoration} className={classes.decoration}/>
            <Box className={classes.boxContainer}>
                <Box className={classes.stepsBox}>
                    <Box className={classes.singleStep}>
                        <CustomCardMedia component="img" image={Icon1} className={classes.icon}/>
                        <Box className={classes.stepContent}>
                            <Typography style={{margin: "8px 0"}}>Wybierz rzeczy</Typography>
                            <Divider className={classes.divider}/>
                            <Typography variant="body2" style={{marginTop: 8}}>ubrania, zabawki, sprzęt i inne</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.singleStep}>
                        <CustomCardMedia component="img" image={Icon2} className={classes.icon}/>
                        <Box className={classes.stepContent}>
                            <Typography style={{margin: "8px 0"}}>Spakuj je</Typography>
                            <Divider className={classes.divider}/>
                            <Typography variant="body2" style={{marginTop: 8}}>skorzystaj z worków na śmieci</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.singleStep}>
                        <CustomCardMedia component="img" image={Icon3} className={classes.icon}/>
                        <Box className={classes.stepContent}>
                            <Typography style={{margin: "8px 0"}}>Zdecyduj komu chcesz pomóc</Typography>
                            <Divider className={classes.divider}/>
                            <Typography variant="body2" style={{marginTop: 8}}>wybierz zaufane miejsce</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.singleStep}>
                        <CustomCardMedia component="img" image={Icon4} className={classes.icon}/>
                        <Box className={classes.stepContent}>
                            <Typography style={{margin: "8px 0"}}>Zamów kuriera</Typography>
                            <Divider className={classes.divider}/>
                            <Typography variant="body2" style={{marginTop: 8}}>kurier przyjedzie w dogodnym terminie</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Button
                className={classes.btn}
                variant="outlined"
                color="secondary"
                onClick={() => history.push("/logowanie")}
            >
                ODDAJ<br/> RZECZY
            </Button>
        </Box>
    );
}