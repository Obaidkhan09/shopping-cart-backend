import mongoose from 'mongoose';
const { Schema } = mongoose;

const productsSchema = new Schema({
    name : String,
    description : String,
    img : String,
    price : String,
});
export default mongoose.model('Product', productsSchema);