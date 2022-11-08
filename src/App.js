
 import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState } from "react";

function App() {

  // const heading=`# this is heading`

 
  const [mark, setmark]=useState('')
 
  
  return (
    
  
<div>
  <h1 style={{textAlign:'center'}}>Markdown editor</h1>
    <div style={{display:'flex' , textAlign:'center', margin: 'auto', padding: '10px'}}>
      

  
   
    <textarea  style={{backgroundColor:'black', color:'white', fontSize:'15px' , width:'1000px'}}  rows='40' cols='90'  onChange={(e)=>{setmark(e.target.value)}}></textarea>
   
   
    
    


    <div  style={{backgroundColor:'brown',width:'2000px'}} >
            <h2>output</h2>
            <ReactMarkdown children={mark} remarkPlugins={[remarkGfm]}></ReactMarkdown>
          
        </div>
    
    </div>
    </div>
  );
}

export default App;
