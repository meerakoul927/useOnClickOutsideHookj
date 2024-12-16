import React from 'react'
import ReactDOM from 'react-dom';
import ButtonClick from './src/components/ButtonClick/ButtonClick';

const App = () =>{
     return(
        <>
         <ButtonClick/>
        </>
     )
}
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
