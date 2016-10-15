# Visualforce Helpers

A series of Apex classes and JavaScript modules that allow Visualforce developers to use `@RemoteAction` methods to retrieve details about users, organization configuration, etc without relying upon Visualforce-specific merge syntax or components. 

The goal of this project is to allow front end developers to use familiar approaches to building Visualforce pages, and rely upon JavaScript to pull app and config data from the server. This allows for an easier multi-platform build chain if necessary, as the front end is not reliant upon the Salesforce platform (aside from the use of `apex:page` component, which merely serves as a wrapper).

## Current Priorities

1. Finish implementing **helperUserInfo.js** to ensure appropriate currency symbols and notation are used
1. Create test coverage for **HELPER_UserInfo.cls** that is org-agnostic

## Future Tasks

- Handle date format based on user locale
- Leverage timezone to compare user timezone with browser timezone
- Create function that allows user to update their timezone based on browser timezone
- Build POC to translate a page based on user language

## Contributions
If you would like to see specific features implemented, have suggestions about implementation, or would like to build this out, please get in touch or create an issue on the repo!