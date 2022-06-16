from flask import Flask
from flask_mongoengine import MongoEngine

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'host': 'cluster0.aiybf.mongodb.net',
    'db': 'cluster0',
    'username':'admin',
    'password':'yKnc7la4ZznKZ92d'
}
db = MongoEngine()
db.init_app(app)

@app.route("/")
def hello_world():
    return "<p>Hallo Welt!</p>\n<p>Du hast den Weg hinter die Kulissen von my.awesomeBible gefunden. Das sollte normalerweise nicht passieren.<p> <p><a href=\"https://my.awesomeBible.de\">Klicke hier um wieder zurück zu my.awesomeBible zu gelangen,</a> <a href=\"https://codeberg.org/awesomebible/my-backend/issues\"><i>oder klicke hier um einen Fehler zu melden.</i></a></p>"

@app.route("/login")
def login():
    return

@app.route("/reset-password")
def resetpassword():
    return

@app.route("/post/new")
def post():
    return

@app.route("/timeline")
def timeline():
    return

@app.route("/read")
def read():
    return

@app.route("/remember")
def remember():
    return