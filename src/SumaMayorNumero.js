// Importamos React y useState desde la biblioteca 'react'
import React, { useState } from 'react';

// Definimos el componente SumaMayorNumero
const SumaMayorNumero = () => {

  // Utilizamos useState para crear tres variables de estado: numeros, numeroEspecifico y suma

  const [numeros, setNumeros] = useState([]);
   // Estado para almacenar los números ingresados por el usuario

  const [numeroEspecifico, setNumeroEspecifico] = useState(0);
   // Estado para almacenar el número específico ingresado por el usuario

  const [suma, setSuma] = useState(0);
   // Estado para almacenar la suma de los números mayores al número ingresado

  // Función que se ejecuta cuando el usuario cambia el valor del número específico en el campo de entrada
  const handleNumeroEspecificoChange = (event) => {
    setNumeroEspecifico(Number(event.target.value)); // Actualizamos el estado del número específico con el valor ingresado convertido a tipo Number
  };

  // Función que se ejecuta cuando el usuario hace clic en el botón "Agregar"
  const handleAgregarNumero = () => {
    setNumeros([...numeros, numeroEspecifico]); // Agregamos el número específico actual al arreglo de números utilizando el operador spread (...) y actualizamos el estado de la variable 'numeros'
  };

  // Función que se ejecuta cuando el usuario hace clic en el botón "Calcular Suma"
  const calcularSuma = () => {
    // Utilizamos el método reduce para calcular la suma de los números mayores al número específico
    const sumaMayorNumero = numeros.reduce((acumulador, numero) => {
      if (numero > numeroEspecifico) {
        return acumulador + numero; // Si el número es mayor al número específico, lo agregamos a la suma acumulada
      }
      return acumulador; // Si no es mayor, retornamos la suma acumulada sin modificar
    }, 0);
    setSuma(sumaMayorNumero); // Actualizamos el estado de la variable 'suma' con la suma calculada
  };

  // Renderizamos el componente
  return (
    <div>
      {/* Campo de entrada para el número específico */}
      <input
        type="number"
        value={numeroEspecifico}
        onChange={handleNumeroEspecificoChange}
      />
      {/* Botón para agregar el número específico al arreglo de números */}
      <button onClick={handleAgregarNumero}>Agregar</button>
      {/* Botón para calcular la suma de los números mayores al número específico */}
      <button onClick={calcularSuma}>Calcular Suma</button>
      {/* Mostramos los números ingresados */}
      <p>Números: {numeros.join(', ')}</p>
      {/* Mostramos la suma de los números mayores al número específico */}
      <p>Suma de números mayores a {numeroEspecifico}: {suma}</p>
    </div>
  );
};

// Exportamos el componente SumaMayorNumero como el componente por defecto
export default SumaMayorNumero;
