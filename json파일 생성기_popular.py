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



# import requests

# url = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1"

# headers = {
#     "accept": "application/json",
#     "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWJiNTk4ZDU4ZDkzOGUzYTA5NzBkOTg5YjQ1ZTBlNyIsInN1YiI6IjYzZDMxNzg4Y2I3MWI4MDA4OTZjZTJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S516WsCg3sp0Tcu-cVg8KZ-x4DoOktLMia0mx0cZODU"
# }

# response = requests.get(url, headers=headers)

# print(response.text)


import requests
import json

api_key = 'd1bb598d58d938e3a0970d989b45e0e7'
language = 'ko-KR'
page = 1
# base_url = 'https://api.themoviedb.org/3/movie/top_rated'
base_url = 'https://api.themoviedb.org/3/movie/popular'



all_movies = []

while True:
    print(f'작동중{page}')
    url = f'{base_url}?api_key={api_key}&language={language}&page={page}'
    response = requests.get(url)
    data = response.json()

    if 'results' in data:
        for movie_data in data['results']:
            ####
            # youtube 영상을 들고오기 위한 key 꺼내기
            url = f"https://api.themoviedb.org/3/movie/{movie_data['id']}/videos?language=ko-KR"
            headers = {
                "accept": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWJiNTk4ZDU4ZDkzOGUzYTA5NzBkOTg5YjQ1ZTBlNyIsInN1YiI6IjYzZDMxNzg4Y2I3MWI4MDA4OTZjZTJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S516WsCg3sp0Tcu-cVg8KZ-x4DoOktLMia0mx0cZODU"
            }
            response = requests.get(url, headers=headers)
            video_data = response.json()
            video_key = video_data['results'][0]['key'] if 'results' in video_data and len(video_data['results']) > 0 else None

            ####
            if video_key is not None:
                movie = {
                    'model': 'movies.movie',
                    'fields': {
                        'id': movie_data.get('id'),
                        'title': movie_data.get('title', ''),
                        'release_date': movie_data.get('release_date'),
                        'popularity': movie_data.get('popularity'),
                        'vote_count': movie_data.get('vote_count'),
                        'vote_average': movie_data.get('vote_average'),
                        'overview': movie_data.get('overview'),
                        'poster_path': movie_data.get('poster_path'),
                        'backdrop_path': movie_data.get('backdrop_path'),
                        'genres': movie_data.get('genre_ids'),
                        'key': video_key
                        # 'like_users': [] 
                    }
                }
                all_movies.append(movie)

    # if page >= data['total_pages']:
    if page >= 500:
        break

    page += 1

# 수집된 데이터를 JSON 파일로 저장
with open('movies_popular_500page.json', 'w', encoding='utf-8') as file:
    json.dump(all_movies, file, ensure_ascii=False, indent=4)