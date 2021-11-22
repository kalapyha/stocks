import Marquee from "react-double-marquee";
import { Grid } from "@mui/material";
import { useGetGoldenQuery } from "../../../services/metalsApi";
import { getMetalDataString } from "../../../utils/utils";

const LiveRanges = () => {
  const { data: goldData, isFetching: goldFetching } = useGetGoldenQuery();

  return (
    <Grid
      container
      xs={12}
      md={2}
      alignItems="center"
      direction="row"
      style={{
        width: "90%",
        whiteSpace: "nowrap",
        color: "grey",
      }}
    >
      {!goldFetching && (
        <Marquee direction="left">
          {`${getMetalDataString("GOLD", goldData[0])}`}
        </Marquee>
      )}
    </Grid>
  );
};

export default LiveRanges;
