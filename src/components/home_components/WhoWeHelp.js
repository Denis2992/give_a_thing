import React, {useContext, useState} from "react";
import {Box, Divider, List, ListItem, Pagination, Typography} from "@mui/material";
import Decoration from "../../assets/Decoration.svg";
import {makeStyles} from "@mui/styles";
import {CurrentUserContext} from "../../App";
import CustomCardMedia from "../custom_elements/CustomCardMedia";


const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: theme.spacing(7, 0, 7, 0),
        color: theme.palette.text.primary,
        [theme.breakpoints.down(750)]: {
            display: "none"
        },
    },
    image: {
        width: 250,
        height: 30,
        margin: theme.spacing(4, 0)
    },
    list: {
        display: "flex",
        justifyContent: "space-around",
        maxWidth: 850,
        width: "100%",
    },
    listItem: {
        fontSize: 24,
        display: "flex",
        justifyContent: "center !important",
        textAlign: "center !important",
        border: `0.75px solid transparent`,
        maxWidth: 210,
        maxHeight: 70,
        cursor: "pointer",
        transition: "all 0.2s ease-out",
        "&:hover": {
            borderColor: theme.palette.secondary.main,
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        }
    },
    listItemSelected: {
        fontSize: 24,
        display: "flex",
        justifyContent: "center !important",
        textAlign: "center !important",
        border: `0.75px solid transparent`,
        maxWidth: 210,
        maxHeight: 70,
        cursor: "pointer",
        transition: "all 0.2s ease-out",
        borderColor: theme.palette.secondary.main,
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    },
    infoBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: theme.palette.text.primary,
        width: "100%"
    },
    infoText: {
        maxWidth: 600,
        textAlign: "center",
        margin: theme.spacing(7, 0, 4, 0),
        fontSize: 22
    },
    itemBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: theme.spacing(3, 2)
    },
//    mobile
    mainMobileBox: {
        padding: theme.spacing(3, 2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.up(750)]: {
            display: "none"
        },
    }
}));

