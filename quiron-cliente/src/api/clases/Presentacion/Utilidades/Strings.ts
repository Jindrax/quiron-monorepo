export const mayusRegex = new RegExp('[A-Z]');

export function capitalizar(palabra: string) {
  return `${palabra[0].toLocaleUpperCase('es-US')}${palabra.slice(1)}`;
}

export function normalizarAtributo(atributo: string): string {
  let i = 0, j = 0, k = 0;
  let palabras = [];
  for (let letra of atributo) {
    if (letra.match(mayusRegex)) {
      palabras[i] = atributo.slice(j, k);
      i++;
      j = k;
    }
    k++;
  }
  palabras[i] = atributo.slice(j, k);
  palabras[0] = capitalizar(palabras[0]);
  return palabras.join(' ');
}
