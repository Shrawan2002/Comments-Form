import { useState } from "react"

export default function CommentsForm (){
    let [formData,setFormData] = useState({
        username:"",
        remarks:"",
        rating:5

    })
    return(
        <div>
            <h4>Give a Comments!</h4>
            <form>
                <input placeholder="username" type="text" value={formData.username} />
                <br></br>   <br></br>
                <textarea placeholder="add few remark" value={formData.remarks}>
                    Remark
                </textarea>
                <br></br>   <br></br>
                <input placeholder="rating" type="number" min={1} 
                max={5}  value={formData.rating} />
                  <br></br>   <br></br>
                  <button>Add Comment</button>
            </form>
        </div>
    )
}