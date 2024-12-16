import React , {useState , useRef} from 'react'
import  { useOnClickOutside} from '../useOnClickOutside/useOnClickOutside';

function ButtonClick() {
    const [buttonClick , setButtonClick] = useState(false);


    const ref = useRef(null);
    console.log("@@@ref" , ref , ref.current);
    useOnClickOutside(ref , () => {
        setButtonClick(false);
        console.group("onclick outside clicked")
    })
  return (
    <div
      style = {{
          display : 'flex',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column',
          gap:'1.333rem'
      }}
    >
      <button
        onClick={() => 
            {
                setButtonClick(true)
                //ref.current = null
            }}
      >Click Me</button>
      {buttonClick &&
      <div
        style = {{
             padding : '5px',
             border : '1px solid #000000'
        }}
        ref={ref}
      >
         <p> Meera Koul </p>
         <p>Jammu</p>
         <p>Contact : @koulmeera927</p>

      </div>}
    </div>
  )
}

export default ButtonClick