export default function Edit(){

    return (
        <>
               <div className="card">
                <div className="card-header">
                    <h2>Edit Your Content </h2>
                </div>
                <div className="card-body">
                    <form >
                        <input type="text" className="form-control my-2" placeholder="Enter Title of Blog" />
                        <textarea type="text" className="form-control my-2" placeholder="Enter Description of Blog" rows={5} />
                        <input type="text" className="form-control my-2" placeholder="Enter Author Name" rows={5} />
                        <input type="submit" className="btn btn-primary w-100" value="Update Blog" />
                    </form>
                </div>
                <div className="card-footer"></div>

            </div>
        </>
    )

}