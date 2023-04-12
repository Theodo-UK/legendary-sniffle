import json
import re

def removeUnnecessaryPhrases(data):
  # Remove phrase "Did you find this helpful? YES | NO CLOSE"
  phrase = "Did you find this helpful? YES | NO\nCLOSE"
  return data.replace(phrase, "")

def replaceNewlines(data):
  regexExp = "\n+"
  return re.sub(regexExp, " ", data)

def cleanData():
  fo = open('../../data/scraped-data.json')
  data = json.load(fo)

  cleanJson = {}
  for key, value in data.items():
    cleanText = removeUnnecessaryPhrases(value)
    cleanJson[key] = replaceNewlines(cleanText)

  return cleanJson
