import './App.css';
import Header from "./components/Header.js"
import Uploader from './components/Uploader.js';
import FileList from "./components/FileList.js"
import { useState, useEffect } from "react"
import React from 'react'

const App = () => {

  const [ fileList, setFileList ] = useState([])

  const getFiles = async () => {
    const response = await fetch("/api/filelist")
    const data = await response.json()
    setFileList(data)
  }

  const downloadSubmit = async (e) => {
    try {
      // get file response from api
      const file = e.target.value
      const fileURI = encodeURI(file)
      const response = await fetch(`/api/download/${fileURI}`)

      // download file url
      window.open(response.url)

    } catch (error) {
      console.log(error)
    }
  }

  const deleteFile = async (e) => {
    try {
      // set file and method to DELETE
      const file = e.target.value
      const fileURI = encodeURI(file)
      const options = {
        "method": "DELETE"
      }

      // send delete request
      await fetch(`/api/download/${fileURI}`,options)

      // refresh file list
      getFiles()

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFiles()
  },[])

  return (
    <div id="app">
      <Header />
      <Uploader />
      <FileList 
        fileList={fileList} 
        downloadSubmit={downloadSubmit} 
        deleteFile={deleteFile}/>
    </div>
  )
}

export default App