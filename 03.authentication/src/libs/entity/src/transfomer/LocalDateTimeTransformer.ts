import { ValueTransformer } from "typeorm";
import { LocalDateTime } from "js-joda";
import { DateTimeUtil } from "../util/DateTimeUtil";

export class LocalDateTimeTransformer implements ValueTransformer {
  // Entity -> DB
  to(entityValue: LocalDateTime): Date {
    return DateTimeUtil.toDate(entityValue);
  }

  // DB -> Entity
  from(dbValue: any): LocalDateTime {
    return DateTimeUtil.toLocalDateTime(dbValue);
  }

}
