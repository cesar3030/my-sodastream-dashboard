import RPi.GPIO as GPIO
import time

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)
GPIO.setup(25, GPIO.IN)



def new_refill(elapsed_time):
    print elapsed_time
    
start_time=None

while True:
    if GPIO.input(25):
        GPIO.output(18, False);
        if start_time:
            elapsed_time = time.time() - start_time
            new_refill(elapsed_time)
            start_time = None
            
    else:
        if not start_time:
            start_time = time.time()
        GPIO.output(18, True);
    time.sleep(0.05)

