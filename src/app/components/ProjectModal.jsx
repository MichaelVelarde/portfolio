"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectModal({ open, onClose, images = [], title = '', externalLink }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (open) setIndex(0);
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, images.length, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/70" onClick={onClose} />

      <div className="relative max-w-7xl w-full mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
          <div className="flex items-center gap-2">
            {externalLink ? (
              <a
                href={externalLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Open Hosted Site
              </a>
            ) : null}
            <button onClick={onClose} className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-md">Close</button>
          </div>
        </div>

        <div className="relative bg-slate-100 dark:bg-slate-900 h-[72vh] sm:h-[80vh] lg:h-[86vh]">
          {images.length > 0 && (
            <>
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  aria-label="Previous"
                  onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
                  className="absolute left-4 z-30 p-3 rounded-full bg-white/80 dark:bg-black/50 shadow-lg"
                >
                  <ChevronLeft />
                </button>

                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full max-h-[72vh] sm:max-h-[80vh] lg:max-h-[86vh]">
                    <Image
                      src={images[index]}
                      alt={`${title} image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                      quality={90}
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </div>

                <button
                  aria-label="Next"
                  onClick={() => setIndex((i) => (i + 1) % images.length)}
                  className="absolute right-4 z-30 p-3 rounded-full bg-white/80 dark:bg-black/50 shadow-lg"
                >
                  <ChevronRight />
                </button>
              </div>
            </>
          )}
          {images.length === 0 && (
            <div className="flex items-center justify-center h-full text-slate-600 dark:text-slate-300">No images available</div>
          )}
        </div>
      </div>
    </div>
  );
}
