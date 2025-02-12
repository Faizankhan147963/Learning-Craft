import React from "react"
export default function Second() {
    const subscriptionTiers = [
        {
          duration: "3 Months",
          voucherAmount: "500",
          friendDiscount: "500",
          instructorReward: "250" // Added incentive for the instructor
        },
        {
          duration: "6 Months",
          voucherAmount: "1000",
          friendDiscount: "1000",
          instructorReward: "500" // Added incentive for the instructor
        },
        {
          duration: "12 Months",
          voucherAmount: "1500",
          friendDiscount: "1500",
          instructorReward: "1000" // Added incentive for the instructor
        }
      ];
      
      // Steps for instructor referral program
      const steps = [
        {
          number: "1",
          title: "Invite Learners",
          description: "Encourage your students to invite their peers via SMS, WhatsApp, email, or any other platform they prefer."
        },
        {
          number: "2",
          title: "Referee Enrolls and Subscribes",
          description: "Ensure the referred learner subscribes to a learning plan and becomes an active participant in your courses."
        },
        {
          number: "3",
          title: "Earn Instant Rewards",
          description: "Once your referred learner subscribes, you, as the instructor, will receive up to ₹1000 Amazon gift voucher instantly."
        }
      ];
      
    return (
      <div className="min-h-screen bg-white px-4 py-12 md:px-8">
        {/* Referral Scheme Section */}
        <div className="container md:px-4 mx-auto py-8 ">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-3">
            Referral Scheme
          </h1>
          <p className="text-center text-gray-600 mb-12">
            You and your friend will get exciting gift vouchers & heavy discount on Autotrender subscription
          </p>
  
          {/* Subscription Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {subscriptionTiers.map((tier, index) => (
              <div 
                key={index}
                className="rounded-lg overflow-hidden border-2 border-dotted border-gray-300"
              >
                <div className="bg-blue-600 text-white p-4 text-center text-xl font-semibold">
                  {tier.duration}
                </div>
                <div className="p-6 space-y-6">
                  <div className="text-center space-y-2">
                    <p className="text-gray-600">You will get</p>
                    <div className="space-y-1">
                      <p className="text-4xl font-bold text-blue-600">₹{tier.voucherAmount}</p>
                      <p className="font-semibold">amazon</p>
                      <p className="text-gray-600">Gift Voucher</p>
                    </div>
                  </div>
  
                  <div className="text-center pt-4 border-t border-dotted border-gray-300">
                    <p className="text-gray-600 mb-2">&</p>
                    <p className="text-gray-600">Your Friend will get</p>
                    <p className="text-3xl font-bold text-gray-900 my-1">₹{tier.friendDiscount}</p>
                    <p className="text-gray-600">off on Subscription</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Steps Section */}
          <div className="relative">
            {/* Background Wave */}
            <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent rounded-3xl -z-10" />
            
            <div className="py-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-16">
                3 Steps to Earn
              </h2>
  
              <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {steps.map((step, index) => (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto">
                      <span className="text-4xl font-bold text-blue-600">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-600">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  