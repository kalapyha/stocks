import { Typography, Paper, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";

interface InfoCardProps {
  header: string;
  data: string;
  icon: JSX.Element;
}

const InfoCard = (props: InfoCardProps): JSX.Element => {
  const theme = useTheme();

  const useStyles = makeStyles({
    paperCard: {
      padding: theme.spacing(3),
      marginTop: theme.spacing(3),
    },
    paperHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    headerText: {
      paddingLeft: theme.spacing(0.5),
    },
    paperDivider: {
      paddingTop: theme.spacing(2),
    },
  });

  const classes = useStyles();

  return (
    <Grid item xs={11} sm={11} md={2} lg={2} xl={2}>
      <Paper square elevation={3} className={classes.paperCard}>
        <div className={classes.paperHeader}>
          {props.icon}
          <Typography color="GrayText" className={classes.headerText}>
            {props.header}
          </Typography>
        </div>
        <Divider className={classes.paperDivider} />
        <Typography
          variant="h5"
          align="center"
          className={classes.paperDivider}
        >
          {props.data}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default InfoCard;
