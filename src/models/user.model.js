const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, require: true  },
  lastName: { type: String, require: true  },
  emailId: { type: String, require: true  },
  password: { type: String, require: true  },
  createBy: { type: String, require: true  },
  updatedBy: { type: String, require:true },
  createDate: { type : Date, default: Date.now() },
  updatedDate: { type : Date, default: Date.now() },
  isDelete: { type: Boolean, default: false }
});

module.exports = mongoose.model('user', userSchema);
