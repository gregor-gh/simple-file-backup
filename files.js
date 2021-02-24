const fs = require("fs")

// read array of files stored in upload folder
const readFiles = async (res) => {
  try {
    returnData2 = await fs.readdir(process.cwd() + "/uploads",(err, data) => {
      res.send(data)
    })
  } catch (error) {
    console.log(error)
  }
}

// delete file from upload folder
const deleteFile = async (res, file) => {
  try {
    await fs.unlink(file,(err) => {
      if(err) throw err
    })
  } catch (error) {
    console.log(error)
  }
  
}

// helper function to decode URI and set file path
const getFilePath = (fileURI) => {
  const file = decodeURI(fileURI)
  const filePath = `${process.cwd()}/uploads/${file}`; 
  return filePath
}

module.exports = { readFiles, deleteFile, getFilePath }