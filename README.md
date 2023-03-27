# #PlaziChallenge: 30 días de JavaScript :woman_technologist::man_technologist:

Un repositorio con todos los playground del PlatziChallenge en Marzo 2023. El objetivo es aprender JavaScript partiendo desde los conceptos básicos hasta los más avanzados ¡En 30 días! Las actividades están asignadas en este README, y los resultados se encuentran individualmente en cada archivo .js.

### Encontrarás por cada ejercicio/playground:

1. Nombre y número del playground.
2. Num del día.
3. Pedazo de código brindado para iniciar.
4. Consigna con pautas para hacer el playground. Ahí mismo también encontrarás un output esperado de ejemplo.
5. Una serie de conocimientos previos (**!!!** Entender los resaltados en negrita son los que más podrán ayudarte a resolver el ejercicio). Se van apilando a medida pasan los días, y es la secuencia que da Platzi; en Internet está toda la documentación disponible (o en el mismo curso de Platzi, en la descripción de este repo).
6. El nombre del archivo donde encontrarás mi resolución.
7. Opcional: puede haber una resolución alternativa, con conocimientos más avanzados (mismo nombre pero terminando en _alt en los archivos).

⚠ No todos los días tienen un playground, así como puede haber más de un playground por día. Los checkpoint (véase después) también corresponden al playground de un día.

⚠ Quizá sea obvio, pero no está de más la aclaración: NO HAY UNA ÚNICA RESPUESTA & 30 DÍAS PUEDEN TRANSCURRIR EN 60. Si tu código cumple los output de la consigna, es suficiente, las resoluciones varían por lo que no hay un único camino para llegar a Roma. Y recuerda ir a tu ritmo, quizá no alcance 1 día para resolver un ejercicio, sino 2, 3, 5, más días, y eso está bien, no es una carrera contra nadie así que no te preocupes por eso, concéntrate en intentarlo y aprender de lo que estás haciendo.

### Checkpoints:

Los checkpoint tiene un grado más alto de dificultad, combinando todo lo anteriormente aprendido en un solo ejercicio. Sus respuestas incoporan, además, material extra no visto en el #PlatziChallenge (aún) a fin de probar herramientas nuevas que faciliten su resolución.

Incluyen:

1. Número de Checkpoint.
2. Título del checkpoint.
3. Pedazo de código brindado para iniciar.
4. Consigna con pautas para hacer el checkpoint. Ahí mismo también encontrarás un output esperado de ejemplo.
5. Conocimientos recomendados y aplicados mi solución.
6. El nombre del archivo donde encontrarás mi resolución.

## [Tabla de Contenidos](#tabla-de-contenidos)

