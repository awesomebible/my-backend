from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hallo Welt!</p>\n<p>Du hast den Weg hinter die Kulissen von my.awesomeBible gefunden. Das sollte normalerweise nicht passieren.<p> <p><a href=\"https://my.awesomeBible.de\">Klicke hier um wieder zurück zu my.awesomeBible zu gelangen,</a> <a href=\"https://codeberg.org/awesomebible/my-backend/issues\"><i>oder klicke hier um einen Fehler zu melden.</i></a></p>"

@app.route("/login", methods=['POST'])
def login():
    return

@app.route("/reset-password", methods=['POST'])
def resetpassword():
    return

@app.route("/post/new", methods=['POST'])
def post():
    return request.args.get("content")

@app.route("/timeline")
def timeline():
    return

@app.route("/read")
def read():
    return

@app.route("/remember")
def remember():
    return