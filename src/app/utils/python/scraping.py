import scrapy
import re
from scrapy.crawler import CrawlerProcess


class Spider(scrapy.Spider):
    name = 'spider'
    start_urls = ['https://wizzair.com/en-gb/information-and-services/booking-information/how-to-book', 'https://wizzair.com/en-gb/information-and-services/booking-information/check-in-and-boarding', 'https://wizzair.com/en-gb/information-and-services/booking-information/changing-your-reservation']

    def parse(self, response):
        title = response.css('title::text').get() # might be useful in the future?

        article_info = response.css("article#info")
        article_info_text = article_info.css("::text").getall()
        article_info_text_clean = clean_scraped_text(article_info_text)

        print("NEW PAGE")
        print(response.url)
        print(repr(article_info_text_clean))
        print('\n\n\n')

        return {
            'url': response.url,
            'article_info_text': article_info_text_clean
        }

def clean_scraped_text(text):
    text_stripped = [t.strip() for t in text if t.strip()]
    text_joined = "".join(text_stripped)
    text_regexed = re.sub(r"([\n+\r+])", " ", text_joined)
    text_quotes = re.sub('"', "'", text_regexed)
    return text_quotes

def handle_scraped_pages(result):
    print('handling scraped pages')
    print(result)

if __name__ == "__main__":
    process = CrawlerProcess(settings={
        'LOG_LEVEL': 'CRITICAL'
    })
    deffered = process.crawl(Spider)
    deffered.addCallback(handle_scraped_pages)
    process.start() # the script will block here until the crawling is finished
