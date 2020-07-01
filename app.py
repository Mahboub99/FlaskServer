from flask import Flask, render_template
from Get.get import get
from Post.post import post


app = Flask(__name__)
app.register_blueprint(get, url_prefix='/api')
app.register_blueprint(post, url_prefix='/api')


@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')
