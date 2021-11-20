import { useGetExchangesQuery } from "../../services/cryptoApi";
import { useGetGoldenQuery } from "../../services/metalsApi";

function App() {
  const { data: cryptoData, isFetching: cryptoFetching } =
  // @ts-ignore: Unreachable code error
    useGetExchangesQuery();

  // @ts-ignore: Unreachable code error
  const { data: goldData, isFetching: goldFetching } = useGetGoldenQuery();

  // console.log(cryptoData?.data?.coins);
  console.log("Golden", goldData);
  console.log(" ---- ");
  console.log("Crypto", cryptoData?.data);

  return cryptoFetching || goldFetching ? (
    <div>Loading</div>
  ) : (
    <>All fetched, Check console! </>
  );
}

export default App;
