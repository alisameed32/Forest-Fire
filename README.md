# 🔥 Algerian Forest Fire Prediction using Machine Learning

This project predicts the risk of forest fires in Algeria using various machine learning models, with **Ridge Regression** identified as the best-performing algorithm. It follows a complete ML pipeline and is deployed as a Flask web application with a responsive frontend.

> This project is part of the **"OpenAI Data Science and Machine Learning"** course by **Krish Naik** on **Udemy**.

---

## 📁 Project Structure

```
├── application.py           # Flask backend
├── dataset/                 # Algerian Forest Fire datasets
├── models/                  # Pickle files for trained models
│   ├── ridge.pkl
│   └── scaler.pkl
├── notebooks/               # Jupyter notebooks for EDA & training
├── static/                  # Static frontend files
│   ├── assets/img/
│   ├── css/styles.css
│   ├── js/script.js
│   └── favicon.ico
├── templates/               # HTML templates (Jinja2)
│   ├── index.html
│   ├── layout.html
│   └── predict.html
├── .env
├── .gitignore
├── README.md
├── requirements.txt
└── venv/                    # Virtual environment
```

---

## 📌 About This Project

The project uses the **Algerian Forest Fires Dataset** and applies a full machine learning lifecycle including:

- Data Cleaning & Preprocessing
- Exploratory Data Analysis (EDA)
- Feature Engineering
- Model Training & Evaluation
- Model Deployment using Flask

### ✅ Final Model:
After experimenting with several regression algorithms:

- Linear Regression  
- LASSO / LASSO-CV  
- Ridge / Ridge-CV  
- ElasticNet / ElasticNet-CV  

The **Ridge Regression** model gave the best performance and was selected for deployment. It is saved as a `ridge.pkl` file, and a `scaler.pkl` is used for consistent feature scaling.

---

## 📊 Technologies & Libraries Used

### 🧠 Machine Learning
- `scikit-learn`
- `pandas`
- `numpy`

### 📈 Visualization
- `matplotlib`
- `seaborn`

### 🌐 Web Development
- `Flask`
- `HTML`, `CSS`, `JavaScript`, `Bootstrap`
- Media Queries for responsive design
- `Flask-Mail` for future email features

### 🔧 Dev Tools
- `Git`, `GitHub`
- `.env` file for environment variables

---

## 🚀 How to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/forest-fire-prediction.git
   cd forest-fire-prediction
   ```

2. **Create and activate a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate   # Linux/Mac
   venv\Scripts\activate      # Windows
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask app**
   ```bash
   python application.py
   ```

5. **Open your browser**
   ```
   http://127.0.0.1:5000/
   ```

---

## 🚧 Future Plans

- ✅ Deploy to **AWS Elastic Beanstalk**
- 🔁 Set up **AWS CodePipeline** for CI/CD automation

---


## 📬 Contact

**Ali Sameed**  
📧 alisameed.ds@gmail.com
🌐 https://www.linkedin.com/in/alisameed
