import mongoose from 'mongoose';

const QsnSchema = new mongoose.Schema({
  qsn: { type: String, required: true },
});

export default mongoose.models.Qsn || mongoose.model('Qsn', QsnSchema);