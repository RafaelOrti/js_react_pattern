import { makeStyles } from '@material-ui/core/styles';

const HeaderMenuStyles = makeStyles((theme) => ({
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    minWidth: 200,
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
    },
    '& svg': {
      fontSize: '1.5rem',
      marginRight: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    '& span': {
      fontSize: '1rem',
      fontWeight: 600,
      color: theme.palette.text.primary,
    },
  },
}));

export default HeaderMenuStyles;
