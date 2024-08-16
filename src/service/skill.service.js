import { http } from "./config"

export const skillService = {
  getAllSkill: () => http.get("/skill"),
}
