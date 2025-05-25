from flask import Flask,request,jsonify,render_template
import pickle
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from flask_mail import Mail
import os
from dotenv import load_dotenv


# import ridge regression and standard scalar pickle

ridge_model = pickle.load(open('models/ridge.pkl', 'rb'))
standard_scaler = pickle.load(open('models/scaler.pkl', 'rb'))



application = Flask(__name__)
app = application

app.config.update(
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_PORT = '465',
    MAIL_USE_SSL = True,
    MAIL_USERNAME = os.environ.get("EMAIL_USER"),
    MAIL_PASSWORD = os.environ.get("EMAIL_PASS")
)
mail = Mail(app)


@app.route('/',methods=['GET','POST'])
def index():
    if request.method=='POST':
        mail.send_message('New message from ' + request.form.get('name'), 
                           sender = os.environ.get("EMAIL_USER"),
                           recipients = [os.environ.get("EMAIL_USER")],
                           body = request.form.get('msg') + "\n" 
                        )
        return render_template('index.html')
    else:
        return render_template('index.html')
        


@app.route('/predict',methods=['GET','POST'])
def predict_datapoint():
    if request.method == "POST":
        Temperature = float(request.form.get('Temperature'))
        RH = float(request.form.get('RH'))
        Ws = float(request.form.get('Ws'))
        Rain = float(request.form.get('Rain'))
        FFMC = float(request.form.get('FFMC'))
        DMC = float(request.form.get('DMC'))
        ISI = float(request.form.get('ISI'))
        Classes = float(request.form.get('Classes'))
        Region = float(request.form.get('Region'))

        new_data_scaled = standard_scaler.transform([[Temperature,RH,Ws,Rain,FFMC,DMC,ISI,Classes,Region]])
        result = ridge_model.predict(new_data_scaled)

        return render_template('predict.html',results=result[0])
    else:
        return render_template('predict.html')


if __name__ == '__main__':
    app.run(debug=True)
