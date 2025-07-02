"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Share2 } from "lucide-react";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

export default function MyPortfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored) setDarkMode(stored === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const links = [
    {
      id: 1,
      title: "Facebook",
      url: "https://www.facebook.com/share/merchantaulefrau",
      Icon: FaFacebook,
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Instagram",
      url: "https://www.instagram.com/merchant_aulefrau/profilecard/?igsh=MTQ0cGQ1NzRuemVqZQ==",
      Icon: FaInstagram,
      iconColor: "text-pink-500",
    },
    {
      id: 3,
      title: "TikTok",
      url: "https://www.tiktok.com/@merchant_aulefrau?_t=ZS-8xgrlBiv9rr&_r=1",
      Icon: FaTiktok,
      iconColor: "text-black",
    },
  ];

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "My LinkHub",
          url: window.location.href,
        });
      } else {
        alert("Sharing is not supported on this device.");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    // ✅ Wrap className on a plain div
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-2 sm:p-4 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-yellow-300 to-pink-300 text-black"
      } transition-colors duration-500`}
    >
      {/* Animate the opacity separately */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col items-center justify-center"
      >
        {/* Top Controls */}
        <div className="w-full flex justify-end items-center gap-2 mb-4 pr-2 sm:pr-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <Button
              onClick={handleShare}
              aria-label="Share this page"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
            >
              <Share2 />
            </Button>
          </motion.div>

          <Button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={darkMode ? "sun" : "moon"}
                initial={{ rotate: -90, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {darkMode ? <Sun /> : <Moon />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>

        {/* Logo */}
        <div className="mb-3 sm:mb-4">
          <img
            src="/logo.png"
            alt="Aulefrau's Nook logo"
            className="w-24 h-24 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Name */}
        <div className="text-center mb-4 sm:mb-6 max-w-xs sm:max-w-md">
          <h1 className="text-2xl sm:text-4xl font-bold drop-shadow">
            Aulefrau's Nook
          </h1>
          <p className="text-[10px] sm:text-xs mt-2 sm:mt-3 leading-relaxed">
            Original art, handmade décor, and unique accessories crafted with love.
            Commissions welcome for one-of-a-kind pieces.
          </p>
        </div>

        {/* Links */}
        <div className="w-full max-w-[280px] space-y-2 sm:space-y-3">
          {links.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: link.id * 0.15 }}
              className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-2xl"
            >
              <Card
                className={`w-full rounded-2xl border border-white/40 ${
                  darkMode
                    ? "bg-white/10 backdrop-blur-lg text-white"
                    : "bg-white/30 backdrop-blur-lg text-black"
                } shadow-xl hover:scale-[1.02] hover:brightness-105 hover:shadow-2xl hover:shadow-pink-300/30 transition-all`}
              >
                <CardContent className="py-1.5 px-2 flex items-center gap-1.5">
                  <link.Icon className={`w-5 h-5 ${link.iconColor}`} />
                  <span className="flex-1 text-center text-base font-medium">
                    {link.title}
                  </span>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 sm:mt-24 mb-4 text-center text-xs opacity-80">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/logo.png"
              alt="Footer logo"
              className="w-5 h-5 rounded-full border border-white"
            />
            <span>© 2018 Aulefrau's Nook</span>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
