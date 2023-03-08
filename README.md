# #PlaziChallenge: 30 días de JavaScript :woman_technologist::man_technologist:

Un repositorio con todos los playground del PlatziChallenge en Marzo 2023. El objetivo es aprender JavaScript partiendo desde los conceptos básicos hasta los más avanzados ¡En 30 días! Las actividades están asignadas en este README, y los resultados se encuentran individualmente en cada archivo .js.

### Encontrarás por cada ejercicio/playground:

1. Nombre y número del playground (puede haber más de uno por día).
2. Num del día.
3. Pedazo de código brindado para iniciar.
4. Consigna con pautas para hacer el playground. Ahí mismo también encontrarás un output esperado de ejemplo.
5. Una serie de conocimientos previos (**!!!** Entender los resaltados en negrita son los que más podrán ayudarte a resolver el ejercicio). Se van apilando a medida pasan los días, y es la secuencia que da Platzi; en Internet está toda la documentación disponible (o en el mismo curso de Platzi, en la descripción de este repo).
6. El nombre del archivo donde encontrarás mi resolución.
7. Opcional: puede haber una resolución alternativa, con conocimientos más avanzados (mismo nombre pero terminando en _alt en los archivos).

## [Tabla de Contenidos](#tabla-de-contenidos)

* Día 1:
   - [Playground 1: Retorna el tipo](#retorna-el-tipo)

* Día 2:
   - [Playground 2: Calcula la propina](#calcula-la-propina)

* Día 3:
   - [Playground 3: Calcula años bisiestos](#calcula-años-bisiestos)
   - [Playground 4: Ejercicio de mascotas](#ejercicio-de-mascotas)

1. ## [Retorna el tipo](#retorna-el-tipo)

> ### Día: 1

```ini
function solution(valor) {
  // Escribe tu código aquí 👈
}

```

> ### Consigna:

En este desafío encontrarás una función llamada `solution` que recibe un parámetro llamado `valor`. Debes encontrar el tipo de dato del parámetro `valor` y retornarlo desde la función `solution`.

Recuerda que el parámetro `valor` será distinto por cada distinta forma en que ejecutemos la función `solution`.

Por ejemplo:

Dados los siguientes llamados a la función `solution`:

```sh
solution(1)
solution("Dieguillo")
solution(true)

```

Debes obtener los siguientes resultados:

```sh
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

```ini
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

```sh
Input: calculateTip(100, 10);
Output: 10;

```

Ejemplo 2:

```yaml
Input: calculateTip(1524.33, 25);
Output: 381.0825;

```

### Temas previos:

> 1. **Operadores: aritméticos, lógicos, de asignación y de comparación**

### [Archivo con respuesta: 2-calcula_propina.js](2-calcula_propina.js)

#### [Volver al Índice :arrow_up:](#tabla-de-contenidos)

3. ## [Calcula años bisiestos](#calcula-años-bisiestos)

> ### Día: 3

```ini
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

```css
Input: 2000;
Output: true;

```

Ejemplo 2:

```sh
Input: -2024;
Output: false;

```

Ejemplo 3:

```yaml
Input: 1984.25;
Output: false;

```

### Temas previos:

> 1. **Condicional IF-ELSE**

### [Archivo con respuesta: 3-anio_bisiesto.js](3-anio_bisiesto.js)

#### [Volver al Índice :arrow_up:](#tabla-de-contenidos)

4. ## [Ejercicio de mascotas](#ejercicio-de-mascotas)

> ### Día: 3

```ini
function getPetExerciseInfo(type, age) {
  // Tu Código aquí 👈
}

```

> ### Consigna:

En este desafío recibirás una serie de tipos de mascotas junto con su edad.

Dependiendo de estos 2 factores tendrás que construir la función llamada `getPetExerciseInfo` la cual retornará una cadena de texto con la información necesaria acerca de cuanto ejercicio necesita hacer cada tipo de mascota.

La función recibirá las siguientes mascotas:

* perro
* gato
* ave

En caso de pasar una mascota la cual no sea de la lista deberá retornar "Tipo de mascota inválida"

Para cada tipo de mascota, la función retornará diferente información basada en la edad.

* perros

   - Si la edad es menor al año, deberá retornar "Los cachorros necesitan pequeñas y frecuentes sesiones de juego"
   - Si la edad es entre 1 y 7 años, deberá retornar "Los perros a esta edad necesitan caminatas diarias y sesiones de juego"
   - Si la edad es mayor a 7 años, deberá retornar "Los perros viejos necesitan caminatas más cortas"

* gatos

   - Si la edad es menor al año, deberá retornar "Los gatitos necesitan frecuentes sesiones de juego"
   - Si la edad es entre 1 y 7 años, deberá retornar "Los gatos a esta edad necesitan jugar diariamente"
   - Si la edad es mayor a 7 años, deberá retornar "Los gatos viejos necesitan sesiones de juego más cortas"

* aves

   - Si la edad es menor al año, deberá retornar "Las aves jóvenes necesitan mucho espacio para volar"
   - Si la edad es entre 1 y 7 años, deberá retornar "Las aves necesitan jugar diariamente y un lugar para volar"
   - Si la edad es mayor a 7 años, deberá retornar "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar"

Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:

```yaml
Input: getPetExerciseInfo("perro", 3)
Output: "Los perros a esta edad necesitan caminatas diarias y sesiones de juego"

```

Ejemplo 2:

```ini
Input: getPetExerciseInfo("gato", 8)
Output: "Los gatos viejos necesitan sesiones de juego más cortas"

```

Ejemplo 3:

```sh
Input: getPetExerciseInfo("Mamut", 25)
Output: "Tipo de mascota invalida"

```

### Temas previos:

> 1. **Condicional Switch**
> 2. Condicional IF-ELSE

### [Archivo con respuesta: 4-mascotas_ejercicio.js](4-mascotas_ejercicio.js)

#### [Volver al Índice :arrow_up:](#tabla-de-contenidos)
