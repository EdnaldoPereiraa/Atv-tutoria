import React, { useState } from 'react';

const MeuComponente = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Clique para Incrementar</button>
    </div>
  );
};

export default MeuComponente;
