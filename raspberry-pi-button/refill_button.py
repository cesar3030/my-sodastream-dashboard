import RPi.GPIO as GPIO
import time
from urllib import urlencode
import urllib2

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)
GPIO.setup(25, GPIO.IN)
url = "https://my-sodastream-dashboard-api.herokuapp.com/refills"


def new_refill(elapsed_time):
    print 'New Refill at ' + time.ctime(int(time.time())) + ' -> elapsed time: %.5f' %  elapsed_time
    http_post(url, {"elapsedTime": elapsed_time})
    print 'Refill sucessfully added!\n\n'
    
def http_post(url, data):
    post = urlencode(data)
    req = urllib2.Request(url, post)
    response = urllib2.urlopen(req)
    return response.read()

def listen_to_click_events():
  start_time=None
  while True:
      if GPIO.input(25):
          GPIO.output(18, False)
          if start_time:
              elapsed_time = time.time() - start_time
              new_refill(elapsed_time)
              start_time = None
              
      else:
          if not start_time:
              start_time = time.time()
          GPIO.output(18, True)
      time.sleep(0.05)

listen_to_click_events()
