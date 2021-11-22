import { useGetCryptoStatsQuery } from "../../../services/cryptoApi";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import BlurCircular from "@material-ui/icons/BlurCircular";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import Business from "@material-ui/icons/Business";
import History from "@material-ui/icons/History";
import AllInclusive from "@material-ui/icons/AllInclusive";
import InfoCard from './InfoCard'
import millify from "millify";
import { makeStyles } from "@mui/styles";

const Stats = () => {
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
        <Typography variant="h4" align="center">
          World crypto data
        </Typography>
      </Box>
      <Grid
        container
        alignContent="center"
        alignItems="center"
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

// "data":{5 items
// "totalCoins":12628
// "totalMarkets":83138
// "totalExchanges":373
// "totalMarketCap":2701269379312.067
// "total24hVolume":91937569991.03822
// }
export default Stats;
