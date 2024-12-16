import React, { useEffect } from "react";

export const useOnClickOutside = (ref, callBack) => {
  console.log("@@ i am inside the  useOnclick");
  useEffect(() => {
    const listener = (event) => {
      console.log(event, ref, callBack , event.target);
      if(ref.current !== null && ref.current.contains(event.target)){
        console.log("event target contains ref" , ref.current.contains(event.target));
         return;
      }
      callBack();
    };

    document.addEventListener("touchstart", listener);
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mouseUp", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callBack]);
};
