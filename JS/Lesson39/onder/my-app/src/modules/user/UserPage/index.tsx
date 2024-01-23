import { StyledPaper } from '../../../components/StyledPaper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface UserData {
	userName: string;
	email: string;
	password: string;
}

export const UserPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			userName: '',
			email: '',
			password: '',
		},
	});

	const [showDialog, setShowDialog] = useState(false);

	const onSubmit = (data: UserData) => {
    console.log(data);
    setShowDialog(true);
  };

	return (
		<StyledPaper>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<TextField
					fullWidth
          role="user-name-input"
					id='user-name-input'
					label='User Name'
					variant='standard'
					{...register('userName', { required: true })}
					error={!!errors.userName}
					helperText={errors.userName && 'Please enter a user name'}
          data-testid={'user-name-input'}
				/>
				<TextField
					fullWidth
					id='email-input'
					type='email'
					label='Email'
					variant='standard'
					{...register('email', { required: true })}
					error={!!errors.email}
					helperText={errors.email && 'Please enter an email'}
				/>
				<TextField
					fullWidth
					id='password-input'
					type='password'
					label='Password'
					variant='standard'
					{...register('password', { required: true, minLength: 8 })}
					error={!!errors.password}
					helperText={
						errors.password && 'Password should be at least 8 characters long'
					}
				/>
				<Stack
					direction='row'
					spacing={{ xs: 1, sm: 2 }}
					useFlexGap
					flexWrap='wrap'
					sx={{ marginTop: 2 }}
				>
					<Button data-testid={'submit-btn'} type='submit' variant='contained'>
						Save changes
					</Button>
					<Button type='reset' color='warning' variant='contained'>
						Clear
					</Button>
				</Stack>
			</form>

			<Dialog
				open={showDialog}
				onClose={() => setShowDialog(false)}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
        data-testid={'dialog'}
			>
				<DialogTitle id='alert-dialog-title'>
					Update successful!
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						The account information has been successfully updated.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setShowDialog(false)} autoFocus>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</StyledPaper>
	);
};
