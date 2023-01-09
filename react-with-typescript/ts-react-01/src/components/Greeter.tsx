interface GreeterType {
  person?: string;
}

function Greeter({ person = 'unknown' }: GreeterType): JSX.Element {
  return (
    <>
      <h1>Hello ✋ {person}</h1>
    </>
  );
}
export default Greeter;
