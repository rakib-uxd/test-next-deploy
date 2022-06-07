import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./registrationPanel.module.css";
import ETTMSText from "/public/locals";
const Registration = () => {
  const { locale } = useRouter();

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles["registration-wrapper"]}>
      <h2 className={styles["registration-header"]}>
        {ETTMSText[locale].welcomePage.registration.registrationHeader}
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
        <div className={styles["registration-input-field"]}>
          <FormControl fullWidth>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <TextField
                    id="standard-basic"
                    label={
                      ETTMSText[locale].welcomePage.registration
                        .registrationFirstName
                    }
                    variant="outlined"
                    size="small"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <TextField
                    id="standard-basic"
                    label={
                      ETTMSText[locale].welcomePage.registration
                        .registrationLastName
                    }
                    variant="outlined"
                    size="small"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </FormControl>
        </div>
        <div className={styles["registration-input-field"]}>
          <FormControl fullWidth>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <TextField
                    id="standard-basic"
                    label={
                      ETTMSText[locale].welcomePage.registration
                        .registrationUserName
                    }
                    variant="outlined"
                    size="small"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" size="small">
                    {
                      ETTMSText[locale].welcomePage.registration
                        .registrationUserLevel
                    }
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label={
                      ETTMSText[locale].welcomePage.registration
                        .registrationUserLevel
                    }
                    onChange={handleChange}
                    size="small"
                  >
                    <MenuItem value={10}>Admin</MenuItem>
                    <MenuItem value={20}>User</MenuItem>
                    <MenuItem value={30}>Customer</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </FormControl>
        </div>

        <div className={styles["registration-input-field"]}>
          <FormControl fullWidth>
            <TextField
              id="standard-basic"
              label={
                ETTMSText[locale].welcomePage.registration.registrationUserEmail
              }
              variant="outlined"
              size="small"
            />
          </FormControl>
        </div>

        <div className={styles["registration-input-field"]}>
          <FormControl fullWidth>
            <TextField
              id="standard-basic"
              label={
                ETTMSText[locale].welcomePage.registration.registrationPassword
              }
              type="password"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </div>
        <div className={styles["registration-input-field"]}>
          <FormControl fullWidth>
            <TextField
              id="standard-basic"
              label={
                ETTMSText[locale].welcomePage.registration
                  .registrationConfirmPassword
              }
              type="password"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </div>
      </Box>
      <Stack>
        <Button variant="contained" className={styles["registration-in-btn"]}>
          {ETTMSText[locale].welcomePage.registration.registrationSignUpButton}
        </Button>
      </Stack>
    </div>
  );
};

export default Registration;
