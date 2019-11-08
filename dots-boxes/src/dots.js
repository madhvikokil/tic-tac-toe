import React,{ useState } from 'react';
import './Dots.css';
import Dot from './Dot';

export default function Game() {
   const [box,setBox] = useState(Array(16).fill(null));
   const [one, setOne] = useState(true);
   console.log("box : ",box);

   const clickHandler = (index) => {
    
    console.log("index: ",index);
    const array = [...box];
    console.log("box : ",box);
    console.log("array : ",array);

        array[index] = one ? '1' : '0'; 
    
        console.log("array[index] :",array[index]);
    setBox(array);
    setOne(!one);

   }
   let p;
   if(box[0] && box[1] == "1"){
       p = <p>**</p>
       console.log("yesssss");
   }

//    if(box[0] && box[1] == "0"){
//     p = <p>^^</p>
//     console.log("yesssss");
// }
   

   const  renderSquare =(index) => {
       return(
       <Dot name={index} onClick={() => clickHandler(index)} value={index}/> )
   }
return(
    <>
    <h1> DOTS AND BOXES </h1>
    <table>
        <tr>
            
            <td>{renderSquare(0)}</td>
            {p}         
            <td>{renderSquare(1)}</td> 
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td>  
            <td>{renderSquare(2)}</td>  
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td> 
            <td>{renderSquare(3)}</td>  
            <td align="center"> <img src="image/clear.gif" width="30" height="5"></img></td> 
            
        </tr>
    
        <tr>
           
            <td>{renderSquare(4)}</td>        
            <td>{renderSquare(5)}</td>  
            <td>{renderSquare(6)}</td>  
            <td>{renderSquare(7)}</td>  
        
        </tr>
       
       <tr>
                                                                                                                                                                                                                                                                                                                          
            <td>{renderSquare(8)}</td>        
            <td>{renderSquare(9)}</td>  
            <td>{renderSquare(10)}</td>  
            <td>{renderSquare(11)}</td>  
       
       </tr>
        
    <tr>
                                                                                                                                                                                                                                                                                                                       
           <td>{renderSquare(12)}</td>        
            <td>{renderSquare(13)}</td>  
            <td>{renderSquare(14)}</td>  
            <td>{renderSquare(15)}</td>  
  
    </tr>
   
    </table>
  
</>


   
)
}               
   