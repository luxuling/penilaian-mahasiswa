import EvaluationCard from "./components/evaluation_card";
import mahasiswaDb from "./data/mahasiswa.json";
import { evalState } from "./context/evalProvider";
import { useState } from "react";
function App() {
  const { allData } = evalState();
  const [displayData, setDisplayData] = useState("");
  const displayAlldata = () => {
    const sortedData = Object.keys(allData)
      .sort()
      .reduce((acc, key) => {
        acc[key] = allData[key];
        return acc;
      }, {});
    const json = JSON.stringify(sortedData, null, 2);
    setDisplayData(json);
  };
  return (
    <>
      <a
        href="https://github.com/luxuling/penilaian-mahasiswa"
        className="fixed px-3 py-2 rounded-md bottom-5 right-5 bg-sky-200 text-slate-900 hover:underline">
        Source Code
      </a>
      <h1 className="text-lg font-semibold text-center py-7">
        Aplikasi Penilaian Mahasiswa
      </h1>
      <div className="flex flex-col items-center w-full gap-4 px-3">
        {mahasiswaDb.map((value, index) => (
          <EvaluationCard
            key={value.name}
            id={`aspek_penilaian_${index}`}
            name={value.name}
            label={value.label}
          />
        ))}
        <button
          className="px-3 py-2 text-white rounded-md bg-slate-900"
          onClick={displayAlldata}>
          save
        </button>
        <pre>{displayData}</pre>
      </div>
    </>
  );
}

export default App;
