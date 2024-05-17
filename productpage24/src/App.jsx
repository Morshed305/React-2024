import "./App.css";
import Nav from "./components/Nav";
import MainBody from "./components/MainBody";
const App = () => {
    return (
        <div>
            <Nav />
            <MainBody />
            <Nav />
            <MainBody />
            <Nav />
            <MainBody />
            <h1 className="text-3xl font-bold ">
                Hello world!
            </h1>
        </div>
    )
};
export default App;