export default function WhoWeHelp () {
    const classes = useStyles();
    const [category, setCategory] = useState({
        foundations: true,
        organizations: false,
        local: false
    });
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const {foundations, organizations, local} = useContext(CurrentUserContext);


    return (
        <>
            <Box className={classes.mainBox} name="WhoWeHelp">
                <Typography variant="h4">Komu pomagamy?</Typography>
                <CustomCardMedia component="img" image={Decoration} className={classes.image}/>
                <List className={classes.list}>
                    {category.foundations ? (
                        <ListItem className={classes.listItemSelected}>Fundacjom</ListItem>
                    ) : (
                        <ListItem
                            className={classes.listItem}
                            onClick={() => {
                                setCategory({
                                    foundations: true,
                                    organizations: false,
                                    local: false
                                });
                                setPage(1);
                            }}
                        >
                            Fundacjom
                        </ListItem>
                    )}
                    {category.organizations ? (
                        <ListItem className={classes.listItemSelected}>Organizacjom pozarz??dowym</ListItem>
                    ) : (
                        <ListItem
                            className={classes.listItem}
                            onClick={() => {
                                setCategory({
                                    foundations: false,
                                    organizations: true,
                                    local: false
                                });
                                setPage(1);
                            }}
                        >
                            Organizacjom pozarz??dowym
                        </ListItem>
                    )}
                    {category.local ? (
                        <ListItem className={classes.listItemSelected}>Lokalnym zbi??rkom</ListItem>
                    ) : (
                        <ListItem
                            className={classes.listItem}
                            onClick={() => setCategory({
                                foundations: false,
                                organizations: false,
                                local: true
                            })}
                        >
                            Lokalnym zbi??rkom
                        </ListItem>
                    )}
                </List>
                {category.foundations ? (
                    <>
                        <Typography className={classes.infoText}>
                            W naszej bazie znajdziesz list?? zweryfikowanych fundacji,
                            z kt??rymi wsp????pracujemy. Mo??esz sprawdzi?? czym si?? zajmuj??,
                            komu pomagaj?? i czego potrzebuj??.
                        </Typography>
                        <Box style={{maxWidth: 1200, width: "100%"}}>
                            {page === 1 ? (
                                foundations?.map((el, i) => i < 3 ? (
                                    <>
                                        <Box key={i} className={classes.itemBox}>
                                            <Box>
                                                <Typography variant="subtitle1">Fundacja {el.name}</Typography>
                                                <Typography
                                                    variant="subtitle2"
                                                    style={{fontStyle: "italic"}}
                                                >
                                                    Cel i misja: {el.mission}
                                                </Typography>
                                            </Box>
                                            <Typography
                                                variant="subtitle2"
                                                style={{marginRight: "2rem", fontStyle: "italic"}}
                                            >
                                                {el.help}
                                            </Typography>
                                        </Box>
                                        {i !== 2 ? (<Divider />) : null}
                                    </>
                                ) : null)
                            ) : null}
                            {page === 2 ? (
                                foundations?.map((el, i) => i > 2 && i < 6 ? (
                                    <>
                                        <Box key={i} className={classes.itemBox}>
                                            <Box>
                                                <Typography variant="subtitle1">Fundacja {el.name}</Typography>
                                                <Typography
                                                    variant="subtitle2"
                                                    style={{fontStyle: "italic"}}
                                                >
                                                    Cel i misja: {el.mission}
                                                </Typography>
                                            </Box>
                                            <Typography
                                                variant="subtitle2"
                                                style={{marginRight: "2rem", fontStyle: "italic"}}
                                            >
                                                {el.help}
                                            </Typography>
                                        </Box>
                                        {i !== 5 ? (<Divider />) : null}
                                    </>
                                ) : null)
                            ) : null}
                            {page === 3 ? (
                                foundations?.map((el, i) => i > 5 && i < 9 ? (
                                    <>
                                        <Box key={i} className={classes.itemBox}>
                                            <Box>
                                                <Typography variant="subtitle1">Fundacja {el.name}</Typography>
                                                <Typography
                                                    variant="subtitle2"
                                                    style={{fontStyle: "italic"}}
                                                >
                                                    Cel i misja: {el.mission}
                                                </Typography>
                                            </Box>
                                            <Typography
                                                variant="subtitle2"
                                                style={{marginRight: "2rem", fontStyle: "italic"}}
                                            >
                                                {el.help}
                                            </Typography>
                                        </Box>
                                        {i !== 8 ? (<Divider />) : null}
                                    </>
                                ) : null)
                            ) : null}
                        </Box>
                        <Pagination
                            count={3}
                            page={page}
                            onChange={handleChange}
                            hidePrevButton
                            hideNextButton
                            variant="outlined"
                            shape="rounded"
                        />
                    </>
                ) : null}
                {category.organizations ? (
                    <>
                        <Typography className={classes.infoText}>
                            Pomagamy r??wnie?? wszelkim organizacjom
                            pozarz??dowym i charytatywnym, kt??re nie
                            s?? Fundacjami. S?? to nasi Partnerzy, kt??ry
                            zrobi?? dobry po??ytek z rzeczy, kt??re do nich trafi??.
                        </Typography>
                        <Box style={{maxWidth: 1200, width: "100%"}}>
                            {page === 1 ? (
                                organizations?.map((el, i) => i < 3 ? (
                                    <>
                                        <Box key={i} className={classes.itemBox}>
                                            <Box>
                                                <Typography variant="subtitle1">Organizacja {el.name}</Typography>
                                                <Typography
                                                    variant="subtitle2"
                                                    style={{fontStyle: "italic"}}
                                                >
                                                    Cel i misja: {el.mission}
                                                </Typography>
                                            </Box>
                                            <Typography
                                                variant="subtitle2"
                                                style={{marginRight: "2rem", fontStyle: "italic"}}
                                            >
                                                {el.help}
                                            </Typography>
                                        </Box>
                                        {i !== 2 ? (<Divider />) : null}
                                    </>
                                ) : null)
                            ) : null}
                            {page === 2 ? (
                                organizations?.map((el, i) => i > 2 && i < 6 ? (
                                    <>
                                        <Box key={i} className={classes.itemBox}>
                                            <Box>
                                                <Typography variant="subtitle1">Organizacja {el.name}</Typography>
                                                <Typography
                                                    variant="subtitle2"
                                                    style={{fontStyle: "italic"}}
                                                >
                                                    Cel i misja: {el.mission}
                                                </Typography>
                                            </Box>
                                            <Typography
                                                variant="subtitle2"
                                                style={{marginRight: "2rem", fontStyle: "italic"}}
                                            >
                                                {el.help}
                                            </Typography>
                                        </Box>
                                        {i !== 5 ? (<Divider />) : null}
                                    </>
                                ) : null)
                            ) : null}
                        </Box>
                        <Pagination
                            count={2}
                            page={page}
                            onChange={handleChange}
                            hidePrevButton
                            hideNextButton
                            variant="outlined"
                            shape="rounded"
                        />
                    </>
                ) : null}
                {category.local ? (
                    <>
                        <Typography className={classes.infoText}>
                            Wspieramy lokalne zbi??rki organizowane przez
                            indywidualne osoby, kt??rym zale??y na dobru spo??eczno??ci,
                            w kt??rej ??yj??. Sam te?? mo??esz zorganizowa?? tak?? zbi??rk??
                            i pom??c tym, kt??rzy s?? najbli??ej.
                        </Typography>
                        <Box style={{maxWidth: 1200, width: "100%", marginBottom: 32}}>
                            {local?.map((el, i) => (
                                <>
                                    <Box key={i} className={classes.itemBox}>
                                        <Box>
                                            <Typography variant="subtitle1">Organizacja {el.name}</Typography>
                                            <Typography
                                                variant="subtitle2"
                                                style={{fontStyle: "italic"}}
                                            >
                                                Cel i misja: {el.mission}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="subtitle2"
                                            style={{marginRight: "2rem", fontStyle: "italic"}}
                                        >
                                            {el.help}
                                        </Typography>
                                    </Box>
                                    {i !== 2 ? (<Divider />) : null}
                                </>
                            ))}
                        </Box>
                    </>
                ) : null}
            </Box>
            <Box className={classes.mainMobileBox}>
                <Typography variant="h5">Komu pomagamy?</Typography>
                <CustomCardMedia component="img" image={Decoration} className={classes.image}/>
                <Box>
                    <Box style={{textAlign: "center", margin: "0 8px"}}>
                        <Typography variant="h6" style={{marginBottom: 8}}>Fundacjom</Typography>
                        <Typography variant="body2">
                            W naszej bazie znajdziesz list?? zweryfikowanych fundacji,
                            z kt??rymi wsp????pracujemy. Mo??esz sprawdzi?? czym si?? zajmuj??,
                            komu pomagaj?? i czego potrzebuj??.
                        </Typography>
                    </Box>
                    <Box style={{textAlign: "center", margin: "16px 8px"}}>
                        <Typography variant="h6" style={{marginBottom: 8}}>Organizacjom pozarz??dowym</Typography>
                        <Typography variant="body2">
                            Pomagamy r??wnie?? wszelkim organizacjom
                            pozarz??dowym i charytatywnym, kt??re nie
                            s?? Fundacjami. S?? to nasi Partnerzy, kt??ry
                            zrobi?? dobry po??ytek z rzeczy, kt??re do nich trafi??.
                        </Typography>
                    </Box>
                    <Box style={{textAlign: "center", margin: "0 16px"}}>
                        <Typography variant="h6" style={{marginBottom: 8}}>Lokalnym zbi??rkom</Typography>
                        <Typography variant="body2">
                            Wspieramy lokalne zbi??rki organizowane przez
                            indywidualne osoby, kt??rym zale??y na dobru spo??eczno??ci,
                            w kt??rej ??yj??. Sam te?? mo??esz zorganizowa?? tak?? zbi??rk??
                            i pom??c tym, kt??rzy s?? najbli??ej.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>

    )
}