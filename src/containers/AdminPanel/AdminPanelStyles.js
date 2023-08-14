import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  section: {
    marginTop: theme.spacing(3),
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
  },
  addUserButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  userTable: {
    marginTop: theme.spacing(2),
  },
  userTableRow: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  userTableCell: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.text.primary,
    padding: theme.spacing(1, 2),
  },
  userTableCellAvatar: {
    display: 'flex',
    alignItems: 'center',
  },
  userAvatar: {
    marginRight: theme.spacing(2),
  },
  userTableCellActions: {
    display: 'flex',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: theme.spacing(1),
    '&:first-child': {
      marginLeft: 0,
    },
  },
}));

export default useStyles;
