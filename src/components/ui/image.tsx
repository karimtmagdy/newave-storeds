import { cn } from "@/lib/utils";
import {
  IImageStateType,
  varaintsImage,
  varaintsImageClass,
} from "@/types/IImageStateType";

const Image = ({ src, alt, className, clases }: IImageStateType) => {
  return (
    <div className={cn(varaintsImageClass({}), clases)}>
      <img src={src} alt={alt} className={cn(varaintsImage({}), className)} />
    </div>
  );
};

export default Image;
