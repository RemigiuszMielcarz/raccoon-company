import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type FooterMobileType = {
  dimensionCode?: string;

  /** Style props */
  footerMobilePosition?: Property.Position;
  footerMobileTop?: Property.Top;
  footerMobileLeft?: Property.Left;
  facebookTextDecoration?: Property.TextDecoration;
  stronaGwnaTextDecoration?: Property.TextDecoration;
  instagramTextDecoration?: Property.TextDecoration;
  portfolioCursor?: Property.Cursor;
  portfolioTextDecoration?: Property.TextDecoration;
  linkedInTextDecoration?: Property.TextDecoration;
  oNasCursor?: Property.Cursor;
  oNasTextDecoration?: Property.TextDecoration;
  kontaktCursor?: Property.Cursor;
  kontaktTextDecoration?: Property.TextDecoration;
};

const FooterMobile: FunctionComponent<FooterMobileType> = ({
  dimensionCode,
  footerMobilePosition,
  footerMobileTop,
  footerMobileLeft,
  facebookTextDecoration,
  stronaGwnaTextDecoration,
  instagramTextDecoration,
  portfolioCursor,
  portfolioTextDecoration,
  linkedInTextDecoration,
  oNasCursor,
  oNasTextDecoration,
  kontaktCursor,
  kontaktTextDecoration,
}) => {
  const footerMobileStyle: CSS.Properties = useMemo(() => {
    return {
      position: footerMobilePosition,
      top: footerMobileTop,
      left: footerMobileLeft,
    };
  }, [footerMobilePosition, footerMobileTop, footerMobileLeft]);

  const facebookStyle: CSS.Properties = useMemo(() => {
    return {
      textDecoration: facebookTextDecoration,
    };
  }, [facebookTextDecoration]);

  const stronaGwnaStyle: CSS.Properties = useMemo(() => {
    return {
      textDecoration: stronaGwnaTextDecoration,
    };
  }, [stronaGwnaTextDecoration]);

  const instagramStyle: CSS.Properties = useMemo(() => {
    return {
      textDecoration: instagramTextDecoration,
    };
  }, [instagramTextDecoration]);

  const portfolioStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: portfolioCursor,
      textDecoration: portfolioTextDecoration,
    };
  }, [portfolioCursor, portfolioTextDecoration]);

  const linkedInStyle: CSS.Properties = useMemo(() => {
    return {
      textDecoration: linkedInTextDecoration,
    };
  }, [linkedInTextDecoration]);

  const oNasStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: oNasCursor,
      textDecoration: oNasTextDecoration,
    };
  }, [oNasCursor, oNasTextDecoration]);

  const kontaktStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: kontaktCursor,
      textDecoration: kontaktTextDecoration,
    };
  }, [kontaktCursor, kontaktTextDecoration]);

  return (
    <div
      className="relative w-[360px] h-[1030px] text-left text-base text-whitesmoke font-lato"
      style={footerMobileStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray" />
      <img
        className="absolute h-[3.11%] w-[91.11%] top-[6.21%] right-[4.44%] bottom-[90.68%] left-[4.44%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={dimensionCode}
      />
      <div className="absolute top-[calc(50%_-_403px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[328px]">
        Rozwój produktu od podstaw, zebranie dedykowanego zespołu lub
        zwiększenie personelu - możemy rozpocząć od miejsca, w którym
        przerwałeś.
      </div>
      <div className="absolute top-[calc(50%_+_426px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] font-syne inline-block w-[328px]">
        Raccoon Digital Agency 2023 ©
      </div>
      <div className="absolute top-[calc(50%_+_276px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[156px] opacity-[0.5] mix-blend-normal">
        Polityka Prywatności
      </div>
      <div
        className="absolute top-[calc(50%_+_276px)] left-[calc(50%_+_8px)] tracking-[0.3px] leading-[25px] inline-block w-[156px] opacity-[0.5] mix-blend-normal"
        style={facebookStyle}
      >
        Facebook
      </div>
      <div
        className="absolute top-[calc(50%_-_207px)] left-[calc(50%_+_8px)] tracking-[0.3px] leading-[25px] inline-block w-[156px] opacity-[0.5] mix-blend-normal"
        style={stronaGwnaStyle}
      >
        Strona główna
      </div>
      <div className="absolute top-[calc(50%_+_309px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[156px] opacity-[0.5] mix-blend-normal">
        Regulamin
      </div>
      <div
        className="absolute top-[calc(50%_+_309px)] left-[calc(50%_+_8px)] tracking-[0.3px] leading-[25px] inline-block w-[156px] opacity-[0.5] mix-blend-normal"
        style={instagramStyle}
      >
        Instagram
      </div>
      <div
        className="absolute top-[calc(50%_-_174px)] left-[calc(50%_+_8px)] tracking-[0.3px] leading-[25px] inline-block w-[156px] opacity-[0.5] mix-blend-normal"
        style={portfolioStyle}
      >
        Portfolio
      </div>
      <div
        className="absolute top-[calc(50%_+_342px)] left-[calc(50%_+_8px)] tracking-[0.3px] leading-[25px] inline-block w-[156px] opacity-[0.5] mix-blend-normal"
        style={linkedInStyle}
      >
        LinkedIn
      </div>
      <div className="absolute top-[calc(50%_-_141px)] left-[calc(50%_+_8px)] tracking-[0.3px] leading-[25px] inline-block w-[156px] opacity-[0.5] mix-blend-normal">
        Blog
      </div>
      <div
        className="absolute top-[calc(50%_-_108px)] left-[calc(50%_+_8px)] tracking-[0.3px] leading-[25px] inline-block w-[156px] opacity-[0.5] mix-blend-normal"
        style={oNasStyle}
      >
        O Nas
      </div>
      <div
        className="absolute top-[calc(50%_-_75px)] left-[calc(50%_+_8px)] tracking-[0.3px] leading-[25px] inline-block w-[156px] opacity-[0.5] mix-blend-normal"
        style={kontaktStyle}
      >
        Kontakt
      </div>
      <div className="absolute top-[calc(50%_-_255px)] left-[calc(50%_-_164px)] text-xl tracking-[0.3px] leading-[32px] font-semibold font-syne inline-block w-[156px]">
        Usługi
      </div>
      <div className="absolute top-[calc(50%_+_229px)] left-[calc(50%_-_164px)] text-xl tracking-[0.3px] leading-[32px] font-semibold font-syne inline-block w-[156px]">
        Zasoby
      </div>
      <div className="absolute top-[calc(50%_-_255px)] left-[calc(50%_+_8px)] text-xl tracking-[0.3px] leading-[32px] font-semibold font-syne inline-block w-[156px]">
        Firma
      </div>
      <div className="absolute top-[calc(50%_+_229px)] left-[calc(50%_+_8px)] text-xl tracking-[0.3px] leading-[32px] font-semibold font-syne inline-block w-[156px]">
        Social Media
      </div>
      <div className="absolute top-[calc(50%_-_207px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[164px] opacity-[0.5] mix-blend-normal">
        Strony Internetowe
      </div>
      <div className="absolute top-[calc(50%_-_141px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[164px] opacity-[0.5] mix-blend-normal">
        Opieka Marketplace
      </div>
      <div className="absolute top-[calc(50%_-_75px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[164px] opacity-[0.5] mix-blend-normal">
        Grafika 2D lub 3D
      </div>
      <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[164px] opacity-[0.5] mix-blend-normal">
        Zdjęcia produktowe
      </div>
      <div className="absolute top-[calc(50%_+_57px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[164px] opacity-[0.5] mix-blend-normal">
        Aplikacje Internetowe
      </div>
      <div className="absolute top-[calc(50%_+_123px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[164px] opacity-[0.5] mix-blend-normal">
        Kampanie Mailingowe
      </div>
      <div className="absolute top-[calc(50%_-_174px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[164px] opacity-[0.5] mix-blend-normal">
        Sklepy Internetowe
      </div>
      <div className="absolute top-[calc(50%_-_108px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[164px] opacity-[0.5] mix-blend-normal">
        Automatyzacja
      </div>
      <div className="absolute top-[calc(50%_-_42px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[164px] opacity-[0.5] mix-blend-normal">
        Produkcja Video
      </div>
      <div className="absolute top-[calc(50%_+_24px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[164px] opacity-[0.5] mix-blend-normal">
        Sztuczna Inteligencja
      </div>
      <div className="absolute top-[calc(50%_+_90px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[164px] opacity-[0.5] mix-blend-normal">
        Pozyskiwanie Leadów
      </div>
      <div className="absolute top-[calc(50%_+_156px)] left-[calc(50%_-_164px)] tracking-[0.3px] leading-[25px] inline-block w-[164px] opacity-[0.5] mix-blend-normal">
        Social Media
      </div>
    </div>
  );
};

export default FooterMobile;
