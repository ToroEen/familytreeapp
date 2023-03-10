from flask import render_template
from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

app.config['TEMPLATES_AUTO_RELOAD'] = True

if __name__ == "__main__":
	app.run(
        debug=True,
        host='0.0.0.0'
	)