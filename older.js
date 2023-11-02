// pdfRouter.post(
//   "/upload-files",
//   isAuthenticated,
//   upload.single("file"),
//   async (req, res) => {
//     try {
//       const file = await new PdfDetails({
//         pdf: req.file.filename,
//         creator: req.user._id,
//       }).save();
//       if (file) {
//         res.status(200).json({ message: "File uploaded successfully", file });
//       } else {
//         res.status(400).json({ message: "unable to process file" });
//       }
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: "internal server error", error });
//     }
//   }
// );

// Get the directory path using 'import.meta.url'
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const destinationPath = path.join(__dirname, "../files");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, destinationPath);
//   },
//   filename: function (req, file, cb) {
//     // const uniqueSuffix = Date.now();
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });
