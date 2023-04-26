export default [
  {
    url: '/api/todo/list',
    method: 'get',
    response: () => ([
      {
        "userId": 1,
        "id": 1,
        "content": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "content": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "content": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "content": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "content": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      }
    ])
  }
]