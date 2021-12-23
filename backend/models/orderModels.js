const mongoose = require("mongoose");
const orderShema = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: [true, "Please enter 'shippingInfo' detail : address"],
    },
    city: {
      type: String,
      required: [true, "Please enter 'shippingInfo' detail : city"],
    },
    state: {
      type: String,
      required: [true, "Please enter 'shippingInfo' detail : state"],
    },
    country: {
      type: String,
      required: [true, "Please enter 'shippingInfo' detail : country"],
    },

    pinCode: {
      type: Number,
      required: [true, "Please enter 'shippingInfo' detail : pinCode"],
    },

    phoneNo: {
      type: Number,
      required: [true, "Please enter 'shippingInfo' detail : phoneNo"],
    },
  },

  orderItems: [
    {
      name: {
        type: String,
        required: [true, "Please enter 'orderItems' details : name"],
      },

      price: {
        type: Number,
        required: [true, "Please enter 'orderItems' details : price"],
      },
      quantity: {
        type: Number,
        required: [true, "Please enter 'orderItems' details : quantity"],
      },
      image: {
        type: String,
        required: [true, "Please enter 'orderItems' details : image"],
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  paymentInfo: {
    id: {
      type: String,
      required: [true, "Please enter 'paymentInfo' : id"],
    },
    status: {
      type: String,
      required: [true, "Please enter 'paymentInfo' : status"],
    },
  },
  paidAt: {
    type: Date,
    required: [true, "Please enter  'paidAt'"],
  },
  itemsPrice: {
    type: Number,
    required: [true, "Please enter  'itemsPrice'"],
    default: 0,
  },
  taxPrice: {
    type: Number,
    required: [true, "Please enter  'taxPrice'"],
    default: 0,
  },
  shippingPrice: {
    type: Number,
    required: [true, "Please enter  'shippingPrice'"],
    default: 0,
  },
  totalPrice: {
    type: Number,
    required: [true, "Please enter 'totalPrice'"],
    default: 0,
  },

  orderStatus: {
    type: String,
    required: [true, "Please enter 'orderStatus'"],
    default: "processing",
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderShema);
