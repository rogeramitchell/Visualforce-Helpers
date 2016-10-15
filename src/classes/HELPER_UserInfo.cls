public class HELPER_UserInfo 
{
		@RemoteAction
    public static UserInfoDetails getUserInfoDetails()
    {
        UserInfoDetails details = new UserInfoDetails();
        
        // user i18n
        details.defaultCurrency = UserInfo.getDefaultCurrency();
        details.language = UserInfo.getLanguage();
        details.locale = UserInfo.getLocale();
        details.timeZone = '' + UserInfo.getTimeZone();
        
        // user attributes
        details.userId = UserInfo.getUserId();
        details.firstName = UserInfo.getFirstName();
        details.lastName = UserInfo.getLastName();
        details.email = UserInfo.getUserEmail();
        details.userName = UserInfo.getUserName();
        details.userType = UserInfo.getUserType();
        details.userRoleId = UserInfo.getUserRoleId();
        details.profileId = UserInfo.getProfileId();
        details.sessionId = UserInfo.getSessionId();
        
        // user organization details
        details.organizationId = UserInfo.getOrganizationId();
        details.organizationName = UserInfo.getOrganizationName();
        details.multiCurrencyOrganization = UserInfo.isMultiCurrencyOrganization();
        details.uiTheme = UserInfo.getUiTheme();
        details.uiThemeDisplayed = UserInfo.getUiThemeDisplayed();        
		
        return details;
    }
    
    public class UserInfoDetails
    {
        // user i18n
        public String defaultCurrency {get; set;}
        public String language {get; set;}
        public String locale {get; set;}
        public String timeZone {get; set;} 
        
        // user attributes
        public String userId {get; set;}
        public String firstName {get; set;}
        public String lastName {get; set;}
        public String email {get; set;}
        public String userName {get; set;}
        public String userType {get; set;}
		public String userRoleId {get; set;}
        public String profileId {get; set;}
        public String sessionId {get; set;}
        
        // user organization details
        public String organizationId {get; set;}
		public String organizationName {get; set;}
        public Boolean multiCurrencyOrganization {get; set;}
        public String uiTheme {get; set;}
        public String uiThemeDisplayed {get; set;}
    }
}
