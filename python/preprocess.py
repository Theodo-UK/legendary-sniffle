import json
from scraper import scrape
from cleanText import cleanScrapedText
from chunkText import chunkText
import os


if __name__ == "__main__":
    output_folder = 'data'

    with open('python/urls.txt') as f:
        start_urls = f.readlines()

    print("Scraping URLs...")
    scraped_data = scrape(start_urls)

    for page in scraped_data:
        clean_text = cleanScrapedText(page['article_info_text'])
        page['article_info_text'] = clean_text

    chunked_text = chunkText(scraped_data)

    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    print("Writing chunks to chunks.json")
    with open(os.path.join(output_folder, 'chunks.json'), 'w+') as f:
        json.dump(chunked_text, f, ensure_ascii=False, indent=4)
