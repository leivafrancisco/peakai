export default function Nearshore() {
  return (
    <section
      id="nearshore"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-forest-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-forest-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-forest-400 font-semibold text-sm uppercase tracking-wider">
              The Nearshore Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              High-End Engineering,
              <br />
              <span className="text-forest-400">Competitive Rates</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              By leveraging our dedicated team in Argentina and Chile, we
              provide top-tier software engineering at a fraction of the cost of
              big-city firms, without sacrificing quality or time-zone
              alignment.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-forest-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-forest-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Cost-Effective Excellence
                  </h4>
                  <p className="text-slate-400">
                    Premium development at rates that make sense for growing
                    businesses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-forest-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-forest-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Dedicated Teams
                  </h4>
                  <p className="text-slate-400">
                    Your projects get focused attention from engineers who know
                    your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-forest-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-forest-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    No Quality Compromise
                  </h4>
                  <p className="text-slate-400">
                    World-class developers trained in the latest AI and software
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual/Map */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700">
              {/* Map visualization */}
              <div className="aspect-square relative">
                {/* USA Marker */}
                <div className="absolute top-[25%] left-[20%] group">
                  <div className="w-4 h-4 bg-forest-500 rounded-full animate-pulse" />
                  <div className="absolute left-6 top-0 bg-slate-900 px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium">
                      Ketchum, Idaho
                    </span>
                  </div>
                </div>

                {/* South America Markers */}
                <div className="absolute top-[65%] left-[30%] group">
                  <div className="w-4 h-4 bg-forest-400 rounded-full animate-pulse animation-delay-300" />
                  <div className="absolute left-6 top-0 bg-slate-900 px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium">
                      Corrientes, Argentina
                    </span>
                  </div>
                </div>

                <div className="absolute top-[55%] left-[25%] group">
                  <div className="w-4 h-4 bg-forest-400 rounded-full animate-pulse animation-delay-500" />
                  <div className="absolute left-6 top-0 bg-slate-900 px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium">
                      Chile
                    </span>
                  </div>
                </div>

                {/* Connection lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                      <stop
                        offset="100%"
                        stopColor="#22c55e"
                        stopOpacity="0.2"
                      />
                    </linearGradient>
                  </defs>
                  {/* Line to Argentina */}
                  <path
                    d="M 22 27 Q 40 50 32 67"
                    stroke="url(#lineGradient)"
                    strokeWidth="0.5"
                    fill="none"
                    strokeDasharray="2,2"
                  />
                  {/* Line to Chile */}
                  <path
                    d="M 22 27 Q 35 45 27 57"
                    stroke="url(#lineGradient)"
                    strokeWidth="0.5"
                    fill="none"
                    strokeDasharray="2,2"
                  />
                </svg>

                {/* Background grid */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #22c55e 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>

                {/* Central text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-forest-500/20">
                      0h
                    </div>
                    <div className="text-slate-400 text-sm">
                      Time Zone Difference
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">USA</div>
                  <div className="text-slate-400 text-sm">HQ Location</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2</div>
                  <div className="text-slate-400 text-sm">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1</div>
                  <div className="text-slate-400 text-sm">Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
