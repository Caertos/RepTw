import mongoose from "mongoose"; // Importa Mongoose para interactuar con MongoDB.

const userSchema = new mongoose.Schema({

    name: {
        type: String, // Define que el campo 'name' será de tipo String.
        required: true, // Indica que el campo 'name' es obligatorio.
        trim: true, // Elimina los espacios en blanco al principio y al final del valor del campo.
    },

    lastName: {
        type: String, // Define que el campo 'lastName' será de tipo String.
        required: true, // Indica que el campo 'lastName' es obligatorio.
        trim: true, // Elimina los espacios en blanco al principio y al final del valor del campo.
    },

    userName: {
        type: String, // Define que el campo 'userName' será de tipo String.
        required: true, // Indica que el campo 'userName' es obligatorio.
        trim: true, // Elimina los espacios en blanco al principio y al final del valor del campo.
    },

    email: {
        type: String, // Define que el campo 'email' será de tipo String.
        required: true, // Indica que el campo 'email' es obligatorio.
        trim: true, // Elimina los espacios en blanco al principio y al final del valor del campo.
        unique: true, // Indica que los valores del campo 'email' deben ser únicos en la colección.
    },

    password: {
        type: String, // Define que el campo 'password' será de tipo String.
        required: true, // Indica que el campo 'password' es obligatorio.
    }
},{
    timestamps: true // Añade campos 'createdAt' y 'updatedAt' automáticamente.
});

export default mongoose.model('User', userSchema);
// Crea y exporta el modelo 'User' basado en el esquema 'userSchema'.
