#include <SoftwareSerial.h>
SoftwareSerial ArduinoSerial(3, 2); // RX, TX
#include "Wire.h"
#include "SPI.h"  // not used here, but needed to prevent a RTClib compile error
#include "RTClib.h"

RTC_DS3231 RTC;

//String recieve;
String Get_Data;
//int check_smoke = 0, check_pir , check_tem;
//int check_smoke2 = 0, check_pir2 = 0, check_tem2;
int First_Check_Smoke = 0, First_Check_PIR = 0 , First_Check_Temperature = 0;
int Second_Check_Smoke = 0, Second_Check_PIR = 0, Second_Check_Temperature = 0;
//String transmisssmoke;
//String transmisspir;
//String transmisstem;
String Transmission_of_Smoke;
String Transmission_of_PIR;
String Transmission_of_Temp;
//int count = 0;
int Time = 0;

void setup() {
  Serial.begin(115200);
  ArduinoSerial.begin(4800);
  Wire.begin();
  RTC.begin();
  
  /*Init pinMode*/
  pinMode(A0, INPUT); //Smoke
  pinMode(A1, INPUT); //PIR
}
void loop() {
  Time++;
  /*This is the part of checking the quantity of Smoke.*/
  if(Time == 60){
      First_Check_Smoke = analogRead(A0);
    }
  else if(Time < 60){
    Second_Check_Smoke = analogRead(A0);
    First_Check_Smoke = analogRead(A0);
    }
  else{
    Second_Check_Smoke = analogRead(A0);
    }
  if(Second_Check_Smoke > First_Check_Smoke*110/100){ //Case Alert
    Transmission_of_Smoke = "Alert";
    }
  else{
    Transmission_of_Smoke = analogRead(A0);
    }

  /*This is the part of checking the quantity of PIR (Infrared Sensor).*/  
  if(Time == 60){
    First_Check_PIR = analogRead(A1);
    }
  else if(Time < 60){
    First_Check_PIR = analogRead(A1);
    Second_Check_PIR = analogRead(A1);
    }
  else{
    Second_Check_PIR = analogRead(A1);
    }
  if(Second_Check_PIR > First_Check_PIR + 20){ //Case Alert
    Transmission_of_PIR = "Alert";
    } 
  else{
    Transmission_of_PIR = analogRead(A1);
    }

  /*This is the part of checking the quantity of Temperature.*/
  if(Time % 10 == 0){
    if(RTC.getTemperature() > First_Check_Temperature*110/100){ //Case Alert
      Transmission_of_Temp = "Alert";
      }
    }
  else if(Time % 10 == 1){
    First_Check_Temperature = RTC.getTemperature();
    }
  else{
    Transmission_of_Temp = RTC.getTemperature();
    }
    
  /*This is the part of showing the quantity of all in Serial Monitor.*/
  Serial.print("Smoke : ");
  Serial.println(Transmission_of_Smoke); //Smoke
  Serial.print("PIR : ");
  Serial.println(Transmission_of_PIR); //PIR
  Serial.print("Temperature : ");
  Serial.println(Transmission_of_Temp); //Temperature
  
  /*This is the part of printing the quantity of all in Arduino.*/
  ArduinoSerial.print(Transmission_of_Smoke);
  delay(1000);
  ArduinoSerial.print(Transmission_of_PIR);
  delay(1000);
  ArduinoSerial.print(Transmission_of_Temp);
  delay(1000);
}  
