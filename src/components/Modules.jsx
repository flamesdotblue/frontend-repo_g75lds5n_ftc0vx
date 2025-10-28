import React from 'react';
import { Package, ShoppingCart, Truck } from 'lucide-react';

const Card = ({ icon: Icon, title, subtitle, bullets }) => (
  <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{subtitle}</p>
      </div>
    </div>
    <ul className="mt-4 space-y-2 text-slate-700">
      {bullets.map((b, i) => (
        <li key={i} className="pl-3 leading-relaxed relative">
          <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);

export default function Modules() {
  return (
    <section id="modules" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Unified by a Common Data Model</h2>
          <p className="mt-3 text-slate-600">
            Three connected modules share live data to eliminate silos and unlock true 100% visibility.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card
            icon={Package}
            title="Planning"
            subtitle="Demand & Inventory Intelligence"
            bullets={[
              'Predictive 12-month demand forecasts with promotion and seasonality scenarios.',
              'Dynamic safety stock that adapts to lead times and inbound ETAs.'
            ]}
          />
          <Card
            icon={ShoppingCart}
            title="Procurement"
            subtitle="Sourcing & Vendor Management"
            bullets={[
              'Real-time supplier performance scoring across quality and lead-time variance.',
              'Automated PO-to-invoice matching for faster, accurate payments.'
            ]}
          />
          <Card
            icon={Truck}
            title="Fulfillment"
            subtitle="Logistics & Command Center"
            bullets={[
              'Multi-modal, real-time tracking across ocean, air, truck, and last-mile.',
              'Warehouse slotting and receiving optimization driven by digital twins.'
            ]}
          />
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 md:p-8">
          <p className="text-slate-700">
            Golden Thread: Click any data point and reach the source document (SKU forecast → PO → shipment → warehouse task) in 3 clicks or less.
          </p>
        </div>
      </div>
    </section>
  );
}
