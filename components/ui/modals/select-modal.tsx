import { FormControl } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectModalProps {
  loading?: boolean;
  onValueChange?: () => void;
  defaultValue?: string;
  placeholder?: string;
  data?: any[];
}

const SelectModal = ({
  loading,
  onValueChange,
  defaultValue,
  placeholder,
  data,
}: SelectModalProps) => {
  return (
    <Select
      disabled={loading}
      onValueChange={onValueChange}
      value={defaultValue}
      defaultValue={defaultValue}
    >
      <FormControl>
        <SelectTrigger>
          <SelectValue defaultValue={defaultValue} placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {data?.map((item) => (
          <SelectItem key={item.id} value={item.id}>
            {item.label || item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectModal;
