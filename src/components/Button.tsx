type own = {
  prop: string;
  func: (a: string, b: number) => void; //returns a string
};

const Buttonn = ({ prop, func }: own) => {
  func("saroj", 5);
  return (
    <>
      <button>click me!</button>

      <h1>{prop}</h1>
      <h1></h1>
    </>
  );
};

export default Buttonn;
