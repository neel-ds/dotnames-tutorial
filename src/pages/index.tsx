import { useState } from "react";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");
  const [domainName, setDomainName] = useState("");
  return (
    <main className="flex flex-col w-[100%] p-10 justify-center items-center space-y-4">
      <h1 className="text-2xl">DotNames Tutorial</h1>
      <div className="flex flex-col w-[40%] p-5 justify-center items-center border border-gray-400 rounded-xl space-y-4">
        <input
          id="address"
          type="text"
          className="w-[90%] text-gray-700 border border-gray-400 p-2 rounded"
          placeholder="Enter your address"
          onChange={(e: any) => {
            setWalletAddress(e.target.value);
          }}
        />
        <button
          className="px-3 py-2 w-fit bg-[#1aa7ec] rounded-lg"
          onChange={() => {}}
        >
          Find NS
        </button>
      </div>
      <div className="flex flex-col w-[40%] p-5 justify-center items-center border border-gray-400 rounded-xl space-y-4">
        <input
          id="domain"
          type="text"
          className="w-[90%] text-gray-700 border border-gray-400 p-2 rounded"
          placeholder="Enter your domain"
          onChange={(e: any) => {
            setDomainName(e.target.value);
          }}
        />
        <button
          className="px-3 py-2 w-fit bg-[#1aa7ec] rounded-lg"
          onChange={() => {}}
        >
          Resolve
        </button>
      </div>
      <p className="text-xl">Results:</p>
    </main>
  );
}
