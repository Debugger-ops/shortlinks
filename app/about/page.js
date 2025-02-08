'use client'
import React from 'react'
import { ArrowRight, Link as LinkIcon, Zap } from 'lucide-react';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About ShortLink</h1>
          <p className="text-xl text-gray-600">Your trusted URL shortening service</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="pt-6 px-6 pb-4 text-center">
              <Zap className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Lightning Fast</h2>
              <p className="text-gray-600">Instantly create shortened URLs that never expire</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="pt-6 px-6 pb-4 text-center">
              <LinkIcon className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Reliable</h2>
              <p className="text-gray-600">99.9% uptime guarantee with enterprise-grade infrastructure</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="pt-6 px-6 pb-4 text-center">
              <ArrowRight className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Simple</h2>
              <p className="text-gray-600">No sign-up required. Just paste and shorten</p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Why Choose ShortLink?</h2>
          <p className="text-gray-600 mb-6">
            ShortLink transforms long, unwieldy URLs into clean, memorable links. Perfect for social media sharing, 
            marketing campaigns, or any situation where you need concise links. Our service is built with Next.js 
            and modern web technologies to ensure maximum performance and reliability.
          </p>

          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 mb-6">
            Simply paste your long URL into our shortener, click the button, and receive your shortened link 
            instantly. Each link is permanent and can be used immediately. We use advanced algorithms to ensure 
            your shortened URLs are unique and secure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
