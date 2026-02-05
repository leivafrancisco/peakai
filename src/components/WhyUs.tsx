export default function WhyUs() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Local Presence, Global Talent",
      description:
        "We are based in Ketchum, Idaho. You get the reliability of a local partner with the technical powerhouse of our South American dev team.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Same Time-Zone Collaboration",
      description:
        "No communication lags. We work while you work, ensuring seamless integration and real-time support.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Built for Growth",
      description:
        "We don't just write code; we build AI agents that handle bookings, customer service, and lead generation 24/7.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            The Best of Both Worlds
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combining local expertise with global engineering talent to deliver
            exceptional results for your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-forest-50 transition-all duration-300 border border-slate-100 hover:border-forest-200"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center text-forest-700 mb-6 group-hover:bg-forest-200 transition-colors">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-forest-500/5 to-transparent rounded-tr-2xl rounded-bl-full" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-slate-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-forest-700 mb-2">100%</div>
            <div className="text-slate-600">Same Timezone</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-forest-700 mb-2">24/7</div>
            <div className="text-slate-600">AI Availability</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-forest-700 mb-2">Local</div>
            <div className="text-slate-600">Ketchum Based</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-forest-700 mb-2">Elite</div>
            <div className="text-slate-600">Dev Team</div>
          </div>
        </div>
      </div>
    </section>
  );
}
