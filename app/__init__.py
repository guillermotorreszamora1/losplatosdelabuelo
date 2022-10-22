from flask import Flask, redirect
app = Flask(__name__,template_folder='templates', static_url_path="/", static_folder="static")
@app.route('/',methods=["GET","POST"])
def vista_principal():
  return redirect('/index.html');
