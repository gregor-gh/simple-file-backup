
const FileList = ({ fileList, downloadSubmit, deleteFile }) => {
// loop through file list, creating a line for each one
  const list = fileList.map((el,index) => {
    return (
      <div class="list-item" key={index}>      
        <label>{el}</label>
        <button value={el} type="submit" onClick={downloadSubmit}>
          Download
        </button>
        <button value={el} onClick={deleteFile}>
          Delete
        </button>
      </div>

    )
  })

  return (
    <div id="file-list">
      {list}
    </div>
  )
}

export default FileList
