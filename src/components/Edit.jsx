import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

export default function Edit(){

    const {blogid} = useParams()
    const [data,setData] = useState({})
    const [updateddata,setupdateddata] = useState({})
    const navigate = useNavigate()
    useEffect(async()=>{

        try{
            const response = await fetch(`http://localhost:8000/blogs/${blogid}`,{method:"GET"})
            const data = await response.json()
            setData(data)
            setupdateddata(data)
        }
        catch(err){

        }

    },[])

    const updateblog = async (e)=>{
        e.preventDefault()
        try{

            const response = await fetch(`http://localhost:8000/blogs/${blogid}` ,{
                method:"PATCH",
                headers:{"content-type":"application/json"},
                body : JSON.stringify(updateddata)
            })
            if(response.ok){
                navigate('/')
            }


        }
        catch(err){

        }
    }

    return (
        <>
               <div className="card">
                <div className="card-header">
                    <h2>Edit Your Content </h2>
                </div>
                <div className="card-body">
                    <form onSubmit={(e)=>{updateblog(e)}}>
                        <input onInput={(e)=>{setupdateddata({...updateddata,title:e.target.value})}}  defaultValue={data?.title} type="text" className="form-control my-2" placeholder="Enter Title of Blog" />
                        <textarea onInput={(e)=>{setupdateddata({...updateddata,description:e.target.value})}} defaultValue={data?.description} type="text" className="form-control my-2" placeholder="Enter Description of Blog" rows={5} />
                        <input onInput={(e)=>{setupdateddata({...updateddata,author:e.target.value})}} defaultValue={data?.author} type="text" className="form-control my-2" placeholder="Enter Author Name" rows={5} />
                        <input type="submit" className="btn btn-primary w-100" value="Update Blog" />
                    </form>
                </div>
                <div className="card-footer"></div>

            </div>
        </>
    )

}