import { cva } from "@/lib/utils";

const base = ["aspect-square object-cover"] as string[];
const img = ["flex items-center"] as string[];
export const varaintsImage = cva(base, { variants: {} });
export const varaintsImageClass = cva(img, { variants: {} });

export type IImageStateType = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  src: string;
  alt: string;
  className?: string;
  clases?: string;
};
