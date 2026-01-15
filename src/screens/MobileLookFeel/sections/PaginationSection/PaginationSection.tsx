import { useState } from "react";

export const PaginationSection = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(0);

  const paginationDots = [
    { id: 0, active: true },
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false },
  ];

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(paginationDots.length - 1, prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-6 px-3 py-0 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <div className="aspect-[2.5] relative self-stretch w-full flex flex-col items-start gap-2">
          <img
            className="aspect-[2.5] relative self-stretch w-full"
            alt="Vancado template"
            src="https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-5-2-2.png"
          />
        </div>

        <article className="flex flex-col items-start gap-2 px-3 py-6 relative self-stretch w-full flex-[0_0_auto] bg-[#e6e6e6]">
          <div className="items-start relative self-stretch w-full flex-[0_0_auto] flex flex-col gap-6">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] font-project-headlines-small-h2-l font-[number:var(--project-headlines-small-h2-l-font-weight)] text-black text-[length:var(--project-headlines-small-h2-l-font-size)] tracking-[var(--project-headlines-small-h2-l-letter-spacing)] leading-[var(--project-headlines-small-h2-l-line-height)] [font-style:var(--project-headlines-small-h2-l-font-style)]">
                Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.
              </h2>

              <h3 className="relative self-stretch font-project-headlines-small-h4-s font-[number:var(--project-headlines-small-h4-s-font-weight)] text-black text-[length:var(--project-headlines-small-h4-s-font-size)] tracking-[var(--project-headlines-small-h4-s-letter-spacing)] leading-[var(--project-headlines-small-h4-s-line-height)] [font-style:var(--project-headlines-small-h4-s-font-style)]">
                Franz jagt im komplett verwahrlosten Taxi quer durch Bayern.
              </h3>

              <p className="relative self-stretch font-project-paragraphs-small-p4-s font-[number:var(--project-paragraphs-small-p4-s-font-weight)] text-black text-[length:var(--project-paragraphs-small-p4-s-font-size)] tracking-[var(--project-paragraphs-small-p4-s-letter-spacing)] leading-[var(--project-paragraphs-small-p4-s-line-height)] [font-style:var(--project-paragraphs-small-p4-s-font-style)]">
                Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle
                Buchstaben da sind und wie sie aussehen. Manchmal benutzt man
                Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften
                zu testen.
              </p>
            </div>

            <button
              type="button"
              className="all-[unset] box-border inline-flex h-12 items-center justify-center px-8 py-0 relative bg-[#101010] cursor-pointer hover:bg-[#2a2a2a] transition-colors"
              aria-label="Button action"
            >
              <span className="relative w-fit font-project-headlines-large-h5-XS font-[number:var(--project-headlines-large-h5-XS-font-weight)] text-white text-[length:var(--project-headlines-large-h5-XS-font-size)] tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] leading-[var(--project-headlines-large-h5-XS-line-height)] whitespace-nowrap [font-style:var(--project-headlines-large-h5-XS-font-style)]">
                Button
              </span>
            </button>
          </div>
        </article>
      </div>

      <nav
        className="flex h-8 items-center justify-center gap-2 relative self-stretch w-full"
        aria-label="Pagination navigation"
      >
        <button
          type="button"
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="relative w-8 h-8 bg-[url(https://c.animaapp.com/r9vN8Mpv/img/icon-solid-arrow--triangle-left-11.svg)] bg-[100%_100%] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 transition-opacity"
          aria-label="Previous page"
        />

        <div
          className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
          role="list"
        >
          {paginationDots.map((dot, index) => (
            <button
              key={dot.id}
              type="button"
              onClick={() => handleDotClick(index)}
              className="relative w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity"
              aria-label={`Go to page ${index + 1}`}
              aria-current={currentPage === index ? "page" : undefined}
              role="listitem"
            >
              {currentPage === index ? (
                <div className="relative top-1 left-1 w-6 h-6 bg-[#808080] rounded-xl" />
              ) : (
                <div className="relative top-2 left-2 w-4 h-4 bg-[#cccccc] rounded-lg" />
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleNextPage}
          disabled={currentPage === paginationDots.length - 1}
          className="relative w-8 h-8 bg-[url(https://c.animaapp.com/r9vN8Mpv/img/icon-solid-arrow--triangle-right-11.svg)] bg-[100%_100%] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 transition-opacity"
          aria-label="Next page"
        />
      </nav>
    </section>
  );
};
