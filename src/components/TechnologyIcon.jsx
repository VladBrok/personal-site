import DrizzleOrmIcon from "./icons/DrizzleOrmIcon";
import LoguxIcon from "./icons/LoguxIcon";
import StripeIcon from "./icons/StripeIcon";
import VueIcon from "./icons/VueIcon";

const svgIcons = {
  vuejs: VueIcon,
  drizzleorm: DrizzleOrmIcon,
  logux: LoguxIcon,
  stripe: StripeIcon,
};

export default function TechnologyIcon({
  id,
  className,
  isColored = true,
  isSvg = false,
}) {
  const colored = isColored ? "colored" : "";
  const SvgIcon = isSvg ? svgIcons[id] : undefined;

  return (
    <>
      {isSvg && (
        <i className={`${className}`}>
          <SvgIcon />
        </i>
      )}
      {!isSvg && (
        <i
          className={`devicon-${id}-plain ${colored} ${className}`}
          color="white"
        ></i>
      )}
    </>
  );
}
