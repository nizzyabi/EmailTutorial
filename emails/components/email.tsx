'use client'

import { useState, useTransition } from "react"
export default function Email() {
  
    // state management
  const [loading, setLoading] = useState(false)
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState("")

  const handleSubmit = async (event:any) => {

    // prevent refresh
    event.preventDefault();
    // Set loading to true
    setLoading(true)
    // Get the email value from the form
    const email = event.target.email.value

    // Send the email to your server
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      // Get data from the response
      const data = await response.json();

      // if the email is sent, reset the email input
      if (data.message) {
        setEmail(""); 

        // Handle error response
      } else {
        console.error(data); 
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
    
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-1">
      

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          <span className="">Web Developer</span> roadmap
        </h1>

        <p className="mt-3 text-xl font-medium">
          The roadmap will be sent to the email you put below
        </p>

        <div className="mt-2 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div className="mt-2 w-300 rounded-xl border border-slate-100/20 p-6 text-left bg-[#131212]">
            <div className="py-3">
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="sr-only">Email Address</label>

                <input 
                  onChange={(e) => setEmail(e.target.value)}
                  value={email} 
                  name="email" 
                  id="email" 
                  type="email" 
                  required 
                  className="w-full rounded-lg border px-3 py-2 text-md text-[#131212]" 
                  autoComplete="off"
                  placeholder="Email Address" />

    

                <button disabled={isPending || loading} type="submit" className="p-[3px] relative font-semibold w-full mt-4">
                       
                  
                        Get Roadmap 
                      
                </button>

              </form>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  )
}