import React, {useState} from "react";
import {Box, TextField, Typography} from "@mui/material";
import Menu from "./home_components/Menu";
import Decoration from "../assets/Decoration.svg";
import CustomButton from "./custom_elements/CustomButton";
import {makeStyles} from "@mui/styles";
import useInput from "./hooks/useInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import getFirebase from "./firebase";
import {useHistory} from "react-router-dom";
import CustomCardMedia from "./custom_elements/CustomCardMedia";
import ReCAPTCHA from "react-google-recaptcha";
import merge from "validator/es/lib/util/merge";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        maxWidth: 1500,
        margin: "0 auto",
        color: theme.palette.secondary.main,
    },
    loginBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    decoration: {
        width: 250,
        height: 30,
        margin: theme.spacing(4, 0, 6, 0)
    },
    form: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    formBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.light,
        maxWidth: 380,
        width: "100%",


    },
    input: {
        maxWidth: 250,
        height: 75,
        margin: theme.spacing(1),
    }, errorBox: {
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    captchaBtn: {
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 550,
        width: "100%"
    },
    btnBox: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: theme.spacing(0, 2, 2, 2),
        [theme.breakpoints.down(600)]: {
            flexDirection: "column-reverse",
            justifyContent: "center"
        },
    }
}));

const schema = yup.object({
    email: yup
        .string()
        .email("Wprowad?? poprawny email")
        .max(50, "Maksymalna d??ugo???? 50 znak??w")
        .required("Wprowad?? email"),
    password: yup
        .string()
        .min(6, "Minimalna d??ugo???? 6 znak??w")
        .required("Wprowad?? has??o"),
    confPassword: yup
        .string()
        .required("Powt??rz has??o")
        .oneOf([yup.ref("password"), null], "Has??a maja byc jednakowe")
}).required();

export default function Login () {
    const classes = useStyles();
    const firebaseInstance = getFirebase();
    const [regEmail] = useInput("");
    const [regPassword] = useInput("");
    const [confirmPassword] = useInput("");
    const history = useHistory();
    const [notSentError, setNotSendError] = useState(false);
    const [verified, setVerified] = useState(false);
    const [verifiedError, setVerifiedError] = useState(false);
    const {  control, register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const onChange = () => {
        setVerified(true);
    }

    const signUp = async () => {

        if (verified){
            try {
                if (firebaseInstance) {
                    const user = await firebaseInstance.auth().createUserWithEmailAndPassword(regEmail.value, regPassword.value)
                    console.log("user", user);
                    const userData = firebaseInstance
                        .firestore()
                        .collection(`${regEmail.value}`)
                        .doc("userData");
                    await userData.set({email: regEmail.value}, merge(true));
                    setNotSendError(false);
                    setVerified(false);
                    setVerifiedError(false);
                    history.push("/");
                }
            }catch (error) {
                console.log("error", error);
                setNotSendError(true);
            }
        } else {
            setVerifiedError(true);
        }
    };

    return (
        <Box className={classes.mainBox}>
            <Menu />
            <Box className={classes.loginBox}>
                <Typography variant="h4" style={{marginTop: 80}}>Za?????? konto</Typography>
                <CustomCardMedia component="img" image={Decoration} className={classes.decoration}/>
                <form className={classes.form} onSubmit={handleSubmit(signUp)}>
                    <Box className={classes.formBox}>
                        <Controller
                            id="loginEmail"
                            name="loginEmail"
                            control={control}
                            render={() => (
                                <TextField
                                    error={!!errors?.email}
                                    color={errors?.email ? "error" : "secondary"}
                                    label="Email"
                                    variant="standard"
                                    helperText={errors?.email?.message}
                                    className={classes.input}
                                    style={{marginTop: 30}}
                                    {...register("email")}
                                    {...regEmail}
                                />
                            )}
                        />
                        <Controller
                            id="regPassword"
                            name="regPassword"
                            control={control}
                            render={() => (
                                <TextField
                                    error={!!errors?.password}
                                    color={errors?.password ? "error" : "secondary"}
                                    label="Has??o"
                                    type="password"
                                    variant="standard"
                                    helperText={errors?.password?.message}
                                    className={classes.input}
                                    {...register("password")}
                                    {...regPassword}
                                />
                            )}
                        />
                        <Controller
                            id="confirmPassword"
                            name="confirmPassword"
                            control={control}
                            render={() => (
                                <TextField
                                    error={!!errors?.confPassword}
                                    color={errors?.confPassword ? "error" : "secondary"}
                                    label="Powt??rz has??o"
                                    type="password"
                                    variant="standard"
                                    helperText={errors?.confPassword?.message}
                                    className={classes.input}
                                    style={{marginBottom: 30}}
                                    {...register("confPassword")}
                                    {...confirmPassword}
                                />
                            )}
                        />
                    </Box>
                    <Box className={classes.errorBox}>
                        {notSentError ? (
                            <Typography
                                variant="caption"
                                color="error"
                            >
                                Email jest zaj??ty
                            </Typography>
                        ) : null
                        }
                    </Box>
                    <Box className={classes.captchaBtn}>
                        <Box style={{marginBottom: 20}}>
                            <ReCAPTCHA
                                sitekey="6LdP2LscAAAAAChLhBfXBGbZMPEAUAksy2woB-5n"
                                onChange={onChange}
                            />
                            {verifiedError ? (
                                <Typography
                                    variant="caption"
                                    color="error"
                                >
                                    Potwierd?? ??e nie jeste?? robotem
                                </Typography>
                            ) : null}
                        </Box>
                        <Box className={classes.btnBox}>
                            <Typography
                                style={{fontWeight: 300, cursor: "pointer", marginBottom: 24}}
                                onClick={() => history.push("/logowanie")}
                            >
                                Zaloguj si??</Typography>

                            <CustomButton
                                type="submit"
                                style={{marginBottom: 24}}
                            >
                                Za?????? konto
                            </CustomButton>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}