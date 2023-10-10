import app from "./app";
import AppDataSource from "./data-source";

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Erro durante a inicialização do banco de dados", err);
  });

  app.listen(3000, () => console.log("rodando! 🚀"));
})();
