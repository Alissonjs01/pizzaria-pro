
import { useState } from "react";
import { Home, Users, TrendingUp, Clock, Pizza as PizzaIcon } from "lucide-react";

export default function App() {
const [activeCard, setActiveCard] = useState<number | null>(null);

return (
<div className="relative min-h-screen overflow-hidden">
{/* Fundo animado com CSS */}
<div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-black animate-gradient-xy"></div>


  {/* Conteúdo */}
  <div className="relative z-10 p-6 max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12 opacity-0 animate-fadeInUp">
      <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
        🍕 Pizzaria Don Giovanni
      </h1>
      <p className="text-lg text-gray-400">Sistema de Gestão Inteligente</p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
      {[
        { label: "Pedidos Hoje", value: "34", icon: PizzaIcon, delay: "0.2s" },
        { label: "Entregas", value: "28", icon: Home, delay: "0.4s" },
        { label: "Clientes", value: "56", icon: Users, delay: "0.6s" },
        { label: "Tempo Médio", value: "28 min", icon: Clock, delay: "0.8s" },
      ].map((item, i) => (
        <div
          key={i}
          className="group bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:shadow-3d-hover transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fadeInUp cursor-pointer"
          style={{ animationDelay: item.delay }}
          onMouseEnter={() => setActiveCard(i)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium text-gray-400">{item.label}</h3>
            <item.icon className="w-6 h-6 text-primary" />
          </div>
          <div className={`text-3xl font-bold transition-colors ${activeCard === i ? "text-red-400" : "text-white"}`}>
            {item.value}
          </div>
          <div className="mt-2 text-xs text-green-400 flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" /> +12% vs ontem
          </div>
        </div>
      ))}
    </div>

    {/* Tabela */}
    <div
      className="bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden shadow-lg opacity-0 animate-fadeInUp"
      style={{ animationDelay: "1s" }}
    >
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-semibold">Pedidos em Andamento</h2>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
            <th className="p-4">Cliente</th>
            <th className="p-4">Pedido</th>
            <th className="p-4">Valor</th>
            <th className="p-4">Status</th>
            <th className="p-4">Entrega</th>
          </tr>
        </thead>
        <tbody>
          {[
            { client: "Maria Silva", order: "2x Margherita", value: "R$ 98,00", status: "Em preparo", time: "15 min" },
            { client: "Carlos Oliveira", order: "1x Pepperoni", value: "R$ 82,00", status: "Saiu", time: "8 min" },
            { client: "Ana Costa", order: "3x Quatro Queijos", value: "R$ 114,00", status: "Aguardando", time: "—" },
          ].map((row, i) => (
            <tr key={i} className="hover:bg-gray-800/50 transition-colors">
              <td className="p-4">{row.client}</td>
              <td className="p-4">{row.order}</td>
              <td className="p-4 font-medium">{row.value}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                    row.status === "Em preparo"
                      ? "bg-red-900/60 text-red-200"
                      : row.status === "Saiu"
                      ? "bg-yellow-900/60 text-yellow-200"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="p-4">{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="text-center mt-12 text-gray-500 text-sm">
      Sistema Don Giovanni • © 2025
    </div>
  </div>
</div>
);
}