import React from 'react';
import { Sparkles, Plane, ArrowRight, Ship, DollarSign } from 'lucide-react';

export default function Copilot() {
  return (
    <section id="copilot" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-medium">
              <Sparkles className="w-4 h-4" />
              Supply Chain Copilot
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Autonomous Exception Management
            </h2>
            <p className="mt-3 text-slate-700">
              Detect disruptions, model mitigation scenarios, and recommend the best action. Approve with one click to instantly trigger bookings and amendments.
            </p>

            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-lg border border-slate-200 bg-slate-50">
                <div className="flex items-center gap-2 text-slate-900 font-medium">
                  <Ship className="w-5 h-5 text-indigo-600" />
                  Port Strike Detected (Asia)
                </div>
                <p className="mt-1 text-slate-700">
                  Impact: 3 containers linked to SKUs 101/102. Risk of $500,000 in lost sales.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-medium">
                  <Plane className="w-5 h-5 text-indigo-600" />
                  Scenario A: Air Freight Critical Inventory
                </div>
                <p className="mt-1 text-slate-700">
                  Expedite 3 containers of SKUs 101/102. New ETA: 4 days. Additional Cost:
                  <span className="inline-flex items-center gap-1 font-semibold text-slate-900 ml-1"><DollarSign className="w-4 h-4" />15,000</span>
                </p>
              </div>
              <div className="p-4 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-medium">
                  <Ship className="w-5 h-5 text-indigo-600" />
                  Scenario B: Divert to Alternate Port
                </div>
                <p className="mt-1 text-slate-700">
                  Non-critical inventory diverted. Vendor capacity and Q-Score verified. ETA: 9 days.
                </p>
              </div>

              <button className="mt-2 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition-colors">
                Approve Scenario A
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-indigo-50 to-white">
              <h3 className="text-lg font-semibold text-slate-900">How It Works</h3>
              <ol className="mt-4 space-y-3 text-slate-700 list-decimal list-inside">
                <li>Continuously monitors global news, port data, and risk alerts.</li>
                <li>Links affected freight to POs, SKUs, and financial impact in real time.</li>
                <li>Models mitigation strategies using live rates, capacity, and vendor Q-Scores.</li>
                <li>Recommends the best option to maintain service levels and margin.</li>
                <li>One click to execute bookings and amendments automatically.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
