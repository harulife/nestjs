import { ValueTransformer } from "typeorm";
import { LocalDate } from "js-joda";
import { DateTimeUtil } from "../util/DateTimeUtil";

export class LocalDateTransformer implements ValueTransformer {
  // Entity -> DB
  to(entityValue: LocalDate): Date {
    return DateTimeUtil.toDate(entityValue);
  }

  // DB -> Entity
  from(dbValue: Date): LocalDate {
    return DateTimeUtil.toLocalDate(dbValue);
  }

}
