"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import styles from "./page.module.css";

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="px-6 py-4 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold">TrustGuard</h1>
        <nav className="space-x-4">
          <a href="#features" className="hover:text-cyan-400 transition">Features</a>
          <a href="#how-it-works" className="hover:text-cyan-400 transition">How It Works</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </nav>
      </header>

      <main ref={heroRef} className="text-center pt-20 px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-6"
        >
          Web3 Document Authenticity
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-300"
        >
          TrustGuard is a decentralized platform that ensures the authenticity and integrity
          of documents using Zero-Knowledge Proof (zkProof) technology.
        </motion.p>
        <motion.div
          className="mt-10 flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#get-started"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-500 font-semibold py-3 px-6 rounded-xl transition"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/trustguard-preview.png"
            alt="TrustGuard Preview"
            width={800}
            height={400}
            className="mx-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </main>

      <footer className="mt-20 px-6 py-10 bg-gray-900 text-center text-sm text-gray-500">
        © 2025 TrustGuard. Built with Zero-Knowledge and Integrity.
      </footer>
    </div>
  );
}
