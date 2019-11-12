import React,{ useState } from 'react';
import './Dots.css';
import Dot from './Dot';

export default function Game() {

   const [box,setBox] = useState([]);

   let [currentPlayer,setCurrentPlayer] = useState(true);
   let [timesPlayed,setTimesPlayed] = useState(1);
   let [storeIndex1,setStoreIndex1] = useState();
   let [visited,setVisited] = useState([]);
   let [playerCount,setPlayerCount] = useState([]);
    // let [boxCreated,setBoxCreated] = useState(false);

   const checkLastUser =(indexOfLastUser) => {
       console.log("player count : ",playerCount);
       let count = [...playerCount];
    if(visited.includes(1) && visited.includes(7) && visited.includes(9) && visited.includes(15)) {
        if(!visited.includes(8)){
            console.log("index check",)
            document.getElementsByName(8)[0].innerHTML =indexOfLastUser;
            visited.push(8);
            setVisited(visited);
            count.push(indexOfLastUser);
            setPlayerCount(count);
            let created = true
            // setBoxCreated(created);
            // console.log("box created : ",boxCreated);
            
            
        }
       
    }
    if(visited.includes(3) && visited.includes(9) && visited.includes(11) && visited.includes(17)){
        if(!visited.includes(10)){
            document.getElementsByName(10)[0].innerHTML = indexOfLastUser;
            visited.push(10);
            setVisited(visited);
            count.push(indexOfLastUser);
            setPlayerCount(count);
            //  setBoxCreated(!boxCreated);
        }
        
    }
     if(visited.includes(5) && visited.includes(11) && visited.includes(19) && visited.includes(13)){
        if(!visited.includes(12)){
            document.getElementsByName(12)[0].innerHTML = indexOfLastUser;
            visited.push(12);
            setVisited(visited);
            count.push(indexOfLastUser);
            setPlayerCount(count);
            //  setBoxCreated(!boxCreated);
        }
       
    }
    if (visited.includes(15) && visited.includes(21) && visited.includes(23) && visited.includes(29)){
        if(!visited.includes(22)){
            document.getElementsByName(22)[0].innerHTML = indexOfLastUser;
            visited.push(22);
            setVisited(visited);
            count.push(indexOfLastUser);
            setPlayerCount(count);
            //  setBoxCreated(!boxCreated);
        }
        
    }
     if(visited.includes(17) && visited.includes(23) && visited.includes(25) && visited.includes(31)){
        if(!visited.includes(24)){
            document.getElementsByName(24)[0].innerHTML = indexOfLastUser;
            visited.push(24);
            setVisited(visited);
            count.push(indexOfLastUser);
            setPlayerCount(count);
            // setBoxCreated(!boxCreated);
        }
        
    }

     if(visited.includes(19) && visited.includes(25) && visited.includes(33) && visited.includes(27)){
        if(!visited.includes(26)){
            document.getElementsByName(26)[0].innerHTML = indexOfLastUser;
            visited.push(26);
            setVisited(visited);
            count.push(indexOfLastUser);
            setPlayerCount(count);
            //  setBoxCreated(!boxCreated);
        }
        

    }
     if(visited.includes(29) && visited.includes(35) && visited.includes(37) && visited.includes(43)){
        if(!visited.includes(36)){
            document.getElementsByName(36)[0].innerHTML =indexOfLastUser;
            visited.push(36);
            setVisited(visited);
            count.push(indexOfLastUser);
            setPlayerCount(count);
            //  setBoxCreated(!boxCreated);
            
        }
        

   }
    if( visited.includes(31) && visited.includes(37) && visited.includes(39) && visited.includes(45)){
        if(!visited.includes(38)){
            document.getElementsByName(38)[0].innerHTML =indexOfLastUser;
            visited.push(38);
            setVisited(visited);
            count.push(indexOfLastUser);
            setPlayerCount(count);
            //  setBoxCreated(!boxCreated);
        }
        

    }
     if(visited.includes(33) && visited.includes(39) && visited.includes(41) && visited.includes(47)){
        if(!visited.includes(40)){
            document.getElementsByName(40)[0].innerHTML =indexOfLastUser;
            visited.push(40);
            setVisited(visited);
            count.push(indexOfLastUser);
            setPlayerCount(count);
            //  setBoxCreated(!boxCreated);
        }
      

    }
}

if(playerCount.length == 9) {
    let count = 1;
    let m = 0;
    let win;
    
    for (let i = 0; i < playerCount.length; i++) {
        for (let j = i; j < playerCount.length; j++) {
          if (playerCount[i] == playerCount[j]) m++;
          if (count < m) {
            count = m;
            win = playerCount[i];
          }
        }
      
      m = 0;
      }
      
      alert(win + " ( " + count + " times ) ");
}

   let addLine =function (storeIndex1,storeIndex2,currentPlayer)  {
     
       console.log("current Player :",currentPlayer)

   let storeMaxValue =  Math.max(storeIndex2,storeIndex1);
   let storeMinValue = Math.min(storeIndex2,storeIndex1)
   console.log("MAximu value : ",storeMaxValue);
    
      let result = storeIndex2 - storeIndex1;
      
      if(result == 2 || result == -2){
        let actualResult = Math.abs(storeMaxValue)-1;
        if(actualResult && currentPlayer == 1){
            console.log("id : '",actualResult);
            document.getElementsByName(actualResult)[0].innerHTML = "P1"
            visited.push(actualResult);
            setVisited(visited);
           
            checkLastUser(currentPlayer);
          }
    
          if(actualResult && currentPlayer == 0){
            document.getElementsByName(actualResult)[0].innerHTML = "P0"
            visited.push(actualResult);
            setVisited(visited);
            let player = currentPlayer;
            checkLastUser(player);
        }
      }
      

      if(result == 14 || result == -14) {
          let actualResult  =Math.abs(storeMinValue) + 7;
        if(actualResult && currentPlayer == 1){
            console.log("id : '",actualResult);
            document.getElementsByName(actualResult)[0].innerHTML = "P1"
            visited.push(actualResult);
            setVisited(visited);
            let player = currentPlayer;
            checkLastUser(player);
          }
    
          if(actualResult && currentPlayer == 0){
            document.getElementsByName(actualResult)[0].innerHTML = "P0"
            visited.push(actualResult);
            setVisited(visited);
            let player = currentPlayer;
            checkLastUser(player);
        }
      }

    
}



   const clickHandler = (index) => {
    console.log("timesPlayed :",timesPlayed);
    console.log("****************************");
    
    let array = [...box];
 
        currentPlayer = currentPlayer ? 1 : 0; 
        console.log("Player Playing : ",currentPlayer);
         
        if(timesPlayed == 1) {
            setStoreIndex1(index);
            setTimesPlayed(2);
            
            console.log("Player Playing :",currentPlayer);
        
        }
        else if(timesPlayed == 2){
            const storeIndex2 = index;
        
            if(storeIndex2 - storeIndex1 ==14 || storeIndex2 - storeIndex1 ==2 
                ||storeIndex2 - storeIndex1 ==-2 || storeIndex2 - storeIndex1 ==-14){
                    
                console.log("correct click");
                setTimesPlayed(1);
                console.log("stored Index 1 :",storeIndex1);
                console.log("stored Index 2 :",storeIndex2);
                array.push([storeIndex1,storeIndex2]);
                setBox(array);
                console.log("box...",box);
              addLine(storeIndex1,storeIndex2,currentPlayer);
              setCurrentPlayer(!currentPlayer);
            //   if(boxCreated == true){
            //       console.log("current playuer playing : ",currentPlayer);
            //       let c = true;
            //     setCurrentPlayer(c);
            //     setBoxCreated(!boxCreated);
            //   }
            //   else if (boxCreated == false){
            //     console.log("current playuer playing in false : ",currentPlayer); 
            //     setCurrentPlayer(!currentPlayer);
            //   }
                 
                
            }
            else{
                console.log("wrong click...");
                alert("wrong move...");
                
            }
         }      
        
   }

const  renderSquare =(index) => {
       return(
       <Dot name={index} onClick={() => clickHandler(index)} value={index}/> )
   }
return(
    <>
    <h1> DOTS AND BOXES </h1>
    <table border="2px">
        <tr>
            
            <td>{renderSquare(0)}</td>
            <td align="center" name="1" > <img src="image/clear.gif" width="30" height="5"></img></td>           
            <td>{renderSquare(2)}</td>  
            <td align="center" name="3"> <img src="image/clear.gif" width="30" height="5"></img></td>  
            <td>{renderSquare(4)}</td>  
            <td align="center" name ="5"> <img src="image/clear.gif" width="30" height="5"></img></td> 
            <td>{renderSquare(6)}</td>  
         
            
        </tr>
    
    <tr>
    
    <td align="center" name ="7"> <img src="image/clear.gif" width="5" height="30" ></img></td>
    
    
    <td align="center" name ="8"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center" name ="9"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center" name ="10"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center" name ="11"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center" name ="12"> <img src="image/clear.gif" width="30" height="30"></img></td>
    <td align="center" name ="13"> <img src="image/clear.gif" width="5" height="30"></img></td>

   

    </tr>

    <tr>
    

            <td>{renderSquare(14)}</td>
            {/* {p} */}
            <td align="center" name="15"> <img src="image/clear.gif" width="30" height="5"></img></td>           
            <td>{renderSquare(16)}</td> 
            <td align="center" name="17"> <img src="image/clear.gif" width="30" height="5"></img></td>  
            <td>{renderSquare(18)}</td>  
            <td align="center" name="19"> <img src="image/clear.gif" width="30" height="5"></img></td> 
            <td>{renderSquare(20)}</td>  
            
            
        </tr>
    
    <tr>
    <td align="center" name="21"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center" name="22"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center" name="23"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center" name="24"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center" name="25"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center" name="26"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center" name="27"> <img src="image/clear.gif" width="5" height="30"></img></td>
   
    </tr>

    <tr>
            
            <td>{renderSquare(28)}</td>
            <td align="center" name="29"> <img src="image/clear.gif" width="30" height="5"></img></td>           
            <td>{renderSquare(30)}</td> 
            <td align="center" name="31"> <img src="image/clear.gif" width="30" height="5"></img></td>  
            <td>{renderSquare(32)}</td>  
            <td align="center" name="33"> <img src="image/clear.gif" width="30" height="5"></img></td> 
            <td>{renderSquare(34)}</td>  
      
            
        </tr>
    
    <tr>
    <td align="center" name="35"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center" name="36"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center" name="37"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center" name="38"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center" name="39"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center" name="40"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center" name="41"> <img src="image/clear.gif" width="5" height="30"></img></td>
   

    </tr>

    <tr>
            
            <td>{renderSquare(42)}</td>
            {/* {p} */}
            <td align="center" name="43"> <img src="image/clear.gif" width="30" height="5"></img></td>           
            <td>{renderSquare(44)}</td> 
            <td align="center" name="45"> <img src="image/clear.gif" width="30" height="5"></img></td>  
            <td>{renderSquare(46)}</td>  
            <td align="center" name="47"> <img src="image/clear.gif" width="30" height="5"></img></td> 
            <td>{renderSquare(48)}</td>  
            
        </tr>
    </table>
  
</>
)
}               
   