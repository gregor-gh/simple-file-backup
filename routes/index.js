var express = require('express');
var router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({destination: "./uploads/",   filename: function (req, file, cb) {
  cb(null, file.originalname)
}, limits: {fileSize: 1048576}})
const upload = multer({ storage: storage })
const files = require("../files.js")


router.post('/api/fileanalyse', upload.single("upfile"), function(req, res, next) {
  res.redirect("/")
});

router.get("/api/filelist", (req, res) => {
  files.readFiles(res)
})
// TODO finish this off tomorrow

router.get('/api/download/:file', function(req, res){
  const filePath = files.getFilePath(req.params.file)
  res.download(filePath, (err) => {
    if(err)
      res.status(500).send({
        error: "Could not download file: "+err
      })
  })
});

router.delete("/api/download/:file", async (req, res) => {
  const filePath = files.getFilePath(req.params.file)
  await files.deleteFile(res, filePath)
  res.redirect("/")
})


module.exports = router;
