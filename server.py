import flask
from flask import request
from flask_cors import CORS
import requests

app = flask.Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

@app.route('/lighton', methods=['GET'])
def lighton():
    lighton = requests.get('http://192.168.1.237/lighton')
    return "lighton"

@app.route('/lightoff', methods=['GET'])
def lightoff():
    lightoff = requests.get('http://192.168.1.237/lightoff')
    return "lightoff"

@app.route('/status', methods=['GET'])
def status():
    status = requests.get('http://192.168.1.237/status')
    return status.text

app.run(host="0.0.0.0")