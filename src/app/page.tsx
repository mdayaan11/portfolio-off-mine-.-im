'use client';

import { useState } from 'react';
import { Star, ChevronRight, Sparkles, Zap, Shield, Users, ArrowRight, Check, Globe, Award, TrendingUp } from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'Premium Quality', desc: 'Every detail is crafted to perfection, ensuring an experience that exceeds expectations.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance that keeps you moving at the speed of innovation.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade encryption and security protocols to protect what matters most.' },
  { icon: Globe, title: 'Global Scale', desc: 'Built to handle millions of users across every continent seamlessly.' },
  { icon: Award, title: 'Award Winning', desc: 'Recognized by industry leaders for excellence in design and technology.' },
  { icon: TrendingUp, title: 'Growth Focused', desc: 'Data-driven insights and tools designed to accelerate your success.' },
];

const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.9/5', label: 'Rating' },
  { value: '24/7', label: 'Support' },
];

const testimonials = [
  { name: 'Alex Chen', role: 'CEO, TechFlow', text: 'This transformed how we do business. Incredible results from day one.', avatar: '👨‍💻' },
  { name: 'Maria Santos', role: 'Director, Scale Inc', text: 'The best investment we made this year. Our team productivity doubled.', avatar: '👩‍💼' },
  { name: 'David Park', role: 'Founder, NextGen', text: 'Elegant, powerful, and reliable. Everything we needed and more.', avatar: '🧑‍🚀' },
];

const plans = [
  { name: 'Starter', price: 'Free', features: ['Up to 3 projects', 'Basic analytics', 'Community support', '1GB storage'], popular: false },
  { name: 'Pro', price: '$29', features: ['Unlimited projects', 'Advanced analytics', 'Priority support', '100GB storage', 'Custom domains', 'API access'], popular: true },
  { name: 'Enterprise', price: '$99', features: ['Everything in Pro', 'Dedicated manager', 'SLA guarantee', 'Unlimited storage', 'SSO & SAML', 'Custom integrations'], popular: false },
];

export default function Home() {
  const [annual, setAnnual] = useState(true);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0d0d2b] to-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-purple-900/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            ✨ Portfolio Off Mine . Im
          </h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            {['Features', 'Pricing', 'Reviews'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-purple-400 transition-colors">{l}</a>
            ))}
          </div>
          <a href="#pricing" className="bg-gradient-to-r from-purple-500 to-pink-600 px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-purple-400 text-sm mb-6">
            <Sparkles className="w-4 h-4" /> Now available worldwide
          </div>
          <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-6 max-w-4xl mx-auto">
            Build Something
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The all-in-one platform that empowers you to create, scale, and succeed — without the complexity.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#pricing" className="group bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all flex items-center gap-2">
              Start Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#features" className="border border-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/5 transition-all">
              Learn More
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Everything You Need</h3>
            <p className="text-gray-500 max-w-xl mx-auto">Powerful features designed to give you an unfair advantage</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-purple-500/30 hover:scale-[1.02] transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5 group-hover:bg-purple-500/20 transition-colors">
                  <f.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Simple Pricing</h3>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
              <button onClick={() => setAnnual(!annual)} className={`w-12 h-6 rounded-full relative transition-colors ${annual ? 'bg-purple-500' : 'bg-gray-700'}`}>
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${annual ? 'left-6' : 'left-0.5'}`} />
              </button>
              <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-purple-400 text-xs">(-20%)</span></span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${plan.popular ? 'bg-gradient-to-b from-purple-500/20 to-pink-500/10 border-2 border-purple-500/50 shadow-xl shadow-purple-500/10' : 'bg-white/[0.03] border border-white/[0.06]'}`}>
                {plan.popular && <div className="text-xs font-bold text-purple-400 mb-4 uppercase tracking-wider">Most Popular</div>}
                <h4 className="text-xl font-bold mb-1">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black">{plan.price}</span>
                  {plan.price !== 'Free' && <span className="text-gray-500 text-sm">/{annual ? 'year' : 'month'}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-purple-400 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition-all hover:scale-[1.01] ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-lg hover:shadow-purple-500/25' : 'bg-white/10 hover:bg-white/15'}`}>
                  {plan.price === 'Free' ? 'Start Free' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Loved by Teams Everywhere</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-purple-500/20 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-purple-400 text-purple-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{t.avatar}</span>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-16">
          <h3 className="text-4xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join thousands of teams already building something extraordinary.</p>
          <a href="#pricing" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all">
            Start Building <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-bold text-lg">✨ Portfolio Off Mine . Im</span>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
            <a href="#reviews" className="hover:text-purple-400 transition-colors">Reviews</a>
          </div>
          <p className="text-gray-600 text-sm">© 2025 Portfolio Off Mine . Im. Built with <span className="text-purple-400">Heaven AI</span></p>
        </div>
      </footer>
    </main>
  );
}
