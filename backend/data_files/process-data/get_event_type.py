import json

with open('../dota/DotA-2-The-International-2022/sample-data.json', 'r') as json_file:
    sample_data = json.load(json_file)

for item in sample_data:
    events = item.get("events", [])
    for event in events:
        event_type = event.get("type", "")
        print(f'event: {event_type}')
