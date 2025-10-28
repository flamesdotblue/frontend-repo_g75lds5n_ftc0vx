import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Decorative gradient overlay - does not block interaction with the 3D scene */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 shadow backdrop-blur text-sm mb-4">
            <Rocket className="w-4 h-4 text-indigo-600" />
            <span className="font-medium text-slate-700">All-in-One Supply Chain SaaS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            Achieve 100% End-to-End Visibility
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700">
            Planning, Procurement, and Fulfillment unified by a single data model. Reduce annual holding costs by 20% with real-time intelligence and autonomous exception management.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#modules"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition-colors"
            >
              Explore the Platform
            </a>
            <a
              href="#copilot"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 font-medium shadow border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <BarChart3 className="w-5 h-5" />
              See the Copilot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
