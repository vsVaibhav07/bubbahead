"use client";
import { useRef, useEffect } from "react";
import { Star, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-[rgb(var(--navy))]">
          What Clients Say
        </h2>

        <div className="relative md:px-16">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={24}
            navigation={{ prevEl: null, nextEl: null }}
            pagination={{
              clickable: true,
              bulletClass:
                "swiper-pagination-bullet !h-2.5 !w-2.5 !bg-gray-300 !opacity-100",
              bulletActiveClass:
                "!w-8 !rounded-full !bg-[rgb(var(--navy))]",
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="min-h-[260px] flex items-center justify-center">
                  <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm text-center w-full">
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="fill-[rgb(var(--gold))] text-[rgb(var(--gold))]"
                        />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl italic text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                      “{item.text}”
                    </p>

                    <div className="flex items-center justify-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-[rgb(var(--navy))] flex items-center justify-center shadow-inner">
                        <User size={24} className="text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-[rgb(var(--navy))] leading-tight">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500 font-medium">
                          Verified Client
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 hidden md:flex justify-between pointer-events-none">
            <button
              ref={prevRef}
              className="pointer-events-auto p-3 rounded-full bg-white border border-gray-100 shadow-lg hover:bg-gray-50 transition-all -translate-x-4 lg:-translate-x-8"
            >
              <ChevronLeft size={28} className="text-[rgb(var(--navy))]" />
            </button>

            <button
              ref={nextRef}
              className="pointer-events-auto p-3 rounded-full bg-white border border-gray-100 shadow-lg hover:bg-gray-50 transition-all translate-x-4 lg:translate-x-8"
            >
              <ChevronRight size={28} className="text-[rgb(var(--navy))]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
