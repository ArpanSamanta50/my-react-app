import { useFormStatus } from 'react-dom'

function MyNewHook() {

    const handleSubmit =async (event) => {
        
        await new Promise(res=>setTimeout(res,2000));
        

        console.log("clicked on submit button");
    }




    function MyFormComponent() {
        const myFormStatus=useFormStatus()

        console.log(myFormStatus.pending)


        return <>

            <p>This is new Form</p>
            <input type="text" placeholder="Enter Name" />

            <input type="text" placeholder="Enter Password" />

            <button disabled={myFormStatus.pending}>{!myFormStatus.pending?"Submit":"Submitting..."}</button>
        </>
    }

    
    return <>
        <form action={handleSubmit}>
            <MyFormComponent />
        </form>
    </>
}


export default MyNewHook