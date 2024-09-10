import SideNav from "./components/SideNav";
import Chat from "./components/Chat";

function App() {
  return (
      <div className="bg-[#FFFFFFF] w-[100%] h-[100vh] flex flex-row">
        <SideNav />
        <Chat />
      </div>
  );
}

export default App;
