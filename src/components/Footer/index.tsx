'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img src="/logo.png" alt="Finanthropist Logo" className="w-24 h-24 rounded-lg" />
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Maharashtra&apos;s most trusted stock market education company since 2001.
                Empowering 10,000+ Families with practical investment skills and financial
                independence.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-brand-accent rounded flex items-center justify-center">
                    <span className="text-black text-xs">📍</span>
                  </div>
                  <span className="text-gray-400">Maharashtra, India</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-brand-accent rounded flex items-center justify-center">
                    <span className="text-black text-xs">📞</span>
                  </div>
                  <span className="text-gray-400">Call for Free Consultation</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-brand-accent rounded flex items-center justify-center">
                    <span className="text-black text-xs">✉️</span>
                  </div>
                  <span className="text-gray-400">info@finanthropist.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/#about"
                    className="text-gray-400 hover:text-brand-accent transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    About Sammeer Sarang
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#success"
                    className="text-gray-400 hover:text-brand-accent transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-gray-400 hover:text-brand-accent transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-brand-accent mb-2">10,000+</div>
                <div className="text-gray-400 text-sm">Families Trained</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-brand-accent mb-2">23+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-brand-accent mb-2">87%+</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-brand-accent mb-2">FREE</div>
                <div className="text-gray-400 text-sm">Initial Seminar</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 bg-black">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {currentYear} Finanthropist Educare Pvt Ltd. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                  Disclaimer
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 border border-gray-700 hover:bg-brand-accent hover:border-brand-accent rounded-full flex items-center justify-center transition-colors group"
                  aria-label="Facebook"
                >
                  <span className="text-xs group-hover:text-black">📘</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 border border-gray-700 hover:bg-brand-accent hover:border-brand-accent rounded-full flex items-center justify-center transition-colors group"
                  aria-label="LinkedIn"
                >
                  <span className="text-xs group-hover:text-black">💼</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 border border-gray-700 hover:bg-brand-accent hover:border-brand-accent rounded-full flex items-center justify-center transition-colors group"
                  aria-label="YouTube"
                >
                  <span className="text-xs group-hover:text-black">📹</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 border border-gray-700 hover:bg-brand-accent hover:border-brand-accent rounded-full flex items-center justify-center transition-colors group"
                  aria-label="WhatsApp"
                >
                  <span className="text-xs group-hover:text-black">💬</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 py-3">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              <strong>Disclaimer:</strong> Stock market investments are subject to market risks.
              Past performance is not indicative of future returns. Please read all scheme-related
              documents carefully before investing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
