import {
  EnumItemsAlign,
  FlexItem,
  Icon,
  SelectMenuItem,
} from "@amplication/ui/design-system";
import { Resource } from "../models";
import ResourceTypeBadge from "./ResourceTypeBadge";

type props = {
  resource: Resource;
  onSelectResource: (resource: Resource) => void;
};

const RedesignResourceButtonItem = ({ resource, onSelectResource }: props) => {
  return (
    <>
      <SelectMenuItem
        closeAfterSelectionChange
        itemData={resource}
        onSelectionChange={onSelectResource}
        as="span"
      >
        <FlexItem
          itemsAlign={EnumItemsAlign.Center}
          end={<Icon icon={"app-settings"} size="xsmall"></Icon>}
        >
          <ResourceTypeBadge resource={resource} size="small" />
          <span>{resource.name}</span>
        </FlexItem>
      </SelectMenuItem>
    </>
  );
};

export default RedesignResourceButtonItem;
