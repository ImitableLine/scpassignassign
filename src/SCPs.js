import { useEffect, useState } from 'react';
import {uInput} from './Entries';


function SCPs()
{
    function LoadSCPs()
    {
        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log("Calling API...");
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
        }, [currentState], 
    );


    
      
    
    var ref = "References:";
    var oth = "Other Information:"; // these two are here, so that if they are empty on the SCP subject, we can make it nill instead of loading anything
    
    
    var ScpNumCopy = [];
    var ScpOCCopy = [];
    var ScpCPCopy = [];
    var ScpDescCopy = [];
    var ScpRefCopy = [];
    var ScpOthCopy = []; 
    var ScpImgCopy = []; // making vars to store JSON data in, so we can go over it by index after the user presses the corresponding button
    var temp = 0;

    

    return(
        <div className="container entrie-1">
            {
            currentState && currentState.map(
                scp => {
                    ScpNumCopy[temp] = scp.scpNumber;
                    ScpOCCopy[temp] = scp.objectClass;
                    ScpCPCopy[temp] = scp.scp;
                    ScpDescCopy[temp] = scp.description;
                    ScpRefCopy[temp] = scp.referenece;
                    ScpOthCopy[temp] = scp.other;
                    ScpImgCopy[temp] = scp.img; // Assigning the JSON data into vars
                    temp = temp+1; // using map as a for loop to do this
                    if (ScpRefCopy[uInput] === "" ) {
                        ref = "";
                    } 
                    if (ScpOthCopy[uInput] === "" ) { // these two are just here to produce nill if there is no ref or oth so they dont show up
                        oth = "";
                    }
                   
                    return null;
                }
            )
            }
            <img src={ScpImgCopy[uInput]} alt={ScpNumCopy[uInput]} class="images" id="Floatin"/> 
            <p><strong>SCP Number:</strong> {ScpNumCopy[uInput]}</p>
            <p><strong>Object Class:</strong> {ScpOCCopy[uInput]}</p>
            <p><strong>Containment Procedures:</strong> {ScpCPCopy[uInput]}</p>
            <p><strong>Description:</strong> {ScpDescCopy[uInput]}</p>
            <p><strong>{ref}</strong> {ScpRefCopy[uInput]}</p>
            <p><strong>{oth}</strong> {ScpOthCopy[uInput]}</p>
        </div>
    ); // Displaying the HTML/JS 
}



export default SCPs;    


/* function DisplaySCP(uInput){
    if (uInput === -1) {
        <div class="container">
            <h1>Hello I am scp?</h1>
            <p>Here and the foundtion welcome to contain</p>
        </div>
    }
    else{
        <div key={ScpNumCopy} class="container">
            <img src={ScpImgCopy[uInput]} alt={ScpNumCopy[uInput]} class="images" id="Floatin"/>
            <p><strong>SCP Number:</strong> {ScpNumCopy[uInput]}</p>
            <p><strong>Object Class:</strong> {ScpOCCopy[uInput]}</p>
            <p><strong>Containment Procedures:</strong> {ScpCPCopy[uInput]}</p>
            <p><strong>Description:</strong> {ScpDescCopy[uInput]}</p>
            <p><strong>{ref}</strong> {ScpRefCopy[uInput]}</p>
            <p><strong>{oth}</strong> {ScpOthCopy[uInput]}</p>
        </div>
    }
} */


/* <div key={ScpNumCopy} class="container">
                    <img src={ScpImgCopy[2]} alt={ScpNumCopy[2]} class="images" id="Floatin"/>
                    <p><strong>SCP Number:</strong> {ScpNumCopy[2]}</p>
                    <p><strong>Object Class:</strong> {ScpOCCopy[2]}</p>
                    <p><strong>Containment Procedures:</strong> {ScpCPCopy[2]}</p>
                    <p><strong>Description:</strong> {ScpDescCopy[2]}</p>
                    <p><strong>{ref}</strong> {ScpRefCopy[2]}</p>
                    <p><strong>{oth}</strong> {ScpOthCopy[2]}</p>
                </div> */



/* <div key={scp.scpNumber} class="container">
                    <img src={scp.img} alt={scp.scpNumber} class="images" id="Floatin"/>
                    <p><strong>SCP Number:</strong> {scp.scpNumber}</p>
                    <p><strong>Object Class:</strong> {scp.objectClass}</p>
                    <p><strong>Containment Procedures:</strong> {scp.scp}</p>
                    <p><strong>Description:</strong> {scp.description}</p>
                    <p><strong>{ref}</strong> {scp.referenece}</p>
                    <p><strong>{oth}</strong> {scp.other}</p>
                </div> */


                /*function SCPArray()
                {
                    currentState && currentState.map(
                        scp => {
                            ScpNumCopy[temp] = scp.scpNumber;
                            ScpOCCopy[temp] = scp.objectClass;
                            ScpCPCopy[temp] = scp.scp;
                            ScpDescCopy[temp] = scp.description;
                            ScpRefCopy[temp] = scp.referenece;
                            ScpOthCopy[temp] = scp.other;
                            ScpImgCopy[temp] = scp.img;
                            temp = temp+1; 
                            
                            
                            if (ScpRefCopy[uInput] === "" ) {
                                ref = "";
                            } 
                            if (ScpOthCopy[uInput] === "" ) {
                                oth = "";
                            }
                            return(<div key={scp.scpNumber}></div>)
                        }
                    )
                }*/