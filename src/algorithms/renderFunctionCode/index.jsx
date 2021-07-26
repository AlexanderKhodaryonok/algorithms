// NOTE: If you check my code, I know about <pre><code>{code}</code></pre>
export function getFormattedCode(str) {
  const parts = str.split("\n");
  let spacesCount = 1;
  const formattedParts = [];
  parts.forEach((part) => {
    const lastChar = part[part.length - 1];
    switch (lastChar) {
      case "{":
        formattedParts.push({
          part,
          spacesCount,
        });
        spacesCount++;
        break;
      case "}":
        spacesCount--;
        formattedParts.push({
          part,
          spacesCount,
        });
        break;
      default:
        formattedParts.push({
          part,
          spacesCount,
        });
        break;
    }
  });

  return (
    <>
      {formattedParts.map(({ part, spacesCount }, index) => {
        const idx = index < 9 ? `0${index + 1}` : index + 1;
        return (
          <div>
            {idx}
            <span
              style={{
                marginLeft: `${+spacesCount * 20}px`,
                display: "inline-block",
              }}
            >
              {part}
            </span>
          </div>
        );
      })}
    </>
  );
}
