import Image from "next/image";
import { useState } from "react";
import { SoWsdk } from "sow-sdk";
import { SupportedChains } from "sow-sdk/dist/types";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");
  const [domainName, setDomainName] = useState("");
  const [result, setResult] = useState("");
  const [selectedChain, setSelectedChain] = useState();
  const [chain, setChain] = useState(1);

  // Event handler to update the selected chain
  const handleChainChange = (event: any) => {
    setSelectedChain(event.target.value);
    setChain(parseInt(event.target.value));
  };

  return (
    <main className="flex flex-col w-[100%] p-10 justify-center items-center space-y-4">
      <div className="flex flex-row mb-5 items-end space-x-4">
        <Image src="/dotnames.png" width={70} height={70} alt="logo" />
        <h1 className="text-2xl font-bold">DotNames Tutorial</h1>
      </div>
      <div className="flex flex-col w-[90%] md:w-[40%] sm:w-[50%] p-4 md:p-5 justify-center items-center border border-gray-400 rounded-xl space-y-4">
        <input
          id="address"
          type="text"
          className="w-[90%] text-gray-700 border border-gray-400 p-2 rounded"
          placeholder="Enter your address"
          onChange={(e: any) => {
            setWalletAddress(e.target.value);
          }}
        />
        <select
          className="w-[90%] p-2 text-[#1e1e1e] rounded"
          value={selectedChain}
          onChange={handleChainChange}
        >
          <option value={SupportedChains.ENS}>ENS</option>
          <option value={SupportedChains.SpaceId}>SpaceId</option>
          <option value={SupportedChains.UnstoppableDomains}>
            UnstoppableDomains
          </option>
          <option value={SupportedChains.DotBit}>DotBit</option>
          <option value={SupportedChains.Zkns}>Zkns</option>
          <option value={SupportedChains.ICNS}>ICNS</option>
          <option value={SupportedChains.StargazeDomains}>
            StargazeDomains
          </option>
          <option value={SupportedChains.Bonfida}>Bonfida</option>
          <option value={SupportedChains.SuiNs}>SuiNs</option>
          <option value={SupportedChains.AptosNs}>AptosNs</option>
          <option value={SupportedChains.None}>None</option>
        </select>
        <button
          className="px-3 py-2 w-fit bg-[#f95b8b] rounded-lg"
          onClick={() => {
            const sow = new SoWsdk();
            sow
              .resolveName(walletAddress, chain)
              .then((res) => {
                console.log(res);
                setResult("Name Service: " + res);
              })
              .catch((err) => {
                console.log(err);
                setResult("Error");
              });
          }}
        >
          Find NS
        </button>
      </div>
      <div className="flex flex-col w-[90%] md:w-[40%] sm:w-[50%] p-4 md:p-5 justify-center items-center border border-gray-400 rounded-xl space-y-4">
        <input
          id="domainName"
          type="text"
          className="w-[90%] text-gray-700 border border-gray-400 p-2 rounded"
          placeholder="Enter your domain"
          onChange={(e: any) => {
            setDomainName(e.target.value);
          }}
        />
        <button
          className="px-3 py-2 w-fit bg-[#f95b8b] rounded-lg"
          onClick={() => {
            const sow = new SoWsdk();
            sow
              .resolveAddress(domainName)
              .then((res) => {
                console.log(res);
                setResult("Address: " + res);
              })
              .catch((err) => {
                console.log(err);
                setResult("Error");
              });
          }}
        >
          Resolve
        </button>
      </div>
      <div className="flex flex-row space-x-4 items-center">
        <p className="text-xl font-semibold">Results:</p>
        <Image
          className="hover:cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(result.split(" ").pop() || "");
          }}
          src="copy.svg"
          width={15}
          height={15}
          alt="copy"
        />
      </div>
      <p className="text-lg">{result}</p>
    </main>
  );
}
