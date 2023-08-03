import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FormContainer from "../components/FormContainer";
import FooterMobile from "../components/FooterMobile";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onKontaktClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="relative bg-gray w-full overflow-hidden flex flex-col items-center justify-start text-center text-base text-whitesmoke font-syne">
      <nav className="m-0 self-stretch relative h-[62px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray" />
        <img
          className="absolute h-[25.81%] w-[45.83%] top-[37.1%] right-[49.72%] bottom-[37.1%] left-[4.44%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/logo5.svg"
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[48.39%] w-[19.17%] top-[25.81%] right-[21.67%] bottom-[25.81%] left-[59.17%] overflow-hidden"
          autoFocus
          onClick={onKontaktClick}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-red" />
          <b className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_34.5px)] text-xs tracking-[0.3px] leading-[20px] inline-block font-syne text-white text-center w-[69px]">
            Kontakt
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[32.26%] w-[8.33%] top-[33.87%] right-[4.44%] bottom-[33.87%] left-[87.22%]"
          autoFocus
        >
          <img className="relative w-[30px] h-5" alt="" src="/menu.svg" />
        </button>
      </nav>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
        <div className="self-stretch relative h-[1003px] overflow-hidden shrink-0">
          <div className="absolute top-[calc(50%_-_340.5px)] left-[calc(50%_-_153.33px)] tracking-[0.3px] leading-[25px] font-lato text-left inline-block w-[328px]">
            <p className="m-0">
              Oferujemy innowacyjne rozwiązania i technologie, polegając na
              latach doświadczenia w tworzeniu stron internetowych, sklepów,
              reklamy, grafiki, sztucznej inteligencji oraz automatyzacji
            </p>
            <p className="m-0">e-commerce na Amazon i Allegro.</p>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[393px] overflow-hidden flex flex-row items-center justify-center gap-[10px] text-45xl text-gray">
            <b className="flex-1 relative tracking-[0.3px] leading-[48px] uppercase [-webkit-text-stroke:1px_#f20505] opacity-[0.5] mix-blend-normal z-[0]">
              <p className="m-0">RACCOON</p>
              <p className="m-0">DIGITAL</p>
              <p className="m-0">AGENCY</p>
            </b>
            <div className="flex-1 absolute my-0 mx-[!important] top-[calc(50%_-_72px)] left-[calc(50%_-_163.5px)] text-11xl tracking-[0.3px] leading-[48px] font-semibold text-whitesmoke z-[1]">
              Rozwiniemy Twoją firmę w świecie internetowej dżungli
            </div>
          </div>
          <div className="absolute top-[350px] left-[15px] w-[328px] overflow-hidden flex flex-row items-center justify-start gap-[16px]">
            <Button />
            <div className="flex-1 rounded bg-gray box-border h-10 overflow-hidden flex flex-col items-center justify-center border-[2px] border-solid border-red">
              <b className="relative tracking-[0.3px] leading-[20px]">Oferta</b>
            </div>
          </div>
          <img
            className="absolute h-[56.93%] w-full top-[40.48%] right-[0%] bottom-[2.59%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/frame@2x.png"
          />
        </div>
        <div className="self-stretch bg-red overflow-hidden flex flex-col pt-16 px-4 pb-[193px] items-start justify-end gap-[16px] mt-[-85px] text-11xl">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[48px]">
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[16px]">
              <div className="self-stretch relative tracking-[0.3px] leading-[48px] font-semibold">
                Co słyszymy od naszych klientów?
              </div>
              <div className="self-stretch relative text-base tracking-[0.3px] leading-[25px] font-lato">
                Zobacz opinie naszych zadowolonych klientów.
              </div>
            </div>
            <div className="self-stretch relative text-5xl tracking-[0.3px] leading-[38px] font-semibold">
              Serwis internetowy + apilkacja CMS
            </div>
          </div>
          <div className="self-stretch relative text-base tracking-[0.3px] leading-[25px] font-lato text-left">
            Zobacz opinie naszych zadowolonych klientów.
          </div>
        </div>
      </div>
      <div className="w-[360px] overflow-hidden flex flex-col py-0 pr-0 pl-3 box-border items-center justify-center text-45xl text-gray">
        <b className="self-stretch relative tracking-[0.3px] leading-[48px] uppercase [-webkit-text-stroke:1px_#f20505] opacity-[0.5] mix-blend-normal">
          OFERTA
        </b>
        <div className="self-stretch relative text-11xl tracking-[0.3px] leading-[48px] font-semibold text-whitesmoke mt-[-48px]">
          Nasza oferta
        </div>
      </div>
      <FormContainer imageSizeUrl="/pexelscottonbrostudio3944405@2x.png" />
      <div className="relative text-5xl tracking-[0.3px] leading-[38px] font-semibold inline-block w-[360px]">
        <p className="m-0">Rozwój i automatyzacja</p>
        <p className="m-0 text-red">{`e-commerce `}</p>
      </div>
      <img className="relative w-[360px] h-12" alt="" src="/group-5.svg" />
      <div className="relative tracking-[0.3px] leading-[25px] font-lato inline-block w-[360px]">
        <p className="[margin-block-start:0] [margin-block-end:16px]">
          Korzystając z najnowszych technologii i integracji z platformami
          takimi jak Shopify, Amazon i Allegro, zapewniamy nie tylko atrakcyjny
          wygląd Twojego sklepu, ale również efektywną automatyzację procesów
          sprzedażowych za pomocą Baselinker.
        </p>
        <p className="m-0">
          Nasza oferta jest dostosowana do indywidualnych potrzeb każdego
          klienta, a doświadczenie w branży gwarantuje, że Twoja firma będzie
          konkurencyjna w dynamicznym świecie handlu elektronicznego.
        </p>
      </div>
      <button
        className="cursor-pointer [border:none] py-0 px-[33px] bg-red rounded w-[242px] h-10 overflow-hidden shrink-0 flex flex-col box-border items-start justify-center"
        autoFocus
      >
        <b className="relative text-base tracking-[0.3px] leading-[20px] font-syne text-white text-left">
          Sprawdź szczegóły
        </b>
      </button>
      <img
        className="relative w-[360px] h-[328px] overflow-hidden shrink-0 object-cover"
        alt=""
        src="/frame1@2x.png"
      />
      <div className="relative text-5xl tracking-[0.3px] leading-[38px] font-semibold inline-block w-[360px] text-red">
        <span>Aplikacje</span>
        <span className="text-whitesmoke">{` i `}</span>
        <span>{`strony `}</span>
        <span className="text-whitesmoke">internetowe</span>
      </div>
      <div className="relative tracking-[0.3px] leading-[25px] font-lato inline-block w-[360px]">
        <p className="[margin-block-start:0] [margin-block-end:16px]">
          Jesteśmy dynamiczną i innowacyjną agencją specjalizującą się w
          tworzeniu stron oraz aplikacji internetowych. Nasz zespół ekspertów
          programistycznych wykorzystuje najnowsze technologie, takie jak React
          JS, GraphQL, SCSS i Netlify, aby tworzyć responsywne i wydajne
          rozwiązania dostosowane do Twoich indywidualnych potrzeb.
        </p>
        <p className="[margin-block-start:0] [margin-block-end:16px]">
          Bez względu na to, czy potrzebujesz nowoczesnej strony internetowej,
          czy zaawansowanej aplikacji, gwarantujemy profesjonalne podejście i
          realizację projektu na najwyższym poziomie.
        </p>
        <p className="[margin-block-start:0] [margin-block-end:16px]">
          Nasza misja to dostarczanie produktów, które nie tylko są estetyczne,
          ale także funkcjonalne i użyteczne. Dzięki zastosowaniu
          najnowocześniejszych technologii i najlepszych praktyk branżowych i
          projektowych z zakresu UI/UX, zapewniamy rozwiązania, które są
          szybkie, skalowalne i łatwe w utrzymaniu.
        </p>
        <p className="m-0">
          Nasza oferta jest skierowana zarówno do małych firm, jak i dużych
          korporacji, a elastyczność i dostosowanie do indywidualnych potrzeb
          klienta to nasze najważniejsze atuty.
        </p>
      </div>
      <div className="rounded bg-red w-[242px] h-10 overflow-hidden shrink-0 flex flex-col py-0 px-[33px] box-border items-start justify-center text-left text-white">
        <b className="relative tracking-[0.3px] leading-[20px]">
          Sprawdź szczegóły
        </b>
      </div>
      <FormContainer imageSizeUrl="/pexelscottonbrostudio3944405-copy@2x.png" />
      <div className="relative text-5xl tracking-[0.3px] leading-[38px] font-semibold inline-block w-[360px]">
        <p className="m-0">Rozwój i automatyzacja</p>
        <p className="m-0 text-red">{`e-commerce `}</p>
      </div>
      <div className="w-[360px] overflow-hidden flex flex-col items-center justify-center text-45xl text-gray">
        <b className="relative tracking-[0.3px] leading-[48px] uppercase [-webkit-text-stroke:1px_#f20505] opacity-[0.5] mix-blend-normal">
          TRUST
        </b>
        <div className="self-stretch relative text-11xl tracking-[0.3px] leading-[48px] font-semibold text-whitesmoke mt-[-48px]">
          Zaufana agencja naszych klientów
        </div>
      </div>
      <img className="relative w-40 h-6" alt="" src="/lema-group-logo.svg" />
      <img className="relative w-[85px] h-[30px]" alt="" src="/doba-logo.svg" />
      <img
        className="relative w-[360px] h-[328px] object-cover"
        alt=""
        src="/contact@2x.png"
      />
      <div className="w-[360px] overflow-hidden flex flex-col items-center justify-end text-45xl text-gray">
        <b className="self-stretch relative tracking-[0.3px] leading-[48px] uppercase [-webkit-text-stroke:1px_#f20505] opacity-[0.5] mix-blend-normal">
          KONTAKT
        </b>
        <div className="self-stretch relative text-11xl tracking-[0.3px] leading-[48px] font-semibold text-whitesmoke mt-[-48px]">
          Skontaktuj się
        </div>
      </div>
      <div className="rounded bg-red w-[360px] h-10 overflow-hidden shrink-0 flex flex-col py-0 px-2 box-border items-start justify-center text-left text-white">
        <b className="relative tracking-[0.3px] leading-[20px]">
          Zarezerwuj rozmowę strategiczną
        </b>
      </div>
      <div className="relative w-[360px] h-[1387px] overflow-hidden shrink-0 text-11xl">
        <div className="absolute top-[0px] left-[0px] bg-red w-[360px] h-[352px]" />
        <FooterMobile
          dimensionCode="/logo6.svg"
          footerMobilePosition="absolute"
          footerMobileTop="352px"
          footerMobileLeft="0px"
          facebookTextDecoration="none"
          stronaGwnaTextDecoration="none"
          instagramTextDecoration="none"
          portfolioCursor="pointer"
          portfolioTextDecoration="none"
          linkedInTextDecoration="none"
          oNasCursor="pointer"
          oNasTextDecoration="none"
          kontaktCursor="pointer"
          kontaktTextDecoration="none"
        />
        <div className="absolute top-[64px] left-[16px] w-[328px] overflow-hidden flex flex-col items-center justify-center">
          <div className="self-stretch relative tracking-[0.3px] leading-[48px] font-semibold">
            Brzmi ciekawie? Rozwińmy wspólnie Twój biznes.
          </div>
        </div>
        <div className="absolute top-[240px] left-[16px] rounded bg-whitesmoke w-[328px] h-12" />
        <input
          className="[border:none] font-lato text-base bg-[transparent] absolute top-[252px] left-[28px] tracking-[0.3px] leading-[24px] text-gray text-left inline-block w-[260px] opacity-[0.5] mix-blend-normal"
          type="text"
          placeholder="Twój adres e-mail"
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[244px] left-[300px] w-10 h-10"
          autoFocus
        >
          <div className="absolute top-[0px] left-[0px] rounded bg-gray w-10 h-10" />
          <img className="relative w-[22px] h-5" alt="" src="/shape1.svg" />
        </button>
      </div>
    </div>
  );
};

export default Home;
