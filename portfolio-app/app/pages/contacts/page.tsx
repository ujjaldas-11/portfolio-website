import { Button } from "@/components/ui/button"

export default function page() {
    return (
            <div className="p-10">
                <h1 className="font-bold text-3xl">Cotact Me</h1>
                <div className="mt-10">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        placeholder="Your Name"
                        className="w-full border border-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 mt-2"
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        placeholder="Your Email address"
                        className="w-full border border-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 mt-2"
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        name="message" 
                        id="message"
                        placeholder="Enter message"
                        className="w-full border border-gray-500 rounded-xl p-5 focus:outline-none focus:ring-2 mt-2"
                        />
                </div>
                <div className="mt-5">
                <Button className="cursor-pointer">Send Message</Button>
                </div>
            </div>
    )
}