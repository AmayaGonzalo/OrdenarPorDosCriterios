let dimension: number = Number(prompt("Ingrese la cantidad de nombres: "));

let vNombre: string[] = new Array(dimension);
let vAnios: number[] = new Array(dimension);
let vAltura: number[] = new Array(dimension);

function cargarNombres(vector: string[], dimension: number): string {
  for (let i: number = 0; i < dimension; i++) {
    vector[i] = prompt("Ingrese el nombre de la posición " + (i + 1));
  }
  return vector;
}

function cargarAnios(vector: number[], dimension: number): number {
  for (let i: number = 0; i < dimension; i++) {
    vector[i] = prompt("Ingrese el la cantidad de años de " + vNombre[i]);
  }
  return vector;
}

function cargarAltura(vector: number[], dimension: number): number {
  for (let i: number = 0; i < dimension; i++) {
    vector[i] = prompt("Ingrese la altura de " + vNombre[i]);
  }
  return vector;
}
cargarNombres(vNombre, dimension);
cargarAnios(vAnios, dimension);
cargarAltura(vAltura, dimension);

function intercambiarNum(vector: number[], i: number, j: number) {
  let aux: number;
  aux = vector[i];
  vector[i] = vector[j];
  vector[j] = aux;
}
function intercambiarStr(vector: string[], i: number, j: number) {
  let aux: string;
  aux = vector[i];
  vector[i] = vector[j];
  vector[j] = aux;
  return vector;
}
//Se ordenan con el metodo burbuja, primero por edad
//Y si son iguales desempatan por altura
for (let i: number = 0; i < dimension - 1; i++) {
  for (let j: number = 0; j < dimension - 1 - i; j++) {
    if (vAnios[j] > vAnios[j + 1]) {
      intercambiarNum(vAltura, j, j + 1);
      intercambiarStr(vNombre, j, j + 1);
      intercambiarNum(vAnios, j, j + 1);
      if (vAnios[j] === vAnios[j + 1] && vAltura[j] > vAltura[j + 1]) {
        intercambiarNum(vAltura, j, j + 1);
        intercambiarStr(vNombre, j, j + 1);
        intercambiarNum(vAnios, j, j + 1);
      }
    }
  }
}

console.log(vNombre);
console.log(vAnios);
console.log(vAltura);
