import { TextField } from "@amplication/ui/design-system";
import { CustomProperty } from "../models";

type Props = {
  property: CustomProperty;
  fieldNamePrefix?: string;
};

function CustomPropertiesFormFieldText({ property, fieldNamePrefix }: Props) {
  return (
    <TextField
      label={property.name}
      name={`${fieldNamePrefix}properties.${property.key}`}
    />
  );
}

export default CustomPropertiesFormFieldText;
