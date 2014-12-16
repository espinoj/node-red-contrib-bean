/**
 * Copyright 2014 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

// If you use this as a template, update the copyright with your own name.

// Sample Node-RED node file


module.exports = function(RED) {
    "use strict";
    // require any external libraries we may need....
    //var foo = require("foo-library");
  //  var beanAPI = require('ble-bean');

    // The main node definition - most things happen in here
    function BeanNode(n) {
        // Create a RED node
        RED.nodes.createNode(this,n);
        console.log("Do we ever get here?")
        // Store local copies of the node configuration (as defined in the .html)
        this.name = n.name;
        this.test = "Test";
    }

    // Register the node by name. This must be called before overriding any of the
    // Node functions.
    RED.nodes.registerType("bean",BeanNode);



    function BeanSerialNode(n) {
        // Create a RED node
        RED.nodes.createNode(this,n);
        console.log("Do we ever get here?2")

        // Store local copies of the node configuration (as defined in the .html)
        this.topic = n.topic;

        // Do whatever you need to do in here - declare callbacks etc
        // Note: this sample doesn't do anything much - it will only send
        // this message once at startup...
        // Look at other real nodes for some better ideas of what to do....
        var msg = {};
        msg.topic = this.topic;
        msg.payload = "Hello world !"

        // send out the message to the rest of the workspace.
        this.send(msg);

        // respond to inputs....
        this.on('input', function (msg) {
            node.warn("I saw a payload: "+msg.payload);
            // in this example just send it straight on... should process it here really
            this.send(msg);
        });

        this.on("close", function() {
            // Called when the node is shutdown - eg on redeploy.
            // Allows ports to be closed, connections dropped etc.
            // eg: this.client.disconnect();
        });

         this.status({
            fill:"red",
            shape:"ring",
            text:"disconnected"
        });
    }

    // Register the node by name. This must be called before overriding any of the
    // Node functions.
    RED.nodes.registerType("bean serial",BeanSerialNode);

}
