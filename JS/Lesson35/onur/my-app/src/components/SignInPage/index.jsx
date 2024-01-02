import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form"
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

export const StyledBox = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
}))

export const SignInPage = () => {

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
        console.log(data);
        reset();
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
