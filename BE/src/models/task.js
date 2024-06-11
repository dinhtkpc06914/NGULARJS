const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  project_id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  assignee_id: { type: Schema.Types.ObjectId, required: true },

  status: { type: String, enum: ['Đang chờ', 'Đang tiến hành', 'Đã hoàn thành'], required: true },
  priority: { type: String, enum: ['Thấp', 'Trung bình', 'Cao'], required: true },

  start_date: { type: Date, required: true },
  due_date: { type: Date, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);
