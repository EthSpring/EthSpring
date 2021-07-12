import Link from "@docusaurus/Link";
import { StyledCard } from "../ethereum-org-website/";
import React from "react";

export default function HoverBox({
  title,
  description,
  emoji = "🍆",
  url,
  style,
}) {
  return (
    <StyledCard
      style={style}
      emoji={emoji}
      title={title}
      description={description}
    >
      <Link to={url}>Learn More</Link>
    </StyledCard>
  );
}