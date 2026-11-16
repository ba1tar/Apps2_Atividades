import { useState } from 'react';

// Exemplo 3

export function useForm(iniciais, validar) {
  const [valores, setValores] = useState(iniciais);
  const [erros, setErros] = useState({});

  const alterar = (campo, valor) =>
    setValores(v => ({ ...v, [campo]: valor }));

  function enviar(aoEnviar) {
    const novos = validar(valores);
    setErros(novos);
    if (Object.keys(novos).length === 0) aoEnviar(valores);
  }

  return { valores, erros, alterar, enviar };
}