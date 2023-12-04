const ContactUs = ()=>{
    return(
        <div className="justify-items-center text-center">
            <h1 className="p-2 m-4 text-lg">contact Us</h1>
            <input placeholder="Name" className="m-2 p-2 border border-blue-600" type="text" ></input>
            <input placeholder="messages" className="m-2 p-2 border border-blue-600" type="text" ></input>
            <button className="font-bold rounded-xl bg-purple-600 text-white p-3 m-2">Submit</button>
        </div>
    )
}

export default ContactUs