* Día 1:

   - [Playground 1: Retorna el tipo](#retorna-el-tipo)

* Día 2:

   - [Playground 2: Calcula la propina](#calcula-la-propina)

* Día 3:

   - [Playground 3: Calcula años bisiestos](#calcula-años-bisiestos)
   - [Playground 4: Ejercicio de mascotas](#ejercicio-de-mascotas)
   - [Playground 5: Dibuja un triángulo](#dibuja-un-triangulo)

* Día 4:

   - [Playground 6: Encuentra el michi más famoso](#encuentra-el-michi-mas-famoso)
   - [Playground 7: Obtén el promedio de los estudiantes](#obten-el-promedio-de-los-estudiantes)

---

* [Checkpoint 1](#checkpoint-1)

---

* Día 8:
   - [Playground 8: Crea una calculadora con clousures](#crea-una-calculadora-con-clousures)
   - [Playground 9: Crea tu propio método map](#crea-tu-propio-metodo-map)

---

* [Checkpoint 2](#checkpoint-2)

---

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

#### [Archivo con respuesta alternativa*: 4-mascotas_ejercicio_alt.js](4-mascotas_ejercicio_alt.js)

*Uso de:

* Condicional ternario
* Arrays

#### [Volver al Índice :arrow_up:](#tabla-de-contenidos)

5. ## [Dibuja un triángulo](#dibuja-un-triangulo)

> ### Día: 3

```sh
function printTriangle(size, character) {
  // Tu código aquí 👈
}


```

> ### Consigna:

En este desafío, debes dibujar un triángulo isósceles usando bucles.

Recibirás dos parámetros: `size` y `character`, que definen el tamaño y el carácter con el que se debe construir el triángulo, respectivamente. Además, el triángulo debe estar alineado a la derecha, lo que significa que la columna más derecha del triángulo debe estar en el borde derecho de la consola

* **!!!** Recuerda que para hacer el salto de línea debes usar "\n", no olvides removerla de la última parte.

Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:

```sh
Input: printTriangle(5, "*")
Output:
    *
   **
  ***
 ****
*****


```

Ejemplo 2:

```sh
Input: printTriangle(6, "$")
Output:
     $
    $$
   $$$
  $$$$
 $$$$$
$$$$$$


```

### Temas previos:

> 1. **Ciclo FOR**
> 2. FOR-IN vs FOR-OF diferencias
> 3. **Ciclo WHILE**
> 4. Ciclo DO-WHILE

### [Archivo con respuesta: 5-dibuja_triangulo.js](5-dibuja_triangulo.js)

#### [Archivo con respuesta alternativa*: 5-dibuja_triangulo_alt.js](5-dibuja_triangulo_alt.js)

*Uso de:

* Bucle for.
* .repeat()

#### [Volver al Índice :arrow_up:](#tabla-de-contenidos)

6. ## [Encuentra el michi más famoso](#encuentra-el-michi-mas-famoso)

> ### Día: 4

```js
function findFamousCats(cats) {
  // Escribe tu código aquí 👈
}

```

> ### Consigna:

En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.

Recibirás un array de objetos que incluirán las siguientes propiedades:

* `name`: nombre del gatito.
* `followers`: un array de números, donde cada uno representa los seguidores de cada red social.

Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada.

Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:

```sh
Input: findFamousCats([
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Michi",
    followers: [100, 300]
  },
])

Output: ["Luna"]

```

Ejemplo 2:

```sh
Input: findFamousCats([
  {
    name: "Mimi",
    followers: [320, 120, 70]
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200]
  },
  {
    name: "Gizmo",
    followers: [250, 750]
  }
])

Output: ["Milo", "Gizmo"]

```

### Temas previos:

> 1. **Arrays y objetos.**
> 2. Métodos: **push, reduce**, pop, map.

### [Archivo con respuesta: 6-gatitos_famosos.js](6-gatitos_famosos.js)

#### [Volver al Índice :arrow_up:](#tabla-de-contenidos)

7. ## [Obtén el promedio de los estudiantes](#obten-el-promedio-de-los-estudiantes)

> ### Día: 4

```js
function getStudentAverage(students) {
  // Escribe tu código aquí 👈
}

```

> ### Consigna

En este desafío, deberás calcular el promedio general de una clase, así como el promedio individual de cada estudiante.

Para ello, se te proporcionará un array de objetos, cada uno de los cuales representará a un estudiante y tendrá las siguientes propiedades:

* `name`: El nombre del estudiante
* `grades`: Las notas de cada materia del estudiante

A partir de esta información, debes retornar un nuevo objeto que tenga la propiedad classAverage con el promedio de la clase y un array de students con los estudiantes y sus promedios individuales.

Es importante mencionar que los promedios deben ser calculados con precisión y se deben redondear a dos decimales para que los test pasen sin problema alguno. Puedes usar el método `toFixed()` el cual se usa de la siguiente manera 👇

```sh
const number = 100.32433;
number.toFixed(2); // "100.32"

```

* **!!!** 👀 Ten en cuenta que este método regresa el número como un string y se espera que sea de tipo numérico.

Ejemplo:

```sh
Input: getStudentAverage([
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
])

Output: {
  classAverage: 88.17,
  students: [
    {
      name: "Pedro",
      average: 88.75
    },
    {
      name: "Jose",
      average: 88.5
    },
    {
      name: "Maria",
      average: 87.25
    }
  ]
}

```

### Temas previos:

> 1. **Objetos y arrays.**
> 2. Manipulación de objetos y arrays.
> 3. toFixed()

### [Archivo con respuesta: 7-promedio_estudiantes.js](7-promedio_estudiantes.js)

#### [Volver al Índice :arrow_up:](#tabla-de-contenidos)

## [Checkpoint 1](#checkpoint-1)

> ### Encuentra el mayor palíndromo

```sh
function findLargestPalindrome(words) {
  // Tu código aquí 👈
}


```

> ### Consigna:

En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.

Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista, la función debe devolver `null`. Si hay más de un palíndromo con la misma longitud máxima, debes devolver el primer palíndromo encontrado en la lista.

* **!!!** Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás.

Ejemplo 1:

```sh
Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

Output: "racecar"


```

Ejemplo 2:

```sh
Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])

Output: null


```

### Conocimientos recomendados:

> 1. Métodos de manipulación de arrays (.split, .reverse, .join).

### [Archivo con respuesta: checkpoint-1.js](checkpoint-1.js)

#### [Volver al Índice :arrow_up:](#tabla-de-contenidos)

8. ## [Crea una calculadora con clousures](#crea-una-calculadora-con-clousures)

> ### Día: 8

```js
function createCalculator() {
  // Escribe tu código aquí 👈
}

```

> ### Consigna:

En este desafío tendrás que crear una calculadora mediante el uso de closures.

La calculadora debe contar con los siguientes métodos:

* `add`: recibe un número, lo suma al total y devuelve el resultado
* `subtract`: recibe un número, lo resta al total y devuelve el resultado
* `multiply`: recibe un número, lo multiplica al total y devuelve el resultado
* `divide`: recibe un número, lo divide al total y devuelve el resultado
* `clear`: reinicia el total a 0 y devuelve el resultado
* `getTotal`: devuelve el total actual.

Ejemplo 1:

```sh
Input:
const calculator = createCalculator()
calculator.add(10)

Output: 10

```

Ejemplo 2:

```sh
const calculator = createCalculator()
calculator.add(10)
calculator.subtract(-10)

Output: 20

```

Ejemplo 3:

```sh
const calculator = createCalculator()
calculator.add(10)
calculator.subtract(-10)
calculator.clear()

Output: 0

```

### Temas previos:

> 1. **Clousures & Scope**
> 2. Programación funcional.

### [Archivo con respuesta: 8-calculadora.js](8-calculadora.js)

#### [Volver al Índice :arrow_up:](#tabla-de-contenidos)

9. ## [Crea tu propio método map](#crea-tu-propio-metodo-map)

> ### Día: x

```js
function myMap(array, func) {
  // Escribe tu código aquí 👈
}

```

> ### Consigna:

En este desafío debes desarrollar una implementación personalizada del método `map` utilizando funciones de orden superior.

Recibirás como parámetros un `array` y una `función` (`func`). El array contendrá un conjunto de elementos (números, objetos, strings, etc.) y la función se utilizará para aplicar una acción sobre cada elemento del array. Tu objetivo es devolver un nuevo array con los resultados de la función tal y como lo haría el método `map`.

Ejemplo 1:

```sh
Input: myMap([1,2,3,4], (num) => num * 2)

Output: [2,4,6,8]
```

Ejemplo 2:

```sh
Input: myMap([
  {name: "michi", age: 2},
  {name: "firulais", age: 6}],
  (pet) => pet.name)

Output: ["michi", "firulais"]
```

### Temas previos:

> 1. **Higher order functions.**

### [Archivo con respuesta: 9-map.js](9-map.js)

#### [Volver al Índice :arrow_up:](#tabla-de-contenidos)

## [Checkpoint 2](#checkpoint-2)

> ### Crea un planificador de tareas

```sh
function createTaskPlanner() {
  // Tu código aquí 👈
}
```

> ### Consigna:

En este desafío, debes implementar la lógica de un planificador de tareas que permita agregar, eliminar y marcar como completadas las tareas, así como también mostrar un registro de las mismas. Para ello, debes construir la lógica de la función closure llamada `createTaskPlanner` para que devuelva los siguientes métodos:

* `addTask(task)`: recibe un objeto que contiene la tarea y la agrega al array de tareas. La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed se agrega automáticamente como falso al momento de agregar una tarea.
* `removeTask(value)`: recibe el id o nombre de la tarea y la elimina del array de tareas.
* `getTasks()`: Devuelve el array de tareas.
* `getPendingTasks()`: Devuelve solo las tareas pendientes.
* `getCompletedTasks()`: Devuelve solo las tareas completadas.
* `markTaskAsCompleted(value)`: Recibe el id o nombre de la tarea y la marca como completada.
* `getSortedTasksByPriority()`: Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
* `filterTasksByTag(tag)`: Filtra las tareas por una etiqueta específica.
* `updateTask(taskId, updates)`: Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.

Ejemplo 1:

```sh
Input:
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});


planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

planner.markTaskAsCompleted("Llamar a Juan");

Output:
planner.getCompletedTasks()
[{
    id: 2,
    name: "Llamar a Juan",
    completed: true,
    priority: 3,
    tags: ["personal"]
}]
```

Ejemplo 2:

```sh
Input:
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

Output:
planner.filterTasksByTag("shopping")
[{
    id: 1,
    name: "Comprar leche",
    completed: false,
    priority: 3,
    tags: ["shopping", "home"]
}]
```

### Conocimientos recomendados:

> 1. Clousures & Scope.
> 2. Métodos de manipulación de arrays: push, findIndex, filter, etc.
> 3. Spread operator.

### [Archivo con respuesta: checkpoint-2.js](checkpoint-2.js)
