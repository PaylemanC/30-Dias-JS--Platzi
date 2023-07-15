# #PlaziChallenge: 30 días de JavaScript :woman_technologist:

Este repositorio contiene todas las soluciones que he desarrollado para los playground del #PlatziChallenge "Aprende JavaScript en 30 días" entre Marzo-Abril 2023, con el objetivo de mejorar mis habilidades en JavaScript a través de una serie de ejercicios que abarcaron desde temas básicos hasta avanzados.

<table>
    <thead>
        <tr>
            <th>Día</th>
            <th>(num) Nombre</th>
            <th>Consigna</th>
            <th>Temas</th>
            <th>Archivo.js</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td align="center">1</td>
        <td>1. Retorna el tipo</td>
        <td>Encontrar el tipo de dato del parámetro "valor" de una function "solution".</td>
        <td>Variables y Funciones / Tipos de datos numbers, strings, object, booleanos</td>
        <td><a href="solutions/1-retorna_tipo.js" target="_blank">1-retorna_tipo.js</a></td>
    </tr>
    <tr>
        <td align="center">2</td>
        <td>2. Calcula la propina</td>
        <td>Calcular la propina que deben dejar los clientes de un restaurante de acuerdo a su consumo.</td>
        <td>Operadores aritméticos, lógicos, de asignación y comparación.</td>
        <td><a href="solutions/2-calcula_propina.js" target="_blank">2-calcula_propina.js</a></td>
    </tr>
    <tr>
    <td rowspan="5">3</td>
        <td>3. Calcula años bisiestos</td>
        <td>Crear lógica de una función para determinar si un año es bisiesto o no.</td>
        <td>Condicional if-else</td>
        <td><a href="solutions/3-anio_bisiesto.js" target="_blank">3-anio_bisiesto.js</a></td>
    </tr>
    <tr>
        <td rowspan="2">4. Ejercicio de mascotas</td>
        <td rowspan="2">Retornar información específica de cuánto ejercicio necesita hacer las mascotas perro, gato y ave, de acuerdo a su edad.</td>
        <td rowspan="2">Condicional Switch / Condicional if-else / condicional ternario</td>
        <td><a href="solutions/4-mascotas_ejercicio.js" target="_blank">4-mascotas_ejercicio.js</a></td>
    </tr>
    <tr>
        <td>Solución alternativa: <a href="solutions/4-mascotas_ejercicio_alt.js" target="_blank">4-mascotas_ejercicio_alt.js</td>
    </tr>
    <tr>
        <td rowspan="2">5. Dibuja un triángulo</td>
        <td rowspan="2">Dibujar un triángulo isósceles alineado a la derecha usando bucles.</td>
        <td rowspan="2">Ciclo For / for-in y for-of / ciclo while / ciclo do-while / .repeat()</td>
        <td><a href="solutions/5-dibuja_triangulo.js" target="_blank">5-dibuja_triangulo.js</a></td>
    </tr>
    <tr>
        <td>Solución alternativa: <a href="solutions/5-dibuja_triangulo_alt.js" target="_blank">5-dibuja_triangulo_alt.js</a></td>
    </tr>
    <tr>
    <tr>
        <td rowspan="2" align="center">4</td>
        <td>6. Encuentra el michi más famoso</td>
        <td>Filtrar de un array de objetos con nombres de gatos y followers en social media, los gatos con el mayor número de seguidores y devolverlos en forma de array.</td>
        <td>Arrays y objetos / Métodos push, reduce, pop, map.</td>
        <td><a href="solutions/6-gatitos_famosos.js" target="_blank">6-gatitos_famosos.js</a></td>
    </tr>
    <tr>
        <td>7. Obtén el promedio de los estudiantes</td>
        <td>Calcular el promedio general de una clase y el promedio individual de cada estudiante a través de un array de estudiantes con su nombre y notas.</td>
        <td>Manipulación de objetos y arrays / toFixed()</td>
        <td><a href="solutions/7-promedio_estudiantes.js" target="_blank">7-promedio_estudiantes.js</a></td>
    </tr>
    <tr>
        <td align="center">5</td>
        <td>Checkpoint 1: Encuentra el mayor palíndromo</td>
        <td>Encontrar el palíndromo más largo de un array de palabras. (una palabra que se lee de la misma forma tanto hacia adelante como hacia atrás)</td>
        <td>Métodos de manipulación de array, .split, .reverse, .join</td>
        <td><a href="solutions/chekpoints/checkpoint-1.js" target="_blank">checkpoint-1.js</a></td> 
    </tr>
    <tr>
        <td align="center">6</td>
        <td>Teoría</td>
        <td>-</td>
        <td>Reasignación y Redeclaración, "use strict"</td>
        <td>-</td>
    </tr>
    <tr>
        <td align="center">7</td>
        <td>Teoría</td>
        <td>-</td>
        <td>Debugging con try-catch y debugger; / Programación funcional</td>
        <td>-</td>
    </tr>
    <tr>
        <td rowspan="2" align="center">8</td>
        <td>8. Crea una calculadora con closures</td>
        <td>Crea una calculadora con los métodos add (suma), subtract(resta), multiply (multiplicación), divide (división), clear (reinicia a 0) y getTotal (devuelve el total actual). </td>
        <td>Clousures & Scope, programación funcional</td>
        <td><a href="solutions/8-calculadora.js" target="_blank">8-calculadora.js</a></td>
    </tr>
    <tr>
        <td>9. Crea tu propio método map</td>
        <td>Desarrolla una implementación personalizada del método map utilizando funciones de orden superior.</td>
        <td>Higher order functions</td>
        <td><a href="solutions/9-map.js" target="_blank">9-map.js</a></td>
    </tr>
    <tr>
        <td align="center">9</td>
        <td>Teoría</td>
        <td>-</td>
        <td>ECMAScript y TC39</td>
        <td>-</td>
    </tr>
    <tr>
        <td align="center">10</td>
        <td>Checkpoint 2: Crea un planificador de tareas</td>
        <td>Que permita mostrar un registro, agregar, eliminar y marcar completas las tareas, con una función closure createTaskPlanner. Métodos: addTask(task), removeTask(value), getTasks(), getPendingTasks(), getCompletedTasks(), markTaskAsCompleted(value), getSortedTasksByPriority(), filterTaskByTag(), updateTask(taskId, updates).</td>
        <td>Closures y Scope, métodos de manipulación de arrays: push, findIndex, filter, etc., spread operator</td>
        <td><a href="solutions/chekpoints/checkpoint-2.js" target="_blank">checkpoint-2.js</a></td>
    </tr>
    <tr>
        <td rowspan="3" align="center">11</td>
        <td>10. Crea una promesa para mandar emails</td>
        <td>Implementa la lógica para que, usando promesas, envíe el correo después de 2 segundos; en caso de que hayan campos faltantes, lanza un error.</td>
        <td>Asincronismo, promesas</td>
        <td><a href="solutions/10-enviar_email.js" target="_blank">10-enviar_email.js</a></td>
    </tr>
    <tr>
        <td>11. Evita el callback hell haciendo uso de promises</td>
        <td>Un código base con mala práctica de callback hell que debes solucionar usando promesas (sin async/await).</td>
        <td>Promises, callback hell</td>
        <td><a href="solutions/11-callbackhell_promesas.js" target="_blank">11-callbackhell_promesas.js</a></td>
    </tr>
    <tr>
        <td>12. Evita el callback hell haciendo uso de await</td>
        <td>Un código base con mala práctica de callback hell que debes solucionar usando async/await.</td>
        <td>async/await, callback hell</td>
        <td><a href="solutions/12-callbackhell_async_await.js" target="_blank">12-callbackhell_async_await.js</a></td>
    </tr>
    <tr>
        <td align="center">12</td>
        <td>13. Valida un formulario de registro de usuario</td>
        <td>Tomando en cuenta que todos los campos estén completos y que el email no exista ya en la lista de usuarios registrados; si todo está correcto, agrega al usuario con todos sus datos excepto contraseña y retorna un mensaje de registro exitoso con el nombre y apellido.</td>
        <td>Arrays y métodos como push, filter, some, map, find, join, etc.</td>
        <td><a href="solutions/13-validar_form.js" target="_blank">13-validar_form.js</a></td>
    </tr>
    <tr>
        <td rowspan="2" align="center">13</td>
        <td>14. Agrupa los productos</td>
        <td>Agrupa una lista de productos según su categoría, retornando un array con los nombres y un totalPrice con la suma total de los precios.</td>
        <td>Objetos y arrays, métodos como includes, join, etc.</td>
        <td><a href="solutions/14-agrupar_productos.js" target="_blank">14-agrupar_productos.js</a></td>
    </tr>
    <tr>
        <td>15. Encuentra la ubicación del valor buscado</td>
        <td>Encuentra un valor en un array de dos dimensiones, retornando la posición del valor según row y column.</td>
        <td>Manipulación de arrays bidimensionales, métodos como flat y flatMap.</td>
        <td><a href="solutions/15-encuentra_ubicacion.js" target="_blank">15-encuentra_ubicacion.js</a></td>
    </tr>
    <tr>
        <td rowspan="2" align="center">14</td>
        <td>16. Modifica una lista de compras</td>
        <td>Procesa una lista de compras modificando el array original donde si el nombre del producto incluye "oferta" aplica descuento del 20%, multiplica el precio del producto por su cantidad, y retorna el precio final de toda la compra.</td>
        <td>Manipulación de objetos y arrays, mutable functions.</td>
        <td><a href="solutions/16-modifica_shoppinglist.js" target="_blank">16-modifica_shoppinglist.js</a></td>
    </tr>
    <tr>
        <td>17. Ordena los productos</td>
        <td>Ordena una lista de productos (devolviendo una copia) con métodos de ordenamiento para que los disponibles en el inventario sean colocados al principio de la lista y luego sean ordenados por su precio de manera ascendente.</td>
        <td>Mutable functions, método sort</td>
        <td><a href="solutions/17-ordena_productos.js" target="_blank">17-ordena_productos.js</a></td>
    </tr>
    <tr>
        <td align="center">15</td>
        <td>Checkpoint 3: Sistema de reservaciones de un hotel</td>
        <td>Utiliza closures para un crear administrador de habitaciones de un hotel. Funciones: searchReservation(id), getSortReservations(), addReservation(reservation), removeReservation(id), getReservations(), getAvailableRooms(checkIn, checkOut). Formato de reservaciones: { id, name, checkIn, checkOut, roomNumber}</td>
        <td>Closures, manipulación de array y objetos</td>
        <td><a href="solutions/chekpoints/checkpoint-3.js" target="_blank">checkpoint-3.js</a></td>
    </tr>
    <tr>
        <td align="center">16</td>
        <td>18. Congela el objeto recursivamente</td>
        <td>Crea una copia congelada de un objeto-perro para evitar cambios en sus propiedades (incluyendo objetos anidados).</td>
        <td>Programación Orientada a Objetos, o Object.assign y Object.freeze, objetos literales.</td>
        <td><a href="solutions/18-congela_objeto.js" target="_blank">18-congela_objeto.js</a></td>
    </tr>
    <tr>
        <td rowspan="2" align="center">17</td>
        <td>19. Modifica el prototype de los arrays</td>
        <td>Crea tu propia implementación de filter para el prototype de arrays.</td>
        <td>Prototipos en JavaScript, Array.prototype, callbacks, filter </td>
        <td><a href="solutions/19-modifica_array_prototype.js" target="_blank">19-modifica_array_prototype.js</a></td>
    </tr>
    <tr>
        <td>20. Crea un auto usando clases</td>
        <td>Con los atributos brand, model, year, mileage, y state (apagado/encendido) y los métodos turnOn(), turnOff() y drive(kilometers).</td>
        <td>Programación Orientada a Objetos, atributos y métodos de clase</td>
        <td><a href="solutions/20-auto.js" target="_blank">20-auto.js</a></td>
    </tr>
    <tr>
        <td rowspan="2" align="center">18</td>
        <td>21. Sistema de carrito de compras</td>
        <td>Creando clases Article y Service hijas de Product, Article implementará un addToCart() con nombre y cantidad de artículos, y Service el mismo pero solo con nombre. Finalmente una clase Cart implementará métodos addProduct(product), deleteProduct(product), calculateTotal(), getProducts()</td>
        <td>POO, herencia, abstracción</td>
        <td><a href="solutions/21-carrito_compras.js" target="_blank">21-carrito_compras.js</a></td>
    </tr>
    <tr>
        <td>22. Encapsula datos de los usuarios</td>
        <td>Protege los datos privados de una clase Usuario (name, age, friends, messages), con métodos públicos addFriend(friend), sendMessage(message, friend), showMessage. Incluye getters y setters de name y age</td>
        <td>POO, encapsulamiento, getters y setters</td>
        <td><a href="solutions/22-encapsula_usuario.js" target="_blank">22-encapsula_usuario.js</a></td>
    </tr>
    <tr>
        <td rowspan="2" align="center">19</td>
        <td>23. Jerarquía de animales</td>
        <td>Crea una jerarquía con las clases Animal (name, age, species, getInfo()), luego Mammal (hasFur(), getInfo()) y luego Dog (breed, getInfo(), bark()). </td>
        <td>POO, herencia</td>
        <td><a href="solutions/23-jerarquia_animales.js" target="_blank">23-jerarquia_animales.js</a></td>
    </tr>
    <tr>
        <td>24. Sistema de pagos</td>
        <td>Implementa un sistema de pagos utilizando polimorfismo, con clases Pay (makePay(quantity)), PayPal (makePlay + platform e email), Card (nro de tarjeta 16 dígitos + lastCardNumbers) y Cash. Añade función processPay que recibe un método de pago y cantidad llamando a makePay.</td>
        <td>POO, polimorfismo</td>
        <td><a href="solutions/24-sistema_pagos.js" target="_blank">24-sistema_pagos.js</a></td>
    </tr>
    <tr>
        <td align="center">20</td>
        <td>Checkpoint 4:</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td align="center">21</td>
        <td>25.</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="2" align="center">22</td>
        <td>26.</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>27.</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="2" align="center">23</td>
        <td>28.</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>29.</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td align="center">24</td>
        <td>Checkpoint 5: </td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="2" align="center">25</td>
        <td>30.</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>31.</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="2" align="center">26</td>
        <td>32.</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>33.</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="2" align="center">27</td>
        <td>34.</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>35.</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td align="center">28</td>
        <td>36.</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td align="center">29</td>
        <td>37.</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    </tbody>
</table>
