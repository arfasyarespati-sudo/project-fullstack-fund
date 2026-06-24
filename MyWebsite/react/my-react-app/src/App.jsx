import { MyList } from "./components/MyList.jsx"
import { Header } from "./components/Header.jsx";
import { MyForm } from "./components/MyForm.jsx";


function App() {
 
  return(
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
    <Header></Header>
    <MyForm></MyForm>
    <MyList></MyList>
    </div>
  );
}






export default App
