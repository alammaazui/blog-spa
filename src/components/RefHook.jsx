import { useRef } from "react";

export default function RefHook() {


  const inputRef = useRef();

  
  return (
    <>
   
      <input ref={inputRef}type="text" placeholder="Enter value " />
      <button
        onClick={(e) => {
          inputRef.current.setAttribute('disabled' ,'')
        }}
      >
        Disable Input{" "}
      </button>
      <button onClick={()=>{inputRef.current.removeAttribute('disabled')}}>
        Enable
      </button>
    </>
  );
}
