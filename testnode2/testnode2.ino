#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#include <SoftwareSerial.h>
SoftwareSerial NodeSerial(D2, D3);

String recieve;
String transmiss;

/*Definiting the WIFI and Firebase Info*/
#define WIFI_SSID ".:: Home 249 WIFI::."
#define WIFI_PASSWORD "d7rn14cg"
#define FIREBASE_HOST "remotealertsystem.firebaseio.com"
#define FIREBASE_KEY "sLj7Pi3JtBMHJJyI9EMQlIsl2RnVzcvVGGkGJHNF"

int count=0;

void setup() {
  /*Init pinMode*/
  pinMode(D2, INPUT);
  pinMode(D3, OUTPUT);
  
  Serial.begin(115200);
  NodeSerial.begin(4800);
  //Serial.println(WiFi.localIP());
  
  /*Connecting the WIFI*/
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  /*Connecting the Firebase*/
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

    /*This is the part of sending the quantity of Gas (Smoke) to Firebase.*/  
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

     /*This is the part of sending the quantity of PIR (Infrared Sensor) to Firebase.*/  
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

     /*This is the part of sending the quantity of Temperature to Firebase.*/  
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
