import { cn } from "@/lib/utils";
import ReactMarkdown, { Options } from "react-markdown";

type Props = Omit<Options, "children"> & {
  text: string | number;
  className?: string;
};

const CustomMDReactComponent = ({ text = "", className, ...rest }: Props) => (
  <ReactMarkdown className={cn(className)} {...rest}>
    {String(text)}
  </ReactMarkdown>
);

export default CustomMDReactComponent;
