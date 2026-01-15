import { useWindowWidth } from "../../breakpoints";
import { ArticleListSection } from "./sections/ArticleListSection";
import { ArticleListWrapperSection } from "./sections/ArticleListWrapperSection";
import { MobileArticleContentSection } from "./sections/MobileArticleContentSection";
import { MobileArticleContentWrapperSection } from "./sections/MobileArticleContentWrapperSection";
import { PaginationSection } from "./sections/PaginationSection";

const carouselSlides = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: false },
  { id: 4, active: false },
  { id: 5, active: false },
  { id: 6, active: false },
];

const metaNavItems = [
  { id: 1, label: "Meta-Navi", active: false },
  { id: 2, label: "Meta-Navi", active: false },
  { id: 3, label: "Meta-Navi", active: false },
  { id: 4, label: "Meta-Navi", active: false },
  { id: 5, label: "Meta-Navi", active: false },
];

const contentSwitchItems = [
  { id: 1, label: "Content-Switch", active: true },
  { id: 2, label: "Content-Switch", active: false },
];

const mainMenuItems = [
  { id: 1, label: "Menüpunkt" },
  { id: 2, label: "Menüpunkt" },
  { id: 3, label: "Menüpunkt" },
  { id: 4, label: "Menüpunkt" },
  { id: 5, label: "Menüpunkt" },
];

const articleCards = [
  {
    id: 1,
    image:
      "https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-3-2-7@2x.png",
    imageSmall:
      "https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-3-2-11@2x.png",
    overline: "Overline z. B. für Kategorien, Datum",
    overlineSmall: "Overline z. B. für Kategorien",
    title: "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
  },
  {
    id: 2,
    image:
      "https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-3-2-7@2x.png",
    imageSmall:
      "https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-3-2-11@2x.png",
    overline: "Overline z. B. für Kategorien, Datum",
    overlineSmall: "Overline z. B. für Kategorien",
    title: "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
  },
  {
    id: 3,
    image:
      "https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-3-2-7@2x.png",
    imageSmall:
      "https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-3-2-11@2x.png",
    overline: "Overline z. B. für Kategorien, Datum",
    overlineSmall: "Overline z. B. für Kategorien",
    title: "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
  },
  {
    id: 4,
    image:
      "https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-3-2-7@2x.png",
    imageSmall:
      "https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-3-2-11@2x.png",
    overline: "Overline z. B. für Kategorien, Datum",
    overlineSmall: "Overline z. B. für Kategorien",
    title: "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
  },
];

const featureItems = [
  {
    id: 1,
    icon: "https://c.animaapp.com/r9vN8Mpv/img/icon-solid--home-6.svg",
    iconLarge: "https://c.animaapp.com/r9vN8Mpv/img/icon-solid--home-3.svg",
    title: "Das ist eine Headline",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
  },
  {
    id: 2,
    icon: "https://c.animaapp.com/r9vN8Mpv/img/icon-solid--home-6.svg",
    iconLarge: "https://c.animaapp.com/r9vN8Mpv/img/icon-solid--home-3.svg",
    title: "Das ist eine Headline",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
  },
  {
    id: 3,
    icon: "https://c.animaapp.com/r9vN8Mpv/img/icon-solid--home-6.svg",
    iconLarge: "https://c.animaapp.com/r9vN8Mpv/img/icon-solid--home-3.svg",
    title: "Das ist eine Headline",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
  },
];

