import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Erro durante a inicialização do banco de dados", err);
  });

  app.listen(process.env.PROJECTPORT, () => console.log("rodando! 🚀"));
})();
