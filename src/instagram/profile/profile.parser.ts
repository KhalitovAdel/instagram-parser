import { ProfileInterface, UserData } from './interface/profile.interface';
import { NetworkTransform } from './trololo';

export class ProfileParser {

  #data: ProfileInterface;
  csrf_token;
  locale;
  public_key;
  #user: UserData;
  biography
  external_url
  followers
  follows
  name
  userId
  is_business_account
  business_category_name
  category_enum
  is_private
  is_verified
  profile_pic_url
  username
  other

  constructor(data: ProfileInterface) {
    this.#data = data;
    this.initDefaultValues();
    this.initUserData();
  }

  public initDefaultValues() {
    this.csrf_token = this.#data.config.csrf_token;
    this.locale = this.#data.locale;
    this.public_key = this.#data.encryption.public_key;
    this.#user = this.#data.entry_data.ProfilePage?.find(el => el)?.graphql.user;
  }

  public initUserData() {
    this.biography = this.#user.biography;
    this.external_url = this.#user.external_url;
    this.followers = this.#user.edge_followed_by.count;
    this.follows = this.#user.edge_follow.count;
    this.name = this.#user.full_name;
    this.userId = this.#user.id;
    this.is_business_account = this.#user.is_business_account;
    this.business_category_name = this.#user.business_category_name;
    this.category_enum = this.#user.category_enum;
    this.is_private = this.#user.is_private;
    this.is_verified = this.#user.is_verified;
    this.profile_pic_url = this.#user.profile_pic_url_hd;
    this.username = this.#user.username;
    // this.other = new NetworkTransform(this.#user.edge_owner_to_timeline_media).fullData;
  }
}