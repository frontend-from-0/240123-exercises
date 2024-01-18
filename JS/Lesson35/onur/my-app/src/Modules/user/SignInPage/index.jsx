import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form"
import { useTheme } from "@mui/material/styles";
import { UserActionType, useUserDispatch } from "../UserProvider";
import { useNavigate } from "react-router-dom";
import { StyledBox } from "../../../components/StyledBox";



export const SignInPage = () => {

    const navigate = useNavigate();

    const dispatch = useUserDispatch();

    const theme = useTheme();

    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const { register, handleSubmit, formState, reset } = form;

    const { errors } = formState;

    const onSubmit = (data) => {
        reset();
        dispatch({ type: UserActionType.LOG_IN })
        navigate('/')
    };

    return (
        <StyledBox>
            <Box sx={{ margin: 'auto', maxWidth: '100%', '&:hover': { color: theme.palette.success.main } }}>
                <Typography gutterBottom textAlign='center' variant="h4">Login</Typography>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Stack spacing={2} sx={{ width: { xs: '250px', sm: '500px' } }}>
                        <TextField label='Email' type="email"
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Email is required!'
                                },
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message: 'Invalid email format'
                                },
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField label='Password' type="password"
                            {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                pattern: {
                                    value: "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
                                    message: 'Please enter a valid password'
                                }
                            })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                        <Button type='submit' variant="contained" color="success"  >Login</Button>
                    </Stack>
                </form>
            </Box>
        </StyledBox>
    )
}
