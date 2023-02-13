import { TextFieldProps, TextField } from "@mui/material";
import { width } from "@mui/system";
// interface InputProps  {
//   size?: "small" | "medium" | undefined;
//   label?: string;
//   variant?: "outlined" | "filled" | "standard";
//   color:
//     | "primary"
//     | "secondary"
//     | "success"
//     | "error"
//     | "info"
//     | "warning"
//     | undefined;
//     ...TextFieldProps

// }
export const Input = (props: TextFieldProps) => {
  return (
    <TextField
      // size={props.size}
      // placeholder={props.label}
      // variant={props.variant}
      // color={props.color}
      {...props}
    />
  );
};
