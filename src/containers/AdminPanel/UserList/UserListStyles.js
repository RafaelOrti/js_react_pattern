import { makeStyles } from '@material-ui/core/styles';

// Estilos utilizando makeStyles de Material-UI
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  tableContainer: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
