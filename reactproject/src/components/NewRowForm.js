import React,{useState} from 'react';

const NewRowFrom = (props) => {
    const {addRow}= props;
    const[id,setId]=useState('')
    const[date,setDate]=useState('')
    const[name,setName]=useState('')
    const[option,setOption]=useState('')
    const[status,setStatus]=useState('')
    const handleSubmit=(e)=>{
       e.preventDefault();
       addRow(id,date,name,option,status);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={ id } placeholder="ID" onChange={(e)=>setId(e.target.value)} required/>
            <input type="date" value={ date } placeholder="Date" onChange={(e)=>setDate(e.target.value)} required/>
            <input type="text" value={ name } placeholder="Name" onChange={(e)=>setName(e.target.value)} required/>
            <input type="text" value={ option } placeholder="Option" onChange={(e)=>setOption(e.target.value)} required/>
            <input type="text" value={ status } placeholder="Status" onChange={(e)=>setStatus(e.target.value)} required/>
            <input type="submit" value="Add"/>       
        </form>
      );
}
 
export default NewRowFrom;