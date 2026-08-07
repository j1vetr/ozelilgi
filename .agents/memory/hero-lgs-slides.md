---
name: Hero Slider LGS Slides
description: LGS başarı öğrenci slaytları için özel HeroSlider tasarımı — açık arka plan, sola hizalı koyu metin.
---

## Kural
Slides index 1 (Burcu Beril Kaya) ve index 2 (Kaan Ege Alp), `lgsStudent` alanına sahip. `isLGS` kontrolü ile:
- Overlay: `from-white/60 via-white/20 to-transparent` (sola doğru açık)
- Metin: koyu (text-primary, text-gray-700)
- Layout: sol kolonlu, `max-w-[52%]`
- CTA butonları: brand-orange (dolu) + outline (primary kenarlık)

**Why:** Fotoğraflar açık arka planlı profesyonel okul görselleri; beyaz üzerine beyaz metin okunamaz.

## Slide yapısı (heroSlides array)
0. hero-slide1.jpg (12s, dark bg, centered white text)
1. lgs-burcu-beril-kaya.webp (8s, light bg, LGSSlideContent)
2. lgs-kaan-ege-alp.webp (8s, light bg, LGSSlideContent)
3. building-drone-1.webp (5s, dark bg)
4. music-room-1.webp (5s, dark bg)
5. wall-mural-nature.webp (5s, dark bg)

## Marquee strip
LGS slide'larında bg: `bg-white/70 border-gray-200`, normal slide'larda: `bg-white/10 backdrop-blur-md border-white/10`.
