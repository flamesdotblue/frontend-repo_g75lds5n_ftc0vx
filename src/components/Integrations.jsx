import React from 'react';
import { Database, Globe, Shield, CreditCard } from 'lucide-react';

const Pill = ({ children }) => (
  <span className="px-3 py-1 rounded-full text-sm bg-white border border-slate-200 text-slate-700 shadow-sm">
    {children}
  </span>
);

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Plug Into Your Stack</h2>
          <p className="mt-3 text-slate-600">
            Connect ERP, WMS/3PL, and TMS systems, plus external data feeds for tariffs, customs, and global risk alerts.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <CreditCard className="w-5 h-5 text-indigo-600" /> ERP & Accounting
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>SAP</Pill>
              <Pill>Oracle</Pill>
              <Pill>NetSuite</Pill>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <Database className="w-5 h-5 text-indigo-600" /> WMS / 3PL
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>HighJump</Pill>
              <Pill>Manhattan</Pill>
              <Pill>ShipBob</Pill>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <Globe className="w-5 h-5 text-indigo-600" /> TMS & Visibility
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>Project44</Pill>
              <Pill>FourKites</Pill>
              <Pill>Transporeon</Pill>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 flex items-start gap-4">
          <Shield className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
          <p className="text-slate-700">
            Webhooks and REST APIs ensure secure, bi-directional data flow. Role-based access controls keep your financial and operational data protected.
          </p>
        </div>
      </div>
    </section>
  );
}
