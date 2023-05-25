/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Icon } from "@iconify/react";
import SelectOption from "./select";
export default function EvaluationCard({ name, label }) {
  const aspeks = [
    "aspek_penilaian_1",
    "aspek_penilaian_2",
    "aspek_penilaian_3",
    "aspek_penilaian_4",
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-3 rounded-md md:justify-start bg-slate-100 md:w-auto">
      <div className="p-2 text-indigo-200 rounded-full bg-slate-900 text-md md:text-xl">
        <Icon icon="solar:user-linear" />
      </div>
      <span className="text-sm md:text-base text-slate-900">{name}</span>
      <div className="flex flex-wrap justify-center gap-3 md:ml-auto">
        {aspeks.map((aspek) => (
          <SelectOption key={aspek} label={aspek} nameMahasiswa={label} />
        ))}
      </div>
    </div>
  );
}
