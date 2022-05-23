import { useEffect, useState } from 'react';

function SCPs()
{
    function LoadSCPs()
    {
        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            const scpData = JSON.parse(this.responseText); // Creates variable as scpdata with json data being parsed
            setState(scpData); // Sets state as scpdata
        }
        });

        xhr.open("GET", "https://scpdatabase-b328.restdb.io/rest/scpfiles");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-apikey", "628ace9c4cca5010d1293f37");
        xhr.setRequestHeader("cache-control", "no-cache");

        xhr.send(data);
    }
    // Creates variables for states
    const [currentState, setState] = useState([]);

    useEffect(
        () => {
            LoadSCPs();
        }, [currentState]
    );

    return(
        <div>
            { // Gets currentstate and maps through it
                currentState && currentState.map(
                    scp =>
                    <div key={scp.scpNumber} className="p-3 mb-3 border shadow rounded">
                        <h4>Img: <img src={scp.img} alt="SCP" /></h4>
                        <p>SCP Number: {scp.scpNumber}</p>
                        <p>Object Class: {scp.objectClass}</p>
                        <p>Containment Procedures: {scp.scp}</p>
                        <p>Description: {scp.description}</p>
                        <p>References: {scp.reference}</p>
                        <p>Other Information: {scp.other}</p>
                    </div>
                )
            }
        </div>
    );
}

export default SCPs;                      