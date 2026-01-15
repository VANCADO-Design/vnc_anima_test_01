export const MobileArticleContentWrapperSection = (): JSX.Element => {
  return (
    <article className="flex flex-col items-start justify-center gap-6 px-3 py-0 relative self-stretch w-full flex-[0_0_auto]">
      <figure className="flex w-[336px] h-[225px] items-end justify-end gap-2 p-4 relative">
        <div className="w-[336px] h-56 absolute top-0 left-0 aspect-[1.5] flex flex-col items-start gap-2">
          <img
            className="relative self-stretch w-full aspect-[1.5]"
            alt="Vancado template"
            src="https://c.animaapp.com/r9vN8Mpv/img/-vancado-template-bildplatzhalter-quer-3-2-2@2x.png"
          />
        </div>

        <div
          className="flex w-6 h-6 items-center justify-center p-1 relative bg-[#101010] border-2 border-solid border-white aspect-[1]"
          aria-label="House icon"
        >
          <img
            className="relative flex-1 grow aspect-[1]"
            alt="Icon haus"
            src="https://c.animaapp.com/r9vN8Mpv/img/icon---12---haus.svg"
          />
        </div>
      </figure>

      <div className="items-start relative self-stretch w-full flex-[0_0_auto] flex flex-col gap-6">
        <header className="flex flex-col items-start gap-4 w-full flex-[0_0_auto] relative self-stretch">
          <h1 className="relative self-stretch mt-[-1.00px] font-project-headlines-small-h2-l font-[number:var(--project-headlines-small-h2-l-font-weight)] text-black text-[length:var(--project-headlines-small-h2-l-font-size)] tracking-[var(--project-headlines-small-h2-l-letter-spacing)] leading-[var(--project-headlines-small-h2-l-line-height)] [font-style:var(--project-headlines-small-h2-l-font-style)]">
            Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.
          </h1>

          <h2 className="relative self-stretch font-project-headlines-small-h4-s font-[number:var(--project-headlines-small-h4-s-font-weight)] text-black text-[length:var(--project-headlines-small-h4-s-font-size)] tracking-[var(--project-headlines-small-h4-s-letter-spacing)] leading-[var(--project-headlines-small-h4-s-line-height)] [font-style:var(--project-headlines-small-h4-s-font-style)]">
            Franz jagt im komplett verwahrlosten Taxi quer durch Bayern.
          </h2>

          <p className="relative self-stretch font-project-paragraphs-small-p4-s font-[number:var(--project-paragraphs-small-p4-s-font-weight)] text-black text-[length:var(--project-paragraphs-small-p4-s-font-size)] tracking-[var(--project-paragraphs-small-p4-s-letter-spacing)] leading-[var(--project-paragraphs-small-p4-s-line-height)] [font-style:var(--project-paragraphs-small-p4-s-font-style)]">
            Manchmal werden auch Sätze verwendet, die alle Buchstaben des
            Alphabets enthalten – man nennt diese Sätze »Pangrams«. Sehr bekannt
            ist dieser: The quick brown fox jumps over the lazy old dog. Oft
            werden in Typoblindtexte auch fremdsprachige Satzteile eingebaut
            (AVAIL® and Wefox™ are testing aussi la Kerning), um die Wirkung in
            anderen Sprachen zu testen. In Lateinisch sieht zum Beispiel fast
            jede Schrift gut aus.
          </p>
        </header>

        <button
          type="button"
          className="all-[unset] box-border inline-flex h-12 items-center justify-center px-8 py-0 relative bg-[#101010] cursor-pointer"
        >
          <span className="relative w-fit font-project-headlines-large-h5-XS font-[number:var(--project-headlines-large-h5-XS-font-weight)] text-white text-[length:var(--project-headlines-large-h5-XS-font-size)] tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] leading-[var(--project-headlines-large-h5-XS-line-height)] whitespace-nowrap [font-style:var(--project-headlines-large-h5-XS-font-style)]">
            Button
          </span>
        </button>
      </div>
    </article>
  );
};