export const MobileLookFeel = (): JSX.Element => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className={`w-full inline-flex items-center gap-2.5 bg-white relative ${screenWidth < 1024 ? "min-h-[4380.98px]" : (screenWidth >= 1024 && screenWidth < 1920) ? "min-h-[3321.58px]" : screenWidth >= 1920 ? "min-h-[4656px]" : ""} ${screenWidth < 1024 ? "min-w-[360px]" : (screenWidth >= 1024 && screenWidth < 1920) ? "min-w-[1024px]" : screenWidth >= 1920 ? "min-w-[1920px]" : ""}`}
      data-model-id="9100:25719"
    >
      <div
        className={`flex flex-col items-start relative ${screenWidth < 1024 ? "w-[360px]" : (screenWidth >= 1024 && screenWidth < 1920) ? "w-[1024px]" : screenWidth >= 1920 ? "w-[1920px]" : ""} ${screenWidth < 1024 ? "gap-8" : (screenWidth >= 1024 && screenWidth < 1920) ? "gap-16" : screenWidth >= 1920 ? "gap-32" : ""}`}
      >
        {screenWidth < 1024 && (
          <>
            <PaginationSection />
            <MobileArticleContentSection />
            <MobileArticleContentWrapperSection />
            <ArticleListWrapperSection />
            <ArticleListSection />
          </>
        )}

        {((screenWidth >= 1024 && screenWidth < 1920) ||
          screenWidth >= 1920) && (
          <>
            <section
              className={`relative ${screenWidth >= 1024 && screenWidth < 1920 ? "w-[1024px]" : (screenWidth >= 1920) ? "w-[1920px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "h-[632.65px]" : (screenWidth >= 1920) ? "h-[1166px]" : ""}`}
              aria-label="Hero section with carousel"
            >
              <div
                className={`left-0 flex items-center absolute ${screenWidth >= 1024 && screenWidth < 1920 ? "w-[1024px]" : (screenWidth >= 1920) ? "w-[1920px]" : ""} ${screenWidth >= 1920 ? "flex-col" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "top-0" : (screenWidth >= 1920) ? "top-[150px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "shadow-drop-shadow" : ""} ${screenWidth >= 1920 ? "gap-6" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "px-4 py-2" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "justify-between" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "bg-white" : ""}`}
              >
                <div
                  className={`relative ${screenWidth >= 1024 && screenWidth < 1920 ? "w-[225px]" : (screenWidth >= 1920) ? "w-full" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "aspect-[4.62]" : ""} ${screenWidth >= 1920 ? "flex" : ""} ${screenWidth >= 1920 ? "self-stretch" : ""} ${screenWidth >= 1920 ? "items-center" : ""} ${screenWidth >= 1920 ? "gap-2" : ""} ${screenWidth >= 1920 ? "p-20" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "h-[48.65px]" : (screenWidth >= 1920) ? "h-[960px]" : ""} ${screenWidth >= 1920 ? "justify-around" : ""}`}
                >
                  {screenWidth >= 1024 && screenWidth < 1920 && (
                    <img
                      className="absolute w-[19.86%] h-[95.83%] top-[2.08%] left-0"
                      alt="Zeichenflache"
                      src="https://c.animaapp.com/r9vN8Mpv/img/zeichenfla-che-1-1@2x.png"
                    />
                  )}

                  {screenWidth >= 1920 && (
                    <>
                      <div className="flex flex-col w-[1920px] items-start gap-2 absolute top-0 left-0">
                        <img
                          className="aspect-[2] relative self-stretch w-full"
                          alt="Vancado template"
                          src="https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-2-1.png"
                        />
                      </div>

                      <article className="flex flex-col w-[732px] items-start gap-2 px-6 py-16 relative bg-[#e6e6e6]">
                        <div className="items-start relative self-stretch w-full flex-[0_0_auto] flex flex-col gap-6">
                          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                            <h1 className="mt-[-1.00px] text-[length:var(--project-headlines-large-h1-XL-font-size)] leading-[var(--project-headlines-large-h1-XL-line-height)] relative self-stretch font-project-headlines-large-h1-XL font-[number:var(--project-headlines-large-h1-XL-font-weight)] text-black tracking-[var(--project-headlines-large-h1-XL-letter-spacing)] [font-style:var(--project-headlines-large-h1-XL-font-style)]">
                              Zwölf Boxkämpfer jagen Viktor quer über den großen
                              Sylter Deich.
                            </h1>

                            <h2 className="relative self-stretch font-project-headlines-large-h4-s font-[number:var(--project-headlines-large-h4-s-font-weight)] text-black text-[length:var(--project-headlines-large-h4-s-font-size)] tracking-[var(--project-headlines-large-h4-s-letter-spacing)] leading-[var(--project-headlines-large-h4-s-line-height)] [font-style:var(--project-headlines-large-h4-s-font-style)]">
                              Franz jagt im komplett verwahrlosten Taxi quer
                              durch Bayern.
                            </h2>

                            <p className="relative self-stretch font-project-paragraphs-large-p4-s font-[number:var(--project-paragraphs-large-p4-s-font-weight)] text-black text-[length:var(--project-paragraphs-large-p4-s-font-size)] tracking-[var(--project-paragraphs-large-p4-s-letter-spacing)] leading-[var(--project-paragraphs-large-p4-s-line-height)] [font-style:var(--project-paragraphs-large-p4-s-font-style)]">
                              Manchmal werden auch Sätze verwendet, die alle
                              Buchstaben des Alphabets enthalten – man nennt
                              diese Sätze »Pangrams«. Sehr bekannt ist dieser:
                              The quick brown fox jumps over the lazy old dog.
                              Oft werden in Typoblindtexte auch fremdsprachige
                              Satzteile eingebaut (AVAIL® and Wefox™ are testing
                              aussi la Kerning), um die Wirkung in anderen
                              Sprachen zu testen. In Lateinisch sieht zum
                              Beispiel fast jede Schrift gut aus.
                            </p>
                          </div>

                          <button className="all-[unset] box-border inline-flex px-8 py-0 h-12 items-center justify-center relative bg-[#101010]">
                            <span className="relative w-fit font-project-headlines-large-h5-XS font-[number:var(--project-headlines-large-h5-XS-font-weight)] text-white text-[length:var(--project-headlines-large-h5-XS-font-size)] tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] leading-[var(--project-headlines-large-h5-XS-line-height)] whitespace-nowrap [font-style:var(--project-headlines-large-h5-XS-font-style)]">
                              Button
                            </span>
                          </button>
                        </div>
                      </article>
                    </>
                  )}
                </div>

                <nav
                  className={`h-8 relative ${screenWidth >= 1024 && screenWidth < 1920 ? "w-8" : (screenWidth >= 1920) ? "w-[304px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "aspect-[1]" : ""} ${screenWidth >= 1920 ? "flex" : ""} ${screenWidth >= 1920 ? "items-center" : ""} ${screenWidth >= 1920 ? "gap-2" : ""} ${screenWidth >= 1920 ? "justify-center" : ""}`}
                  aria-label="Carousel navigation"
                >
                  {screenWidth >= 1024 && screenWidth < 1920 && (
                    <button
                      className="relative w-[75.00%] h-[50.00%] top-[25.00%] left-[12.50%]"
                      aria-label="Open menu"
                    >
                      <div className="top-[43.75%] absolute w-full h-[12.50%] left-0 bg-[#101010]" />
                      <div className="top-0 absolute w-full h-[12.50%] left-0 bg-[#101010]" />
                      <div className="top-[87.50%] absolute w-full h-[12.50%] left-0 bg-[#101010]" />
                    </button>
                  )}

                  {screenWidth >= 1920 && (
                    <>
                      <button
                        className="relative w-8 h-8 ml-[-4.00px] bg-[url(https://c.animaapp.com/r9vN8Mpv/img/icon-solid-arrow--triangle-left-11.svg)] bg-[100%_100%]"
                        aria-label="Previous slide"
                      />

                      <div
                        className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
                        role="tablist"
                        aria-label="Carousel slides"
                      >
                        {carouselSlides.map((slide) => (
                          <button
                            key={slide.id}
                            className="relative w-8 h-8"
                            role="tab"
                            aria-selected={slide.active}
                            aria-label={`Go to slide ${slide.id}`}
                          >
                            <div
                              className={`relative ${slide.active ? "top-1 left-1 w-6 h-6 bg-[#808080] rounded-xl" : "top-2 left-2 w-4 h-4 bg-[#cccccc] rounded-lg"}`}
                            />
                          </button>
                        ))}
                      </div>

                      <button
                        className="relative w-8 h-8 mr-[-4.00px] bg-[url(https://c.animaapp.com/r9vN8Mpv/img/icon-solid-arrow--triangle-right-11.svg)] bg-[100%_100%]"
                        aria-label="Next slide"
                      />
                    </>
                  )}
                </nav>
              </div>

              <header
                className={`left-0 absolute ${screenWidth >= 1024 && screenWidth < 1920 ? "w-[1024px]" : (screenWidth >= 1920) ? "w-[1920px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "flex" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "flex-col" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "items-center" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "top-[65px]" : (screenWidth >= 1920) ? "top-0" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "gap-6" : ""} ${screenWidth >= 1920 ? "shadow-drop-shadow" : ""} ${screenWidth >= 1920 ? "h-[150px]" : ""} ${screenWidth >= 1920 ? "bg-white" : ""}`}
              >
                <div
                  className={`flex flex-col ${screenWidth >= 1024 && screenWidth < 1920 ? "w-full" : (screenWidth >= 1920) ? "w-[1156px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "self-stretch" : ""} ${screenWidth >= 1920 ? "left-[500px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "items-start" : (screenWidth >= 1920) ? "items-end" : ""} ${screenWidth >= 1920 ? "top-[38px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "gap-2" : (screenWidth >= 1920) ? "gap-8" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "px-[100px] py-5" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "h-[512px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "justify-center" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "relative" : (screenWidth >= 1920) ? "absolute" : ""}`}
                >
                  <div
                    className={`w-full flex ${screenWidth >= 1024 && screenWidth < 1920 ? "left-0" : ""} ${screenWidth >= 1920 ? "self-stretch" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "flex-col" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "items-start" : (screenWidth >= 1920) ? "items-end" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "top-[calc(50.00%_-_256px)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "gap-2" : ""} ${screenWidth >= 1920 ? "flex-[0_0_auto]" : ""} ${screenWidth >= 1920 ? "justify-between" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "absolute" : (screenWidth >= 1920) ? "relative" : ""}`}
                  >
                    {screenWidth >= 1024 && screenWidth < 1920 && (
                      <img
                        className="aspect-[2] relative self-stretch w-full"
                        alt="Vancado template"
                        src="https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-2-1-1.png"
                      />
                    )}

                    {screenWidth >= 1920 && (
                      <>
                        <nav
                          className="inline-flex items-center gap-6 relative flex-[0_0_auto]"
                          aria-label="Content switch"
                        >
                          {contentSwitchItems.map((item) => (
                            <a
                              key={item.id}
                              href="#"
                              className={`inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] ${item.active ? "underline" : ""}`}
                            >
                              <span
                                className={`relative w-fit font-project-paragraphs-large-p5-XS font-[number:var(--project-paragraphs-large-p5-XS-font-weight)] text-[length:var(--project-paragraphs-large-p5-XS-font-size)] tracking-[var(--project-paragraphs-large-p5-XS-letter-spacing)] leading-[var(--project-paragraphs-large-p5-XS-line-height)] whitespace-nowrap [font-style:var(--project-paragraphs-large-p5-XS-font-style)] ${item.active ? "text-[#606060]" : "text-[#101010]"}`}
                              >
                                {item.label}
                              </span>
                            </a>
                          ))}
                        </nav>

                        <nav
                          className="inline-flex items-center gap-6 relative flex-[0_0_auto]"
                          aria-label="Meta navigation"
                        >
                          <a href="#" aria-label="Language selection">
                            <img
                              className="relative w-[22px] h-[22px]"
                              alt="Group"
                              src="https://c.animaapp.com/r9vN8Mpv/img/group-11@2x.png"
                            />
                          </a>

                          <a href="#" aria-label="Search">
                            <img
                              className="relative w-[22px] h-[22px]"
                              alt="Group"
                              src="https://c.animaapp.com/r9vN8Mpv/img/group@2x.png"
                            />
                          </a>

                          {metaNavItems.map((item) => (
                            <a
                              key={item.id}
                              href="#"
                              className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]"
                            >
                              <span className="relative w-fit font-project-paragraphs-large-p5-XS font-[number:var(--project-paragraphs-large-p5-XS-font-weight)] text-[#101010] text-[length:var(--project-paragraphs-large-p5-XS-font-size)] tracking-[var(--project-paragraphs-large-p5-XS-letter-spacing)] leading-[var(--project-paragraphs-large-p5-XS-line-height)] whitespace-nowrap [font-style:var(--project-paragraphs-large-p5-XS-font-style)]">
                                {item.label}
                              </span>
                            </a>
                          ))}
                        </nav>
                      </>
                    )}
                  </div>

                  <nav
                    className={`flex-[0_0_auto] relative ${screenWidth >= 1024 && screenWidth < 1920 ? "w-[488px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "flex" : (screenWidth >= 1920) ? "inline-flex" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "flex-col" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "items-start" : (screenWidth >= 1920) ? "items-center" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "gap-2" : (screenWidth >= 1920) ? "gap-8" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "px-4 py-8" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "bg-[#e6e6e6]" : ""}`}
                    aria-label="Main navigation"
                  >
                    {screenWidth >= 1024 && screenWidth < 1920 && (
                      <article className="items-start relative self-stretch w-full flex-[0_0_auto] flex flex-col gap-6">
                        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                          <h1 className="mt-[-1.00px] text-[length:var(--project-headlines-small-h1-XL-font-size)] leading-[var(--project-headlines-small-h1-XL-line-height)] relative self-stretch font-project-headlines-small-h1-XL font-[number:var(--project-headlines-small-h1-XL-font-weight)] text-black tracking-[var(--project-headlines-small-h1-XL-letter-spacing)] [font-style:var(--project-headlines-small-h1-XL-font-style)]">
                            Zwölf Boxkämpfer jagen Viktor quer über den großen
                            Sylter Deich.
                          </h1>

                          <h2 className="relative self-stretch font-project-headlines-small-h4-s font-[number:var(--project-headlines-small-h4-s-font-weight)] text-black text-[length:var(--project-headlines-small-h4-s-font-size)] tracking-[var(--project-headlines-small-h4-s-letter-spacing)] leading-[var(--project-headlines-small-h4-s-line-height)] [font-style:var(--project-headlines-small-h4-s-font-style)]">
                            Franz jagt im komplett verwahrlosten Taxi quer durch
                            Bayern.
                          </h2>

                          <p className="self-stretch relative font-project-paragraphs-small-p4-s font-[number:var(--project-paragraphs-small-p4-s-font-weight)] text-black text-[length:var(--project-paragraphs-small-p4-s-font-size)] tracking-[var(--project-paragraphs-small-p4-s-letter-spacing)] leading-[var(--project-paragraphs-small-p4-s-line-height)] [font-style:var(--project-paragraphs-small-p4-s-font-style)]">
                            Dies ist ein Typoblindtext. An ihm kann man sehen,
                            ob alle Buchstaben da sind und wie sie aussehen.
                            Manchmal benutzt man Worte wie Hamburgefonts,
                            Rafgenduks oder Handgloves, um Schriften zu testen.
                          </p>
                        </div>

                        <button className="all-[unset] box-border inline-flex px-8 py-0 h-12 items-center justify-center relative bg-[#101010]">
                          <span className="relative w-fit font-project-headlines-large-h5-XS font-[number:var(--project-headlines-large-h5-XS-font-weight)] text-white text-[length:var(--project-headlines-large-h5-XS-font-size)] tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] leading-[var(--project-headlines-large-h5-XS-line-height)] whitespace-nowrap [font-style:var(--project-headlines-large-h5-XS-font-style)]">
                            Button
                          </span>
                        </button>
                      </article>
                    )}

                    {screenWidth >= 1920 && (
                      <>
                        {mainMenuItems.map((item) => (
                          <a
                            key={item.id}
                            href="#"
                            className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]"
                          >
                            <span className="relative w-fit font-project-headlines-large-h5-XS font-[number:var(--project-headlines-large-h5-XS-font-weight)] text-[#101010] text-[length:var(--project-headlines-large-h5-XS-font-size)] tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] leading-[var(--project-headlines-large-h5-XS-line-height)] whitespace-nowrap [font-style:var(--project-headlines-large-h5-XS-font-style)]">
                              {item.label}
                            </span>
                          </a>
                        ))}
                      </>
                    )}
                  </nav>
                </div>

                <div
                  className={`${screenWidth >= 1024 && screenWidth < 1920 ? "w-[304px]" : (screenWidth >= 1920) ? "w-[22.66%]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "flex" : ""} ${screenWidth >= 1920 ? "left-[13.75%]" : ""} ${screenWidth >= 1920 ? "aspect-[4.62]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "items-center" : ""} ${screenWidth >= 1920 ? "top-[calc(50.00%_-_52px)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "gap-2" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "h-8" : (screenWidth >= 1920) ? "h-[94px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "justify-center" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "relative" : (screenWidth >= 1920) ? "absolute" : ""}`}
                >
                  {screenWidth >= 1024 && screenWidth < 1920 && (
                    <>
                      <button
                        className="relative w-8 h-8 ml-[-4.00px] bg-[url(https://c.animaapp.com/r9vN8Mpv/img/icon-solid-arrow--triangle-left-11.svg)] bg-[100%_100%]"
                        aria-label="Previous slide"
                      />

                      <div
                        className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
                        role="tablist"
                        aria-label="Carousel slides"
                      >
                        {carouselSlides.map((slide) => (
                          <button
                            key={slide.id}
                            className="relative w-8 h-8"
                            role="tab"
                            aria-selected={slide.active}
                            aria-label={`Go to slide ${slide.id}`}
                          >
                            <div
                              className={`relative ${slide.active ? "top-1 left-1 w-6 h-6 bg-[#808080] rounded-xl" : "top-2 left-2 w-4 h-4 bg-[#cccccc] rounded-lg"}`}
                            />
                          </button>
                        ))}
                      </div>

                      <button
                        className="relative w-8 h-8 mr-[-4.00px] bg-[url(https://c.animaapp.com/r9vN8Mpv/img/icon-solid-arrow--triangle-right-11.svg)] bg-[100%_100%]"
                        aria-label="Next slide"
                      />
                    </>
                  )}

                  {screenWidth >= 1920 && (
                    <img
                      className="absolute w-[30.63%] h-[95.83%] top-[2.08%] left-0 object-cover"
                      alt="Logoplatzhalter"
                      src="https://c.animaapp.com/r9vN8Mpv/img/logoplatzhalter-platzhalterlogo-4x3@2x.png"
                    />
                  )}
                </div>
              </header>
            </section>

            <section
              className={`w-full flex self-stretch flex-col items-center flex-[0_0_auto] gap-6 relative ${screenWidth >= 1024 && screenWidth < 1920 ? "px-4 py-0" : (screenWidth >= 1920) ? "px-[264px] py-0" : ""}`}
              aria-label="Main content section"
            >
              <article
                className={`flex flex-col items-start flex-[0_0_auto] gap-6 relative ${screenWidth >= 1024 && screenWidth < 1920 ? "w-[824px]" : (screenWidth >= 1920) ? "w-[920px]" : ""}`}
              >
                <div className="w-full flex self-stretch flex-col items-start gap-4 flex-[0_0_auto] relative">
                  <h2
                    className={`self-stretch mt-[-1.00px] relative text-black ${screenWidth >= 1024 && screenWidth < 1920 ? "font-project-headlines-small-h2-l" : (screenWidth >= 1920) ? "font-project-headlines-large-h2-l" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "tracking-[var(--project-headlines-small-h2-l-letter-spacing)]" : (screenWidth >= 1920) ? "tracking-[var(--project-headlines-large-h2-l-letter-spacing)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "text-[length:var(--project-headlines-small-h2-l-font-size)]" : (screenWidth >= 1920) ? "text-[length:var(--project-headlines-large-h2-l-font-size)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "[font-style:var(--project-headlines-small-h2-l-font-style)]" : (screenWidth >= 1920) ? "[font-style:var(--project-headlines-large-h2-l-font-style)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "font-[number:var(--project-headlines-small-h2-l-font-weight)]" : (screenWidth >= 1920) ? "font-[number:var(--project-headlines-large-h2-l-font-weight)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "leading-[var(--project-headlines-small-h2-l-line-height)]" : (screenWidth >= 1920) ? "leading-[var(--project-headlines-large-h2-l-line-height)]" : ""}`}
                  >
                    Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter
                    Deich.
                  </h2>

                  <h3
                    className={`self-stretch text-black relative ${screenWidth >= 1024 && screenWidth < 1920 ? "font-project-headlines-small-h4-s" : (screenWidth >= 1920) ? "font-project-headlines-large-h4-s" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "tracking-[var(--project-headlines-small-h4-s-letter-spacing)]" : (screenWidth >= 1920) ? "tracking-[var(--project-headlines-large-h4-s-letter-spacing)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "[font-style:var(--project-headlines-small-h4-s-font-style)]" : (screenWidth >= 1920) ? "[font-style:var(--project-headlines-large-h4-s-font-style)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "text-[length:var(--project-headlines-small-h4-s-font-size)]" : (screenWidth >= 1920) ? "text-[length:var(--project-headlines-large-h4-s-font-size)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "font-[number:var(--project-headlines-small-h4-s-font-weight)]" : (screenWidth >= 1920) ? "font-[number:var(--project-headlines-large-h4-s-font-weight)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "leading-[var(--project-headlines-small-h4-s-line-height)]" : (screenWidth >= 1920) ? "leading-[var(--project-headlines-large-h4-s-line-height)]" : ""}`}
                  >
                    Franz jagt im komplett verwahrlosten Taxi quer durch Bayern.
                  </h3>

                  <p
                    className={`self-stretch text-black relative ${screenWidth >= 1024 && screenWidth < 1920 ? "font-project-paragraphs-small-p4-s" : (screenWidth >= 1920) ? "font-project-paragraphs-large-p4-s" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "tracking-[var(--project-paragraphs-small-p4-s-letter-spacing)]" : (screenWidth >= 1920) ? "tracking-[var(--project-paragraphs-large-p4-s-letter-spacing)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "[font-style:var(--project-paragraphs-small-p4-s-font-style)]" : (screenWidth >= 1920) ? "[font-style:var(--project-paragraphs-large-p4-s-font-style)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "text-[length:var(--project-paragraphs-small-p4-s-font-size)]" : (screenWidth >= 1920) ? "text-[length:var(--project-paragraphs-large-p4-s-font-size)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "font-[number:var(--project-paragraphs-small-p4-s-font-weight)]" : (screenWidth >= 1920) ? "font-[number:var(--project-paragraphs-large-p4-s-font-weight)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "leading-[var(--project-paragraphs-small-p4-s-line-height)]" : (screenWidth >= 1920) ? "leading-[var(--project-paragraphs-large-p4-s-line-height)]" : ""}`}
                  >
                    Manchmal werden auch Sätze verwendet, die alle Buchstaben
                    des Alphabets enthalten – man nennt diese Sätze »Pangrams«.
                    Sehr bekannt ist dieser: The quick brown fox jumps over the
                    lazy old dog. Oft werden in Typoblindtexte auch
                    fremdsprachige Satzteile eingebaut (AVAIL® and Wefox™ are
                    testing aussi la Kerning), um die Wirkung in anderen
                    Sprachen zu testen. In Lateinisch sieht zum Beispiel fast
                    jede Schrift gut aus.
                  </p>
                </div>

                <button className="all-[unset] box-border inline-flex items-center px-8 py-0 h-12 justify-center bg-[#101010] relative">
                  <span className="font-project-headlines-large-h5-XS w-fit tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] [font-style:var(--project-headlines-large-h5-XS-font-style)] text-[length:var(--project-headlines-large-h5-XS-font-size)] text-white font-[number:var(--project-headlines-large-h5-XS-font-weight)] leading-[var(--project-headlines-large-h5-XS-line-height)] whitespace-nowrap relative">
                    Button
                  </span>
                </button>
              </article>

              <div
                className={`w-full flex self-stretch items-start flex-[0_0_auto] relative ${screenWidth >= 1024 && screenWidth < 1920 ? "gap-4" : (screenWidth >= 1920) ? "gap-6" : ""} ${screenWidth >= 1920 ? "justify-center" : ""}`}
              >
                {articleCards.map((card) => (
                  <article
                    key={card.id}
                    className={`flex flex-col items-start relative ${screenWidth >= 1920 ? "w-[330px]" : (screenWidth >= 1024 && screenWidth < 1920) ? "w-80" : ""}`}
                  >
                    <div
                      className={`flex aspect-[1.5] flex-col items-start gap-2 relative ${screenWidth >= 1920 ? "w-full" : (screenWidth >= 1024 && screenWidth < 1920) ? "w-80" : ""} ${screenWidth >= 1920 ? "self-stretch" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "h-[213.33px]" : ""}`}
                    >
                      <img
                        className="aspect-[1.5] w-full self-stretch relative"
                        alt="Vancado template"
                        src={
                          screenWidth >= 1920
                            ? card.image
                            : screenWidth >= 1024 && screenWidth < 1920
                              ? card.imageSmall
                              : undefined
                        }
                      />
                    </div>

                    <div
                      className={`w-full flex self-stretch flex-col items-start gap-6 flex-[0_0_auto] bg-[#e6e6e6] relative ${screenWidth >= 1920 ? "px-6 py-4" : (screenWidth >= 1024 && screenWidth < 1920) ? "p-4" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "justify-center" : ""}`}
                    >
                      <div className="w-full flex self-stretch flex-col items-start gap-4 flex-[0_0_auto] relative">
                        <div className="w-full flex self-stretch flex-col items-start gap-2 flex-[0_0_auto] relative">
                          <div className="w-full flex self-stretch items-center gap-1 flex-[0_0_auto] relative">
                            <div className="w-4 aspect-[1] h-4 relative">
                              <div className="w-[72.50%] left-[12.50%] top-[12.50%] h-[72.81%] relative">
                                <img
                                  className="w-full left-0 top-0 h-[47.64%] absolute"
                                  alt="Path"
                                  src="https://c.animaapp.com/r9vN8Mpv/img/path-9.svg"
                                />

                                <img
                                  className="w-[77.59%] left-[11.21%] top-[48.50%] h-[51.50%] absolute"
                                  alt="Shape"
                                  src="https://c.animaapp.com/r9vN8Mpv/img/shape-9.svg"
                                />
                              </div>
                            </div>

                            <p
                              className={`mt-[-1.00px] flex-1 text-black relative ${screenWidth >= 1920 ? "font-project-paragraphs-large-p6-XXS" : (screenWidth >= 1024 && screenWidth < 1920) ? "font-project-paragraphs-small-p6-XXS" : ""} ${screenWidth >= 1920 ? "tracking-[var(--project-paragraphs-large-p6-XXS-letter-spacing)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "tracking-[var(--project-paragraphs-small-p6-XXS-letter-spacing)]" : ""} ${screenWidth >= 1920 ? "text-[length:var(--project-paragraphs-large-p6-XXS-font-size)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "text-[length:var(--project-paragraphs-small-p6-XXS-font-size)]" : ""} ${screenWidth >= 1920 ? "[font-style:var(--project-paragraphs-large-p6-XXS-font-style)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "[font-style:var(--project-paragraphs-small-p6-XXS-font-style)]" : ""} ${screenWidth >= 1920 ? "font-[number:var(--project-paragraphs-large-p6-XXS-font-weight)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "font-[number:var(--project-paragraphs-small-p6-XXS-font-weight)]" : ""} ${screenWidth >= 1920 ? "leading-[var(--project-paragraphs-large-p6-XXS-line-height)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "leading-[var(--project-paragraphs-small-p6-XXS-line-height)]" : ""}`}
                            >
                              {screenWidth >= 1920
                                ? card.overline
                                : card.overlineSmall}
                            </p>
                          </div>

                          <h3
                            className={`self-stretch relative text-black ${screenWidth >= 1920 ? "font-project-headlines-large-h5-XS" : (screenWidth >= 1024 && screenWidth < 1920) ? "font-project-headlines-small-h5-XS" : ""} ${screenWidth >= 1920 ? "tracking-[var(--project-headlines-large-h5-XS-letter-spacing)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "tracking-[var(--project-headlines-small-h5-XS-letter-spacing)]" : ""} ${screenWidth >= 1920 ? "[font-style:var(--project-headlines-large-h5-XS-font-style)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "[font-style:var(--project-headlines-small-h5-XS-font-style)]" : ""} ${screenWidth >= 1920 ? "text-[length:var(--project-headlines-large-h5-XS-font-size)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "text-[length:var(--project-headlines-small-h5-XS-font-size)]" : ""} ${screenWidth >= 1920 ? "font-[number:var(--project-headlines-large-h5-XS-font-weight)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "font-[number:var(--project-headlines-small-h5-XS-font-weight)]" : ""} ${screenWidth >= 1920 ? "leading-[var(--project-headlines-large-h5-XS-line-height)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "leading-[var(--project-headlines-small-h5-XS-line-height)]" : ""}`}
                          >
                            {card.title}
                          </h3>
                        </div>

                        <p
                          className={`self-stretch text-black relative ${screenWidth >= 1920 ? "font-project-paragraphs-large-p4-s" : (screenWidth >= 1024 && screenWidth < 1920) ? "font-project-paragraphs-small-p4-s" : ""} ${screenWidth >= 1920 ? "tracking-[var(--project-paragraphs-large-p4-s-letter-spacing)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "tracking-[var(--project-paragraphs-small-p4-s-letter-spacing)]" : ""} ${screenWidth >= 1920 ? "[font-style:var(--project-paragraphs-large-p4-s-font-style)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "[font-style:var(--project-paragraphs-small-p4-s-font-style)]" : ""} ${screenWidth >= 1920 ? "text-[length:var(--project-paragraphs-large-p4-s-font-size)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "text-[length:var(--project-paragraphs-small-p4-s-font-size)]" : ""} ${screenWidth >= 1920 ? "font-[number:var(--project-paragraphs-large-p4-s-font-weight)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "font-[number:var(--project-paragraphs-small-p4-s-font-weight)]" : ""} ${screenWidth >= 1920 ? "leading-[var(--project-paragraphs-large-p4-s-line-height)]" : (screenWidth >= 1024 && screenWidth < 1920) ? "leading-[var(--project-paragraphs-small-p4-s-line-height)]" : ""}`}
                        >
                          {card.description}
                        </p>
                      </div>

                      <button className="all-[unset] box-border inline-flex items-center px-8 py-0 h-12 justify-center bg-[#101010] relative">
                        <span className="font-project-headlines-large-h5-XS w-fit tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] [font-style:var(--project-headlines-large-h5-XS-font-style)] text-[length:var(--project-headlines-large-h5-XS-font-size)] text-white font-[number:var(--project-headlines-large-h5-XS-font-weight)] leading-[var(--project-headlines-large-h5-XS-line-height)] whitespace-nowrap relative">
                          Button
                        </span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <nav
                className="w-[304px] flex items-center gap-2 h-8 justify-center relative"
                aria-label="Pagination"
              >
                <button
                  className="w-8 bg-[100%_100%] ml-[-4.00px] h-8 bg-[url(https://c.animaapp.com/r9vN8Mpv/img/icon-solid-arrow--triangle-left-11.svg)] relative"
                  aria-label="Previous page"
                />

                <div
                  className="inline-flex items-center gap-2 flex-[0_0_auto] relative"
                  role="list"
                >
                  {carouselSlides.map((slide) => (
                    <button
                      key={slide.id}
                      className="w-8 h-8 relative"
                      aria-label={`Go to page ${slide.id}`}
                      aria-current={slide.active ? "page" : undefined}
                    >
                      <div
                        className={`${slide.active ? "w-6 left-1 top-1 h-6 rounded-xl bg-[#808080]" : "w-4 left-2 top-2 h-4 rounded-lg bg-[#cccccc]"} relative`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  className="w-8 bg-[100%_100%] mr-[-4.00px] h-8 bg-[url(https://c.animaapp.com/r9vN8Mpv/img/icon-solid-arrow--triangle-right-11.svg)] relative"
                  aria-label="Next page"
                />
              </nav>
            </section>

            <section
              className={`w-full flex self-stretch flex-col items-center gap-6 flex-[0_0_auto] relative ${screenWidth >= 1024 && screenWidth < 1920 ? "px-[100px] py-0" : (screenWidth >= 1920) ? "px-[382px] py-0" : ""}`}
              aria-label="Split content section"
            >
              <div
                className={`w-full flex self-stretch items-center flex-[0_0_auto] relative ${screenWidth >= 1024 && screenWidth < 1920 ? "gap-4" : (screenWidth >= 1920) ? "gap-6" : ""}`}
              >
                <article
                  className={`flex self-stretch flex-col items-start gap-6 relative ${screenWidth >= 1024 && screenWidth < 1920 ? "w-[404px]" : (screenWidth >= 1920) ? "w-[566px]" : ""}`}
                >
                  <div className="w-full flex self-stretch flex-col items-start gap-4 flex-[0_0_auto] relative">
                    <h2
                      className={`self-stretch mt-[-1.00px] relative text-black ${screenWidth >= 1024 && screenWidth < 1920 ? "font-project-headlines-small-h2-l" : (screenWidth >= 1920) ? "font-project-headlines-large-h2-l" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "tracking-[var(--project-headlines-small-h2-l-letter-spacing)]" : (screenWidth >= 1920) ? "tracking-[var(--project-headlines-large-h2-l-letter-spacing)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "text-[length:var(--project-headlines-small-h2-l-font-size)]" : (screenWidth >= 1920) ? "text-[length:var(--project-headlines-large-h2-l-font-size)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "[font-style:var(--project-headlines-small-h2-l-font-style)]" : (screenWidth >= 1920) ? "[font-style:var(--project-headlines-large-h2-l-font-style)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "font-[number:var(--project-headlines-small-h2-l-font-weight)]" : (screenWidth >= 1920) ? "font-[number:var(--project-headlines-large-h2-l-font-weight)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "leading-[var(--project-headlines-small-h2-l-line-height)]" : (screenWidth >= 1920) ? "leading-[var(--project-headlines-large-h2-l-line-height)]" : ""}`}
                    >
                      Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter
                      Deich.
                    </h2>

                    <h3
                      className={`self-stretch text-black relative ${screenWidth >= 1024 && screenWidth < 1920 ? "font-project-headlines-small-h4-s" : (screenWidth >= 1920) ? "font-project-headlines-large-h4-s" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "tracking-[var(--project-headlines-small-h4-s-letter-spacing)]" : (screenWidth >= 1920) ? "tracking-[var(--project-headlines-large-h4-s-letter-spacing)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "[font-style:var(--project-headlines-small-h4-s-font-style)]" : (screenWidth >= 1920) ? "[font-style:var(--project-headlines-large-h4-s-font-style)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "text-[length:var(--project-headlines-small-h4-s-font-size)]" : (screenWidth >= 1920) ? "text-[length:var(--project-headlines-large-h4-s-font-size)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "font-[number:var(--project-headlines-small-h4-s-font-weight)]" : (screenWidth >= 1920) ? "font-[number:var(--project-headlines-large-h4-s-font-weight)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "leading-[var(--project-headlines-small-h4-s-line-height)]" : (screenWidth >= 1920) ? "leading-[var(--project-headlines-large-h4-s-line-height)]" : ""}`}
                    >
                      Franz jagt im komplett verwahrlosten Taxi quer durch
                      Bayern.
                    </h3>

                    <p
                      className={`self-stretch text-black relative ${screenWidth >= 1024 && screenWidth < 1920 ? "font-project-paragraphs-small-p4-s" : (screenWidth >= 1920) ? "font-project-paragraphs-large-p4-s" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "tracking-[var(--project-paragraphs-small-p4-s-letter-spacing)]" : (screenWidth >= 1920) ? "tracking-[var(--project-paragraphs-large-p4-s-letter-spacing)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "[font-style:var(--project-paragraphs-small-p4-s-font-style)]" : (screenWidth >= 1920) ? "[font-style:var(--project-paragraphs-large-p4-s-font-style)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "text-[length:var(--project-paragraphs-small-p4-s-font-size)]" : (screenWidth >= 1920) ? "text-[length:var(--project-paragraphs-large-p4-s-font-size)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "font-[number:var(--project-paragraphs-small-p4-s-font-weight)]" : (screenWidth >= 1920) ? "font-[number:var(--project-paragraphs-large-p4-s-font-weight)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "leading-[var(--project-paragraphs-small-p4-s-line-height)]" : (screenWidth >= 1920) ? "leading-[var(--project-paragraphs-large-p4-s-line-height)]" : ""}`}
                    >
                      Manchmal werden auch Sätze verwendet, die alle Buchstaben
                      des Alphabets enthalten – man nennt diese Sätze
                      »Pangrams«. Sehr bekannt ist dieser: The quick brown fox
                      jumps over the lazy old dog. Oft werden in Typoblindtexte
                      auch fremdsprachige Satzteile eingebaut (AVAIL® and Wefox™
                      are testing aussi la Kerning), um die Wirkung in anderen
                      Sprachen zu testen. In Lateinisch sieht zum Beispiel fast
                      jede Schrift gut aus.
                    </p>
                  </div>

                  <button className="all-[unset] box-border inline-flex items-center px-8 py-0 h-12 justify-center bg-[#101010] relative">
                    <span className="font-project-headlines-large-h5-XS w-fit tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] [font-style:var(--project-headlines-large-h5-XS-font-style)] text-[length:var(--project-headlines-large-h5-XS-font-size)] text-white font-[number:var(--project-headlines-large-h5-XS-font-weight)] leading-[var(--project-headlines-large-h5-XS-line-height)] whitespace-nowrap relative">
                      Button
                    </span>
                  </button>
                </article>

                <figure
                  className={`flex items-end p-4 justify-end relative ${screenWidth >= 1024 && screenWidth < 1920 ? "w-[404px]" : (screenWidth >= 1920) ? "w-[566px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "bg-cover" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "gap-2" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "h-[269px]" : (screenWidth >= 1920) ? "h-[378px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "bg-[url(https://c.animaapp.com/r9vN8Mpv/img/image---controls@2x.png)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "bg-[50%_50%]" : ""}`}
                >
                  {screenWidth >= 1920 && (
                    <div className="flex flex-col w-full h-[377px] items-start gap-2 absolute top-[calc(50.00%_-_189px)] left-0 aspect-[1.5]">
                      <img
                        className="aspect-[1.5] relative self-stretch w-full"
                        alt="Vancado template"
                        src="https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-3-2-8.png"
                      />
                    </div>
                  )}

                  <div
                    className={`w-12 flex flex-col items-start relative ${screenWidth >= 1920 ? "gap-4" : (screenWidth >= 1024 && screenWidth < 1920) ? "gap-2" : ""}`}
                  >
                    {screenWidth >= 1920 && (
                      <>
                        <button
                          className="flex w-12 p-2 border-2 border-solid border-white aspect-[1] h-12 items-center justify-center relative bg-[#101010]"
                          aria-label="Play video"
                        >
                          <div className="flex-1 self-stretch grow relative aspect-[1]">
                            <div className="relative w-[70.03%] h-[70.03%] top-[15.62%] left-[15.62%]">
                              <img
                                className="absolute w-[35.70%] h-[35.70%] top-[22.31%] left-[22.31%]"
                                alt="Path"
                                src="https://c.animaapp.com/r9vN8Mpv/img/path-10.svg"
                              />

                              <img
                                className="absolute w-full h-full top-0 left-0"
                                alt="Shape"
                                src="https://c.animaapp.com/r9vN8Mpv/img/shape-10.svg"
                              />
                            </div>
                          </div>
                        </button>

                        <button
                          className="flex w-12 p-2 border-2 border-solid border-white aspect-[1] h-12 items-center justify-center relative bg-[#101010]"
                          aria-label="Home"
                        >
                          <img
                            className="flex-1 self-stretch grow relative aspect-[1]"
                            alt="Icon haus"
                            src="https://c.animaapp.com/r9vN8Mpv/img/icon---12---haus-1.svg"
                          />
                        </button>
                      </>
                    )}

                    {screenWidth >= 1024 && screenWidth < 1920 && (
                      <div className="flex flex-col w-12 items-start gap-4 relative flex-[0_0_auto]">
                        <button
                          className="flex w-12 p-2 border-2 border-solid border-white aspect-[1] h-12 items-center justify-center relative bg-[#101010]"
                          aria-label="Play video"
                        >
                          <div className="flex-1 self-stretch grow relative aspect-[1]">
                            <div className="relative w-[70.03%] h-[70.03%] top-[15.62%] left-[15.62%]">
                              <img
                                className="absolute w-[35.70%] h-[35.70%] top-[22.31%] left-[22.31%]"
                                alt="Path"
                                src="https://c.animaapp.com/r9vN8Mpv/img/path-10.svg"
                              />

                              <img
                                className="absolute w-full h-full top-0 left-0"
                                alt="Shape"
                                src="https://c.animaapp.com/r9vN8Mpv/img/shape-10.svg"
                              />
                            </div>
                          </div>
                        </button>

                        <button
                          className="flex w-12 p-2 border-2 border-solid border-white aspect-[1] h-12 items-center justify-center relative bg-[#101010]"
                          aria-label="Home"
                        >
                          <img
                            className="flex-1 self-stretch grow relative aspect-[1]"
                            alt="Icon haus"
                            src="https://c.animaapp.com/r9vN8Mpv/img/icon---12---haus-2.svg"
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </figure>
              </div>
            </section>

            <section
              className="w-full flex self-stretch flex-col items-center gap-6 flex-[0_0_auto] relative"
              aria-label="Image with overlay content"
            >
              <div
                className={`flex flex-col items-end gap-2 flex-[0_0_auto] justify-center relative ${screenWidth >= 1024 && screenWidth < 1920 ? "w-[1024px]" : (screenWidth >= 1920) ? "w-full" : ""} ${screenWidth >= 1920 ? "self-stretch" : ""}`}
              >
                <div
                  className={`flex flex-col items-start gap-2 flex-[0_0_auto] relative ${screenWidth >= 1024 && screenWidth < 1920 ? "w-[1024px]" : (screenWidth >= 1920) ? "w-[1920px]" : ""}`}
                >
                  <img
                    className="aspect-[2.5] w-full self-stretch relative"
                    alt="Vancado template"
                    src={
                      screenWidth >= 1024 && screenWidth < 1920
                        ? "https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-5-2-1.png"
                        : screenWidth >= 1920
                          ? "https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-5-2.png"
                          : undefined
                    }
                  />
                </div>

                <article
                  className={`flex flex-col items-start gap-2 bg-[#e6e6e6] absolute ${screenWidth >= 1024 && screenWidth < 1920 ? "w-[488px]" : (screenWidth >= 1920) ? "w-[566px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "left-[436px]" : (screenWidth >= 1920) ? "left-[1090px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "top-[13px]" : (screenWidth >= 1920) ? "top-[98px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "px-4 py-6" : (screenWidth >= 1920) ? "p-6" : ""} ${screenWidth >= 1920 ? "h-[572px]" : ""} ${screenWidth >= 1920 ? "justify-around" : ""}`}
                >
                  <div className="w-full flex self-stretch flex-col items-start flex-[0_0_auto] gap-6 relative">
                    <div className="w-full flex self-stretch flex-col items-start gap-4 flex-[0_0_auto] relative">
                      <h2
                        className={`self-stretch mt-[-1.00px] relative text-black ${screenWidth >= 1024 && screenWidth < 1920 ? "font-project-headlines-small-h2-l" : (screenWidth >= 1920) ? "font-project-headlines-large-h2-l" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "tracking-[var(--project-headlines-small-h2-l-letter-spacing)]" : (screenWidth >= 1920) ? "tracking-[var(--project-headlines-large-h2-l-letter-spacing)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "text-[length:var(--project-headlines-small-h2-l-font-size)]" : (screenWidth >= 1920) ? "text-[length:var(--project-headlines-large-h2-l-font-size)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "[font-style:var(--project-headlines-small-h2-l-font-style)]" : (screenWidth >= 1920) ? "[font-style:var(--project-headlines-large-h2-l-font-style)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "font-[number:var(--project-headlines-small-h2-l-font-weight)]" : (screenWidth >= 1920) ? "font-[number:var(--project-headlines-large-h2-l-font-weight)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "leading-[var(--project-headlines-small-h2-l-line-height)]" : (screenWidth >= 1920) ? "leading-[var(--project-headlines-large-h2-l-line-height)]" : ""}`}
                      >
                        Zwölf Boxkämpfer jagen Viktor quer über den großen
                        Sylter Deich.
                      </h2>

                      <h3
                        className={`self-stretch text-black relative ${screenWidth >= 1024 && screenWidth < 1920 ? "font-project-headlines-small-h4-s" : (screenWidth >= 1920) ? "font-project-headlines-large-h4-s" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "tracking-[var(--project-headlines-small-h4-s-letter-spacing)]" : (screenWidth >= 1920) ? "tracking-[var(--project-headlines-large-h4-s-letter-spacing)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "[font-style:var(--project-headlines-small-h4-s-font-style)]" : (screenWidth >= 1920) ? "[font-style:var(--project-headlines-large-h4-s-font-style)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "text-[length:var(--project-headlines-small-h4-s-font-size)]" : (screenWidth >= 1920) ? "text-[length:var(--project-headlines-large-h4-s-font-size)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "font-[number:var(--project-headlines-small-h4-s-font-weight)]" : (screenWidth >= 1920) ? "font-[number:var(--project-headlines-large-h4-s-font-weight)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "leading-[var(--project-headlines-small-h4-s-line-height)]" : (screenWidth >= 1920) ? "leading-[var(--project-headlines-large-h4-s-line-height)]" : ""}`}
                      >
                        Franz jagt im komplett verwahrlosten Taxi quer durch
                        Bayern.
                      </h3>

                      <p
                        className={`self-stretch text-black relative ${screenWidth >= 1024 && screenWidth < 1920 ? "font-project-paragraphs-small-p4-s" : (screenWidth >= 1920) ? "font-project-paragraphs-large-p4-s" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "tracking-[var(--project-paragraphs-small-p4-s-letter-spacing)]" : (screenWidth >= 1920) ? "tracking-[var(--project-paragraphs-large-p4-s-letter-spacing)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "[font-style:var(--project-paragraphs-small-p4-s-font-style)]" : (screenWidth >= 1920) ? "[font-style:var(--project-paragraphs-large-p4-s-font-style)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "text-[length:var(--project-paragraphs-small-p4-s-font-size)]" : (screenWidth >= 1920) ? "text-[length:var(--project-paragraphs-large-p4-s-font-size)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "font-[number:var(--project-paragraphs-small-p4-s-font-weight)]" : (screenWidth >= 1920) ? "font-[number:var(--project-paragraphs-large-p4-s-font-weight)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "leading-[var(--project-paragraphs-small-p4-s-line-height)]" : (screenWidth >= 1920) ? "leading-[var(--project-paragraphs-large-p4-s-line-height)]" : ""}`}
                      >
                        {screenWidth >= 1024 && screenWidth < 1920 && (
                          <>
                            Dies ist ein Typoblindtext. An ihm kann man sehen,
                            ob alle Buchstaben da sind und wie sie aussehen.
                            Manchmal benutzt man Worte wie Hamburgefonts,
                            Rafgenduks oder Handgloves, um Schriften zu testen.
                          </>
                        )}

                        {screenWidth >= 1920 && (
                          <>
                            Manchmal werden auch Sätze verwendet, die alle
                            Buchstaben des Alphabets enthalten – man nennt diese
                            Sätze »Pangrams«. Sehr bekannt ist dieser: The quick
                            brown fox jumps over the lazy old dog. Oft werden in
                            Typoblindtexte auch fremdsprachige Satzteile
                            eingebaut (AVAIL® and Wefox™ are testing aussi la
                            Kerning), um die Wirkung in anderen Sprachen zu
                            testen. In Lateinisch sieht zum Beispiel fast jede
                            Schrift gut aus.
                          </>
                        )}
                      </p>
                    </div>

                    <button className="all-[unset] box-border inline-flex items-center px-8 py-0 h-12 justify-center bg-[#101010] relative">
                      <span className="font-project-headlines-large-h5-XS w-fit tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] [font-style:var(--project-headlines-large-h5-XS-font-style)] text-[length:var(--project-headlines-large-h5-XS-font-size)] text-white font-[number:var(--project-headlines-large-h5-XS-font-weight)] leading-[var(--project-headlines-large-h5-XS-line-height)] whitespace-nowrap relative">
                        Button
                      </span>
                    </button>
                  </div>
                </article>
              </div>

              <nav
                className="w-[304px] flex items-center gap-2 h-8 justify-center relative"
                aria-label="Pagination"
              >
                <button
                  className="w-8 bg-[100%_100%] ml-[-4.00px] h-8 bg-[url(https://c.animaapp.com/r9vN8Mpv/img/icon-solid-arrow--triangle-left-11.svg)] relative"
                  aria-label="Previous page"
                />

                <div
                  className="inline-flex items-center gap-2 flex-[0_0_auto] relative"
                  role="list"
                >
                  {carouselSlides.map((slide) => (
                    <button
                      key={slide.id}
                      className="w-8 h-8 relative"
                      aria-label={`Go to page ${slide.id}`}
                      aria-current={slide.active ? "page" : undefined}
                    >
                      <div
                        className={`${slide.active ? "w-6 left-1 top-1 h-6 rounded-xl bg-[#808080]" : "w-4 left-2 top-2 h-4 rounded-lg bg-[#cccccc]"} relative`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  className="w-8 bg-[100%_100%] mr-[-4.00px] h-8 bg-[url(https://c.animaapp.com/r9vN8Mpv/img/icon-solid-arrow--triangle-right-11.svg)] relative"
                  aria-label="Next page"
                />
              </nav>
            </section>

            <section
              className="w-full flex self-stretch flex-col items-center gap-6 flex-[0_0_auto] relative"
              aria-label="Features section"
            >
              <article
                className={`flex flex-col items-start flex-[0_0_auto] gap-6 relative ${screenWidth >= 1024 && screenWidth < 1920 ? "w-[824px]" : (screenWidth >= 1920) ? "w-[1156px]" : ""}`}
              >
                <div className="w-full flex self-stretch flex-col items-start gap-4 flex-[0_0_auto] relative">
                  <h2
                    className={`self-stretch mt-[-1.00px] relative text-black ${screenWidth >= 1024 && screenWidth < 1920 ? "font-project-headlines-small-h2-l" : (screenWidth >= 1920) ? "font-project-headlines-large-h2-l" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "tracking-[var(--project-headlines-small-h2-l-letter-spacing)]" : (screenWidth >= 1920) ? "tracking-[var(--project-headlines-large-h2-l-letter-spacing)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "text-[length:var(--project-headlines-small-h2-l-font-size)]" : (screenWidth >= 1920) ? "text-[length:var(--project-headlines-large-h2-l-font-size)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "[font-style:var(--project-headlines-small-h2-l-font-style)]" : (screenWidth >= 1920) ? "[font-style:var(--project-headlines-large-h2-l-font-style)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "font-[number:var(--project-headlines-small-h2-l-font-weight)]" : (screenWidth >= 1920) ? "font-[number:var(--project-headlines-large-h2-l-font-weight)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "leading-[var(--project-headlines-small-h2-l-line-height)]" : (screenWidth >= 1920) ? "leading-[var(--project-headlines-large-h2-l-line-height)]" : ""}`}
                  >
                    Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter
                    Deich.
                  </h2>

                  <h3
                    className={`self-stretch text-black relative ${screenWidth >= 1024 && screenWidth < 1920 ? "font-project-headlines-small-h4-s" : (screenWidth >= 1920) ? "font-project-headlines-large-h4-s" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "tracking-[var(--project-headlines-small-h4-s-letter-spacing)]" : (screenWidth >= 1920) ? "tracking-[var(--project-headlines-large-h4-s-letter-spacing)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "[font-style:var(--project-headlines-small-h4-s-font-style)]" : (screenWidth >= 1920) ? "[font-style:var(--project-headlines-large-h4-s-font-style)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "text-[length:var(--project-headlines-small-h4-s-font-size)]" : (screenWidth >= 1920) ? "text-[length:var(--project-headlines-large-h4-s-font-size)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "font-[number:var(--project-headlines-small-h4-s-font-weight)]" : (screenWidth >= 1920) ? "font-[number:var(--project-headlines-large-h4-s-font-weight)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "leading-[var(--project-headlines-small-h4-s-line-height)]" : (screenWidth >= 1920) ? "leading-[var(--project-headlines-large-h4-s-line-height)]" : ""}`}
                  >
                    Franz jagt im komplett verwahrlosten Taxi quer durch Bayern.
                  </h3>

                  <p
                    className={`self-stretch text-black relative ${screenWidth >= 1024 && screenWidth < 1920 ? "font-project-paragraphs-small-p4-s" : (screenWidth >= 1920) ? "font-project-paragraphs-large-p4-s" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "tracking-[var(--project-paragraphs-small-p4-s-letter-spacing)]" : (screenWidth >= 1920) ? "tracking-[var(--project-paragraphs-large-p4-s-letter-spacing)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "[font-style:var(--project-paragraphs-small-p4-s-font-style)]" : (screenWidth >= 1920) ? "[font-style:var(--project-paragraphs-large-p4-s-font-style)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "text-[length:var(--project-paragraphs-small-p4-s-font-size)]" : (screenWidth >= 1920) ? "text-[length:var(--project-paragraphs-large-p4-s-font-size)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "font-[number:var(--project-paragraphs-small-p4-s-font-weight)]" : (screenWidth >= 1920) ? "font-[number:var(--project-paragraphs-large-p4-s-font-weight)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "leading-[var(--project-paragraphs-small-p4-s-line-height)]" : (screenWidth >= 1920) ? "leading-[var(--project-paragraphs-large-p4-s-line-height)]" : ""}`}
                  >
                    Manchmal werden auch Sätze verwendet, die alle Buchstaben
                    des Alphabets enthalten – man nennt diese Sätze »Pangrams«.
                    Sehr bekannt ist dieser: The quick brown fox jumps over the
                    lazy old dog. Oft werden in Typoblindtexte auch
                    fremdsprachige Satzteile eingebaut (AVAIL® and Wefox™ are
                    testing aussi la Kerning), um die Wirkung in anderen
                    Sprachen zu testen. In Lateinisch sieht zum Beispiel fast
                    jede Schrift gut aus.
                  </p>
                </div>

                <button className="all-[unset] box-border inline-flex items-center px-8 py-0 h-12 justify-center bg-[#101010] relative">
                  <span className="font-project-headlines-large-h5-XS w-fit tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] [font-style:var(--project-headlines-large-h5-XS-font-style)] text-[length:var(--project-headlines-large-h5-XS-font-size)] text-white font-[number:var(--project-headlines-large-h5-XS-font-weight)] leading-[var(--project-headlines-large-h5-XS-line-height)] whitespace-nowrap relative">
                    Button
                  </span>
                </button>
              </article>

              <div
                className={`w-full flex self-stretch items-start flex-[0_0_auto] bg-[#e6e6e6] relative ${screenWidth >= 1024 && screenWidth < 1920 ? "gap-4" : (screenWidth >= 1920) ? "gap-6" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "px-4 py-6" : (screenWidth >= 1920) ? "px-[264px] py-6" : ""}`}
              >
                {featureItems.map((feature) => (
                  <article
                    key={feature.id}
                    className={`flex flex-col gap-2 relative ${screenWidth >= 1024 && screenWidth < 1920 ? "w-80" : (screenWidth >= 1920) ? "w-[448px]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "items-start" : (screenWidth >= 1920) ? "items-end" : ""}`}
                  >
                    <div
                      className={`relative ${screenWidth >= 1024 && screenWidth < 1920 ? "w-80" : (screenWidth >= 1920) ? "w-full" : ""} ${screenWidth >= 1920 ? "self-stretch" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "h-16" : (screenWidth >= 1920) ? "h-20" : ""}`}
                    >
                      <img
                        className={`aspect-[1] top-0 h-full absolute ${screenWidth >= 1024 && screenWidth < 1920 ? "w-16" : (screenWidth >= 1920) ? "w-20" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "left-[calc(50.00%_-_32px)]" : (screenWidth >= 1920) ? "left-[calc(50.00%_-_41px)]" : ""}`}
                        alt="Icon solid home"
                        src={
                          screenWidth >= 1024 && screenWidth < 1920
                            ? feature.icon
                            : screenWidth >= 1920
                              ? feature.iconLarge
                              : undefined
                        }
                      />
                    </div>

                    <h3
                      className={`text-black text-center relative ${screenWidth >= 1024 && screenWidth < 1920 ? "font-project-headlines-small-h4-s" : (screenWidth >= 1920) ? "font-project-headlines-large-h4-s" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "w-80" : ""} ${screenWidth >= 1920 ? "self-stretch" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "tracking-[var(--project-headlines-small-h4-s-letter-spacing)]" : (screenWidth >= 1920) ? "tracking-[var(--project-headlines-large-h4-s-letter-spacing)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "[font-style:var(--project-headlines-small-h4-s-font-style)]" : (screenWidth >= 1920) ? "[font-style:var(--project-headlines-large-h4-s-font-style)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "text-[length:var(--project-headlines-small-h4-s-font-size)]" : (screenWidth >= 1920) ? "text-[length:var(--project-headlines-large-h4-s-font-size)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "font-[number:var(--project-headlines-small-h4-s-font-weight)]" : (screenWidth >= 1920) ? "font-[number:var(--project-headlines-large-h4-s-font-weight)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "leading-[var(--project-headlines-small-h4-s-line-height)]" : (screenWidth >= 1920) ? "leading-[var(--project-headlines-large-h4-s-line-height)]" : ""}`}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className={`text-black text-center relative ${screenWidth >= 1024 && screenWidth < 1920 ? "font-project-paragraphs-small-p4-s" : (screenWidth >= 1920) ? "font-project-paragraphs-large-p4-s" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "w-80" : ""} ${screenWidth >= 1920 ? "self-stretch" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "tracking-[var(--project-paragraphs-small-p4-s-letter-spacing)]" : (screenWidth >= 1920) ? "tracking-[var(--project-paragraphs-large-p4-s-letter-spacing)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "[font-style:var(--project-paragraphs-small-p4-s-font-style)]" : (screenWidth >= 1920) ? "[font-style:var(--project-paragraphs-large-p4-s-font-style)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "text-[length:var(--project-paragraphs-small-p4-s-font-size)]" : (screenWidth >= 1920) ? "text-[length:var(--project-paragraphs-large-p4-s-font-size)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "font-[number:var(--project-paragraphs-small-p4-s-font-weight)]" : (screenWidth >= 1920) ? "font-[number:var(--project-paragraphs-large-p4-s-font-weight)]" : ""} ${screenWidth >= 1024 && screenWidth < 1920 ? "leading-[var(--project-paragraphs-small-p4-s-line-height)]" : (screenWidth >= 1920) ? "leading-[var(--project-paragraphs-large-p4-s-line-height)]" : ""}`}
                    >
                      {feature.description}
                    </p>
                  </article>
                ))}
              </div>

              <nav
                className="w-[304px] flex items-center gap-2 h-8 justify-center relative"
                aria-label="Pagination"
              >
                <button
                  className="w-8 bg-[100%_100%] ml-[-4.00px] h-8 bg-[url(https://c.animaapp.com/r9vN8Mpv/img/icon-solid-arrow--triangle-left-11.svg)] relative"
                  aria-label="Previous page"
                />

                <div
                  className="inline-flex items-center gap-2 flex-[0_0_auto] relative"
                  role="list"
                >
                  {carouselSlides.map((slide) => (
                    <button
                      key={slide.id}
                      className="w-8 h-8 relative"
                      aria-label={`Go to page ${slide.id}`}
                      aria-current={slide.active ? "page" : undefined}
                    >
                      <div
                        className={`${slide.active ? "w-6 left-1 top-1 h-6 rounded-xl bg-[#808080]" : "w-4 left-2 top-2 h-4 rounded-lg bg-[#cccccc]"} relative`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  className="w-8 bg-[100%_100%] mr-[-4.00px] h-8 bg-[url(https://c.animaapp.com/r9vN8Mpv/img/icon-solid-arrow--triangle-right-11.svg)] relative"
                  aria-label="Next page"
                />
              </nav>
            </section>
          </>
        )}
      </div>
    </div>
  );
};
