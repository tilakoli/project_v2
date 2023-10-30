import React, { ReactElement } from "react";
import classNames from "classnames";
import Link from "next/link";

type ButtonProps = {
  label: string;
  icon?: ReactElement;
  hideLabel?: boolean;
  labelSize?: "heading" | "default" | "paragraph";
  onClick?: () => void;
  href?: string;
  iconLeading?: boolean;
  fontWeight?: "bold" | "normal" | "semibold";
};

const Button = ({
  label,
  icon,
  hideLabel = true,
  labelSize,
  fontWeight = "normal", // Default to normal if not provided
  href = "",
  iconLeading = true,
}: ButtonProps) => {
  const labelSizeClasses = {
    default: "text-base", // 16px
    heading: "text-xl", // 24px
    paragraph: "text-sm", // 14px
  };

  const fontWeightClasses = {
    bold: "font-bold",
    normal: "font-normal",
    semibold: "font-semibold",
  };

  const labelClasses = classNames({
    [labelSizeClasses[labelSize || "default"]]: true,
    [fontWeightClasses[fontWeight || "normal"]]: true,
  });

  return (
    <span
      className={`${fontWeightClasses} bg-red flex items-center gap-2 h-10 cursor-pointer border p-4 `}
    >
      <Link
        //   onClick={() => window.alert("Hello there!")}
        href={href}
      >
        {iconLeading && icon}
        <span className={labelClasses}> {!hideLabel && label}</span>
        {!iconLeading && icon}
      </Link>
    </span>
  );
};

export default Button;
