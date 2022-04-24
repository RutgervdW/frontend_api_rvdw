import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Nijmegen() {
    const [nijmegenWeatherData, setNijmegenWeatherData] = useState({});

    useEffect(() => {
        axios.get('https://weatherdbi.herokuapp.com/data/weather/nijmegen',)
            .then(data => {
                console.log(data.data);
                setNijmegenWeatherData(data.data)
            });
    }, []);

    return (
        <div className="app">
            {nijmegenWeatherData.region ? (
                <div className="m-4 w-96">
                    <div className="text-3xl font-bold mb-4">
                        <h1>{nijmegenWeatherData.region}</h1>
                    </div>
                    <div className="p-2 text-xl bg-gray-100 rounded-lg">
                        <h2>Current conditions:</h2>
                        <div className="">
                            <img src={nijmegenWeatherData.currentConditions.iconURL} />
                            <ul className="">
                                <li className="text-2xl">
                                    {nijmegenWeatherData.currentConditions.temp.c} *C
                                </li>
                                <li>
                                    {nijmegenWeatherData.currentConditions.comment}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : <div><p>Weerdata wordt geladen...</p></div>}
            <Link to="/groesbeek"
                className="text-2xl m-4 px-2 py-1 border-2 border-blue-900 font-bold rounded-lg bg-blue-500 text-white">
                Groesbeek
            </Link>
        </div>
    )
}
export default Nijmegen;