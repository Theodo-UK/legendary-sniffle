import json
from typing import List, Dict


def chunkString(string: str, window_size: int, window_jump: int) -> List[str]:
    start_pos = 0
    end_pos = start_pos + window_size
    chunks = []
    while end_pos <= len(string):
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
            data = {}
            data['url'] = page['url']
            data['input_text'] = chunk
            # force strings to be enclosed in double quotes
            j = json.dumps(data)
            jsons.append(j)
    return jsons
