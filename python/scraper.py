import logging
from typing import List, Dict
from scrapy import Spider
from scrapy.crawler import CrawlerProcess


class MySpider(Spider):
    name = 'spider'

    def parse(self, response):
        components = ["article#info", "article#faq", ".content-page__content", ".container", ".investor-relations__content", ".app", ".investor-relations__content"]
        scraped_text = [""]

        for component in components:
            scraped_text += response.css(component).css("::text").getall()
            
        # produces a dictionary for each page
        item = {
            'url': response.url,
            'article_info_text': scraped_text
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
        if item['article_info_text']:
            self.scraped_items.append(item)
            print(f"URL successfully scraped: {item['url']}")
        else:
            print(f"Unable to scrape this URL: {item['url']}")
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
