import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /* OR could put a very short template inline, like so: 
  template: `<p>Success! You better get while it's good.</p>`,
    styles: [
      `p {
        padding: 20px;
        background-color: green;
        color: white;

      }`
    ] */
  styleUrls: ['./servers.component.css']
  // Or, drop a very few styles here instead
})

export class ServersComponent implements OnInit {
  serverCreationStatus = 'No server was created.'
  serverName = 'Some two-way binding';
  message = 'Here is some string interpolation...';
  serverCreated = false;
  servers = ['Test Server 1', 'My Other Server'];

  buttonStatus = false;

  constructor() {
    // This demonstrates 
    setTimeout(() => {
      this.buttonStatus = true;
    }, 2000)
   }

  ngOnInit() {
  }

  // This method is bound to a button in the template
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created";
  }
  
}