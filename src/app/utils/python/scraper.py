import logging
from typing import List, Dict
from scrapy import Spider
from scrapy.crawler import CrawlerProcess


class MySpider(Spider):
    name = 'spider'

    def parse(self, response):
        title = response.css('title::text').get()
        article_info = response.css("article#info")
        article_info_text = article_info.css("::text").getall()
        # produces a dictionary for each page
        item = {
            'url': response.url,
            'article_info_text': article_info_text
        }
        yield self.output_callback(item)


class Crawler:
    def __init__(self, log_level=logging.CRITICAL):
        self.process = CrawlerProcess(settings={
            'LOG_LEVEL': log_level,
            'LOG_ENABLED': True if log_level > logging.NOTSET else False
        })
        self.scraped_items = []

    def process_item(self, item):
        self.scraped_items.append(item)
        return item

    def spawn(self, **kwargs):
        self.process.crawl(
            MySpider, output_callback=self.process_item, **kwargs)

    def run(self):
        self.process.start()


def scrape(start_urls: List[str]) -> List[Dict]:
    crawler = Crawler()
    crawler.spawn(start_urls=start_urls)
    crawler.run()
    return crawler.scraped_items
