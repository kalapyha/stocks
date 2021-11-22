import { Typography, Paper, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  paperCard: {
    padding: "1.5rem",
    marginTop: "1.5rem"
  },
  paperHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    paddingLeft: "5px",
  },
  paperDivider: {
    paddingTop: "10px",
  },
});

interface InfoCardProps {
  header: string;
  data: string;
  icon: JSX.Element;
}

const InfoCard = (props: InfoCardProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid item spacing={2}>
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
