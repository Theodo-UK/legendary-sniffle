import json
from typing import List, Dict


def chunkString(string: str, window_size: int, window_jump: int) -> List[str]:
    start_pos = 0
    end_pos = start_pos + window_size
    chunks = []
    while end_pos < len(string):
        chunk = string[start_pos:end_pos]
        chunks.append(chunk)
        start_pos += window_jump
        end_pos = start_pos + window_size
    if end_pos > len(string):
        end_chunk = string[start_pos:-1]
        chunks.append(end_chunk)
    return chunks


def chunkText(scraped_pages: List[Dict[str, str]]) -> List[str]:
    # Parameters:
    #   scraped_pages: The lsit of python dictionaries, where each dictionary has two keys, url and article_info_text
    # Returns:
    #   jsons: The list of JSON strings with attributes url and input_text, where input_text is a chunk of the artcile_info_text with length window_size. (Note: return list of JSON strings rather than JSON objects)
    jsons = []
    window_size = 30
    window_jump = 10
    for page in scraped_pages:
        chunks = chunkString(page['article_info_text'],
                             window_size, window_jump)
        for chunk in chunks:
            d = {}
            d['url'] = page['url']
            d['input_text'] = chunk
            j = json.dumps(d)  # force strings to be enclosed in double quotes
            jsons.append(j)
    return jsons


# For testing only
if __name__ == "__main__":
    test_jsons = [
        {'url': "https://url_A",
         'article_info_text': "As an AI language model, I'm not capable of personal experiences."},
        {'url': "https://url_B",
         'article_info_text': "However, I can tell you that my purpose is to assist and provide information."},
        {'url': "https://url_C",
         'article_info_text': "I am constantly learning and improving my responses."}
    ]
    jsons = chunkText(test_jsons)
    # for j in jsons:
    #     print(j)
