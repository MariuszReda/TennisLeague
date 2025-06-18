import { Card, CardContent, Grid, Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import type { News } from "../../model/News";
import { MockNews } from "../layout/Mock/MockNews";

const ITEMS_PER_PAGE = 2;

export default function Dashboard() {

    const [news, setNews] = useState<News[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

 useEffect(() => {
    const fakeNews = MockNews;


    setNews(fakeNews);
  }, []);


  const startIndex = (currentPage-1) * ITEMS_PER_PAGE;
  const currenItems = news.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(news.length / ITEMS_PER_PAGE);

  return (
    <>            
    <Typography variant="h2">Aktualności</Typography>
    <Grid container spacing={2}>
    {currenItems.map((news)=>
        <Grid key={news.id} size={6}>
            <Card sx={{ minHeight: 200, p: 2 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                {news.type}
                </Typography>
                <Typography>{news.message}</Typography>
                <Typography>{news.timestamp}</Typography>
            </CardContent>
            </Card>
        </Grid>
    )}
    </Grid>

          <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={(_, page) => setCurrentPage(page)}
          color="primary"
        />
      </Grid>

    </>
    
  );
}

