// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
  var Mensaje,Datos;
  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "jomsk@hotmail.com",
    password: "Jomsk4all1996",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("jomsk@hotmail.com/IoT");
    message = new Paho.MQTT.Message("Conectado al servidor NTP");
    message.destinationName = "jomsk@hotmail.com/IoT1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
      
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    Mensaje=message.payloadString;
    console.log(Mensaje);
    Datos=Mensaje.split(",");
    MostrarH();
    
  }
  
  function MostrarH(){
    var hora=document.getElementById("Time1")
    var minutos=document.getElementById("Time2")
    var segundos=document.getElementById("Time3")
    var completa=document.getElementById("Time4")
    hora.innerHTML="Hora: "+Datos[0];
    minutos.innerHTML="Minutos: "+Datos[1];
    segundos.innerHTML="Segundos: "+Datos[2];
    completa.innerHTML="Hora Completa: "+Datos[0]+":"+Datos[1]+":"+Datos[2];
    
  }
