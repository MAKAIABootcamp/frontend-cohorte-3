const construccionAsientos = () => {
 const rowCode = ['A', 'B', 'C', 'D', 'E']
  const asientosPorFilas = 6;
  const asientos = [];
  for (let index = 0; index < rowCode.length; index++) {
    for (let position = 0; position < asientosPorFilas; position++) {
      const code = `${rowCode[index]}${position}`;
        const objAsiento = {
            id: asientos.length + 1,
            code
        }
        asientos.push(objAsiento)
    }
    }
  return asientos;
};

export const asientosVuelos = construccionAsientos();
