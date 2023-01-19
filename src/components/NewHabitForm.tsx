import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual Seu Comprometimento
      </label>
      <input
        type="text"
        name=""
        id="title"
        placeholder="Execicos,dormir bem , etc..."
        autoFocus
        className="p-4 mt-12 rounded-lg bg-zinc-800 text-white placeholder:text-zinc-400"
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a Recorrência?
      </label>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center gap-3 font-semibold bg-green-600 hover:bg-green-500 text-white justify-center"
      >
        <Check size={20} weight="bold" />
        Confimar
      </button>
    </form>
  );
}
