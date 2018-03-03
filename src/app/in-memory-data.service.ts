import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Album } from './shared/albums/album';

import { Photo } from './shared/photos/photo';

export class InMemoryDataService implements InMemoryDbService {
  constructor() { }

  createDb() {
    const photos = [
      new Photo(1, 'Testfoto 1', 'Dit is de eerste testfoto',
        'http://www.britishairways.com/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Grenada/20555084_480x480.jpg'),
      new Photo(2, 'Testfoto 2', 'Dit is de tweede testfoto',
        'http://media.fclmedia.com/global-images/fc/holidays/tiles/bali/bali-family-experience-large-476x332.jpg'),
      new Photo(3, 'Testfoto 3', 'Dit is de derde testfoto', 'http://www.destination360.com/travel/beaches/images/s/beach-holidays.jpg'),
      new Photo(4, 'Testfoto 1', 'Dit is de eerste testfoto',
        'http://www.britishairways.com/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Grenada/20555084_480x480.jpg'),
      new Photo(5, 'Testfoto 2', 'Dit is de tweede testfoto',
        'http://media.fclmedia.com/global-images/fc/holidays/tiles/bali/bali-family-experience-large-476x332.jpg'),
      new Photo(6, 'Testfoto 3', 'Dit is de derde testfoto', 'http://www.destination360.com/travel/beaches/images/s/beach-holidays.jpg'),
      new Photo(7, 'Testfoto 1', 'Dit is de eerste testfoto',
        'http://www.britishairways.com/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Grenada/20555084_480x480.jpg'),
      new Photo(8, 'Testfoto 2', 'Dit is de tweede testfoto',
        'http://media.fclmedia.com/global-images/fc/holidays/tiles/bali/bali-family-experience-large-476x332.jpg'),
      new Photo(9, 'Testfoto 3', 'Dit is de derde testfoto', 'http://www.destination360.com/travel/beaches/images/s/beach-holidays.jpg')
    ];
    const albums = [
      new Album(1, 'Lloret de Mar', 'Vakantie in Lloret', [ 1, 2, 3 ]),
      new Album(2, 'Alanya', 'Vakantie in Alanya', [ 4, 5, 6 ]),
      new Album(3, 'Lloret de Mar', 'Vakantie in Lloret', [ 7, 8, 9 ])
    ];
    return {albums: albums, photos: photos};
  }
}
