import { Button } from "./components/index";

export default function App() {
  const someAsyncFunction = async () => {
    // Simulating a network request
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };
  return (
    <>
      <div className="mx-auto flex justify-center items-center h-screen w-full bg-gray">
        <Button label={"Sonikbtn"} onClick={someAsyncFunction} />
      </div>
    </>
  );
}
