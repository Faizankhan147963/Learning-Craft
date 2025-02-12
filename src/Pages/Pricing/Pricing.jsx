import React from 'react'
import { useState } from 'react'

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')

  const plans = [
    {
      name: 'Starter',
      subtitle: 'Best for teams of 2-19',
      icon: '🏆',
      price: {
        monthly: 0,
        annually: 0
      },
      description: '$0 USD per user, per year totally free for up',
      features: [
        'Courses included: 1',
        'Unlimited access to 35,000+ classes',
        'Offline, and mobile capabilities',
        'Customer Success Manager',
        'Curated wellness lists & offerings',
        'Independent Learning Anytime'
      ],
      recommended: false
    },
    {
      name: 'Enterprise',
      subtitle: 'Best for teams of 2-19',
      icon: '💎',
      price: {
        monthly: 10,
        annually: 96
      },
      description: '$0 USD per user, per year totally free for up',
      features: [
        'Courses included: 2',
        'Unlimited access to 36,000+ classes',
        'Offline, and mobile capabilities',
        'Customer Success Manager',
        'Curated wellness lists & offerings',
        'Independent Learning Anytime',
        'All Updated Learning'
      ],
      recommended: true
    },
    {
      name: 'Starter',
      subtitle: 'Best for teams of 2-19',
      icon: '⭐',
      price: {
        monthly: 20,
        annually: 192
      },
      description: '$0 USD per user, per year totally free for up',
      features: [
        'Courses included: 1',
        'Unlimited access to 35,000+ classes',
        'Offline, and mobile capabilities',
        'Customer Success Manager',
        'Curated wellness lists & offerings',
        'Independent Learning Anytime'
      ],
      recommended: false
    }
  ]

  return (
    <div className="bg-gradient-to-b from-blue-50/50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Plans For Every Stage Of Members
          </h2>
          
          {/* Breadcrumb */}
          <div className="flex justify-center items-center gap-2 text-sm mb-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600">Membership Plan</span>
          </div>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === 'monthly'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Bill Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annually')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === 'annually'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Billed Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg p-8 ${
                plan.recommended
                  ? 'ring-2 ring-blue-500 shadow-lg'
                  : 'shadow'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-0 right-0">
                  <div className="bg-blue-500 text-white text-sm font-medium py-1 text-center rounded-full max-w-[200px] mx-auto">
                    RECOMMENDED
                  </div>
                </div>
              )}

              {/* Plan Icon */}
              <div className="text-4xl mb-4">{plan.icon}</div>

              {/* Plan Details */}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline">
                  <span className="text-gray-900">$</span>
                  <span className="text-4xl font-bold">
                    {plan.price[billingPeriod]}
                  </span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">{plan.description}</p>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-blue-500 text-white rounded-lg py-2 px-4 font-medium hover:bg-blue-600 transition-colors mb-6">
                Get Started
              </button>

              {/* Features List */}
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

