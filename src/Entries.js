import SCPs from './SCPs';

uInput = 6;
function Entries(){
    function scpNum(input){
        uInput = input;
        console.log(uInput);
    }
    return (
        <div class="container">
                <ul className='container-entries'>
                    <button className='ebtn a' onClick={() => scpNum(6)}>SCP-002</button> 
                    <button className='ebtn a' onClick={() => scpNum(7)}>SCP-003</button>
                    <button className='ebtn a' onClick={() => scpNum(13)}>SCP-004</button> 
                    <button className='ebtn a' onClick={() => scpNum(5)}>SCP-005</button>
                    <button className='ebtn a' onClick={() => scpNum(12)}>SCP-006</button> 
                    <button className='ebtn a' onClick={() => scpNum(0)}>SCP-007</button> 
                    <button className='ebtn a' onClick={() => scpNum(1)}>SCP-008</button> 
                    <button className='ebtn a' onClick={() => scpNum(8)}>SCP-009</button>
                    <button className='ebtn a' onClick={() => scpNum(2)}>SCP-010</button> 
                    <button className='ebtn a' onClick={() => scpNum(9)}>SCP-011</button>
                    <button className='ebtn a' onClick={() => scpNum(10)}>SCP-012</button> 
                    <button className='ebtn a' onClick={() => scpNum(11)}>SCP-013</button>
                    <button className='ebtn a' onClick={() => scpNum(4)}>SCP-014</button> 
                    <button className='ebtn a' onClick={() => scpNum(15)}>SCP-015</button>
                    <button className='ebtn a' onClick={() => scpNum(14)}>SCP-016</button>
                    <button className='ebtn a' onClick={() => scpNum(3)}>SCP-017</button>
                    <button className='ebtn a' onClick={() => scpNum(16)}>SCP-018</button>
                    <button className='ebtn a' onClick={() => scpNum(17)}>SCP-020</button>
                    <button className='ebtn a' onClick={() => scpNum(18)}>SCP-021</button>
                    <button className='ebtn a' onClick={() => scpNum(19)}>SCP-022</button>
                </ul>
            
            
                <SCPs />
        </div> 
    );
}
console.log(uInput);
export var uInput;
export default Entries;