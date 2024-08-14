export default function Newsletter () {
    return (
        <div className="h-screen">
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
            <h1 className="pl-8 text-xl">Sign Up To Recieve Updates</h1>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>

            <div>
                <form>
                    <div className="flex flex-row justify-between">
                    <div className="pt-64">
                        <input className="bg-black  text-white text-6xl pl-8 placeholder-gray-700 outline-none placeholder-opacity-60"
                            type="email" 
                            name="user_email" 
                            id="email"  
                            placeholder="email@wtp.com"
                            required/>
                    </div>
                    <button type="submit" className="text-2xl pr-16 pt-60">Submit</button>
                    </div>
                </form>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto mt-64"/>

        </div>

    )
}