import Stats from './Stats/Stats'
import CurrencyTable from './CurrencyTable/CurrencyTable'
import Container from "@mui/material/Container";

const Home = (): JSX.Element => {
  return (
    <Container>
      <Stats />
      <CurrencyTable />
    </Container>
  );
};

export default Home
