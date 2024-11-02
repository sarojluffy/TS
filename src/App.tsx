import Buttonn from "./components/Button";

function App() {
  const funct = (a: string, b: number) => {
    console.log(a);
    console.log(b);
  };

  return (
    <>
      <Buttonn prop={"asd"} func={funct} />
    </>
  );
}

export default App;
