import requests
import json

api_key = 'd1bb598d58d938e3a0970d989b45e0e7'
language = 'ko-KR'
page = 1
base_url = 'https://api.themoviedb.org/3/movie/top_rated'

all_movies = []

while True:
    print(f'작동중{page}')
    url = f'{base_url}?api_key={api_key}&language={language}&page={page}'
    response = requests.get(url)
    data = response.json()

    if 'results' in data:
        all_movies.extend(data['results'])

    # if page >= data['total_pages']:
    if page >= 2:
        break

    page += 1

# 수집된 데이터를 JSON 파일로 저장
with open('movies.json', 'w', encoding='utf-8') as file:
    json.dump(all_movies, file, ensure_ascii=False)
