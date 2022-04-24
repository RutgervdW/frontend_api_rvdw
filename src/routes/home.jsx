import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="">
            <h2 className="m-2 text-xl font-bold">Waar ben je nu?</h2>
            <div className="m-2 text-md">
                <Link to="/groesbeek">Groesbeek</Link>
            </div>
            <div className="m-2">
                <Link to="/nijmegen">Nijmegen</Link>
            </div>
        </div>
    );
}
export default Home;