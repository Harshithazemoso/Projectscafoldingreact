import { SvgIcon } from "@mui/material";
interface SvgIconProp {
  path?: string;
  width?: string;
  height?: string;
}

export const Icon = (props: SvgIconProp) => {
  return (
    <SvgIcon>
      <image xlinkHref={props.path} width={props.width} height={props.height} />
    </SvgIcon>
  );
};
