import cambiar_a_minusculas from "./conteo";

describe("Contar palabras", () => {
    it("deberia retornar la frase en minúsculas", () => {
      expect(cambiar_a_minusculas("Hola")).toEqual("hola");
    });
  });
  