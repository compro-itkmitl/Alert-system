#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#include <SoftwareSerial.h>
SoftwareSerial NodeSerial(D2, D3);

String recieve;
String transmiss;
#define WIFI_SSID       "HUAWEI-4A35"
#define WIFI_PASSWORD   "57582013"
#define FIREBASE_HOST "alert-system-82af3.firebaseio.com"
#define FIREBASE_KEY "O1pdx7xfZssKt1GfSDjeQzJA4YaiWNRjWzBgcN8I"

int count=0;

void setup() {
pinMode(D2, INPUT);
pinMode(D3, OUTPUT);
Serial.begin(115200);
NodeSerial.begin(4800);
Serial.println(WiFi.localIP());
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  Firebase.begin(FIREBASE_HOST, FIREBASE_KEY);

Serial.println("okay");
}
void loop() {

  while (NodeSerial.available()){
    delay(3);
    char c = NodeSerial.read();
    recieve += c;
  }
  if (recieve.length() > 0) {
    if(count==0){
      if(recieve=="Alert"){
        Serial.println("!!");
        Firebase.setString("Sensor/Gas", recieve);
        recieve="";
        count++;
      } 
      else{
        Serial.print(recieve);
        Serial.println(" P");
        Firebase.setString("Sensor/Gas", recieve);
        recieve="";
        count++;
      }
     }
     else if(count==1){
      if(recieve=="Alert"){
        Serial.println("!!");
        Firebase.setString("Sensor/PIR", recieve);
        recieve="";
        count++;
      } 
      else{
        Serial.print(recieve);
        Serial.println(" PIR");
        Firebase.setString("Sensor/PIR", recieve);
        recieve="";
        count++;
      }
     }
     else if(count==2){
      if(recieve=="Alert"){
        Serial.println("!!");
        Firebase.setString("Sensor/Temperature", recieve);
        recieve="";
        count=0;
      } 
      else{
        Serial.print(recieve);
        Serial.println(" C");
        Firebase.setString("Sensor/Temperature", recieve);
        recieve="";
        count=0;
      }
      }
  }

  while (Serial.available()){
    delay(3);
    char c = Serial.read();
    transmiss += c;
  }
  
  if (transmiss.length() > 0) {
    Serial.println(transmiss);
    NodeSerial.print(transmiss);
    transmiss = "";
  }
}
