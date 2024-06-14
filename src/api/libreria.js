import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080' });

export const savePersonName = async (obj) => await instance.post('/libros/', obj)

export const getPersons = async () => await instance.get('/libros/');

export const deletePerson = async (id) => await instance.delete('/libros/' + id);

export const updatePerson = async (id, nombre, titulo, precio ) => await instance.put('/libros/'+id, { nombre, titulo, precio });

