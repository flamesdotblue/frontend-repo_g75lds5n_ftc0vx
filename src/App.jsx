import React from 'react';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Copilot from './components/Copilot';
import Integrations from './components/Integrations';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-extrabold tracking-tight text-slate-900">
            <span className="inline-block w-2.5 h-2.5 rounded-sm bg-indigo-600 mr-1" />
            SupplyChain One
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#modules" className="hover:text-slate-900">Platform</a>
            <a href="#copilot" className="hover:text-slate-900">Copilot</a>
            <a href="#integrations" className="hover:text-slate-900">Integrations</a>
            <a href="#cta" className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Book a Demo</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Modules />
        <Copilot />
        <Integrations />

        <section id="cta" className="py-16 bg-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Gain 100% visibility across your supply chain</h3>
              <p className="mt-1 text-indigo-100">See how leading retailers cut holding costs by 20% in the first year.</p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-indigo-700 font-semibold shadow hover:bg-indigo-50 transition-colors">Book a Demo</a>
              <a href="#modules" className="inline-flex items-center px-5 py-3 rounded-lg bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-400 transition-colors">Explore Platform</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600">© {new Date().getFullYear()} SupplyChain One. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Security</a>
            <a href="#" className="hover:text-slate-900">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
