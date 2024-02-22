
import { ImageList, ImageListItem } from "@mui/material"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { getBook } from "../../utils/api/authors";
export default function SpaceCraft() {
  const router = useRouter()
  const { bookId } = router.query


  const [bookData, setBookData] = useState([])



  useEffect(() => {

    getBook(bookId).then((data) => {
      console.log(data)
      if (data != null) {
        setBookData(data)

      }
    })
  }, [bookId])
 


  if (!bookData.covers) {
    return <>
      <Container sx={{ paddingTop: 2 }} component="main">
        <Navbar />
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={10}>

            <Typography
              variant="h3"
              align="center"
            >{bookData.title}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant="h5"
              align="center"

            >No Covers for this Book</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  }
  return (
    <Container sx={{ paddingTop: 2 }} component="main">
      <Navbar />

      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={10}>

          <Typography
            variant="h3"
            align="center"
          >{bookData.title}
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography
            variant="h5"
            align="center"

          >Covers</Typography>
        </Grid>
        <Grid item xs={6} >

          <ImageList sx={{ width: 500 }} cols={3} >
            {bookData.covers.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={`https://covers.openlibrary.org/b/id/${item}-M.jpg?w=164&h=164&fit=crop&auto=format`}

                />
              </ImageListItem>

            ))}

          </ImageList>
        </Grid>

      </Grid>
    </Container>


  )
}
