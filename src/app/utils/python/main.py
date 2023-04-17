import json
from scraper import scrape
from cleanText import cleanScrapedText
from chunkText import chunkText


if __name__ == "__main__":

    start_urls = ['https://wizzair.com/en-gb/information-and-services/booking-information/how-to-book', 'https://wizzair.com/en-gb/information-and-services/booking-information/check-in-and-boarding',
                  'https://wizzair.com/en-gb/information-and-services/booking-information/changing-your-reservation']

    scraped_data = scrape(start_urls)

    for page in scraped_data:
        clean_text = cleanScrapedText(page['article_info_text'])
        page['article_info_text'] = clean_text

    chunked_text = chunkText(scraped_data)

    with open('../../../data/chunks.json', 'w+') as f:
        json.dump(chunked_text, f, ensure_ascii=False, indent=4)
