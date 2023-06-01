import { DateTime } from "luxon";
import Hash from "@ioc:Adonis/Core/Hash";
import { column, beforeSave, BaseModel } from "@ioc:Adonis/Lucid/Orm";

export default class User extends BaseModel {
  @column({ isPrimary: true, serializeAs: "userId" })
  public userId: number;

  @column({ serializeAs: "userCpfCnpj" })
  public userCpfCnpj: string;

  @column({ serializeAs: "userName" })
  public userName: string;

  @column({ serializeAs: "userBlocked" })
  public userBlocked: boolean;

  @column({ serializeAs: "userEmail" })
  public userEmail: string;

  @column({ serializeAs: null, columnName: "user_password" })
  public password: string;

  @column({ serializeAs: "rememberMeToken" })
  public rememberMeToken: string | null;

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public userCreatedAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public userUpdatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
