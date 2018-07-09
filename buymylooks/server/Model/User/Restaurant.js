let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Basic User Schema for Google Authentication
const restaurantSchema = new Schema({
    email: {
        type: String,
        required: [true, 'email required'],
        unique: [true, 'email already registered']
    },
    name: {
        type: String,
        required: [true, 'name required']
    },
    //#todo add secure methoord for password storing
    admin: {
        type: Boolean,
        default: false
    },
    created_at: Date,
    updated_at: Date,
    googleId: {
        type: String,
        default: null
    }
});



restaurantSchema.methods.customFun= function () {
    // add some stuff to the users name
    // this.name = this.name + '-dude';

    return '';
};

// on every save, add the date
restaurantSchema.pre('save', function (next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

module.exports = mongoose.model('restaurantSchema', restaurantSchema);