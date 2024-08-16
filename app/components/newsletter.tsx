'use client'
import { useRef } from "react";
import { createPost } from "../db/queries/insert"
export default function Newsletter () {
    const ref = useRef<HTMLFormElement>(null);
    const handleCreatePost = async (formData: FormData) => {

    // check for any errors on the backend
  
  
      // check for any errors on the backend
      const result = await createPost(formData);
      if (result?.error) {
        console.error(result.error);
        return;
      }
  
      // reset the form
      ref.current?.reset();
    };

    return (
        <div id="Newsletter" className="md:h-screen">
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
            <h1 className="pl-8 text-xl">Sign Up To Recieve Updates</h1>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>

            <div>
                <form 
                    action={handleCreatePost} ref={ref}
                >
                    <div className="flex flex-col md:flex-row justify-between">
                    <div className="pt-64">
                        <input className="bg-black  text-white text-3xl md:text-6xl pl-8 placeholder-gray-700 outline-none placeholder-opacity-60"
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