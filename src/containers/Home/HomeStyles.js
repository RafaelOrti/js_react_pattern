import { makeStyles } from '@material-ui/core/styles';

/**
 * Estilos personalizados para el componente Home.
 *
 * Utiliza Material-UI's makeStyles para definir estilos reutilizables.
 *
 * @returns {Object} Objeto de estilos generado por makeStyles.
 */
const useStyles = makeStyles((theme) => ({
  // Contenedor principal
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  // Encabezado
  header: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.main,
  },
  // Contenido
  content: {
    maxWidth: 600,
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
  // Botón
  button: {
    padding: theme.spacing(1.5, 4),
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    textTransform: 'uppercase',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default useStyles;
