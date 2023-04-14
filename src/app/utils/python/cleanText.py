import re


def cleanScrapedText(text):
    text_stripped = [t.strip() for t in text if t.strip()]
    text_joined = "".join(text_stripped)
    text_regexed = re.sub(r"([\n+\r+])", " ", text_joined)
    text_quotes = re.sub('"', "'", text_regexed)
    return text_quotes
