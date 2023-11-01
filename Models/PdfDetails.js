import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;
const pdfDetailsSchema = new mongoose.Schema({
  pdf: String,
  creator: {
    type: ObjectId,
    ref: "user",
  },
});

export const PdfDetails = mongoose.model("PdfDetails", pdfDetailsSchema);
