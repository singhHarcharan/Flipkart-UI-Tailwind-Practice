export default function Navbar() {
    return (
        <div className="flex flex-row p-4 border-1 border-pink-100 shadow-md">
            <div className="cursor-pointer ml-30 text-2xl font-bold">Flipkart</div>
            <input placeholder="  Search for products, brands and more" className="rounded-md border-1 w-145 h-8 ml-15 bg-pink-50" />
            <div className="right-sided-items flex justify-end items-end space-x-2">
                <div className="cursor-pointer ml-10 border-1 border-transparent hover:border-black hover:bg-pink-50 rounded-md p-1">Harcharanpreet Singh</div>
                <div className="cursor-pointer ml-10 border-1 border-transparent hover:border-black hover:bg-pink-50 rounded-md p-1">Cart</div>

                <div className="cursor-pointer ml-10 border-1 border-transparent hover:border-black hover:bg-pink-50 rounded-md p-1">Become a seller</div>

                {/* Three dots Icon */}
                <div className="cursor-pointer ml-10 border-1 border-transparent hover:border-black hover:bg-pink-50 rounded-md p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    </svg>
                </div>
            </div>
        </div>
    )
}