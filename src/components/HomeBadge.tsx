import { FunctionComponent } from "react";

type FormContainerType = {
  imageSizeUrl?: string;
};

const HomeBadge: FunctionComponent<FormContainerType> = ({ imageSizeUrl }) => {
  return (
    <div className="relative w-[360px] h-[328px] overflow-hidden shrink-0 text-left text-base text-whitesmoke font-syne">
      <div className="absolute top-[0px] left-[0px] rounded bg-red w-[242px] h-[293px]" />
      <img
        className="absolute top-[16px] left-[16px] w-[312px] h-[312px] object-cover"
        alt=""
        src={imageSizeUrl}
      />
      <div className="absolute top-[253px] left-[103px] rounded bg-red w-[233px] h-[50px]">
        <div className="flex gap-2 items-center justify-center h-full">
          <img className="w-[34px] h-[34px]" alt="" src="/badgeIcon.svg" />
          <div className="tracking-[0.3px] leading-[20px] font-semibold">
            <p className="m-0">Ponad 2 mln EUR</p>
            <p className="m-0">obrotu u partnerów</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBadge;
