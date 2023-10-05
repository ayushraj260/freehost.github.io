import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title={"Textutils"} aboutText={"About Us"} />
      <div className="container my-3">
        <TextForm  hedaing="Enter Your Text Here"/>
      </div>
    </>
  );
}

export default App;
