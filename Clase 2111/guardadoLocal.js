export const guardarTareas = (listadoTareas) => {
    const tareasString = JSON.stringify(listadoTareas)
	localStorage.setItem("tareasPendientes", tareasString)
}

export const obtenerTareas = (arrayOriginal) => {
    const tareasJson = localStorage.getItem("tareasPendientes")
	const tareasArray = JSON.parse(tareasJson)
    Array.prototype.push.apply(arrayOriginal, tareasArray)
}