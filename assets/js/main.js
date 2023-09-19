
        let ejecucionesOpciones = {};

        function mostrarMenu() {
            console.log("\nMenú de Opciones:");
            console.log("1. Contador de Números Pares e Impares");
            console.log("2. Calculadora de Factorial");
            console.log("3. Validación de Contraseña");
            console.log("4. Generador de Tablas de Multiplicar");
            console.log("5. Suma de Números Primos");
            console.log("6. Secuencia de Fibonacci");
            console.log("7. Convertidor de Temperatura");
            console.log("8. Calculadora de Potencia");
            console.log("9. Salir");
            ejecutarOpcion();
        }

        function obtenerEntradaTexto(prompt, callback) {
            const texto = prompt + " ";
            const entrada = window.prompt(texto);
            callback(entrada);
        }

        function obtenerEntradaNumero(prompt, callback) {
            const numero = parseFloat(window.prompt(prompt + " "));
            if (!isNaN(numero)) {
                callback(numero);
            } else {
                console.log("¡Entrada no válida! Introduce un número válido.");
                obtenerEntradaNumero(prompt, callback);
            }
        }

        function contarNumerosParesEImpares() {
            obtenerEntradaNumero("Introduce un número: ", (numero) => {
                let cantidadPares = 0;
                let cantidadImpares = 0;

                for (let i = 1; i <= numero; i++) {
                    if (i % 2 === 0) {
                        cantidadPares++;
                    } else {
                        cantidadImpares++;
                    }
                }

                console.log(`Números pares: ${cantidadPares}`);
                console.log(`Números impares: ${cantidadImpares}`);

                ejecucionesOpciones["Contador de Números Pares e Impares"] = (ejecucionesOpciones["Contador de Números Pares e Impares"] || 0) + 1;
                mostrarMenu();
            });
        }

        function calcularFactorial() {
            obtenerEntradaNumero("Introduce un número para calcular el factorial: ", (numero) => {
                let factorial = 1;
                for (let i = 1; i <= numero; i++) {
                    factorial *= i;
                }
                console.log(`El factorial de ${numero} es: ${factorial}`);

                ejecucionesOpciones["Calculadora de Factorial"] = (ejecucionesOpciones["Calculadora de Factorial"] || 0) + 1;
                mostrarMenu();
            });
        }

        function validarContraseña() {
            obtenerEntradaTexto("Introduce una contraseña: ", (contraseña) => {
                if (contraseña === "secreto123") {
                    console.log("Acceso concedido");
                } else {
                    console.log("Acceso denegado");
                }

                ejecucionesOpciones["Validación de Contraseña"] = (ejecucionesOpciones["Validación de Contraseña"] || 0) + 1;
                mostrarMenu();
            });
        }

        function generarTablaDeMultiplicar() {
            obtenerEntradaNumero("Introduce un número para generar su tabla de multiplicar: ", (numero) => {
                console.log(`Tabla de multiplicar del ${numero}:`);
                for (let i = 1; i <= 10; i++) {
                    console.log(`${numero} x ${i} = ${numero * i}`);
                }

                ejecucionesOpciones["Generador de Tablas de Multiplicar"] = (ejecucionesOpciones["Generador de Tablas de Multiplicar"] || 0) + 1;
                mostrarMenu();
            });
        }

        function esPrimo(num) {
            if (num <= 1) return false;
            if (num <= 3) return true;

            if (num % 2 === 0 || num % 3 === 0) return false;

            for (let i = 5; i * i <= num; i += 6) {
                if (num % i === 0 || num % (i + 2) === 0) return false;
            }

            return true;
        }

        function sumarNumerosPrimos() {
            obtenerEntradaNumero("Introduce la cantidad de números primos que deseas sumar: ", (cantidad) => {
                let suma = 0;
                let cantidadEncontrados = 0;
                let numeroActual = 2;

                while (cantidadEncontrados < cantidad) {
                    if (esPrimo(numeroActual)) {
                        suma += numeroActual;
                        cantidadEncontrados++;
                    }
                    numeroActual++;
                }

                console.log(`La suma de los primeros ${cantidad} números primos es: ${suma}`);

                ejecucionesOpciones["Suma de Números Primos"] = (ejecucionesOpciones["Suma de Números Primos"] || 0) + 1;
                mostrarMenu();
            });
        }

        function generarSecuenciaDeFibonacci() {
            obtenerEntradaNumero("Introduce el término hasta el cual deseas generar la secuencia de Fibonacci: ", (termino) => {
                let a = 0;
                let b = 1;
                let secuencia = [a, b];

                while (secuencia.length < termino) {
                    const siguiente = a + b;
                    secuencia.push(siguiente);
                    a = b;
                    b = siguiente;
                }

                console.log(`Secuencia de Fibonacci hasta el término ${termino}:`);
                console.log(secuencia.join(", "));

                ejecucionesOpciones["Secuencia de Fibonacci"] = (ejecucionesOpciones["Secuencia de Fibonacci"] || 0) + 1;
                mostrarMenu();
            });
        }

        function convertirTemperatura() {
            obtenerEntradaTexto("Introduce una temperatura en grados Celsius o Fahrenheit (por ejemplo, 32C o 68F): ", (entrada) => {
                const regex = /^(-?\d+(\.\d+)?)\s*(C|F)$/i;
                const coincidencia = entrada.match(regex);

                if (coincidencia) {
                    const temperatura = parseFloat(coincidencia[1]);
                    const unidad = coincidencia[3].toUpperCase();
                    let resultado;

                    if (unidad === "C") {
                        resultado = (temperatura * 9 / 5) + 32;
                        console.log(`${temperatura}°C equivale a ${resultado}°F`);
                    } else {
                        resultado = (temperatura - 32) * 5 / 9;
                        console.log(`${temperatura}°F equivale a ${resultado}°C`);
                    }
                } else {
                    console.log("Entrada no válida. Debe ser en el formato correcto, por ejemplo, 32C o 68F.");
                }

                ejecucionesOpciones["Convertidor de Temperatura"] = (ejecucionesOpciones["Convertidor de Temperatura"] || 0) + 1;
                mostrarMenu();
            });
        }

        function calcularPotencia() {
            obtenerEntradaNumero("Introduce un número base: ", (base) => {
                obtenerEntradaNumero("Introduce un exponente: ", (exponente) => {
                    const resultado = Math.pow(base, exponente);
                    console.log(`${base} elevado a la ${exponente} es igual a ${resultado}`);

                    ejecucionesOpciones["Calculadora de Potencia"] = (ejecucionesOpciones["Calculadora de Potencia"] || 0) + 1;
                    mostrarMenu();
                });
            });
        }

        function ejecutarOpcion() {
            const eleccion = window.prompt("Selecciona una opción (1-9): ");
            const opcion = parseInt(eleccion);

            switch (opcion) {
                case 1:
                    contarNumerosParesEImpares();
                    break;
                case 2:
                    calcularFactorial();
                    break;
                case 3:
                    validarContraseña();
                    break;
                case 4:
                    generarTablaDeMultiplicar();
                    break;
                case 5:
                    sumarNumerosPrimos();
                    break;
                case 6:
                    generarSecuenciaDeFibonacci();
                    break;
                case 7:
                    convertirTemperatura();
                    break;
                case 8:
                    calcularPotencia();
                    break;
                case 9:
                    mostrarOpcionMasEjecutada();
                    break;
                default:
                    console.log("Opción no válida. Por favor, selecciona una opción válida (1-9).");
                    mostrarMenu();
            }
        }

        function mostrarOpcionMasEjecutada() {
            let opcionMasEjecutada = "";
            let maximoEjecuciones = 0;

            for (const opcion in ejecucionesOpciones) {
                if (ejecucionesOpciones[opcion] > maximoEjecuciones) {
                    opcionMasEjecutada = opcion;
                    maximoEjecuciones = ejecucionesOpciones[opcion];
                }
            }

            console.log(`La opción más ejecutada fue: ${opcionMasEjecutada} (${maximoEjecuciones} veces).`);
        }

        mostrarMenu();


