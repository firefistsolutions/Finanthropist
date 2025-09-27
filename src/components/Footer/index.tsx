'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
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
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <h3 className="text-2xl font-bold">Finanthropist Educare Pvt Ltd</h3>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
                Maharashtra&apos;s most trusted stock market education company since 2001.
                Empowering 25,000+ students with practical investment skills and financial
                independence.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <span className="text-slate-300">Maharashtra, India</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs">📞</span>
                  </div>
                  <span className="text-slate-300">Call for Free Consultation</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs">✉️</span>
                  </div>
                  <span className="text-slate-300">info@finanthropist.com</span>
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
                    className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    About Sammeer Sarang
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#success"
                    className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">25,000+</div>
                <div className="text-slate-400 text-sm">Students Trained</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">23+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">90%+</div>
                <div className="text-slate-400 text-sm">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-2">FREE</div>
                <div className="text-slate-400 text-sm">Initial Seminar</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 bg-slate-950">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-slate-400 text-sm">
                © {currentYear} Finanthropist Educare Pvt Ltd. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-xs">📘</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-slate-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="text-xs">💼</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-slate-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <span className="text-xs">📹</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-slate-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <span className="text-xs">💬</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-slate-950 border-t border-slate-800">
          <div className="container mx-auto px-4 py-3">
            <p className="text-xs text-slate-500 text-center leading-relaxed">
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
