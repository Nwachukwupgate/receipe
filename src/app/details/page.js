import React from 'react';
import SpeedDial from '@/components/utility/SpeedDial';

export default function Details() {
    return (
        <>
            <main className="container mx-auto mt-10">
                <div className="mb-4 md:mb-0 w-full mx-auto relative">
                    <div className="px-4 lg:px-0">
                        <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                            Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
                        </h2>
                        <a 
                            href="#"
                            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                        >
                            Cryptocurrency
                        </a>
                    </div>
                    <img 
                        src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" 
                        className="w-full object-cover lg:rounded" 
                        style={{ height: "28em" }} 
                        alt="Cover"
                    />
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                        <p className="pb-6">
                            Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
                            justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. 
                        </p>
                        <p className="pb-6">
                            Difficulty on insensible reasonable in. From as went he they. Preference themselves me as
                            thoroughly partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. 
                        </p>

                        <div className="pb-6">
                            <div className="px-4 sm:px-8 max-w-5xl m-auto">
                                <h1 className="font-semibold text-2xl">Ingredients</h1>
                                
                                <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
                                    <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">First Item</li>
                                    <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Second Item</li>
                                    <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Third Item</li>
                                    <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Another Item</li>
                                    <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Item for the Nth time</li>
                                </ul>
                                <a href="mailto:jefte_caro@yahoo.com" className="text-xs text-center block mt-4 hover:underline">@me</a>
                            </div>
                        </div>
                        
                        <h1 className="font-semibold text-2xl pb-6">Instructions</h1>
                        <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                            Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
                            expression unpleasing she led met. 
                        </div>
                        <p className="pb-6">
                            Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me
                            everything. 
                        </p>
                        <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Uneasy barton seeing remark happen his has</h2>
                        
                    </div>
                    <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                        <div className="p-4 border-t border-b md:border md:rounded">
                            <div className="flex py-2">
                                <img 
                                    src="https://randomuser.me/api/portraits/men/97.jpg"
                                    className="h-10 w-10 rounded-full mr-2 object-cover" 
                                    alt="Profile"
                                />
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm">Mike Sullivan</p>
                                    <p className="font-semibold text-gray-600 text-xs">Editor</p>
                                </div>
                            </div>
                            <p className="text-gray-700 py-3">
                                Mike writes about technology. 
                            </p>
                            <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                                Follow 
                                <i className='bx bx-user-plus ml-2'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <SpeedDial />
        </>
    );
}
