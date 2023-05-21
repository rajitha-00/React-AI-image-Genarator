import React from 'react'
import './App.css'
import { Divider, IconButton, InputBase, InputLabel, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const App = () => {
  const getImages = async() =>{
    try{
      const options = {
        method: "POST",
        body: JSON.stringify({

          message: "Bulgh"
        }),
        headers:{
          "Content-Type": "application/json"
        }
      }
      const response = await fetch('http://localhost:8000/images', options)
      const data = await response.json()
    }catch(err){
      console.error(err)
    }
  }
  return (
    <>
    <section>

      <h1>
        Start with detailed description 
        <span>
        Surpirse
        </span>
      </h1>
      <Paper
        className='searchBox'
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
        <InputBase
          className='searchinput'
          sx={{ ml: 1, flex: 1 }}
          placeholder="Start with detailed description"
          inputProps={{ 'aria-label': 'search google maps' }}
    
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton onClick={getImages} type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        
      </Paper>
    </section>
    <section>
      <div className="imageSection"></div>
    </section>
    </>
  )
}

export default App
