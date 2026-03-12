"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { getGallery } from "@/lib/actions/gallery";

// import plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const GalleryGrid = () => {
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await getGallery();
      // Transform Supabase data to gallery format
      const formatted = data.map((p: any, i: number) => ({
        src: p.url,
        width: i % 3 === 0 ? 1080 : 1920, // Alternating for masonry look
        height: i % 3 === 0 ? 1920 : 1080,
        alt: `Action FSL - ${p.category || "Galerie"}`,
        id: p.id,
      }));
      setPhotos(formatted);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto mb-24 min-h-[50vh]">
      <MasonryPhotoAlbum
        photos={photos}
        render={{
          image: (
            { alt, title, sizes, className, onClick, style }: any,
            { photo }: any,
          ) => (
            <Image
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt={photo.alt || ""}
              title={title}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className={`${className || ""} object-cover group-hover:scale-105 transition-transform duration-700 w-full h-auto rounded-[2rem]`}
              onClick={onClick}
              style={{ ...style, width: "100%", height: "auto" }}
            />
          ),
          wrapper: ({ style, children, ...rest }: any) => (
            <div
              style={{ ...style, position: "relative", display: "block" }}
              {...rest}
              className="overflow-hidden rounded-[2rem] cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 border-[6px] border-foreground/5 z-0"
            >
              {children || rest.children}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 text-primary font-medium px-6 py-3 rounded-full text-sm backdrop-blur-md shadow-lg">
                  Agrandir
                </span>
              </div>
            </div>
          ),
        }}
        onClick={({ index }: any) => setIndex(index)}
        spacing={32}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1;
          if (containerWidth < 1024) return 2;
          if (containerWidth < 1280) return 3;
          return 4;
        }}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        carousel={{ finite: false }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
      />
    </section>
  );
};

export default GalleryGrid;
