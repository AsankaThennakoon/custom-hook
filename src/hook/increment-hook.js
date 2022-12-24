import { useState,useEffect } from "react";

const useIncrement=(inc=true)=>{
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {


        if(inc){
            
            setCounter((prev) => {
              return prev + 1;
            });
        }
        else{

            setCounter((prev) => {
                return prev -1;
              });
            
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }, [inc]);
    return counter;
  
}

export default useIncrement;