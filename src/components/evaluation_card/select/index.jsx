import { evalState } from "../../../context/evalProvider";
import createOptionValue from "../../../utils/createValueOption";

// eslint-disable-next-line react/prop-types
export default function SelectOption({ label, nameMahasiswa }) {
  const maxOptionValue = createOptionValue(10);
  const { setAllData } = evalState();
  const handlePenilaianChange = (aspek, mahasiswa, nilai) => {
    setAllData((prevPenilaian) => ({
      ...prevPenilaian,
      [aspek]: {
        ...prevPenilaian[aspek],
        [mahasiswa]: nilai,
      },
    }));
  };
  return (
    <select
      name="penilaian"
      id={label}
      className="p-1 text-sm text-center capitalize bg-transparent border rounded-md outline-none text-slate-900 border-slate-900 md:text-base"
      onChange={(e) =>
        handlePenilaianChange(label, nameMahasiswa, e.target.value)
      }>
      <option value={null}>{label}</option>
      {maxOptionValue.map((value, index) => (
        <option key={`option-${index}`} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
