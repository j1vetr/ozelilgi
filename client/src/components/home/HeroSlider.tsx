const VIDEO_ID = "hFKbWg6j204";

export function HeroSlider() {
  const src = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1`;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          src={src}
          title="Özel Boğaziçi İlgi Koleji tanıtım videosu"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 w-[max(100vw,177.78vh)] h-[max(56.25vw,100vh)]"
        />
      </div>
    </section>
  );
}
