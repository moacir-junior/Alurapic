import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://image.api.playstation.com/vulcan/ap/rnd/202108/1010/5XFZhZgdlx5lLIFskkZj74m2.png',
      description: 'Hell Let Loose'
    },
    {
      url: 'https://image.api.playstation.com/vulcan/img/rnd/202111/0818/6OFhqtXvBpBavqM50dciqeRH.png',
      description: 'Battlefield 2042'
    }
  ];
}
