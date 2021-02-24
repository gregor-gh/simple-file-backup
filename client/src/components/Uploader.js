//<form encType="multipart/form-data" method="POST" onSubmit={uploadFile}>

const Uploader = () => {
  return (
    <div id="uploader">      
      <form encType="multipart/form-data" method="POST" action="/api/fileanalyse" >
        <input id="inputfield" type="file" name="upfile"/>
        <input id="button" type="submit" value="Upload" />
      </form>
    </div>
  )
}

export default Uploader
