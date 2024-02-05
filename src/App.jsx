import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";

function App() {
  const [length, setLength] = useState(8);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passwordResult, setPasswordResult] = useState("");

  const passwordGenerate = () => {
    if (!uppercase && !lowercase && !number && !symbols) {
      alert("Cuthiya kuch toh select karle!");
      return;
    } else {
      let characterList = "";
      const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
      const numberList = "0123456789";
      const symbolsList = "!@#$%^&*()_+";
      if (uppercase) {
        characterList += uppercaseList;
      }
      if (lowercase) {
        characterList += lowercaseList;
      }
      if (number) {
        characterList += numberList;
      }
      if (symbols) {
        characterList += symbolsList;
      }

      const passwordResult = createPassword(characterList, length);
      console.log(passwordResult);
      setPasswordResult(passwordResult);
    }
  };

  const createPassword = (characterList, length) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      const charIndex = Math.round(Math.random() * characterList.length);
      password += characterList.charAt(charIndex);
    }
    return password;
  };
  const copyPasswordToClipboard = () => {
    if (passwordResult !== "") {
      let passwordField = document.getElementById("passwordField");
      passwordField.select();
      document.execCommand("copy");
      alert("Password copied to clipboard");
    } else {
      alert("Gandu pehle password toh generate karle!");
    }
  };
  const restartPassword = () => {
    setPasswordResult("");
    setUppercase(false);
    setLowercase(false);
    setNumber(false);
    setSymbols(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* <h1 className="sticky mb-auto ml-auto pr-4 pt-4 text-4xl font-heading">{"<Jeesun/>"}</h1> */}
      {/* --------------Main Container-------------------- */}
      <div className="md:h-[400px] h-auto w-96 md:w-[450px]  bg-gradient-to-b from-red-600 to-gray-600 border-solid border-black border-4 rounded-lg px-3 py-2 ml-4 mr-4">
        <div className="mb-4">
          {/* --------------Header-------------------- */}
          <h1 className="text-white text-4xl text-center mb-2 font-name">
            Password Generator
          </h1>
          <div className="flex justify-center md:h-11 h-14 rounded-lg overflow-hidden">
            <input
              id="passwordField"
              type="text"
              name="password"
              value={passwordResult}
              placeholder="Password"
              readOnly
              className="h-full outline-none w-full pl-2"
            />
            <div>
              <button
                className="h-full w-20 bg-gradient-to-l from-blue-600 to-blue-300"
                onClick={() => copyPasswordToClipboard()}
              >
                Copy
              </button>
              <button></button>
            </div>
          </div>
        </div>

        <div className="mt-4 px-3">
          {/* --------------Slider-------------------- */}
          <div className="flex flex-col px-6">
            <input
              id="length"
              type="range"
              min={6}
              max={24}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-center" htmlFor="length">
              Length: {length}
            </label>
          </div>
          {/* --------------Checkboxes-------------------- */}
          <div className="h-32 flex flex-col px-11">
            <div className="flex space-x-36 justify-center">
              <label htmlFor="uppercase" className="w-8">
                Uppercase
              </label>
              <input
                checked={uppercase}
                type="checkbox"
                id="uppercase"
                onChange={() => setUppercase((prev) => !prev)}
              />
            </div>
            <div className="flex space-x-36 justify-center">
              <label htmlFor="lowercase" className="w-8">
                LowerCase
              </label>
              <input
                checked={lowercase}
                type="checkbox"
                id="lowercase"
                onChange={() => setLowercase((prev) => !prev)}
              />
            </div>
            <div className="flex space-x-36 justify-center">
              <label htmlFor="uppercase" className="w-8">
                Number
              </label>
              <input
                checked={number}
                type="checkbox"
                id="number"
                onChange={() => setNumber((prev) => !prev)}
              />
            </div>
            <div className="flex space-x-36 justify-center">
              <label htmlFor="uppercase" className="w-8">
                Symbols
              </label>
              <input
                checked={symbols}
                type="checkbox"
                id="symbol"
                onChange={() => setSymbols((prev) => !prev)}
              />
            </div>
          </div>
          {/* --------------Button-------------------- */}
          <div className="flex justify-center items-center gap-2 mb-5 md:mb-7">
            <button
              className="bg-gradient-to-l from-green-600 to-green-300 w-full h-10 rounded-lg mt-4 lg:hover:scale-105 duration-700"
              onClick={() => passwordGenerate()}
            >
              Generate Password
            </button>
            <button
              className="flex justify-center items-center mt-4 h-10 rounded-full w-10 bg-[#FF8080]"
              onClick={() => restartPassword()}
            >
              <GrPowerReset />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
