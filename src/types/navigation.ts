export type BaseStackProps = {
  Welcome: undefined;
  Onboarding: undefined;
  'Sign In': undefined;
  'Sign Up': undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BaseStackProps {}
  }
}
