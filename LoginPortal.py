from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def lp():
    return render_template('C:/Users/Aditya Sharma/Desktop/HackIndore/templates/LoginPortal.html')
if __name__=='__main__':
    app.run(debug=True)