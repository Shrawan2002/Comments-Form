import { useState } from "react"

export default function CommentsForm (){
    let [formData,setFormData] = useState({
        username:"",
        remarks:"",
        rating:5

    })
    let handleInputChange = (event)=>{
        setFormData( (currData)=>{
            return {...currData,[event.target.name]:event.target.value}
        })
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData(
            {
                username:"",
                remarks:"",
                rating:5
        
            }
        )
    }
    return(
        <div>
            <h4>Give a Comments!</h4>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" type="text" value={formData.username}
                 onChange={handleInputChange} name="username" />
                <br></br>   <br></br>
                <textarea placeholder="add few remark" value={formData.remarks} 
                onChange={handleInputChange} name="remarks" >
                    Remark
                </textarea>
                <br></br>   <br></br>
                <input placeholder="rating" type="number" min={1} 
                max={5}  value={formData.rating} onChange={handleInputChange} name="rating" />
                  <br></br>   <br></br>
                  <button >Add Comment</button>
            </form>
        </div>
    )
}