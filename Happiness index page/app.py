from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo

app = Flask(__name__)
mongo = PyMongo(app, uri="mongodb://localhost:27017")
# conn = 'mongodb://localhost:27017'
# client = PyMongo.MongoClient(conn)
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/map")
def map():
    return render_template("map.html")  

@app.route("/graph")
def graph():
    return render_template("graph.html") 

@app.route("/happy")
def happy():
    return render_template("happy.html") 

@app.route("/sad")
def sad():
    return render_template("sad.html")  

@app.route("/comparison")
def comparison():
    return render_template("comparison.html") 

@app.route("/status")
def status():
    return render_template("status.html")                  

if __name__ == "__main__":
    app.run(debug=True)
