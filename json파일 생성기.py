# import requests
# import json

# api_key = 'd1bb598d58d938e3a0970d989b45e0e7'
# language = 'ko-KR'
# page = 1
# base_url = 'https://api.themoviedb.org/3/movie/top_rated'

# all_movies = []

# while True:
#     print(f'작동중{page}')
#     url = f'{base_url}?api_key={api_key}&language={language}&page={page}'
#     response = requests.get(url)
#     data = response.json()

#     if 'results' in data:
#         for movie_data in data['results']:
#             movie = {
#                 'model': 'movies.movie',
#                 'fields': movie_data
#             }
#             all_movies.append(movie)

#     # if page >= data['total_pages']:
#     if page >= 50:
#         break

#     page += 1

# # 수집된 데이터를 JSON 파일로 저장
# with open('movies2.json', 'w', encoding='utf-8') as file:
#     json.dump(all_movies, file, ensure_ascii=False, indent=4)


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
        for movie_data in data['results']:
            movie = {
                'model': 'movies.movie',
                'fields': {
                    'id': movie_data['id'],
                    'title': movie_data['title'],
                    'release_date': movie_data['release_date'],
                    'popularity': movie_data['popularity'],
                    'vote_count': movie_data['vote_count'],
                    'vote_average': movie_data['vote_average'],
                    'overview': movie_data['overview'],
                    'poster_path': movie_data['poster_path'],
                    'backdrop_path': movie_data['backdrop_path'],
                    'genres': movie_data['genre_ids'],
                    # 'like_users': [] 
                }
            }
            all_movies.append(movie)

    # if page >= data['total_pages']:
    if page >= 10:
        break

    page += 1

# 수집된 데이터를 JSON 파일로 저장
with open('movies.json', 'w', encoding='utf-8') as file:
    json.dump(all_movies, file, ensure_ascii=False, indent=4)