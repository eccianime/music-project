import { NavigatorScreenParams } from '@react-navigation/native';

export type AccountTabProps = {
  Home: undefined;
  Discover: undefined;
  Download: undefined;
  Playlist: undefined;
  Profile: undefined;
};

export type BaseStackProps = {
  Welcome: undefined;
  Onboarding: undefined;
  'Sign In': undefined;
  'Sign Up': undefined;
  'Forgot Password': undefined;
  Account: NavigatorScreenParams<AccountTabProps>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BaseStackProps {}
  }
}
