import { FunctionComponent } from "react";
import Button from "../components/Button";
import HomeBadge from "../components/HomeBadge";

const Home: FunctionComponent = () => {
  return (
    <main className="text-center text-base text-whitesmoke font-syne">
      <section className="container flex flex-col items-center mt-5 mb-5">
        <div className="overflow-hidden relative items-center justify-center text-xxxl text-gray">
          <b className="absolute top-0 left-0 w-full tracking-[0.3px] leading-[48px] uppercase [-webkit-text-stroke:1px_#f20505] opacity-[0.5] mix-blend-normal z-[0]">
            <p className="m-0">RACCOON</p>
            <p className="m-0">DIGITAL</p>
            <p className="m-0">AGENCY</p>
          </b>
          <div className="relative max-w-[500px] tracking-[0.3px] leading-[48px] font-semibold text-whitesmoke z-[1]">
            Rozwiniemy Twoją firmę w świecie internetowej dżungli
          </div>
        </div>
        <div className="tracking-[0.3px] leading-[25px] font-lato text-left text-lg max-w-[500px] mt-5">
          <p>
            Oferujemy innowacyjne rozwiązania i technologie, polegając na latach
            doświadczenia w tworzeniu stron internetowych, sklepów, reklamy,
            grafiki, sztucznej inteligencji oraz automatyzacji e-commerce <br />{" "}
            na Amazon i Allegro.
          </p>
        </div>
        <div className="flex flex-row items-center gap-4 mt-5 max-w-[500px] w-full">
          <Button text="Kontakt" route="/contact" variant="red" />
          <Button text="Oferta" route="/offer" variant="outline" />
        </div>
      </section>
      <section className="flex justify-center">
        <img
          className="max-h-[600px] overflow-hidden object-contain z-[1]"
          alt=""
          src="/frame@2x.png"
        />
      </section>
      <section className="bg-red pt-16 pb-[200px] gap-[16px] mt-[-70px]">
        <div className="container flex flex-col items-center gap-[48px]">
          <div className="overflow-hidden flex flex-col gap-[16px]">
            <p className="tracking-[0.3px] leading-[48px] text-3xl font-semibold">
              Co słyszymy od naszych klientów?
            </p>
            <p className="text-base tracking-[0.3px] leading-[25px] font-lato">
              Zobacz opinie naszych zadowolonych klientów.
            </p>
          </div>
          <p className="tracking-[0.3px] leading-[38px] text-2xl font-semibold">
            Serwis internetowy + apilkacja CMS
          </p>
          <p className="text-base tracking-[0.3px] leading-[25px] font-lato text-left">
            Zobacz opinie naszych zadowolonych klientów.
          </p>
        </div>
      </section>
      <section>
        <div className="relative left-0 right-0 text-gray my-5">
          <div className="text-7xl tracking-[0.3px] leading-[48px] uppercase [-webkit-text-stroke:1px_#f20505] opacity-[0.5] mix-blend-normal z-0">
            OFERTA
          </div>
          <div className="relative text-3xl tracking-[0.3px] leading-[48px] font-semibold text-whitesmoke mt-[-48px] z-1">
            Nasza oferta
          </div>
        </div>
        <div className="flex justify-center my-5">
          <HomeBadge imageSizeUrl="/pexelscottonbrostudio3944405@2x.png" />
        </div>
        <div className="text-4xl tracking-[0.3px] leading-[38px] font-semibold my-5">
          <p className="m-0">Rozwój i automatyzacja</p>
          <p className="m-0 text-red">{`e-commerce `}</p>
        </div>
        <img className="relative h-12" alt="" src="/group-5.svg" />
        <div className="container flex flex-col items-center tracking-[0.3px] gap-5 leading-[25px] font-lato">
          <div className="max-w-[600px]">
            <p className="[margin-block-start:0] [margin-block-end:16px]">
              Korzystając z najnowszych technologii i integracji z platformami
              takimi jak Shopify, Amazon i Allegro, zapewniamy nie tylko
              atrakcyjny wygląd Twojego sklepu, ale również efektywną
              automatyzację procesów sprzedażowych za pomocą Baselinker.
            </p>
            <p className="mb-2">
              Nasza oferta jest dostosowana do indywidualnych potrzeb każdego
              klienta, a doświadczenie w branży gwarantuje, że Twoja firma
              będzie konkurencyjna w dynamicznym świecie handlu elektronicznego.
            </p>
          </div>
          <Button
            text="Sprawdź szczegóły"
            route={"/e-commerce"}
            variant={"red"}
          />
          <HomeBadge imageSizeUrl="frame1@2x.png" />
        </div>
      </section>
      <section className="container mt-5">
        <div className="text-3xl tracking-[0.3px] leading-[38px] font-semibold text-red">
          <span>Aplikacje</span>
          <span className="text-whitesmoke">{` i `}</span>
          <span>{`strony `}</span>
          <span className="text-whitesmoke">internetowe</span>
        </div>
        <div className="flex flex-col items-center justify-center tracking-[0.3px] leading-[25px] mx-auto max-w-[500px] mb-5 font-lato gap-5">
          <p>
            Jesteśmy dynamiczną i innowacyjną agencją specjalizującą się w
            tworzeniu stron oraz aplikacji internetowych. Nasz zespół ekspertów
            programistycznych wykorzystuje najnowsze technologie, takie jak
            React JS, GraphQL, SCSS i Netlify, aby tworzyć responsywne i wydajne
            rozwiązania dostosowane do Twoich indywidualnych potrzeb.
          </p>
          <p>
            Bez względu na to, czy potrzebujesz nowoczesnej strony internetowej,
            czy zaawansowanej aplikacji, gwarantujemy profesjonalne podejście i
            realizację projektu na najwyższym poziomie.
          </p>
          <p>
            Nasza misja to dostarczanie produktów, które nie tylko są
            estetyczne, ale także funkcjonalne i użyteczne. Dzięki zastosowaniu
            najnowocześniejszych technologii i najlepszych praktyk branżowych i
            projektowych z zakresu UI/UX, zapewniamy rozwiązania, które są
            szybkie, skalowalne i łatwe w utrzymaniu.
          </p>
          <p>
            Nasza oferta jest skierowana zarówno do małych firm, jak i dużych
            korporacji, a elastyczność i dostosowanie do indywidualnych potrzeb
            klienta to nasze najważniejsze atuty.
          </p>
          <Button text="Sprawdź szczegóły" route={"/web"} variant={"red"} />
          <HomeBadge imageSizeUrl="/pexelscottonbrostudio3944405-copy@2x.png" />
        </div>
      </section>
      <section className="container flex flex-col items-center justify-center pb-20">
        <div className="text-3xl tracking-[0.3px] leading-[38px] font-semibold">
          <p className="m-0">Rozwój i automatyzacja</p>
          <p className="m-0 text-red">{`e-commerce `}</p>
        </div>
        <div className="w-[360px] overflow-hidden flex flex-col items-center justify-center text-45xl text-gray">
          <b className="text-6xl relative tracking-[0.3px] leading-[48px] uppercase [-webkit-text-stroke:1px_#f20505] opacity-[0.5] mix-blend-normal">
            TRUST
          </b>
          <div className="text-3xl relative text-11xl tracking-[0.3px] leading-[48px] font-semibold text-whitesmoke mt-[-48px]">
            Zaufana agencja naszych klientów
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 mb-10">
          <p>Jesteśmy dumni z tego, że nas wybraliście.</p>
          <img
            className="relative w-40 h-6"
            alt=""
            src="/lema-group-logo.svg"
          />
          <img
            className="relative w-[85px] h-[30px] mb-20"
            alt=""
            src="/doba-logo.svg"
          />
          <img
            className="relative w-[360px] h-[328px] object-cover"
            alt=""
            src="/contact@2x.png"
          />
        </div>
        <div className="flex flex-col items-center justify-end text-gray">
          <b className="text-6xl relative tracking-[0.3px] leading-[48px] uppercase [-webkit-text-stroke:1px_#f20505] opacity-[0.5] mix-blend-normal">
            KONTAKT
          </b>
          <div className="text-3xl relative text-11xl tracking-[0.3px] leading-[48px] font-semibold text-whitesmoke mt-[-48px]">
            Skontaktuj się
          </div>
        </div>
        <p className="my-10">
          Wybierz datę i godzinę oraz wypełnij formularz, żeby umówić bezpłatne
          30 minutowe spotkanie strategiczne z właścicielem.
        </p>
        <Button
          text="Zarezerwuj rozmowę strategiczną"
          route={"/contact"}
          variant={"red"}
        />
      </section>
      <section className="bg-red w-full py-[70px]">
        <div className="container flex flex-col items-center gap-6">
          <div className="relative text-3xl tracking-[0.3px] leading-[48px] font-semibold">
            Brzmi ciekawie? Rozwińmy wspólnie Twój biznes.
          </div>
          <div className="flex justify-between items-center p-1 rounded bg-whitesmoke w-[328px] h-12">
            <input
              className="[border:none] font-lato text-base bg-[transparent] tracking-[0.3px] leading-[24px] text-gray text-left w-[260px] opacity-[0.5] mix-blend-normal"
              type="text"
              placeholder="Twój adres e-mail"
            />
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 h-10"
              autoFocus
            >
              <div className="flex items-center justify-center rounded bg-gray w-10 h-10">
                <img className="w-[22px] h-5" alt="" src="/shape1.svg" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
