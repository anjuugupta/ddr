import React, { useState } from 'react';
import { Users, TrendingUp, Shield, Zap, Target, Award, Rocket, Star } from 'lucide-react';

export default function ScrollCard() {
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Connect and work seamlessly with your team members across the globe",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description: "Track your progress with real-time analytics and insights",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Bank-level security to protect your data and privacy",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing fast performance and instant responses",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Set and achieve your targets with precision tracking",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Best Quality",
      description: "Premium features and exceptional user experience",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Rocket,
      title: "Launch Faster",
      description: "Get started quickly with our intuitive setup process",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "Trusted by thousands of satisfied customers worldwide",
      color: "from-orange-500 to-red-500"
    }
  ];

  // Duplicate cards for seamless loop
  const duplicatedCards = [...cards, ...cards, ...cards];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">
          Our Amazing Features
        </h2>
        <p className="text-center text-gray-300 text-lg">
          Hover on any card to pause and explore
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Cards */}
        <div 
          className={`flex gap-6 ${isPaused ? '' : 'animate-scroll'}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transition-all duration-500 hover:scale-110 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-purple-500/50 h-full`}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 bg-gradient-to-br ${card.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-500">
                      {card.description}
                    </p>

                    {/* Decorative Element */}
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-white to-transparent group-hover:w-full transition-all duration-500"></div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${card.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-320px * 8 - 24px * 8));
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}