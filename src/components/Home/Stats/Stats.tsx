import { useGetCryptoStatsQuery } from "../../../services/cryptoApi";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import {
  BlurCircular,
  BusinessCenter,
  Business,
  History,
  AllInclusive,
} from "@material-ui/icons";
import InfoCard from "./InfoCard";
import { useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import millify from "millify";

const Stats = (): JSX.Element => {
  // @ts-ignore:next-line
  const { data, isFetching } = useGetCryptoStatsQuery();
  const theme = useTheme();

  const useStyles = makeStyles({
    statsWrapper: {
      marginTop: theme.spacing(1),
    },
    header: {
      marginTop: theme.spacing(3),
    },
  });

  const classes = useStyles();
  return isFetching ? (
    <Box className={classes.header}>
      <Typography variant="h6" align="center">
        <CircularProgress />
      </Typography>
    </Box>
  ) : (
    <>
      <Box className={classes.header}>
        <Typography variant="h4" align="left">
          World crypto data
        </Typography>
      </Box>
      <Grid
        container
        alignContent="center"
        justifyContent="space-around"
        className={classes.statsWrapper}
      >
        <InfoCard
          header="Total Coins"
          data={data?.data?.totalCoins}
          icon={<BlurCircular color="primary" fontSize="small" />}
        />
        <InfoCard
          header="Total Markets"
          data={data?.data?.totalMarkets}
          icon={<Business color="primary" fontSize="small" />}
        />
        <InfoCard
          header="Total Exchanges"
          data={data?.data?.totalExchanges}
          icon={<BusinessCenter color="primary" fontSize="small" />}
        />
        <InfoCard
          header="24h Volume"
          data={millify(data?.data?.total24hVolume)}
          icon={<History color="primary" fontSize="small" />}
        />
        <InfoCard
          header="Market Capacity"
          data={millify(data?.data?.totalMarketCap)}
          icon={<AllInclusive color="primary" fontSize="small" />}
        />
      </Grid>
    </>
  );
};

export default Stats;
