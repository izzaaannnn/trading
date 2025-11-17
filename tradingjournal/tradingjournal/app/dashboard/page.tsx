import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />

        <div className="grid grid-cols-3 gap-6 p-6">
          <div className="bg-darkCard border border-darkBorder rounded-xl p-6">
            <p className="text-accent text-sm">Winrate</p>
            <h3 className="text-3xl font-bold mt-2">—</h3>
          </div>

          <div className="bg-darkCard border border-darkBorder rounded-xl p-6">
            <p className="text-accent text-sm">Trades totales</p>
            <h3 className="text-3xl font-bold mt-2">—</h3>
          </div>

          <div className="bg-darkCard border border-darkBorder rounded-xl p-6">
            <p className="text-accent text-sm">Beneficio total</p>
            <h3 className="text-3xl font-bold mt-2">—</h3>
          </div>
        </div>
      </div>
    </div>
  );
}