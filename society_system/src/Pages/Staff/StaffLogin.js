
export default function StaffLogin({handleOnChange,handleOnClick}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Security Login
                </h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                        Enter staff email
                    </label>
                    <input
                        onChange={handleOnChange}
                        name="email"
                        type="text"
                        placeholder="Enter staff email"
                        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                        Enter staff phone
                    </label>
                    <input
                        name="phone"
                        onChange={handleOnChange}
                        type="text"
                        placeholder="Enter staff phone"
                        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <button
                onClick={handleOnClick}
                    className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
