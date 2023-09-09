import json

with open('../dota/DotA-2-The-International-2022/2364966_events.jsonl', 'r') as jsonl_file:
    for num, line in enumerate(jsonl_file):
        data = json.loads(line)
        print(type (data["events    "]))
        # events = data.get("events", [])


        if num == 2:
            break

        # events = line.get("events", [])
        # for event in events:
        #     event_type = event.get("type", "")
        #     print(event_type)

# for line in data:
#     item = json.loads(line)
#     print(line)
#     events = item.get("events", [])
#     for event in events:
#         event_type = event.get("type", "")
#         print(f'event: {event_type}')
