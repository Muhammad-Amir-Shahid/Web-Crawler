const express = require("express");
// const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");

const app=express();
const PORT = 5000;
app.get("/scrape", async (req, res) => {
    try {
      const { data } = await axios.get("https://www.bbc.com/news");
      const $ = cheerio.load(data);
      const articles = [];
  
      $(".gs-c-promo-heading").each((index, element) => {
        const title = $(element).text();
        const link = $(element).attr("href");
        const summary = $(element).siblings(".gs-c-promo-summary").text();
  
        articles.push({ title, link: `https://www.bbc.com${link}`, summary });
      });
  
    //   await News.insertMany(articles);
      res.json({ message: "Scraping completed", articles });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Scraping failed" });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });