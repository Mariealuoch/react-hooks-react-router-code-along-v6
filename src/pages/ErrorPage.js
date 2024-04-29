import { useRouteError } from "react-router-dom";
import Navbar from "../components/NavBar";

function Errorpage(){
    const error= useRouteError();
    console.error(error);

    return(
        <>
        <header>
            <Navbar/>
        </header>
        <main>
            <h1>Whoops! Something went wrong!</h1>
        </main>
        </>
    )
}
export default Errorpage;
