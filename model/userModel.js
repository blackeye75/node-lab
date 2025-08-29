import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    madienname: {
      type: String,
      required: true
    }
  },
  address: {
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    stateCode: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
    },
  }
})

export default User = mongoose.model("User", userSchema);