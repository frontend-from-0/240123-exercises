import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

interface StyledPaperProps {
  className?: string;
  children: React.ReactNode;
}

export const StyledPaper = ({className, children}: StyledPaperProps) => {
  const theme = useTheme();

  return (
    <Paper elevation={10} className={className} sx={
      { padding: theme.spacing(2),
        width: '100vw',
        maxWidth: '600px',
        margin: '0 auto',
      }
    } >{children}</Paper>
  )
};