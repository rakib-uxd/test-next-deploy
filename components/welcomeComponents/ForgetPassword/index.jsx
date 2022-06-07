import React ,{useState}from 'react'
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import styles from './forgetPassword.module.css'
import ETTMSText from "/public/locals";
import { useRouter } from "next/router";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ForgetPassword = () => {
    const { locale } = useRouter();
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.closeButton}>
          <Button onClick={handleClose}><CloseIcon/></Button>
          </div>
          <p id="modal-modal-title" variant="h6" component="h2">
            Enter email address for recover password
          </p>
          <div className={styles["login-input-field"]}>
          <FormControl className={styles["login-form"]} fullWidth>
            <TextField
              id="standard-basic"
              label='Email'
              type="email"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </div>
        <Stack>
        <Button variant="contained" className={styles["login-in-btn"]}>
          Send
        </Button>
        </Stack>
        
        </Box>
      </Modal>

        <Button onClick={handleOpen} className={styles["login-forget-password"]}>
          {ETTMSText[locale].welcomePage.login.loginForgetPassword}
        </Button>
        </div>
    </>
  )
}

export default ForgetPassword;