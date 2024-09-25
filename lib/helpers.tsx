export const formatString = ({ text, linkId, className = "", linkRender }) => {
  const [initialPart = "", linkPart = "", finalPart = ""] = text.split(
    `[linkTo=${linkId}]`
  );

  return (
    <span>
      {initialPart}
      {linkRender(linkPart)}
      {finalPart}
    </span>
  );
};
