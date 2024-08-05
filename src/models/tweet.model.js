import mongoose from "mongoose"; // Importa Mongoose para interactuar con MongoDB.

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String, // Define que el campo 'content' será de tipo String.
      required: true, // Indica que el campo 'content' es obligatorio.
    },
    user: {
      type: mongoose.Schema.Types.ObjectId, // Define que el campo 'user' será de tipo ObjectId.
      ref: 'User', // Establece una referencia al modelo 'User', indicando que 'user' es una relación con otro documento en la colección 'User'.
      required: true, // Indica que el campo 'user' es obligatorio.
    },
  },
  {
    timestamps: true, // Añade campos 'createdAt' y 'updatedAt' automáticamente.
  }
);

export default mongoose.model('Tweet', tweetSchema);
// Crea y exporta el modelo 'Tweet' basado en el esquema 'tweetSchema'.
