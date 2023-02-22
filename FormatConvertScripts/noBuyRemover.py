
import json

f = open("data.json", "r")
data = json.load(f)

counter = 0

new_list = [obj for obj in data if(obj["buyNowPrice"] != 0)]
print(len(new_list))
print(len(data))

with open("removedNoBuyNow.json", "w") as outfile:
    json.dump(new_list, outfile)
    