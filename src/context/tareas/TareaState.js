import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
//import { v4 as uuid} from 'uuid';
import {TAREAS_PROYECTO,
        AGREGAR_TAREA,
        VALIDAR_TAREA,
        ELIMINAR_TAREA,
        LIMPIAR_TAREA,
        TAREA_ACTUAL,
        ACTUALIZAR_TAREA} from '../../types';
import clienteAxios from '../../config/axios';


const TareaState = props => {
    const initialState = {
        /* tareas: [
        { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
        { id: 2, nombre: 'Elegir Hosting', estado: false, proyectoId: 2},
        { id: 3, nombre: 'Elegir Color', estado: false, proyectoId: 3},
        { id: 4, nombre: 'Elegir Framework', estado: true, proyectoId: 4},
        { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
        { id: 6, nombre: 'Elegir Hosting', estado: false, proyectoId: 2},
        { id: 7, nombre: 'Elegir Color', estado: false, proyectoId: 3},
        { id: 8, nombre: 'Elegir Framework', estado: true, proyectoId: 4},
        { id: 9, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
        { id: 10, nombre: 'Elegir Hosting', estado: false, proyectoId: 2},
        { id: 11, nombre: 'Elegir Color', estado: false, proyectoId: 3},
        { id: 12, nombre: 'Elegir Framework', estado: true, proyectoId: 4},
        { id: 13, nombre: 'Elegir Framework', estado: true, proyectoId: 3},
        ], */

        tareasproyecto: [],
        errortarea: false,
        tareaseleccionada: null
    }

    //Crear dispatch y state
    const  [state,dispatch] = useReducer(tareaReducer, initialState);

    //Crear las funciones

    //Obtener las tareas de un proyecto
    const obtenerTareas = async proyecto => {
        try {
            const resultado = await clienteAxios.get('/api/tareas', {params: {proyecto}});

            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })
            
        } catch (error) {
            console.log(error)
            
        }
    }

    //Agregar una tarea al proyecto seleccionado
    const agregarTarea = async tarea => {
        //tarea.id = uuid();
   console.log(tarea)
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            console.log(resultado)

            dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
        } catch (error) {
            console.log(error);
            
        }
        
        
    }

    //Valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type:VALIDAR_TAREA
        })
    }

    //Eliminar tarea por id
    const eliminarTarea = async (id, proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, {params: {proyecto}}); 

            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            })
        } catch (error) {
            console.log(error)
            
        }
    }

    //Cambia el estado de cada tarea
    const actualizarTarea = async tarea => {
        console.log(tarea)
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
            console.log(resultado)

            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: tarea //deberia ser resultado.data.tarea pero asi es como me funciona jajaja
            })

        } catch (error) {
            console.log(error)
            
        }
        
    }

    //Extrae una tarea para editar
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //Elimina la tareaseleccionada una tarea
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
           value={{
               
               tareasproyecto: state.tareasproyecto,
               errortarea: state.errortarea,
               tareaseleccionada: state.tareaseleccionada,
               validarTarea,
               agregarTarea,
               obtenerTareas,
               eliminarTarea,
               actualizarTarea,
               guardarTareaActual,
               limpiarTarea,
           }}   
        >
           {props.children}
            </TareaContext.Provider>
    )
}

export default TareaState;