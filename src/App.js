import Navigation from "./navigation/Nav";
import Product from "./Products/Product";
import Recommend from "./Recommended/Recommend";
import Sidebar from "./Sidebar/Sidebar.js"

function App() {
  return (
    <>
    <Sidebar/>
    <Navigation/>
    <Recommend/>
    <Product/>
    </>
  );
}

export default App;
