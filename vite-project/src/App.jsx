import React from "react";
import { useState } from "react";


export default function MatrixGrid(){
  const[grid,setGrid]= useState(Array(9).fill("white"));
  const[clickOrder, setClickOrder] = useState([]);

  const handleClick = (index)=>{
    if(grid[index]==="white"){
      const newGrid =[...grid];
      newGrid[index]="green";
      setGrid(newGrid);
      setClickOrder([...clickOrder,index]);
      if(clickOrder.length===8){
        changeToOrange([...clickOrder,index])
      }
    }
  }

  const changeToOrange = (order)=>{
    order.forEach((idx,i)=>{
      setTimeout(()=>{
        setGrid((prevGrid)=>{
          const newGrid=[...prevGrid];
          newGrid[idx]="orange";
          return newGrid;
        })
      },i*500)
    })
  }
  return(
    <div className="grid grid-cols-3 gap-2 w-48 mx-auto mt-10">
     {
      grid.map((color,index)=>(
        <div

        key={index}
        onClick={()=>handleClick(index)}
        className="w-16 h-16 border border-black items-center justify-center cursor-pointer"
        style={{backgroundColor:color}}
        ></div>
      ))
     }


    </div>
  )

}