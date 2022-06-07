import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import React from "react";
import ForgetPassword from "../ForgetPassword";
import styles from "./loginPanel.module.css";
import ETTMSText from "/public/locals";

const Login = () => {
  const { locale } = useRouter();
  const router  = useRouter();


  const loginFormSubmit = (e) => {
    e.preventDefault()
    router.push('/home')
  }

  return (
    <div className={styles["login-wrapper"]}>
      <h2 className={styles["login-header"]}>
        {ETTMSText[locale].welcomePage.login.loginHeader}
      </h2>
      <Divider />
      <br />
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 0,
            width: "100%",
            marginBottom: "1rem",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <FormControl className={styles["login-form"]} fullWidth>
            <TextField
              id="standard-basic"
              label={ETTMSText[locale].welcomePage.login.loginUserName}
              variant="outlined"
              size="small"
            />
          </FormControl>
        </div>

        <div className={styles["login-input-field"]}>
          <FormControl className={styles["login-form"]} fullWidth>
            <TextField
              id="standard-basic"
              label={ETTMSText[locale].welcomePage.login.loginPassword}
              type="password"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </div>
      </Box>
      <Stack>
        {/* <p className={styles["login-forget-password"]}>
          {ETTMSText[locale].welcomePage.login.loginForgetPassword}
        </p> */}
        <ForgetPassword/>
      </Stack>
      <Stack>
        <Button variant="contained" className={styles["login-in-btn"]} onClick={(e) => loginFormSubmit(e)}>
          {ETTMSText[locale].welcomePage.login.loginSignInButton}
        </Button>
      </Stack>
    </div>
  );
};

export default Login;
