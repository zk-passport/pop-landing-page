import { Cake } from "lucide-react";

export default function Roadmap() {
    return (
        <div className="flex  flex-col mt-8">
            <div className="max-w-3xl mx-auto text-center pb-8 md:pb-20 ">
                <h2 className="h2 mb-4">Roadmap</h2>
                {/* <p className="text-xl text-gray-300">Proof of Passport lets users scan the NFC chip in their government-issued passport and prove the correctness of the signature in a zk-SNARK.</p> */}
            </div>
            <div className="flex flex-row h-fit items-center justify-center  px-6 md:px-60">
                <div className="">
                    <div className="relative w-full border-l-2 border-gray-200 pb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-1 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500 bg-gray-900">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                        </svg>
                        <div className="ml-6">
                            <h4 className="font-bold text-blue-500">Circuits</h4>
                            <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                            <span className="mt-1 block text-sm font-semibold text-blue-500">February 2024</span>
                        </div>
                    </div>
                    <div className="relative w-full border-l-2 pb-4">
                        <div className="absolute -top-1 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500 border-2 border-gray-800 bg-gray-900">
                        </div>
                        <div className="ml-6">
                            <h4 className="font-bold text-blue-500">Release on apps stores</h4>
                            <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                            <span className="mt-1 block text-sm font-semibold text-blue-500">April 2024</span>
                        </div>
                    </div>

                    <div className="relative w-full">
                        <div className="absolute -top-1 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500 border-2 border-gray-800 bg-gray-900">
                        </div>
                        <div className="ml-6">
                            <h4 className="font-bold text-blue-500">Support more countries</h4>
                            <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor</p>
                            <span className="mt-1 block text-sm font-semibold text-blue-500">June 2024</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}