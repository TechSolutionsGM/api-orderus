import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Manager from "App/Models/Manager";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {
    const user = await User.create({
      userCpfCnpj: "11780366698",
      userName: "Matheus José Ferreira Toledo",
      userBlocked: false,
      userEmail: "matheusjftoledo@gmail.com",
      password: "moderador",
      userType: "ADMINISTRADOR",
    });
    await Manager.create({
      managerCode: "f3047",
      userId: user.userId,
    });
  }
}
