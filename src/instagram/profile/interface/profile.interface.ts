export interface ProfileInterface {
  config: Config;
  locale: string;
  encryption: Encryption;
  entry_data: EntryData;
}
interface Config {
  csrf_token: string;
}

interface Encryption {
  key_id: string;
  public_key: string;
  version: string;
}

interface ProfilePage {
  logging_page_id: string;
  show_suggested_profiles: boolean;
  show_follow_dialog: boolean;
  toast_content_on_load?: any;
  show_view_shop: boolean;
  profile_pic_edit_sync_props?: any;
  graphql: {
    user: UserData;
  };
}

interface EntryData {
  ProfilePage: ProfilePage[];
}

export interface UserData {
  biography: string;
  blocked_by_viewer: boolean;
  business_email: string;
  restricted_by_viewer?: any;
  country_block: boolean;
  external_url: string;
  external_url_linkshimmed: string;
  edge_followed_by: {count: number};
  followed_by_viewer: boolean;
  edge_follow: {count: number};
  follows_viewer: boolean;
  full_name: string;
  has_ar_effects: boolean;
  has_clips: boolean;
  has_guides: boolean;
  has_channel: boolean;
  has_blocked_viewer: boolean;
  highlight_reel_count: number;
  has_requested_viewer: boolean;
  id: string;
  is_business_account: boolean;
  is_joined_recently: boolean;
  business_category_name: string;
  overall_category_name?: any;
  category_enum: string;
  is_private: boolean;
  is_verified: boolean;
  edge_mutual_followed_by: {count: number;edges: any[];};
  profile_pic_url: string;
  profile_pic_url_hd: string;
  requested_by_viewer: boolean;
  username: string;
  connected_fb_page?: any;
  edge_owner_to_timeline_media: any;
}

