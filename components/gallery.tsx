"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { architectureGallery } from "@/lib/site-data";

export function Gallery() {
  const galleryImages = architectureGallery;

  return (
    <section id="gallery" className="py-20 md:py-32 bg-brand-charcoal">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Галерея <span className="text-brand-gold italic">проекта</span>
          </h2>
          <p className="text-gray-400">
            Визуализации и фотографии, передающие атмосферу и эстетику ЛОК VERA.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <motion.div 
            className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <p className="absolute bottom-4 left-4 text-white font-serif text-xl">{galleryImages[0].alt}</p>
          </motion.div>

          {galleryImages.slice(1).map((image, index) => (
            <motion.div 
              key={index} 
              className="rounded-2xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * (index + 1) }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white font-serif text-lg">{image.alt}</p>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
