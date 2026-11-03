const [contador, setContador] = useState(0)

useEffect(() => {
  console.log('montou!')
}, [])

useEffect(() => {
  console.log('contador mudou para:', contador)
}, [contador])