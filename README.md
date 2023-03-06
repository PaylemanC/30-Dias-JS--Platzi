# #PlaziChallenge: 30 días de JavaScript :woman_technologist::man_technologist:
Un repositorio con todos los playground del PlatziChallenge en Marzo 2023. El objetivo es aprender JavaScript partiendo desde los conceptos básicos hasta los más avanzados ¡En 30 días! Las actividades están asignadas en este README, y los resultados se encuentran individualmente en cada archivo .js.

### Encontrarás por cada ejercicio/playground: 
1. Nombre y número del playground (puede haber más de uno por día). 
2. Num del día.
3. Pedazo de código brindado para iniciar. 
4. Consigna con pautas para hacer el playground. Ahí mismo también encontrarás un output esperado de ejemplo.
5. Una serie de conocimientos previos (**!!!** Entender los resaltados en negrita son los que más podrán ayudarte a resolver el ejercicio). Se van apilando a medida pasan los días, y es la secuencia que da Platzi; en Internet está toda la documentación disponible (o en el mismo curso de Platzi, en la descripción de este repo).
6. El nombre del archivo donde encontrarás mi resolución.  

## [Tabla de Contenidos](#tabla-de-contenidos)
* Día 1:
  - [Playground 1: Retorna el tipo](#retorna-el-tipo)
* Día 2:
  - [Playground 2: Calcula la propina](#calcula-la-propina)
* Día 3:
  - [Calcula años bisiestos](#calcula-años-bisiestos)



1. ## [Retorna el tipo](#retorna-el-tipo)
> ### Día: 1
```
function solution(valor) {
  // Escribe tu código aquí 👈
}
```
> ### Consigna:

En este desafío encontrarás una función llamada `solution` que recibe un parámetro llamado `valor`. Debes encontrar el tipo de dato del parámetro `valor` y retornarlo desde la función `solution`.

Recuerda que el parámetro `valor` será distinto por cada distinta forma en que ejecutemos la función `solution`.

Por ejemplo:

Dados los siguientes llamados a la función `solution`:
```
solution(1)
solution("Dieguillo")
solution(true)
```
Debes obtener los siguientes resultados:
```
"number"
"string"
"boolean"
```
### Temas previos:
> 1. var, let y const
> 2. IIFE (Immediately Invoked Function Expression)
> 3. Función expresión:
> 4. Arrow Function
> 5. **Tipos de datos numbers, strings, objects, booleanos**
> 6. **typeof**

### [Archivo con respuesta: 1-retorna_tipo.js](1-retorna_tipo.js)
#### [Volver al Índice :arrow_up:](#tabla-de-contenidos)



2. ## [Calcula la propina](#calcula-la-propina)
> ### Día: 2
```
function calculateTip(billAmount, tipPercentage) {
  // Tu código aquí 👈
}
```
> ### Consigna:

En este desafío tendrás que calcular la propina que deben dejar los clientes de un restaurante en función de su consumo.

Recibirás 2 parámetros:
* billAmount: El costo total de lo que hayan consumido.
* tipPercentage: El porcentaje de propina que deban dejar.
* Ambos valores serán de tipo `Number`.
* Los valores serán siempre positivos incluyendo el 0.
* deberá devolver el valor de la propina como un número.

Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:
```
Input: calculateTip(100, 10);
Output: 10;
```

Ejemplo 2:
```
Input: calculateTip(1524.33, 25);
Output: 381.0825;
```

### Temas previos:
> 1. **Operadores: aritméticos, lógicos, de asignación y de comparación**

### [Archivo con respuesta: 2-calcula_propina.js](2-calcula_propina.js)
#### [Volver al Índice :arrow_up:](#tabla-de-contenidos)



3. ## [Calcula años bisiestos](#calcula-años-bisiestos)
> ### Día: 3
```
function isLeapYear(year) {
  // Tu código aquí 👈
}
```
> ### Consigna:

En este desafío, debes crear la lógica de la función `isLeapYear`, que determina si un año es bisiesto o no. Un año es bisiesto si cumple con las siguientes condiciones:

* Es divisible por 4, pero no por 100.
O
* Es divisible por 100 y por 400.

La función `isLeapYear` recibe un único parámetro: el año a evaluar. Debe devolver `true` si el año es bisiesto o `false` en caso contrario.

Toma en cuenta que la función debe ser capaz de manejar valores no enteros o negativos. 

Ejemplo 1:
```
Input: 2000;
Output: true;
```

Ejemplo 2:
```
Input: -2024;
Output: false;
```

Ejemplo 3:
```
Input: 1984.25;
Output: false;
```

### Temas previos:
> 1. **Condicional IF-ELSE**

### [Archivo con respuesta: 3-anio_bisiesto.js](3-anio_bisiesto.js)
#### [Volver al Índice :arrow_up:](#tabla-de-contenidos)