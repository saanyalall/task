import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function Section() {

    const itemData = [
        {
          img: '/website-3374825_640.jpg',
          title: 'Breakfast',
        },
        {
          img: '/training-1651259_640.jpg',
          title: 'Burger',
        },
        {
          img: '/ai-generated-8188691_640.jpg',
          title: 'Camera',
        },
        {
            img: '/search-engine-optimization-4111000_640.jpg',
            title: 'Camera',
          },
          {
            img: '/digital-marketing-1433427_640.jpg',
            title: 'Camera',
          },
    ]

  return (
    <div style={{backgroundColor:"#222727",color:"white", textAlign:"center"}}>
        <h1 style={{padding:"2rem"}}>Find the connections here!</h1>
        <img src="/people-3175027_640.jpg" alt="" style={{height:"14rem",width:"33rem", borderRadius:"33px"}} />
        <h2 style={{padding:"4rem", fontSize:"2rem"}}>Make your career growth in </h2>

        <ImageList sx={{ width:"72rem", height: 250, margin:"auto"}} cols={5} rowHeight={170}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  )
}
