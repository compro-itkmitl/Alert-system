#include <SoftwareSerial.h>
SoftwareSerial ArduinoSerial(3, 2); // RX, TX
#include "Wire.h"
#include "SPI.h"  // not used here, but needed to prevent a RTClib compile error
#include "RTClib.h"

RTC_DS3231 RTC;

String recieve;
int check_smoke=0,check_pir,check_tem;
int check_smoke2=0,check_pir2=0,check_tem2;
String transmisssmoke;
String transmisspir;
String transmisstem;
int count=0;

void setup() {
  Serial.begin(115200);
  ArduinoSerial.begin(4800);
  Wire.begin();
  RTC.begin();
  
  /*Init pinMode*/
  pinMode(A0, INPUT);//smoke
  pinMode(A1, INPUT);//pir
}
void loop() {
  count++;
  /*This is the part of checking the quantity of Smoke.*/
  if(count==60){
      check_smoke=analogRead(A0);
    }
  else if(count<60){
    check_smoke2=analogRead(A0);
    check_smoke=analogRead(A0);
    }
  else{
    check_smoke2=analogRead(A0);
    }
  if(check_smoke2>check_smoke*110/100){ //Case Alert
    transmisssmoke="Alert";
    }
  else{
    transmisssmoke=analogRead(A0);
    }

  /*This is the part of checking the quantity of PIR (Infrared Sensor).*/  
  if(count==60){
    check_pir=analogRead(A1);
    }
  else if(count<60){
    check_pir=analogRead(A1);
    check_pir2=analogRead(A1);
    }
  else{
    check_pir2=analogRead(A1);
    }
  if(check_pir2>check_pir+20){ //Case Alert
    transmisspir="Alert";
    } 
  else{
    transmisspir=analogRead(A1);
    }

  /*This is the part of checking the quantity of Temperature.*/
  if(count%10==0){
    if(RTC.getTemperature()>check_tem*110/100){ //Case Alert
      transmisstem="Alert";
      }
    }
  else if(count%10==1){
    check_tem = RTC.getTemperature();
    }
  else{
    transmisstem=RTC.getTemperature();
    }
    
  /*This is the part of showing the quantity of all in Serial Monitor.*/
  Serial.print("Smoke : ");
  Serial.println(transmisssmoke); //Smoke
  Serial.print("PIR : ");
  Serial.println(transmisspir); //PIR
  Serial.print("Temperature : ");
  Serial.println(transmisstem); //Temperature
  
  /*This is the part of printing the quantity of all in Arduino.*/
  ArduinoSerial.print(transmisssmoke);
  delay(500);
  ArduinoSerial.print(transmisspir);
  delay(500);
  ArduinoSerial.print(transmisstem);
  delay(500);
}  
