"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Wallet } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const htmlElement = document.documentElement
    htmlElement.classList.add("dark")
  }, [])

  useEffect(() => {
    if (!mounted) return

    const htmlElement = document.documentElement
    if (isDark) {
      htmlElement.classList.add("dark")
    } else {
      htmlElement.classList.remove("dark")
    }
  }, [isDark, mounted])

  if (!mounted) return null

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-500">
      {/* Background gradient layer */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isDark
            ? "bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900"
            : "bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50"
        }`}
      />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <Image
          src="/abstract-futuristic-blockchain-technology-glowing-.jpg"
          alt=""
          width={400}
          height={400}
          className={`absolute -top-20 -left-20 opacity-40 rounded-full blur-sm transition-opacity duration-500 ${isDark ? "opacity-30" : "opacity-20"}`}
        />
        <Image
          src="/digital-circuit-pattern-neon-lights-cyberpunk.jpg"
          alt=""
          width={350}
          height={350}
          className={`absolute top-1/4 -right-16 opacity-30 rounded-full blur-sm transition-opacity duration-500 ${isDark ? "opacity-25" : "opacity-15"}`}
        />
        <Image
          src="/glowing-crypto-badge-medal-futuristic.jpg"
          alt=""
          width={300}
          height={300}
          className={`absolute -bottom-10 left-1/4 opacity-30 rounded-full blur-sm transition-opacity duration-500 ${isDark ? "opacity-25" : "opacity-15"}`}
        />
      </div>

      {/* Animated orbs/shapes for visual interest */}
      <div
        className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl transition-all duration-500 ${
          isDark ? "bg-purple-600/20" : "bg-purple-400/30"
        }`}
      />
      <div
        className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl transition-all duration-500 ${
          isDark ? "bg-blue-600/20" : "bg-blue-400/30"
        }`}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl transition-all duration-500 ${
          isDark ? "bg-indigo-600/10" : "bg-indigo-300/20"
        }`}
      />

      {/* Grid pattern overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isDark ? "opacity-20" : "opacity-10"}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content layer */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <nav
          className={`border-b backdrop-blur-md transition-colors duration-500 ${
            isDark ? "border-white/10 bg-black/20" : "border-black/10 bg-white/30"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Title */}
              <h1
                className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Hackathon 2025 Blog
              </h1>

              {/* Right side controls */}
              <div className="flex items-center gap-4">
                {/* Theme Toggle */}
                <button
                  onClick={() => setIsDark(!isDark)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isDark ? "hover:bg-white/10 text-white" : "hover:bg-black/10 text-slate-900"
                  }`}
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                      : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                  }`}
                >
                  <Wallet className="w-4 h-4" />
                  <span>Connect Wallet</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-6">
              <div
                className={`relative p-1 rounded-2xl ${isDark ? "bg-gradient-to-r from-purple-500 to-indigo-500" : "bg-gradient-to-r from-indigo-500 to-purple-500"}`}
              >
                <Image
                  src="/hackathon-trophy-badge-award-glowing-futuristic.jpg"
                  alt="Hackathon 2025 Badge"
                  width={180}
                  height={180}
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* Hero Section */}
            <div className="space-y-4">
              <h2
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance transition-colors duration-500 ${
                  isDark
                    ? "bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-slate-900 via-purple-800 to-indigo-800 bg-clip-text text-transparent"
                }`}
              >
                Welcome to Hackathon 2025
              </h2>
              <p
                className={`text-lg max-w-2xl mx-auto text-balance transition-colors duration-500 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Build, create, and innovate. Claim your badge to mark your participation in this year's hackathon.
              </p>
            </div>

            <div className="relative group">
              <button
                className={`relative px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white"
                    : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
                }`}
              >
                ClaimBadge
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div
                className={`rounded-xl p-4 backdrop-blur-md transition-all duration-300 hover:scale-105 ${isDark ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"}`}
              >
                <Image
                  src="/code-programming-hackathon-developer.jpg"
                  alt="Build Projects"
                  width={200}
                  height={120}
                  className="rounded-lg w-full h-28 object-cover mb-3"
                />
                <h3 className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Build Projects</h3>
                <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>Create innovative solutions</p>
              </div>
              <div
                className={`rounded-xl p-4 backdrop-blur-md transition-all duration-300 hover:scale-105 ${isDark ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"}`}
              >
                <Image
                  src="/team-collaboration-diverse-group-working-together.jpg"
                  alt="Collaborate"
                  width={200}
                  height={120}
                  className="rounded-lg w-full h-28 object-cover mb-3"
                />
                <h3 className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Collaborate</h3>
                <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>Work with talented teams</p>
              </div>
              <div
                className={`rounded-xl p-4 backdrop-blur-md transition-all duration-300 hover:scale-105 ${isDark ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"}`}
              >
                <Image
                  src="/trophy-winning-celebration-success-award.jpg"
                  alt="Win Prizes"
                  width={200}
                  height={120}
                  className="rounded-lg w-full h-28 object-cover mb-3"
                />
                <h3 className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Win Prizes</h3>
                <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Earn rewards and recognition
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
