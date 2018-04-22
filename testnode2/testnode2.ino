#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#include <SoftwareSerial.h>
SoftwareSerial NodeSerial(D2, D3);


String Get_Data;

String Transmission;

/*Definiting the WIFI and Firebase Info*/
#define WIFI_SSID ".:: Home 249 WIFI::."
#define WIFI_PASSWORD "d7rn14cg"
#define FIREBASE_HOST "alert-system-82af3.firebaseio.com"
#define FIREBASE_KEY "O1pdx7xfZssKt1GfSDjeQzJA4YaiWNRjWzBgcN8I"


int Time = 0;

void setup() {
  /*Init pinMode*/
  pinMode(D2, INPUT);
  pinMode(D3, OUTPUT);
  
  Serial.begin(115200);
  NodeSerial.begin(4800);
  //Serial.println(WiFi.localIP());
  
  /*Connecting the WIFI*/
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected: ");
  Serial.println(WiFi.localIP());

  /*Connecting the Firebase*/
  Firebase.begin(FIREBASE_HOST, FIREBASE_KEY);
  Serial.println("Okay");
}

void loop() {
  while (NodeSerial.available()){
    delay(3);
    char c = NodeSerial.read();
    Get_Data += c;
  }
  
  if (Get_Data.length() > 0) {

    /*This is the part of sending the quantity of Gas (Smoke) to Firebase.*/  
    if(Time == 0){
      if(Get_Data == "Alert"){
        Serial.println("Alert !! From Gas");
        Firebase.setString("Sensor/0/status", "Alert");
        Firebase.setString("Sensor/0/value", Get_Data); 
        Get_Data = "";
        Time++;
      } 
      else{
        Serial.println(Get_Data);
        Firebase.setString("Sensor/0/status", "OK");
        Firebase.setString("Sensor/0/value", Get_Data); 
        Get_Data = "";
        Time++;
      }
     }

     /*This is the part of sending the quantity of PIR (Infrared Sensor) to Firebase.*/  
     else if(Time == 1){
      if(Get_Data == "Alert"){
        Serial.println("Alert !! From PIR");
        Firebase.setString("Sensor/1/status", "Alert");
        Firebase.setString("Sensor/1/value", Get_Data);      
        Get_Data = "";
        Time++;
      } 
      else{
        Serial.println(Get_Data);
        Firebase.setString("Sensor/1/status", "OK");
        Firebase.setString("Sensor/1/value", Get_Data);
        Get_Data = "";
        Time++;
      }
     }

     /*This is the part of sending the quantity of Temperature to Firebase.*/  
     else if(Time == 2) {
      if(Get_Data == "Alert"){
        Serial.println("Alert !! From Temperature");
        Firebase.setString("Sensor/2/status", "Alert");
        Firebase.setString("Sensor/2/value", Get_Data); 
        Get_Data = "";
        Time = 0;
      } 
      else{
        Serial.println(Get_Data);
        Firebase.setString("Sensor/2/status", "OK");
        Firebase.setString("Sensor/2/value", Get_Data); 
        Get_Data = "";
        Time = 0;
      }
     }
  }

 
  if (Transmission.length() > 0) {
    Serial.println(Transmission);
    NodeSerial.print(Transmission);
    Transmission = "";
  }

}
