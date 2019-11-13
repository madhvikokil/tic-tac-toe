import React,{ useState ,useRef } from 'react';
import './Dots.css';
import Dot from './Dot';

export default function Game() {

   const [box,setBox] = useState([]);

   let [currentPlayer,setCurrentPlayer] = useState(true);
   let [timesPlayed,setTimesPlayed] = useState(1);
   let [storeIndex1,setStoreIndex1] = useState();
   let [visited,setVisited] = useState([]);
   let [playerCount,setPlayerCount] = useState([]);
   //const [ref, setRef] = useState([React.createRef(),React.createRef(),React.createRef()]);

   let reff = useRef([React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef(),
    React.createRef(),React.createRef(),React.createRef()]);

   const checkLastUser =(indexOfLastUser) => {
       console.log("player count : ",playerCount);
       let count = [...playerCount];

       const addCenter = (i) =>{
        if(!visited.includes(i)){
            reff.current[i].current.innerHTML =  indexOfLastUser;
            visited.push(i);
            setVisited(visited);
            count.push(indexOfLastUser);
            setPlayerCount(count);

        }
}
    if(visited.includes(1) && visited.includes(7) && visited.includes(9) && visited.includes(15)) {
       addCenter(8);
    }
    if(visited.includes(3) && visited.includes(9) && visited.includes(11) && visited.includes(17)){
        addCenter(10);
    }
     if(visited.includes(5) && visited.includes(11) && visited.includes(19) && visited.includes(13)){
         addCenter(12);
    }
    if (visited.includes(15) && visited.includes(21) && visited.includes(23) && visited.includes(29)){
        addCenter(22);
    }
     if(visited.includes(17) && visited.includes(23) && visited.includes(25) && visited.includes(31)){
         addCenter(24);
    }
    if(visited.includes(19) && visited.includes(25) && visited.includes(33) && visited.includes(27)){
         addCenter(26);
    }
     if(visited.includes(29) && visited.includes(35) && visited.includes(37) && visited.includes(43)){
         addCenter(36);
     }
    if( visited.includes(31) && visited.includes(37) && visited.includes(39) && visited.includes(45)){
        addCenter(38);
    }
     if(visited.includes(33) && visited.includes(39) && visited.includes(41) && visited.includes(47)){
         addCenter(40);
    }
}

   let addLine =function (storeIndex1,storeIndex2,currentPlayer)  {
       console.log("current Player :",currentPlayer)

   let storeMaxValue =  Math.max(storeIndex2,storeIndex1);
   let storeMinValue = Math.min(storeIndex2,storeIndex1)
    
      let result = storeIndex2 - storeIndex1;
      
      if(result == 2 || result == -2){
        let actualResult = Math.abs(storeMaxValue)-1;     
         currentPlayer ? reff.current[actualResult].current.style.backgroundColor=" green" :
         reff.current[actualResult].current.style.backgroundColor=" red";
        //reff.current[actualResult].current.innerHTML =  `p${currentPlayer}`;
        console.log("actual index : ",actualResult);
        visited.push(actualResult);
        setVisited(visited);
        checkLastUser(currentPlayer);
      }
      

      if(result == 14 || result == -14) {
        let actualResult  =Math.abs(storeMinValue) + 7;
     
        currentPlayer ? reff.current[actualResult].current.style.backgroundColor=" green" :
        // current.style.marginLeft="20px :
        reff.current[actualResult].current.style.backgroundColor=" red";
        //reff.current[actualResult].current.innerHTML=`p${currentPlayer}`;
        console.log("actual Index : ",actualResult)
        visited.push(actualResult);
        setVisited(visited);
        checkLastUser(currentPlayer);
      }
}

    const clickHandler = (index) => {
      let array = [...box];
 
        currentPlayer = currentPlayer ? 1 : 0; 
         
        if(timesPlayed == 1) {
            setStoreIndex1(index);
            setTimesPlayed(2);
            
            console.log("Player Playing :",currentPlayer);
        
        }
        else if(timesPlayed == 2){
            const storeIndex2 = index;
        
            if(storeIndex2 - storeIndex1 ==14 || storeIndex2 - storeIndex1 ==2 
                ||storeIndex2 - storeIndex1 ==-2 || storeIndex2 - storeIndex1 ==-14){
                    
              
                setTimesPlayed(1);
                array.push([storeIndex1,storeIndex2]);
                setBox(array);
              addLine(storeIndex1,storeIndex2,currentPlayer);
              setCurrentPlayer(!currentPlayer);
                
            }
            else{
                alert("wrong move...");
                
            }
         }      
    }

    const calculaterWin =() => {
        if(playerCount.length == 9) {
        const store = playerCount.reduce((accumulator, currentValue) => accumulator + currentValue);

        if(store > 4) {
        return <h1>WINNER IS : Player 1 </h1>
        }

        else{
        return <h1>WINNER IS : Player 0</h1>
        }
        }
        
    }

    const win = calculaterWin();


    
   

const  renderSquare =(index) => {
       return(
       <Dot name={index} onClick={() => clickHandler(index)} value={index}/> )
   }
return(
    <>
    <h1> DOTS AND BOXES </h1>

<p>Green is Player 1</p>
<p>Red is player 0</p>
    <table >
        <tr>
            
            <td>{renderSquare(0)}</td>
            <td align="center" name="1" ref={reff.current[1]}> <img src="image/clear.gif" width="30" height="5"></img></td>           
            <td>{renderSquare(2)}</td>  
            <td align="center" name="3" ref={reff.current[3]}> <img src="image/clear.gif" width="30" height="5"></img></td>  
            <td>{renderSquare(4)}</td>  
            <td align="center" name ="5" ref={reff.current[5]}> <img src="image/clear.gif" width="30" height="5"></img></td> 
            <td>{renderSquare(6)}</td>  
         
            
        </tr>
    
    <tr>
    <td align="center" name ="7" ref={reff.current[7]}> <img src="image/clear.gif" width="5" height="30" ></img></td>
        <td align="center" name ="8" ref={reff.current[8]}> </td>
        <td align="center" name ="9" ref={reff.current[9]}> <img src="image/clear.gif" width="5" height="30"></img></td>
        <td align="center" name ="10" ref={reff.current[10]}> </td>
        <td align="center" name ="11" ref={reff.current[11]}> <img src="image/clear.gif" width="5" height="30"></img></td>
        <td align="center" name ="12" ref={reff.current[12]}> </td>
        <td align="center" name ="13" ref={reff.current[13]}> <img src="image/clear.gif" width="5" height="30"></img></td>
    </tr>

    <tr>
    <td>{renderSquare(14)}</td>
        <td align="center" name="15" ref={reff.current[15]}> <img src="image/clear.gif" width="30" height="5"></img></td>           
        <td>{renderSquare(16)}</td> 
        <td align="center" name="17" ref={reff.current[17]}> <img src="image/clear.gif" width="30" height="5"></img></td>  
        <td>{renderSquare(18)}</td>  
        <td align="center" name="19" ref={reff.current[19]}> <img src="image/clear.gif" width="30" height="5"></img></td> 
        <td>{renderSquare(20)}</td>  
    </tr>
    
    <tr>
        <td align="center" name="21" ref={reff.current[21]}> <img src="image/clear.gif" width="5" height="30"></img></td>
        <td align="center" name="22" ref={reff.current[22]}> </td>
        <td align="center" name="23" ref={reff.current[23]}> <img src="image/clear.gif" width="5" height="30"></img></td>
        <td align="center" name="24" ref={reff.current[24]}> </td>
        <td align="center" name="25" ref={reff.current[25]}> <img src="image/clear.gif" width="5" height="30"></img></td>
        <td align="center" name="26" ref={reff.current[26]}> </td>
        <td align="center" name="27" ref={reff.current[27]}> <img src="image/clear.gif" width="5" height="30"></img></td>
   </tr>

    <tr>
    <td>{renderSquare(28)}</td>
        <td align="center" name="29" ref={reff.current[29]}> <img src="image/clear.gif" width="30" height="5"></img></td>           
        <td>{renderSquare(30)}</td> 
        <td align="center" name="31" ref={reff.current[31]}> <img src="image/clear.gif" width="30" height="5"></img></td>  
        <td>{renderSquare(32)}</td>  
        <td align="center" name="33" ref={reff.current[33]}> <img src="image/clear.gif" width="30" height="5"></img></td> 
        <td>{renderSquare(34)}</td>  
    </tr>
    
    <tr>
        <td align="center" name="35" ref={reff.current[35]}> <img src="image/clear.gif" width="5" height="30"></img></td>
        <td align="center" name="36" ref={reff.current[36]}> </td>
        <td align="center" name="37" ref={reff.current[37]}> <img src="image/clear.gif" width="5" height="30"></img></td>
        <td align="center" name="38" ref={reff.current[38]}> </td>
        <td align="center" name="39" ref={reff.current[39]}> <img src="image/clear.gif" width="5" height="30"></img></td>
        <td align="center" name="40" ref={reff.current[40]}> </td>
        <td align="center" name="41" ref={reff.current[41]}> <img src="image/clear.gif" width="5" height="30"></img></td>
   </tr>

    <tr>
        <td>{renderSquare(42)}</td>
        <td align="center" name="43" ref={reff.current[43]}> <img src="image/clear.gif" width="30" height="5"></img></td>           
        <td>{renderSquare(44)}</td> 
        <td align="center" name="45" ref={reff.current[45]}> <img src="image/clear.gif" width="30" height="5"></img></td>  
        <td>{renderSquare(46)}</td>  
        <td align="center" name="47" ref={reff.current[47]}> <img src="image/clear.gif" width="30" height="5"></img></td> 
        <td>{renderSquare(48)}</td>  
            
    </tr>
    </table><br/><br/><hr />
    {win}
    </>
)
}               
   