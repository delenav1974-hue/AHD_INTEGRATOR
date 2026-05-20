import re
import json

def extract_translations(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    translations = {}
    
    # data-t="..."
    tags = re.findall(r'data-t="([^"]+)"[^>]*>(.*?)<', content, re.DOTALL)
    for key, val in tags:
        translations[key] = val.strip()
        
    # data-t-content="..."
    attrs = re.findall(r'data-t-content="([^"]+)"[^>]*content="([^"]+)"', content)
    for key, val in attrs:
        translations[key] = val.strip()
        
    # data-t-placeholder="..."
    placeholders = re.findall(r'data-t-placeholder="([^"]+)"[^>]*placeholder="([^"]+)"', content)
    for key, val in placeholders:
        translations[key] = val.strip()
        
    return translations

if __name__ == "__main__":
    path = r'landing/index.html'
    trans = extract_translations(path)
    with open('landing/ru_keys.json', 'w', encoding='utf-8') as f:
        json.dump(trans, f, ensure_ascii=False, indent=2)
    print("Done!")
