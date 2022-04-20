from flask import Flask, render_template,request,jsonify
import os
import base64
from PIL import Image
from io import BytesIO

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/')
def home():
    message = "The Flask Shop"
    return render_template('index.html', message=message)

if __name__ == '__main__':
   app.run(host="0.0.0.0",port=7000)