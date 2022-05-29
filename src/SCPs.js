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
    
    


    
    var ref = "References:";
    var oth = "Other Information:"; 
    
    const Data = currentState.map(
        scp => {
            if (scp.referenece === "" ) {
                ref = "";
              }
              if (scp.other === "" ) {
                oth = "";
              }
            return(       
                <div key={scp.scpNumber} class="container">
                    <img src={scp.img} alt={scp.scpNumber} class="images" id="Floatin"/>
                    <p><strong>SCP Number:</strong> {scp.scpNumber}</p>
                    <p><strong>Object Class:</strong> {scp.objectClass}</p>
                    <p><strong>Containment Procedures:</strong> {scp.scp}</p>
                    <p><strong>Description:</strong> {scp.description}</p>
                    <p><strong>{ref}</strong> {scp.referenece}</p>
                    <p><strong>{oth}</strong> {scp.other}</p>
                </div>
            );
        }
    )

    return(
        <div className="container">
            {Data}
        </div>
    );
}

export default SCPs;    