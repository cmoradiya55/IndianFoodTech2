import React from "react";
import ExcellentQualityIcon from "./icon/ExcellentQualityIcon";
import GlobalShippingIcon from "./icon/GlobalShippingIcon";
import CalenderIcon from "./icon/CalenderIcon";
import PackegeIcon from "./icon/PackegeIcon";
import GrowArrowIcon from "./icon/GrowArrowIcon";
import OrganicIcon from "./icon/OrganicIcon";
import NoPreservativeIcon from "./icon/NoPreservativeIcon";
import HeartHealthyIcon from "./icon/HeartHealthyIcon";
import BulkOptionIcon from "./icon/BulkOptionIcon";
import { ClockIcon } from "lucide-react";

interface AllIconComponentProps {
  width: number;
  height: number;
  icon: string;
  className?: string;
}

const AllIconComponent = ({
  width,
  height,
  icon,
  className = "",
}: AllIconComponentProps) => {
  return (
    <>
      {icon === "excellentQualityIcon" && (
        <ExcellentQualityIcon
          width={width}
          height={height}
          className={className}
        />
      )}
      {icon === "globalShippingIcon" && (
        <GlobalShippingIcon
          width={width}
          height={height}
          className={className}
        />
      )}
      {icon === "calenderIcon" && (
        <CalenderIcon width={width} height={height} className={className} />
      )}
      {icon === "packegeIcon" && (
        <PackegeIcon width={width} height={height} className={className} />
      )}
      {icon === "growArrowIcon" && (
        <GrowArrowIcon width={width} height={height} className={className} />
      )}
      {icon === "organicIcon" && (
        <OrganicIcon width={width} height={height} className={className} />
      )}
      {icon === "noPreservativeIcon" && (
        <NoPreservativeIcon
          width={width}
          height={height}
          className={className}
        />
      )}
      {icon === "heartHealthyIcon" && (
        <HeartHealthyIcon width={width} height={height} className={className} />
      )}
      {icon === "bulkOptionIcon" && (
        <BulkOptionIcon width={width} height={height} className={className} />
      )}
      {icon === "clockIcon" && (
        <ClockIcon width={width} height={height} className={className} />
      )}
    </>
  );
};

export default AllIconComponent;
