from flask import Flask,render_template,request,abort
# This import package for mysql
from flask_mysqldb import MySQL
# import json to load json data to python dictionary
from flask import jsonify
import json
# urllib.request to make a request to api
#import urllib.request
import time
from urllib.request import DataHandler

app = Flask(__name__)


# Mysql configuration

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Kotravan@2015'
app.config['MYSQL_DB'] = 'userdb'

mysql = MySQL(app)



 
def tocelcius(temp):
    return str(round(float(temp) - 273.16,2))

#@app.route('/weather',methods=['POST','GET'])
@app.route('/form', methods=['POST','GET'])
def weather():
    api_key = '7bf9342e173b2086f34217715aa97a49'
    if request.method == 'POST':
        city = request.form['city']
    else:
        #for default name mathura
        city = 'mathura'

    # source contain json data from api
    try:
        source = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+api_key).read()
    except:
        return abort(404)
    # converting json data to dictionary

    list_of_data = json.loads(source)

    # data for variable list_of_data
    data = {
        "country_code": str(list_of_data['sys']['country']),
        "coordinate": str(list_of_data['coord']['lon']) + ' ' + str(list_of_data['coord']['lat']),
        "temp": str(list_of_data['main']['temp']) + 'k',
        "temp_cel": tocelcius(list_of_data['main']['temp']) + 'C',
        "pressure": str(list_of_data['main']['pressure']),
        "humidity": str(list_of_data['main']['humidity']),
        "cityname":str(city),
    }
    return render_template('index.html',data=data)
    #return render_template('index.html',data=data)
 
def new_func(dataDict):
    return jsonify(dataDict)


@app.route('/time',methods=['POST','GET'])
def get_current_time():
    if request.method=='GET':
        print("I am here")
        return {'time': time.time()}


@app.route('/getweather',methods=['POST','GET'])
def get_weather():
    if request.method=='GET':
        print("I am in get weather method")
        #args = request.args
        #print (args) # For debugging
        cityname = 'chennai'
        api_key = '7bf9342e173b2086f34217715aa97a49'
        source = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q=' + cityname  + '&appid='+api_key).read()
        return(source)
@app.route('/query-example')
def query_example():
    api_key = '7bf9342e173b2086f34217715aa97a49'
    if request.method == 'POST':
        #city = request.form['city']
        city = request.args.get['city']
    else:
        #for default name mathura
        city = 'mathura'

    # source contain json data from api
    try:
        source = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+api_key).read()
    except:
        return abort(404)
    # converting json data to dictionary

    list_of_data = json.loads(source)

    # data for variable list_of_data
    data = {
        "country_code": str(list_of_data['sys']['country']),
        "coordinate": str(list_of_data['coord']['lon']) + ' ' + str(list_of_data['coord']['lat']),
        "temp": str(list_of_data['main']['temp']) + 'k',
        "temp_cel": tocelcius(list_of_data['main']['temp']) + 'C',
        "pressure": str(list_of_data['main']['pressure']),
        "humidity": str(list_of_data['main']['humidity']),
        "cityname":str(city),
    }
    

    return (data)
    '''<h1> The language value is: {}</h1>
          <h1> The framework value is: {}</h1>
          <h1> The website is : {}''' . format(data)
               

@app.route('/mysql', methods=['GET', 'POST'])
def index():
    if request.method == "POST":
        details = request.form
        name = details['name']
        email = details['email']
        place = details['place']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO table_name(lastname, email,place) VALUES (%s, %s, %s)", (name, email,place))
        mysql.connection.commit()
        cur.close()
        return 'success'
    return render_template('login.html')



if __name__ == '__main__':
    app.run()