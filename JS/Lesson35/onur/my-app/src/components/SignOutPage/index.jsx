import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useTheme } from "@mui/material";
import { useState } from "react";
import { UserActionType, useUserDispatch } from "../../Modules/user/UserProvider";


export const SignOutPage = () => {
    const dispatch = useUserDispatch();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSignOut = () => {
        setOpen(false);
        dispatch({ type: UserActionType.LOG_OUT })
    }

    return (
        <>
            <Button sx={{ color: { xs: theme.palette.primary.main, md: theme.palette.linkColor.main } }} variant="outlined" onClick={handleClickOpen}>
                Sign Out
            </Button>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Are you sure you want to log out of your account?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        If you log out, you will not be able to add a new recipe. Still want to log out?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleSignOut}>Yes</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}