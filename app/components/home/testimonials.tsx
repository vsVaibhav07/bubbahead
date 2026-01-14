"use client";
import { useState, useEffect } from "react";
import { Star, User, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "User 1",
    text: "My DUI charge was dismissed. Bubba Head was honest, professional, and truly fought for me.",
  },
  {
    name: "User 2",
    text: "He explained everything clearly and helped reduce my charges. Highly recommend.",
  },
  {
    name: "User 3",
    text: "The best legal advice I've ever received. Professional and efficient.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const nextStep = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-[rgb(var(--navy))]">
          What Clients Say
        </h2>

        {/* RELATIVE WRAPPER FOR BUTTONS */}
        <div className="relative px-0 md:px-16"> 
          
          {/* SLIDER CONTENT */}
          <div className="min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-[rgb(var(--gold))] text-[rgb(var(--gold))]" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl italic text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                    “{testimonials[index].text}”
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[rgb(var(--navy))] flex items-center justify-center shadow-inner">
                      <User size={24} className="text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-[rgb(var(--navy))] leading-tight">{testimonials[index].name}</p>
                      <p className="text-sm text-gray-500 font-medium">Verified Client</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SIDE BUTTONS - Hidden on small screens, absolute on MD+ */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 hidden md:flex justify-between pointer-events-none">
            <button 
              onClick={prevStep}
              className="p-3 rounded-full bg-white border border-gray-100 shadow-lg hover:bg-gray-50 transition-all pointer-events-auto -translate-x-4 lg:-translate-x-8"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={28} className="text-[rgb(var(--navy))]" />
            </button>
            <button 
              onClick={nextStep}
              className="p-3 rounded-full bg-white border border-gray-100 shadow-lg hover:bg-gray-50 transition-all pointer-events-auto translate-x-4 lg:translate-x-8"
              aria-label="Next testimonial"
            >
              <ChevronRight size={28} className="text-[rgb(var(--navy))]" />
            </button>
          </div>

          {/* MOBILE CONTROLS - Only visible on small screens */}
          <div className="flex justify-center gap-6 mt-8 md:hidden">
             <button onClick={prevStep} className="p-2 rounded-full border border-gray-200"><ChevronLeft /></button>
             <button onClick={nextStep} className="p-2 rounded-full border border-gray-200"><ChevronRight /></button>
          </div>
          
          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === i ? "w-8 bg-[rgb(var(--navy))]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}