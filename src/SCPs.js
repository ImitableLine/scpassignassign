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
    
    
    const ScpNumCopy = [];
    const ScpOCCopy = [];
    const ScpCPCopy = [];
    const ScpDescCopy = [];
    const ScpRefCopy = [];
    const ScpOthCopy = []; 
    const ScpImgCopy = [];
    var temp = 0;
        
    const Data = currentState.map(
        scp => {
            if (temp === 0) {
                ScpNumCopy[temp] = scp.scpNumber;
                ScpOCCopy[temp] = scp.objectClass;
                ScpCPCopy[temp] = scp.scp;
                ScpDescCopy[temp] = scp.description;
                ScpRefCopy[temp] = scp.referenece;
                ScpOthCopy[temp] = scp.other;
                ScpImgCopy[temp] = scp.img;
                temp = temp+1; 
            }    
            
            if (scp.referenece === "" ) {
                ref = "";
            } 
            if (scp.other === "" ) {
                oth = "";
            }
        }
    )
       


    return(
        <div className="container"> 
            {Data} 
            <img src={ScpImgCopy[uInput]} alt={ScpNumCopy[uInput]} class="images" id="Floatin"/>
            <p><strong>SCP Number:</strong> {ScpNumCopy[uInput]}</p>
            <p><strong>Object Class:</strong> {ScpOCCopy[uInput]}</p>
            <p><strong>Containment Procedures:</strong> {ScpCPCopy[uInput]}</p>
            <p><strong>Description:</strong> {ScpDescCopy[uInput]}</p>
            <p><strong>{ref}</strong> {ScpRefCopy[uInput]}</p>
            <p><strong>{oth}</strong> {ScpOthCopy[uInput]}</p>
        </div>
    );
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












                /* for (let j = 0; j < scp.scpNumber.count - 1; j++) {
                    if (2 > 1) {
                        
                        
                        let temp = scp.scpNumber[j + 1]
                        scp.scpNumber[j + 1] = scp.scpNumber[j]
                        scp.scpNumber[j] = temp;
                        
                        temp = scp.objectClass[j + 1]
                        scp.objectClass[j + 1] = scp.objectClass[j]
                        scp.objectClass[j] = temp;
                          
                        temp = scp.scp[j + 1]
                        scp.scp[j + 1] = scp.scp[j]
                        scp.scp[j] = temp;
                         
                        temp = scp.description[j + 1]
                        scp.description[j + 1] = scp.description[j]
                        scp.description[j] = temp;
                         
                        temp = scp.referenece[j + 1]
                        scp.referenece[j + 1] = scp.referenece[j]
                        scp.referenece[j] = temp;
                         
                        temp = scp.other[j + 1]
                        scp.other[j + 1] = scp.other[j]
                        scp.other[j] = temp;
                         
                        temp = scp.img[j + 1]
                        scp.img[j + 1] = scp.img[j]
                        scp.img[j] = temp; 
                    }              
                } */
            /* } */



            
             /* console.log(scp.scpNumber.Count) */
            /* for (let i = 0; i < scp.scpNumber.Count; i++) { */
            // js for ordering data
    /* const scpnum = []
    const scpobj = []
    const scpscp = []
    const scpdesc = []
    const scpref = []
    const scpother = []
    const scpimg = [] */