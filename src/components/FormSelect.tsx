import { DefaultOptionType } from "@/lib/types/default-option.type";
import { MenuItem, Select, SelectProps } from "@mui/material";

interface FormSelectProps extends Omit<SelectProps, "label"> {
  options: DefaultOptionType[];
  emptyText?: string;
}
export default function FormSelect({
  options,
  emptyText = "Choose one",
  ...props
}: FormSelectProps) {
  return (
    <Select
      {...props}
      value={props.value === undefined ? null : props.value}
      displayEmpty
      renderValue={(selected) => {
        if (selected === null || selected === undefined) {
          return emptyText;
        }
        // Find the selected option's label
        const selectedOption = options.find((opt) => opt.value === selected);
        return selectedOption ? selectedOption.label : "";
      }}
    >
      {options.map((item, index) => (
        <MenuItem key={index} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
}
