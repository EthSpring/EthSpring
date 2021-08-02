import React from "react";
import { Box } from "rebass";

const Author = ({ name, url }) => {
  const authors = name.split(",").map((author) => author.trim());

  const authorString =
    authors.length > 1
      ? authors.slice(0, -1).join(", ") + ` and ${authors.slice(-1)}`
      : authors[0];

  return (
    <Box paddingBottom={4}>
      <h4 style={{ margin: 0 }}>
        by{" "}
        {url ? (
          <a href={url} target="_blank">
            {authorString}
          </a>
        ) : (
          authorString
        )}
      </h4>
    </Box>
  );
};

export default Author;
