const dogs = [{ id: 'dog-1', name: 'Poodle', temperament: ['Intelligent', 'Active', 'Alert', 'Faithful', 'Trainable', 'Instinctual',], }, { id: 'dog-2', name: 'Bernese Mountain Dog', temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'], }, { id: 'dog-3', name: 'Labrador Retriever', temperament: ['Intelligent', 'Even Tempered', 'Kind', 'Agile', 'Outgoing', 'Trusting', 'Gentle',], },]

//console.log (dogs)

// Ejemplo de FIND: Encontrar el perro con id 'dog-2'
//const perroEncontrado = dogs.find(perro => perro.id === 'dog-2');
//console.log(perroEncontrado);  

// Ejemplo de SOME: Verificar si hay algún perro con temperamento 'Kind'
//const algunPerroAmable = dogs.some(perro => perro.temperament.includes('Kind'));
//console.log(algunPerroAmable);  // Resultado: true

// Ejemplo de EVERY: Verificar si todos los perros tienen 'Intelligent' en su lista de temperamentos
//const todosInteligentes = dogs.every(perro => perro.temperament.includes('Intelligent'));
//console.log(todosInteligentes);  // Resultado: false (no todos los perros son 'Intelligent')

// Ejemplo de MAP: Obtener un arreglo con los nombres de todos los perros
//const nombresPerros = dogs.map(perro => perro.name);
//console.log(nombresPerros);  // Resultado: ['Poodle', 'Bernese Mountain Dog', 'Labrador Retriever']

// Ejemplo de eliminar elementos: Eliminar el perro con id 'dog-3' del arreglo original usando filter
const idDogDelete = 'dog-3';
const filteredDogs = dogs.filter(dog => dog.id !== idDogDelete);

console.log(filteredDogs);







