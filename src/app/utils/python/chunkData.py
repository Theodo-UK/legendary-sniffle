def chunkString(string, window_size, window_jump):
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


def chunkData(data):
    jsons = []
    window_size = 30
    window_jump = 10
    for url, text in data.items():
        chunks = chunkString(text, window_size, window_jump)
        for chunk in chunks:
            json = {}
            json['url'] = url
            json['input_text'] = chunk
            jsons.append(json)
    return jsons


if __name__ == "__main__":
    test_json = {
        "https://url_A": "As an AI language model, I'm not capable of personal experiences.",
        "https://url_B": "However, I can tell you that my purpose is to assist and provide information.",
        "https://url_C": "I am constantly learning and improving my responses."
    }
    jsons = chunkData(test_json)
    for j in jsons:
        print(j)
