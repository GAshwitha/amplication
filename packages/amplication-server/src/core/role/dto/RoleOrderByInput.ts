import { SortOrder } from "../../../enums/SortOrder";
import { Field, InputType } from "@nestjs/graphql";

@InputType({
  isAbstract: true,
})
export class RoleOrderByInput {
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder | null;

  @Field(() => SortOrder, {
    nullable: true,
  })
  deletedAt?: SortOrder | null;

  @Field(() => SortOrder, {
    nullable: true,
  })
  name?: SortOrder | null;
}
