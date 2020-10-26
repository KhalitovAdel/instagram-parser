import { HttpService, Injectable } from '@nestjs/common';
import { InstagramParserAbstract } from '../abstract/instagram-parser.abstract';
import * as jsdom from 'jsdom'
import { ProfileParser } from './profile.parser';
import { ProfileInterface } from './interface/profile.interface';
@Injectable()
export class ProfileService implements InstagramParserAbstract {
  constructor(private readonly http: HttpService) {
  }
  public async defaultParse(params: {query: string}) {
    const url = `https://www.instagram.com/${params.query}/`;
    const cookieString = 'ig_did=4C6E0709-2DEF-4C05-8929-2395A935C43E; csrftoken=CqluaQDx7zLHq6L1zCi7kCX2M6WsEH5M; mid=X5cqtwAEAAGhAWcHrzEH5SbfrzXd; urlgen="{\\"87.117.189.152\\": 12389}:1kX8em:TKixiAvt6gyoer1RFZbdoFuqvak"; ig_nrcb=1';
    const headers = {
      'User-Agent'      : 'PostmanRuntime/7.26.5',
      'Accept'          : '*/*',
      'Accept-Encoding' : 'gzip, deflate, br',
      'Connection'      : 'keep-alive',
      'Cookie'          : cookieString
    }

    const {data} = await this.http.get(url, {headers}).toPromise();
    const dom = new jsdom.JSDOM(data, {runScripts: 'dangerously'});
    const sharedData: ProfileInterface = dom.window._sharedData;
    return new ProfileParser(sharedData);
    /*return {
      "csrf_token": "CqluaQDx7zLHq6L1zCi7kCX2M6WsEH5M",
      "locale": "en_US",
      "public_key": "a185b716b7bab1acb25e88034374819c0482257a4e240736215af2253f255d61",
      "biography": "",
      "external_url": "https://www.ateliercologne.com/eu_en/festival",
      "followers": 7797795,
      "follows": 218,
      "name": "Doja Cat",
      "userId": "46335750",
      "is_business_account": true,
      "business_category_name": "Creators & Celebrities",
      "category_enum": "BANDS_MUSICIANS",
      "is_private": false,
      "is_verified": true,
      "profile_pic_url": "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/s320x320/72720159_2704998082886443_7424731624115273728_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_ohc=ofdZTVIFKKwAX9JpMPZ&oh=9e4346f3a0bcee4959cde60b09d00510&oe=5FBF24A0",
      "username": "dojacat"
    }*/
  }

  public async detailParse() {
    return null;
  }
}