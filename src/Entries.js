import SCPs from './SCPs';

var scp = 0;
function Entries(){
    function scpNum(input){
        scp = input;
        return(
            <SCPs />
        )
    }
    return (
        <div class="container">
            <ul className='container-entries'>
                <button onClick={scpNum('0')}>SCP-002</button> 
                <button onClick={scpNum('1')}>SCP-003</button>
                <button onClick={scpNum('2')}>SCP-004</button> 
                <button onClick={scpNum('3')}>SCP-005</button>
                <button onClick={scpNum(4)}>SCP-006</button> 
                <button onClick={scpNum(5)}>SCP-007</button> 
                <button onClick={scpNum(6)}>SCP-008</button> 
                <button onClick={scpNum(7)}>SCP-009</button>
                <button onClick={scpNum(8)}>SCP-010</button> 
                <button onClick={scpNum(9)}>SCP-011</button>
                <button onClick={scpNum(10)}>SCP-012</button> 
                <button onClick={scpNum(11)}>SCP-013</button>
                <button onClick={scpNum(12)}>SCP-014</button> 
                <button onClick={scpNum(13)}>SCP-015</button>
                <button onClick={scpNum(14)}>SCP-016</button>
            </ul>
            
        </div> 
    );
}

export var uInput = scp;
export default Entries;