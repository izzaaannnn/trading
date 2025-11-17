
"use client";
import { IconChartLine, IconCalendar, IconTable, IconLogout } from "@tabler/icons-react";

export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-darkCard border-r border-darkBorder flex flex-col p-5">
      <h1 className="text-2xl font-bold text-accent mb-10">TradingJournal</h1>

      <div className="flex flex-col gap-4 text-lg">
        <button className="flex items-center gap-3 hover:text-accent transition">
          <IconChartLine /> Dashboard
        </button>

        <button className="flex items-center gap-3 hover:text-accent transition">
          <IconCalendar /> Calendario
        </button>

        <button className="flex items-center gap-3 hover:text-accent transition">
          <IconTable /> Trades
        </button>
      </div>

      <div className="mt-auto flex items-center gap-3 text-red-400 hover:text-red-300 cursor-pointer">
        <IconLogout /> Salir
      </div>
    </div>
  );
}
