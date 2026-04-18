import {useState} from "react";

function Count() {
  const [say, setSay] = useState(0);

  const artir = () => {
    setSay(say + 1);
  };
  const azalt = () => {
    if(say == 0){
      return;
    }
    setSay(say - 1);
  };
  
  return(
    <>
      <button onClick={artir}>Artir</button>
      <h2>{say}</h2>
      <button onClick={azalt}>Azalt</button>
    </>
  );
}

export default Count;
