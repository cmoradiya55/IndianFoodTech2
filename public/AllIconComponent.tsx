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
import UnderstandingNeedsIcon from "./icon/UnderstandingNeedsIcon";
import PerfectRecipeIcon from "./icon/PerfectRecipeIcon";
import BrandDesignIcon from "./icon/BrandDesignIcon";
import ProductionDeliveryIcon from "./icon/ProductionDeliveryIcon";
import LinkedInIcon from "./icon/LinkedInIcon";
import FacebookIcon from "./icon/FacebookIcon";
import WhatsAppIcon from "./icon/WhatsAppIcon";
import { ClockIcon } from "lucide-react";

interface AllIconComponentProps {
  width?: number | string;
  height?: number | string;
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
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "globalShippingIcon" && (
        <GlobalShippingIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "calenderIcon" && (
        <CalenderIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "packegeIcon" && (
        <PackegeIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "growArrowIcon" && (
        <GrowArrowIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "organicIcon" && (
        <OrganicIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "noPreservativeIcon" && (
        <NoPreservativeIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "heartHealthyIcon" && (
        <HeartHealthyIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "bulkOptionIcon" && (
        <BulkOptionIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "clockIcon" && (
        <ClockIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "understandingNeedsIcon" && (
        <UnderstandingNeedsIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "perfectRecipeIcon" && (
        <PerfectRecipeIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "brandDesignIcon" && (
        <BrandDesignIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "productionDeliveryIcon" && (
        <ProductionDeliveryIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "linkedinIcon" && (
        <LinkedInIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "facebookIcon" && (
        <FacebookIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
      {icon === "whatsAppIcon" && (
        <WhatsAppIcon
          width={width as any}
          height={height as any}
          className={className}
        />
      )}
    </>
  );
};

export default AllIconComponent;
