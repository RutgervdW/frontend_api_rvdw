import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Groesbeek() {
    const [groesbeekWeatherData, setGroesbeekWeatherData] = useState({});

    useEffect(() => {
        axios.get('https://weatherdbi.herokuapp.com/data/weather/groesbeek',)
            .then(data => {
                console.log(data.data);
                setGroesbeekWeatherData(data.data)
            });
    }, []);

    return (
        <div className="app">
            {groesbeekWeatherData.region ? (
                <div className="m-4 w-96">
                    <div className="text-3xl font-bold mb-4">
                        <h1>{groesbeekWeatherData.region}</h1>
                    </div>
                    <div className="p-2 text-xl bg-gray-100 rounded-lg">
                        <h2>Current conditions:</h2>
                        <div className="">
                            <img src={groesbeekWeatherData.currentConditions.iconURL} />
                            <ul className="">
                                <li className="text-2xl">
                                    {groesbeekWeatherData.currentConditions.temp.c} *C
                                </li>
                                <li>
                                    {groesbeekWeatherData.currentConditions.comment}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : <div><p>Weerdata wordt geladen...</p></div>}
            <Link to="/nijmegen"
                className="text-2xl m-4 px-2 py-1 border-2 border-blue-900 font-bold rounded-lg bg-blue-500 text-white">
                Nijmegen
            </Link>
        </div>
    );
}
export default Groesbeek;