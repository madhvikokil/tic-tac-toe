import React,{ useState } from 'react';
import './Dots.css';
import Dot from './Dot';

export default function Game() {

   const [box,setBox] = useState([ ]);

   const [currentPlayer,setCurrentPlayer] = useState(true);
   let [timesPlayed,setTimesPlayed] = useState(1);
   let [storeIndex1,setStoreIndex1] = useState();
   
   console.log("box : ",box);

   const clickHandler = (index) => {
    console.log("timesPlayed :",timesPlayed);
    const array = [...box];

        // setBox(array);  
        array[index] = currentPlayer ? '1' : '0'; 
         
        if(timesPlayed == 1) {
            setStoreIndex1(index);
            setTimesPlayed(2);
            
             
            console.log("Player Playing :",currentPlayer);
            console.log("stored Index 1 = ",storeIndex1);
            // setBox(storeIndex1,s)
        }
        else if(timesPlayed == 2){
            const storeIndex2 = index;
            setCurrentPlayer(!currentPlayer);
            console.log("store index 1 : ",storeIndex1, "store Index 2 : ",storeIndex2);
            // console.log("stored Index 1 = ",storeIndex1);
            console.log("store Index2 : ",storeIndex2);
            setTimesPlayed(1);
            
       
                setBox([storeIndex1,storeIndex2]);
            
             
            
        }
        
   }

//    const getInitialArray =(rows,columns)=>{
       
//    }

   let p;
//    if(box[0] && box[1] || box[0] && box[4] || box[1] && box[2] || box[1] && box[5] == "1"){
//        p = <p>**</p>
//        console.log("yesssss");
//    }
//    else if(box[0] && box[1] || box[0] && box[4] || box[1] && box[2] || box[1] && box[5] == "0"){
//        p= <p>--</p>
//    }


    
  
 
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
            {/* {p} */}
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td>           
            <td>{renderSquare(1)}</td> 
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td>  
            <td>{renderSquare(2)}</td>  
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td> 
            <td>{renderSquare(3)}</td>  
         
            
        </tr>
    
    <tr>
    <td align="center"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center"> <img src="image/clear.gif" width="5" height="30"></img></td>
   

    </tr>

    <tr>
            
            <td>{renderSquare(4)}</td>
            {/* {p} */}
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td>           
            <td>{renderSquare(5)}</td> 
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td>  
            <td>{renderSquare(6)}</td>  
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td> 
            <td>{renderSquare(7)}</td>  
            
            
        </tr>
    
    <tr>
    <td align="center"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center"> <img src="image/clear.gif" width="5" height="30"></img></td>
   
    </tr>

    <tr>
            
            <td>{renderSquare(8)}</td>
            {/* {p} */}
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td>           
            <td>{renderSquare(9)}</td> 
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td>  
            <td>{renderSquare(10)}</td>  
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td> 
            <td>{renderSquare(11)}</td>  
      
            
        </tr>
    
    <tr>
    <td align="center"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center"> <img src="image/clear.gif" width="5" height="30"></img></td>
    <td align="center"> <img src="image/clear.gif" width="30" height="30"></img></td>

    <td align="center"> <img src="image/clear.gif" width="5" height="30"></img></td>
   

    </tr>

    <tr>
            
            <td>{renderSquare(12)}</td>
            {/* {p} */}
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td>           
            <td>{renderSquare(13)}</td> 
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td>  
            <td>{renderSquare(14)}</td>  
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td> 
            <td>{renderSquare(15)}</td>  
            
        </tr>
    </table>
  
</>
)
}               
   