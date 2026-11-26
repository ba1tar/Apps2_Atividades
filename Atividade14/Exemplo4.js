// Exemplo 4
await fetch('https://exp.host/--/api/v2/push/send', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: token,
    title: 'Pedido enviado', body: 'Chega amanhã',
    data: { url: '/pedidos/42' },
  }),
});