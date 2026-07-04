import { act, useActionState } from "react"

function FormHandling() {

    const handleSubmit =async (previousData, formData) => {
        let name=formData.get('name');
        let password=formData.get('password')

        await new Promise(res=>setTimeout(res,2000))

        console.log("handleSubmit called")
        console.log("Name and Password is: ",name, " ", password);
        
    }



    const [data, action, pending] = useActionState(handleSubmit, undefined)


    return <>
        <form action={action}>

            <p>Enter your Name</p>
            <input type="text" placeholder="enter name" name="name" />


            <p>Enter Password</p>
            <input type="password" placeholder="enter password" name="password" />

            <br />

            <button>Submit</button>
        </form>
    </>
}

export default FormHandling