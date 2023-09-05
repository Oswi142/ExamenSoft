import { cambiar_a_minusculas, contar_apariciones } from "./conteo";
import { separar_la_frase } from "./conteo";

describe("Contar palabras", () => {
    it("deberia retornar la frase en minúsculas", () => {
      expect(cambiar_a_minusculas("Hola A TODOS")).toEqual("hola a todos");
    });
    it("deberia devolver la frase separada", () => {
        expect(separar_la_frase("Hola A TODOS")).toEqual(["Hola", "A", "TODOS"]);
      });
      it("deberia contar las apariciones", () => {
        expect(contar_apariciones("Hola A TODOS")).toEqual(["hola:1", "a:1", "todos:1"]);
      });

  });
  