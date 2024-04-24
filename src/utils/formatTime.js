export const formatTime = (runtime) => {
  const horas = Math.floor(runtime / 60)
  const minutos = runtime % 60

  const format = `${horas.toString()}h ${minutos.toString()}m`

  return format
}

