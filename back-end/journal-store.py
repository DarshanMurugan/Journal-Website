#from fastapi import FastAPI
#from pydantic import BaseModel
#from fastapi.middleware.cors import CORSMiddleware
import django






'''mycon = mysql.connector.connect(host = 'localhost',user = 'root', passwd = '5046')

cursor = mycon.cursor()




cursor.execute('USE  JOURNAL;')




name_list = []

app = FastAPI()

class User(BaseModel):
  username: str

class Posts(BaseModel):
  post: str
  tittle: str


app.add_middleware(
  CORSMiddleware,
  allow_origins = ["http://localhost:5173"],
  allow_credentials = True,
  allow_methods = ["*"],
  allow_headers = ["*"],  
)

@app.get("/")
def get_gud():
  return {"message":"SUCESSSS!!!!"}



@app.post("/name")
def post_name(user: User):
  name_list.append(user.username)
  print(name_list)


@app.get("/past-entries")
def get_posts():
  cursor.execute("SELECT TITTLE FROM ENTRIES")
  return  list(cursor.fetchall())




@app.post("/post-entry")
def get_entry(Posts:Posts):

  cursor.execute("select * from entries")
  id_value = len(cursor.fetchall()) +1

  cursor.execute("insert into entries values({},'{}','{}','{}')".format(id_value,'2025-01-01',Posts.tittle,Posts.post))
  print(Posts.post)

    
# id date tittle post 

if __name__ == "__main__":
  import uvicorn
  uvicorn.run(app)'''